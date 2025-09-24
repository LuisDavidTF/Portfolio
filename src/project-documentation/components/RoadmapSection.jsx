import React, { useRef, useState, useEffect } from "react";

export default function RoadmapSection({ imageURL }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const MIN_SCALE = 1;
  const MAX_SCALE = 3;

  // refs para tracking rápido y evitar stale closures
  const last = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const baseSizeRef = useRef({ w: 0, h: 0 });
  const rafRef = useRef(null);
  const pinchStart = useRef(null);
  const draggingRef = useRef(false);

  // calcula el tamaño real de la imagen dentro del contenedor
  const measureBaseSize = () => {
    if (!containerRef.current || !imgRef.current) return;
    const cw = containerRef.current.clientWidth;
    const ch = containerRef.current.clientHeight;
    const iw = imgRef.current.naturalWidth;
    const ih = imgRef.current.naturalHeight;

    if (!iw || !ih) {
      baseSizeRef.current = { w: cw, h: ch };
      return;
    }

    const imgRatio = iw / ih;
    const contRatio = cw / ch;
    baseSizeRef.current =
      imgRatio > contRatio
        ? { w: cw, h: cw / imgRatio }
        : { w: ch * imgRatio, h: ch };

    // aseguramos que la imagen se centre si está en zoom mínimo
    if (scale === MIN_SCALE) centerImage(MIN_SCALE);
  };

  // evita que la imagen se salga del contenedor
  const clampPosition = (tx, ty, s = scale) => {
    const { clientWidth: cw, clientHeight: ch } = containerRef.current;
    const { w: bw, h: bh } = baseSizeRef.current;
    const sw = bw * s;
    const sh = bh * s;

    const x = sw <= cw ? (cw - sw) / 2 : Math.max(Math.min(tx, 0), cw - sw);
    const y = sh <= ch ? (ch - sh) / 2 : Math.max(Math.min(ty, 0), ch - sh);
    return { x, y };
  };

  // aplica transform a la imagen usando requestAnimationFrame
  const applyTransform = (tx = posRef.current.x, ty = posRef.current.y, s = scale, withTransition = false) => {
    if (!imgRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      imgRef.current.style.transition = withTransition ? "transform 0.2s ease" : "none";
      imgRef.current.style.transformOrigin = "0 0";
      imgRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
      imgRef.current.style.cursor = draggingRef.current ? "grabbing" : s > 1 ? "grab" : "auto";
    });
  };

  // centra la imagen dentro del contenedor
  const centerImage = (s = scale) => {
    const centered = clampPosition(0, 0, s);
    posRef.current = centered;
    setPos(centered);
    applyTransform(centered.x, centered.y, s, true);
  };

  // medir tamaño base y re-centro al cargar o redimensionar
  useEffect(() => {
    const img = imgRef.current;
    const cont = containerRef.current;
    if (!img || !cont) return;

    const onImgLoad = () => {
      measureBaseSize();
      centerImage(scale);
    };

    img.addEventListener("load", onImgLoad);

    const ro = new ResizeObserver(() => {
      measureBaseSize();
      if (scale === MIN_SCALE) centerImage(scale);
      else {
        const clamped = clampPosition(posRef.current.x, posRef.current.y, scale);
        posRef.current = clamped;
        setPos(clamped);
        applyTransform(clamped.x, clamped.y, scale, true);
      }
    });

    ro.observe(cont);
    ro.observe(img);

    if (img.complete) centerImage(scale);

    return () => {
      img.removeEventListener("load", onImgLoad);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // bloquea scroll de página cuando estamos en zoom
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.style.touchAction = scale > MIN_SCALE ? "none" : "pan-y";
  }, [scale]);

  // zoom con rueda del mouse
  const onWheel = (e) => {
    const cont = containerRef.current;
    if (!cont || !cont.contains(e.target)) return;
    e.preventDefault();

    const step = e.deltaY < 0 ? 0.18 : -0.18;
    const s0 = scale;
    let s1 = Math.min(Math.max(s0 + step, MIN_SCALE), MAX_SCALE);
    if (Math.abs(s1 - s0) < 1e-6) return;

    const rect = cont.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const imgPtX = (cx - posRef.current.x) / s0;
    const imgPtY = (cy - posRef.current.y) / s0;

    const newTx = cx - imgPtX * s1;
    const newTy = cy - imgPtY * s1;

    const clamped = clampPosition(newTx, newTy, s1);

    if (s1 === MIN_SCALE) {
      setScale(s1);
      centerImage(s1);
      return;
    }

    setScale(s1);
    posRef.current = clamped;
    setPos(clamped);
    applyTransform(clamped.x, clamped.y, s1, true);
  };

  // --- Drag con mouse ---
  const onPointerDown = (e) => {
    if (scale <= MIN_SCALE) return;
    e.preventDefault();
    draggingRef.current = true;
    setDragging(true);
    last.current = { x: e.clientX, y: e.clientY };
    try { containerRef.current.setPointerCapture?.(e.pointerId); } catch {}
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    e.preventDefault();
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };

    const newPos = clampPosition(posRef.current.x + dx, posRef.current.y + dy, scale);
    posRef.current = newPos;
    setPos(newPos);
    applyTransform(newPos.x, newPos.y, scale, false);
  };

  const onPointerUp = (e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    try { containerRef.current.releasePointerCapture?.(e?.pointerId); } catch {}
    const clamped = clampPosition(posRef.current.x, posRef.current.y, scale);
    posRef.current = clamped;
    setPos(clamped);
    applyTransform(clamped.x, clamped.y, scale, true);
  };

  // --- Touch: pinch y drag ---
  const getDist = (a, b) => Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
  const getCenter = (a, b) => ({ x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 });

  const onTouchStart = (e) => {
    if (e.touches.length === 2) {
      const [t1, t2] = e.touches;
      pinchStart.current = {
        startDistance: getDist(t1, t2),
        startScale: scale,
        center: getCenter(t1, t2),
        startTx: posRef.current.x,
        startTy: posRef.current.y,
      };
    } else if (e.touches.length === 1 && scale > MIN_SCALE) {
      const t = e.touches[0];
      draggingRef.current = true;
      last.current = { x: t.clientX, y: t.clientY };
      setDragging(true);
    }
  };

  const onTouchMove = (e) => {
    if (pinchStart.current && e.touches.length === 2) {
      e.preventDefault();
      const [t1, t2] = e.touches;
      const dist = getDist(t1, t2);
      const s0 = pinchStart.current.startScale;
      const s1 = Math.min(Math.max((s0 * dist) / pinchStart.current.startDistance, MIN_SCALE), MAX_SCALE);

      const rect = containerRef.current.getBoundingClientRect();
      const cx = pinchStart.current.center.x - rect.left;
      const cy = pinchStart.current.center.y - rect.top;

      const imgPtX = (cx - pinchStart.current.startTx) / s0;
      const imgPtY = (cy - pinchStart.current.startTy) / s0;

      const newTx = cx - imgPtX * s1;
      const newTy = cy - imgPtY * s1;

      const clamped = clampPosition(newTx, newTy, s1);

      if (s1 === MIN_SCALE) {
        setScale(s1);
        centerImage(s1);
        return;
      }

      setScale(s1);
      posRef.current = clamped;
      setPos(clamped);
      applyTransform(clamped.x, clamped.y, s1, false);
    } else if (draggingRef.current && e.touches.length === 1) {
      e.preventDefault();
      const t = e.touches[0];
      const dx = t.clientX - last.current.x;
      const dy = t.clientY - last.current.y;
      last.current = { x: t.clientX, y: t.clientY };

      const newPos = clampPosition(posRef.current.x + dx, posRef.current.y + dy, scale);
      posRef.current = newPos;
      setPos(newPos);
      applyTransform(newPos.x, newPos.y, scale, false);
    }
  };

  const onTouchEnd = (e) => {
    if (pinchStart.current && e.touches.length < 2) pinchStart.current = null;
    if (draggingRef.current && e.touches.length === 0) {
      draggingRef.current = false;
      setDragging(false);
      const clamped = clampPosition(posRef.current.x, posRef.current.y, scale);
      posRef.current = clamped;
      setPos(clamped);
      applyTransform(clamped.x, clamped.y, scale, true);
    }
  };

  // zoom desde botones
  const zoomStep = (step) => {
    const s0 = scale;
    const s1 = Math.min(Math.max(s0 + step * 0.25, MIN_SCALE), MAX_SCALE);
    if (s1 === s0) return;

    const cont = containerRef.current;
    if (!cont) return;
    const rect = cont.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const imgPtX = (cx - posRef.current.x) / s0;
    const imgPtY = (cy - posRef.current.y) / s0;

    const newTx = cx - imgPtX * s1;
    const newTy = cy - imgPtY * s1;
    const clamped = clampPosition(newTx, newTy, s1);

    if (s1 === MIN_SCALE) {
      setScale(s1);
      centerImage(s1);
      return;
    }

    setScale(s1);
    posRef.current = clamped;
    setPos(clamped);
    applyTransform(clamped.x, clamped.y, s1, true);
  };

  useEffect(() => {
    const cont = containerRef.current;
    if (!cont) return;
    cont.addEventListener("wheel", onWheel, { passive: false });
    return () => cont.removeEventListener("wheel", onWheel);
  }, [scale]);

  useEffect(() => {
    applyTransform(posRef.current.x, posRef.current.y, scale, false);
  }, []);

  return (
    <>
      <section className="hero-about-card">
        <div
          ref={containerRef}
          style={{ overflow: "hidden" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            ref={imgRef}
            src={imageURL}
            alt="Database Schema"
            draggable={false}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              objectPosition: "center",
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
              transition: dragging ? "none" : "transform 0.2s ease",
              cursor: scale > 1 ? "grab" : "auto",
              willChange: "transform",
              display: "block",
              userSelect: "none",
              touchAction: "none",
            }}
          />
        </div>

        <div className="btn-group mt-3" role="group" aria-label="Zoom controls">
          <button type="button" className="btn btn-outline-light" onClick={() => zoomStep(-1)} disabled={scale <= MIN_SCALE}>-</button>
          <button type="button" className="btn btn-outline-light" onClick={() => zoomStep(1)} disabled={scale >= MAX_SCALE}>+</button>
          <button type="button" className="btn btn-outline-light" onClick={() => { setScale(MIN_SCALE); centerImage(MIN_SCALE); }}>Reset</button>
        </div>
      </section>
    </>
  );
}
