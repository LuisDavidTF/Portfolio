import React, { useState, useEffect } from "react";

export default function FeaturesSection({ features }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedImage]);

  const handleWheel = (e) => {
    if (!selectedImage) return;
    e.preventDefault();
    const newZoom = Math.min(Math.max(zoom + e.deltaY * -0.001, 1), 4);
    setZoom(newZoom);
  };

  const startDrag = (e) => {
    if (zoom === 1) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    setOffset({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
  };

  const stopDrag = () => setIsDragging(false);

  const closeModal = () => {
    setSelectedImage(null);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  if (!features || features.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/30 relative overflow-hidden border-y border-gray-200 dark:border-gray-800 w-full">
      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
            Platform Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A deep dive into the engineering and features powering this project.
          </p>
        </div>

        <div className="space-y-32 md:space-y-40">
          {features.map((feature, index) => {
            const isReverse = index % 2 !== 0;
            const hasImage = Boolean(feature.image);

            return (
              <div
                key={feature.id}
                className={`flex flex-col ${
                  isReverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12 lg:gap-24`}
              >
                <div
                  className={`flex-1 space-y-6 text-left ${
                    isReverse ? "md:text-right" : ""
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#D4A373]/10 text-[#D4A373] font-bold text-xl mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>

                {hasImage && (
                  <div className="flex-1 relative group w-full">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4A373]/20 to-[#DDA15E]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                    <div 
                      className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 w-full cursor-zoom-in"
                      onClick={() => setSelectedImage(feature.image)}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Zoom Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-[9999] overflow-hidden"
          onClick={closeModal}
          onWheel={handleWheel}
          onMouseMove={duringDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          <div
            className="relative w-[95%] h-[90%] md:w-[90%] md:h-[95%] flex justify-center items-center rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={startDrag}
          >
            <button
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white text-3xl leading-none px-3 py-1 rounded-lg z-50 transition-colors"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Zoom preview"
              className="max-w-full max-h-full transition-transform duration-200 select-none shadow-2xl"
              style={{
                transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
              }}
              draggable={false}
            />
            {zoom > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full pointer-events-none backdrop-blur-sm">
                Arrastra para mover el canvas
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
