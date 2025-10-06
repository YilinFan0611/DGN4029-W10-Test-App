"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

export default function PhotoGalleryCard({
  galleryPic,
  galleryAlt,
  hoverText,
  galleryImages = [],
}) {
  const [open, setOpen] = useState(false);
  const list = useMemo(
    () => (galleryImages.length ? galleryImages : [galleryPic]),
    [galleryImages, galleryPic]
  );

  return (
    <>
      <div
        className="
          group relative w-[300px] h-[400px]
          border border-[#F7F4ED]/60
          flex items-center justify-center
          overflow-visible cursor-pointer
          transition-colors duration-300
          hover:border-transparent
        "
        onClick={() => setOpen(true)}
      >
        <div
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[250px] h-[350px]
            transition-all duration-300 ease-out
            group-hover:w-[300px] group-hover:h-[400px]
          "
        >
          <Image
            src={galleryPic}
            alt={galleryAlt}
            fill
            className="object-cover object-center rounded-sm"
            sizes="(max-width: 768px) 100vw, 250px"
          />
        </div>

        <div
          className="
            absolute left-4 bottom-4
            text-[#F7F4ED] text-[20px] font-HK font-regular tracking-wide
            opacity-0 translate-y-1
            transition-all duration-300 ease-out
            group-hover:opacity-100 group-hover:translate-y-0
            pointer-events-none
          "
        >
          {hoverText}
        </div>
      </div>

      {open && <ScrollableOverlay images={list} alt={galleryAlt} onClose={() => setOpen(false)} />}
    </>
  );
}

function ScrollableOverlay({ images, alt, onClose }) {
  const wrapRef = useRef(null);
  const imgRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") scrollToIndex(Math.min(active + 1, images.length - 1));
      if (e.key === "ArrowUp") scrollToIndex(Math.max(active - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, images.length, onClose]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) setActive(idx);
        });
      },
      { root: wrapRef.current, threshold: 0.6 }
    );
    imgRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [images.length]);

  const scrollToIndex = useCallback((idx) => {
    const el = imgRefs.current[idx];
    if (!el || !wrapRef.current) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
      onClick={onBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={wrapRef}
        className="absolute inset-0 overflow-y-auto overscroll-contain scroll-smooth"
      >
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16">
          {images.map((src, i) => (
            <section
              key={i}
              ref={(el) => (imgRefs.current[i] = el)}
              data-index={i}
              className="mb-20"
            >
              <figure className="relative w-full">
                <Image
                  src={src}
                  alt={`${alt || "photo"}-${i}`}
                  width={2000}
                  height={1333}
                  className="w-full h-auto object-contain bg-white/0"
                  priority={i <= 1}
                />
              </figure>
            </section>
          ))}
        </div>
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-16 z-50">
        <button
          onClick={() => scrollToIndex(Math.max(active - 1, 0))}
          className="w-10 h-10 rounded-full border bg-transparent hover:bg-white/25 text-[#F7F4ED] backdrop-blur
                     flex items-center justify-center transition"
          aria-label="Previous"
          title="Previous (↑)"
        >
          ↑
        </button>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border bg-transparent hover:bg-white/25 text-[#F7F4ED] backdrop-blur
                     flex items-center justify-center transition"
          aria-label="Close"
          title="Close (Esc)"
        >
          ✕
        </button>
        <button
          onClick={() => scrollToIndex(Math.min(active + 1, images.length - 1))}
          className="w-10 h-10 rounded-full border bg-transparent hover:bg-white/25 text-[#F7F4ED] backdrop-blur
                     flex items-center justify-center transition"
          aria-label="Next"
          title="Next (↓)"
        >
          ↓
        </button>
      </div>
    </div>
  );
}

