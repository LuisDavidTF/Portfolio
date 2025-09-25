import React, { useState, useEffect } from "react";

export default function FeaturesSection({ features }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // ✅ Bloqueo del scroll del body cuando el modal está abierto
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

  return (
    <>
    <h2 className="section-title mt-3 mb-0">Features</h2>
      <section className="feature-grid">
        {features.map((feature) => {
          const hasImage = Boolean(feature.image);
          return (
            <article
              key={feature.id}
              className={`feature-card ${feature.size || "small"} ${
                hasImage ? "has-image" : ""
              }`}
            >
              {hasImage && (
                <div
                  className="feature-image"
                  style={{ backgroundImage: `url(${feature.image})` }}
                  onClick={() => setSelectedImage(feature.image)}
                />
              )}
              <div className="feature-info">
                <h3>{feature.title}</h3>
                {feature.description && <p>{feature.description}</p>}
              </div>
            </article>
          );
        })}
      </section>

      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          onWheel={handleWheel}
          onMouseMove={duringDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={startDrag}
          >
            <button className="modal-close" onClick={closeModal}>×</button>
            <img
              src={selectedImage}
              alt="Zoom preview"
              style={{
                transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default"
              }}
              draggable={false}
            />
            {zoom > 0 && (
              <p className="zoom-hint">Scroll para acercar/alejar, arrastra para mover</p>
            )}
          </div>
        </div>
      )}
      <style>{`
        /* ===== GRID ===== */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-auto-rows: 180px;
          gap: 20px;
          padding: 40px 20px;
          max-width: 1300px;
          margin: 0 auto;
          grid-auto-flow: dense;
        }

        .feature-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          transition: transform 0.4s ease;
          display: flex;
          align-items: flex-end;
          cursor: default;
        }

        .feature-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
          cursor: zoom-in;
        }

        .feature-info {
          position: relative;
          width: 100%;
          padding: clamp(8px, 2vw, 16px);
          background: rgba(0,0,0,0.45);
          color: #fff;
          transition: background 0.3s ease;
          text-align: left;
          word-break: break-word;
        }

        .feature-info h3 {
          font-size: clamp(0.9rem, 1.2vw, 1.3rem);
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .feature-info p {
          font-size: clamp(0.75rem, 1vw, 1rem);
          line-height: 1.3;
        }

        .feature-card.has-image:hover .feature-image {
          transform: scale(1.08);
        }

        .feature-card.has-image:hover .feature-info {
          background: rgba(0,0,0,0);
          text-shadow: 0 2px 6px rgba(0,0,0,0.6);
        }

        .feature-card.has-image:hover {
          transform: scale(1.05);
          z-index: 2;
        }

        /* Tamaños */
        .feature-card.small   { grid-column: span 1; grid-row: span 1; }
        .feature-card.medium  { grid-column: span 2; grid-row: span 1; }
        .feature-card.square  { grid-column: span 2; grid-row: span 2; }
        .feature-card.tall    { grid-column: span 1; grid-row: span 2; }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          overflow: hidden;
        }

        .modal-content {
          position: relative;
          width: 90%;
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(0,0,0,0.8);
        }

        .modal-content img {
          max-width: 100%;
          max-height: 100%;
          transition: transform 0.2s ease;
          user-select: none;
        }

        .modal-close {
          position: absolute;
          top: 12px;
          right: 16px;
          background: rgba(0,0,0,0.6);
          border: none;
          color: #fff;
          font-size: 2rem;
          line-height: 1;
          cursor: pointer;
          padding: 0 10px;
          border-radius: 8px;
          z-index: 10;
          transition: background 0.3s;
        }

        .modal-close:hover {
          background: rgba(0,0,0,0.9);
        }

        .zoom-hint {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          font-size: 0.9rem;
          background: rgba(0,0,0,0.5);
          padding: 4px 10px;
          border-radius: 6px;
          pointer-events: none;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .modal-content {
            width: 95%;
            height: 85%;
          }
        }
      `}</style>
    </>
  );
}
