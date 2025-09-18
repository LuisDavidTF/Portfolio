import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/shared/styles/carousel.css";


const CarouselWithModalAndZoom = ({ images = [], productName = "Producto" }) => {
  const [showHint, setShowHint] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState(null);
  const [zoom, setZoom] = useState(1);

  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Posición para drag
  const pos = useRef({ lastX: 0, lastY: 0, startX: 0, startY: 0, dragging: false });

  useEffect(() => {
    if (showHint) {
      const timer = setTimeout(() => setShowHint(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showHint]);

  const openModal = (src) => {
    setModalImageSrc(src);
    setZoom(1);
    resetPosition();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImageSrc(null);
  };

  const zoomIn = () => {
    setZoom((z) => Math.min(z + 0.25, 3));
  };

  const zoomOut = () => {
    setZoom((z) => Math.max(z - 0.25, 1));
    if (zoom <= 1.25) resetPosition();
  };

  const resetPosition = () => {
    pos.current = { lastX: 0, lastY: 0, startX: 0, startY: 0, dragging: false };
    if (imgRef.current) {
      imgRef.current.style.transform = `scale(${zoom}) translate(0px, 0px)`;
    }
  };

  const onPointerDown = (e) => {
    if (zoom <= 1) return;
    e.preventDefault();
    pos.current.dragging = true;
    pos.current.startX = e.clientX || (e.touches && e.touches[0].clientX);
    pos.current.startY = e.clientY || (e.touches && e.touches[0].clientY);
  };

  const onPointerMove = (e) => {
    if (!pos.current.dragging) return;
    e.preventDefault();
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const currentY = e.clientY || (e.touches && e.touches[0].clientY);
    if (!imgRef.current || !containerRef.current) return;

    const dx = currentX - pos.current.startX;
    const dy = currentY - pos.current.startY;

    let newX = pos.current.lastX + dx;
    let newY = pos.current.lastY + dy;

    const imgRect = imgRef.current.getBoundingClientRect();
    const contRect = containerRef.current.getBoundingClientRect();

    // Calculamos el espacio para mover la imagen horizontal y verticalmente
    // Si la imagen es menor que el contenedor, max desplazamiento es 0 para esa dimensión
    const maxX = Math.max((imgRect.width - contRect.width) / 2, 0);
    const maxY = Math.max((imgRect.height - contRect.height) / 2, 0);

    // Limitar movimiento horizontal solo si la imagen es más grande que el contenedor
    if (maxX > 0) {
      if (newX > maxX) newX = maxX;
      if (newX < -maxX) newX = -maxX;
    } else {
      // Imagen más pequeña que el contenedor en ancho, no mover horizontalmente
      newX = 0;
    }

    // Limitar movimiento vertical solo si la imagen es más alta que el contenedor
    if (maxY > 0) {
      if (newY > maxY) newY = maxY;
      if (newY < -maxY) newY = -maxY;
    } else {
      // Imagen más pequeña que el contenedor en alto, no mover verticalmente
      newY = 0;
    }

    imgRef.current.style.transform = `scale(${zoom}) translate(${newX}px, ${newY}px)`;

    pos.current.startX = currentX;
    pos.current.startY = currentY;
    pos.current.lastX = newX;
    pos.current.lastY = newY;
  };


  const onPointerUp = (e) => {
    if (!pos.current.dragging) return;
    pos.current.dragging = false;
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div
        id="productCarousel"
        className="carousel slide mx-auto w-full position-relative"
        data-bs-ride="carousel"
        style={{ maxHeight: "55vh", overflow: "hidden" }}
      >
        {/* Icono fullscreen animado */}
        {showHint && (
          <div
            className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center"
            style={{
              zIndex: 20,
              pointerEvents: "none",
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              userSelect: "none",
              animation: "pulse-scale 2s infinite",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="bi bi-arrows-fullscreen"
              viewBox="0 0 16 16"
              style={{ width: "2.2rem", height: "2.2rem" }}
            >
              <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707" />
            </svg>
          </div>
        )}


        <div className="carousel-inner">
          {images.map((image, i) => (
            <div
              key={i}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={productName}
                className="d-block w-100 mx-auto"
                style={{
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "top",
                  display: "block",
                  maxHeight: "55vh",
                }}
              />
            </div>
          ))}
        </div>

        {/* Usamos controles nativos de bootstrap con data-bs-target y data-bs-slide */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            style={{ filter: "invert(1)" }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            style={{ filter: "invert(1)" }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="modal d-block fade show"
          tabIndex={-1}
          role="dialog"
          onClick={closeModal}
          style={{
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            role="document"
            onClick={(e) => e.stopPropagation()}
            ref={containerRef}
            style={{ cursor: zoom > 1 ? "grab" : "auto" }}
          >
            <div className="modal-content bg-transparent border-0 d-flex flex-column align-items-center">
              <button
                type="button"
                aria-label="Close"
                onClick={closeModal}
                className="position-absolute top-0 end-0 m-3 d-flex justify-content-center align-items-center"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  backgroundColor: "var(--white)",
                  color: "var(--primary-color)",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  border: "none",
                  zIndex: 30,
                  cursor: "pointer",
                  transition: "background-color 0.3s ease, transform 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                ×
              </button>


              <img
                ref={imgRef}
                src={modalImageSrc}
                alt={productName}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  touchAction: "none",
                  userSelect: "none",
                  transform: `scale(${zoom}) translate(0px, 0px)`,
                  transition: zoom === 1 ? "transform 0.3s ease" : undefined,
                }}
              />

              {/* Controles zoom */}
              <div
                className="btn-group mt-3"
                role="group"
                aria-label="Zoom controls"
                style={{ zIndex: 31 }}
              >
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={zoomOut}
                  disabled={zoom <= 1}
                  title="Zoom Out"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderColor: "rgba(255,255,255,0.7)",
                    color: "white",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-zoom-out"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 10a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5z" />
                    <path d="M10.344 11.742a6.5 6.5 0 1 1 1.397-1.398l3.85 3.85a1 1 0 0 1-1.415 1.414l-3.832-3.832zm1.176-5.82a5.5 5.5 0 1 0-1.19 1.19 5.5 5.5 0 0 0 1.19-1.19z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={zoomIn}
                  disabled={zoom >= 3}
                  title="Zoom In"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderColor: "rgba(255,255,255,0.7)",
                    color: "white",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-zoom-in"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 10a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0v2h1.5a.5.5 0 0 1 0 1h-1.5v1.5a.5.5 0 0 1-1 0V10h-1.5z" />
                    <path d="M10.344 11.742a6.5 6.5 0 1 1 1.397-1.398l3.85 3.85a1 1 0 0 1-1.415 1.414l-3.832-3.832zm1.176-5.82a5.5 5.5 0 1 0-1.19 1.19 5.5 5.5 0 0 0 1.19-1.19z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselWithModalAndZoom;
