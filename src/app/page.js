"use client";
import TopNav from "./components/topNav";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ContactCard from "./components/contactCard";

// ✅ New subcomponent (fix for useState inside loop)
function HighlightItem({ text, img, w = 500, h = 300 }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-fit inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1
        className={`relative z-50 font-HK text-[24px] md:text-[36px] lg:text-[64px] font-bold leading-[1] transition-all duration-300 ${
          hover ? "text-stroke text-transparent" : "text-[#F7F4ED]/80"
        }`}
      >
        {text}
      </h1>

      <Image
        src={img}
        alt={text}
        width={w}
        height={h}
        className={`absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-300 ease-in-out ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function Home() {
  const [vh, setVh] = useState(100);
  const targetYRef = useRef(0);
  const [smoothedY, setSmoothedY] = useState(0);
  const scrollerRef = useRef(null);
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  // ✅ Combined HIGHLIGHTS data
  const HIGHLIGHTS = [
    { text: "15 Live", img: "/imgs/HIGHLIGHTSPICS01.png", w: 500, h: 300 },
    { text: "Wonderland Live", img: "/imgs/HIGHLIGHTSPICS02.png", w: 300, h: 500 },
    { text: "This Love Live", img: "/imgs/HIGHLIGHTSPICS03.png", w: 600, h: 400 },
    { text: "Timeless Live", img: "/imgs/HIGHLIGHTSPICS04.png", w: 600, h: 300 },
    { text: "TIO Live", img: "/imgs/HIGHLIGHTSPICS05.png", w: 500, h: 300 },
    { text: "Soulboy Light Up Live", img: "/imgs/HIGHLIGHTSPICS06.png", w: 300, h: 600 },
  ];

  // Scroll listener
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const y = el.scrollTop;
      targetYRef.current = y;
      setHideScrollIndicator(y > 10);
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });

    let rafId;
    const damping = 0.1;
    const tick = () => {
      setSmoothedY((prev) => {
        const next = prev + (targetYRef.current - prev) * damping;
        if (Math.abs(next - targetYRef.current) < 0.1) return targetYRef.current;
        return next;
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Resize observer for vh
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const updatevh = () => setVh(el.clientHeight);
    updatevh();

    const ro = new ResizeObserver(updatevh);
    ro.observe(el);

    const vv = window.visualViewport;
    vv.addEventListener("resize", updatevh);

    return () => {
      ro.disconnect();
      vv.removeEventListener("resize", updatevh);
    };
  }, []);

  const screen = (n) => n * vh;

  // ✅ keep rest of your existing content
  return (
    <div className="relative">
      {/* ... (everything above remains the same) ... */}

      {/* ✅ HIGHLIGHTS (fixed version) */}
      <div className="relative bg-[url('/imgs/HIGHLIGHTBG.png')] bg-cover bg-center h-full z-40 py-24 overflow-hidden">
        <div className="w-full flex justify-center relative">
          <h1 className="relative z-50 font-sans font-extrabold text-transparent text-stroke text-[36px] md:text-[72px] lg:text-[128px] leading-none">
            HIGHLIGHTS
          </h1>
        </div>

        <div className="relative flex flex-col gap-3 items-center mt-8">
          {HIGHLIGHTS.map((item) => (
            <HighlightItem
              key={item.text}
              text={item.text}
              img={item.img}
              w={item.w}
              h={item.h}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <ContactCard />
    </div>
  );
}
