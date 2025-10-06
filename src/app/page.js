"use client"
import TopNav from "./components/topNav";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ContactCard from "./components/contactCard";


export default function home() {

  const [vh, setVh] = useState(100);

  const targetYRef = useRef(0);
  const [smoothedY, setSmoothedY] = useState(0);
  
  const scrollerRef = useRef(null);
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  // Highlight data
  const HLs01 = [
    {HL01Txt: "15 Live", HL01Img: "/imgs/HIGHLIGHTSPICS01.png"},
  ];

  const HLs02 = [
    {HL02Txt: "Wonderland Live", HL02Img: "/imgs/HIGHLIGHTSPICS02.png"},
  ];

  const HLs03 = [
    {HL03Txt: "This Love Live", HL03Img: "/imgs/HIGHLIGHTSPICS03.png"},
  ];

  const HLs04 = [
    {HL04Txt: "Timeless Live", HL04Img: "/imgs/HIGHLIGHTSPICS04.png"},
  ];
  
  const HLs05 = [
    {HL05Txt: "TIO Live", HL05Img: "/imgs/HIGHLIGHTSPICS05.png"},
  ];

  const HLs06 = [
    {HL06Txt: "Soulboy Light Up Live", HL06Img: "/imgs/HIGHLIGHTSPICS06.png"},
  ];

  // scroll per amount listener
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const y = el.scrollTop;
      targetYRef.current = y;
      setHideScrollIndicator(y > 10);
    };

    targetYRef.current = el.scrollTop;
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

  //scroll per page listener
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const updatevh = () => setVh(el.clientHeight);
    updatevh();

    const ro = new ResizeObserver(updatevh);
    ro.observe(el);

    const vv = window.visualViewport;
    const onVV = () => updatevh();
    vv.addEventListener("resize", onVV);

    return () => {
      ro.disconnect();
      vv.removeEventListener("resize", onVV);
    }
    
  }, []);

  // homepage letter animation
  const lerpClamp = (x, a, b) => {
    if (b === a) return 1;
    const t = (x - a) / (b - a);
    return Math.min(1, Math.max(0, t));
  };
  const letterStyle = (start , end, lift = 160) => {
    const tRaw = lerpClamp(smoothedY, start, end);
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const t = ease(tRaw);
    const y = -lift * t;
    const opacity = 1 - t;
    return {
      transform: `translateY(${y}px)`,
      opacity,
      willChange: 'transform, opacity',
    };
  };

  // homepage Avatar animation
  const screen = (n) => n * vh;
  const avatarTransform = (y) => {
    if (y <= screen(1)) {
      const t = y / screen(1);
      const tx = `calc((38.2dvw - 48px) * ${1 - t})`;
      const ty = `calc(48px * ${1 - t})`;
      const s = 1 - 0.2 * t;
      return `translate(${tx}, ${ty}) scale(${s})`;
    }

    const dy = y - screen(1);
    return `translate(${-dy}px, 0) scale(0.8)`;
  }



  // main return
  return (
    
    <div className="relative">


      {/* Avatar & Signature */}
      <div
        className="
          fixed left-[48px] bottom-0
          pointer-events-none z-30"
        style={{
          transform: avatarTransform(smoothedY),
          transformOrigin: 'bottom left',
          willChange: 'transform',
        }}
      >
        <div className="relative h-[90vh] w-[33vw] animate-avatarFadeInUp hidden md:block">
          <Image 
            src="/imgs/Avatar&Signature.png"
            alt="Avatar and Signature"
            fill
            className="object-contain overflow-visible"
            priority
          />
        </div>
      </div>

      <div 
        ref={scrollerRef}
        className="bg-[url('/imgs/BG.png')] bg-cover bg-center h-[100vh] w-[100vw] overflow-y-scroll scroll-smooth overscroll-y-contain no-scrollbar absolute inset-0"
      >
        {/* topNav */}
        <div className="fixed z-50">
          <TopNav />
        </div>


        {/* Centered Name */}
        <div className="absolute z-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <h1 className="font-sans text-[64px] md:text-[128px] lg:text-[256px] text-transparent text-stroke font-extrabold tracking-tight flex gap-0">
            <div style={letterStyle(screen(0.225), screen(0.525))}>
              <span className="inline-block opacity-0 animate-letterIn will-change-transform" style={{ animationDelay: '1.6s' }}>K</span>
            </div>
            <div style={letterStyle(screen(0.1), screen(0.4))}>
              <span className="inline-block opacity-0 animate-letterIn will-change-transform" style={{ animationDelay: '1.3s' }}>H</span>
            </div>
            <div style={letterStyle(screen(0), screen(0.3))}>
              <span className="inline-block opacity-0 animate-letterIn will-change-transform" style={{ animationDelay: '1s' }}>A</span>
            </div>
            <div style={letterStyle(screen(0.05), screen(0.35))}>
              <span className="inline-block opacity-0 animate-letterIn will-change-transform" style={{ animationDelay: '1s' }}>L</span>
            </div>
            <div style={letterStyle(screen(0.175), screen(0.475))}>
              <span className="inline-block opacity-0 animate-letterIn will-change-transform" style={{ animationDelay: '1.3s' }}>I</span>
            </div>
            <div style={letterStyle(screen(0.3), screen(0.6))}>
              <span className="inline-block opacity-0 animate-letterIn will-change-transform" style={{ animationDelay: '1.6s' }}>L</span>
            </div>
          </h1>
        </div>


        {/* homepageP1 */}
        <div className="relative z-40 px-12 pt-36 pb-12 flex justify-between h-full">

          {/* left */}
          <div 
            className="relative flex flex-col justify-between h-full leading-[1]"
            dir="ltr"
          >
             <div className={`transition-all duration-700 ease-out ${hideScrollIndicator ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'}`}>
              <h1
                className="font-HK text-[48px] md:text-[64px] lg:text-[96px] text-transparent text-stroke font-black opacity-0 animate-textInLTR will-change-transform"
                style={{ animationDelay: '2s' }}
              >
                方
              </h1>
            </div>

            <div className={`transition-all duration-700 ease-out ${hideScrollIndicator ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'}`}>
              <h1
                className="font-sans text-[48px] md:text-[64px] lg:text-[96px] font-extrabold text-[#F7F4ED]/40 opacity-0 animate-textInLTR will-change-transform"
                style={{ animationDelay: '2s' }}
              >
                FONG
              </h1>
            </div>
          </div>

          {/* right */}
          <div 
            className="relative flex flex-col justify-between h-full leading-[1]"
            dir="rtl"
          >
            <div className="relative flex flex-col gap-12">
              <div className={`transition-all duration-700 ease-out ${hideScrollIndicator ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'}`}>
                <h1 
                  className="font-HK text-[48px] md:text-[64px] lg:text-[96px] font-black text-[#F7F4ED]/60 opacity-0 animate-textInRTL will-change-transform"
                  style={{ animationDelay: '2s' }}
                >
                  大同
                </h1>
              </div>
            </div>

            <div
              className={`
                z-40 right-[48px] bottom-[48px]
                w-[96px] h-[96px] rounded-full border border-[#F7F4ED]
                flex items-center justify-center
                transition-opacity duration-700
                ${hideScrollIndicator ? "opacity-0" : "opacity-100"}
              `}
            >
              <svg
                width="18" height="24" viewBox="0 0 18 24" fill="none"
                className="animate-arrow-bounce"
              >
                <path d="M9 2v14" stroke="#F7F4ED" strokeWidth="1" strokeLinecap="round"/>
                <path d="M3 12l6 8 6-8" stroke="#F7F4ED" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div> 
        </div>

        {/* This is for empty page placeholder */}
        <div className="sticky top-0 h-full bg-[url('/imgs/BG2.png')] bg-cover bg-center pointer-events-none" />
        <div className="relative h-1/2 pointer-events-none"/>
        {/* Empty page placeholder end */}

        {/* BIOGRAPHY TITLE */}
        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '96px',
            right: '48px',
            transform: (() => {
              const y = smoothedY;
              if (y <= screen(1)) {
                return 'translateY(20px)';
              }
              if (y <= screen(1.2)) {
                const t = (y - screen(1)) / (screen(1.2) - screen(1));
                const dy = 20 * (1 - t);
                return `translateY(${dy}px)`;
              }
              if (y <= screen(1.8)) {
                return 'translateY(0)';
              }
              if (y <= screen(1.85)) {
                const t = (y - screen(1.8)) / (screen(1.85) - screen(1.8));
                const dy = -screen(0.05) * t;
                return `translateY(${dy}px)`;
              }
              const dy = -(y - screen(1.85));
              return `translateY(${dy}px)`;
            })(),
            opacity: (() => {
              const y = smoothedY;
              if (y <= screen(1)) return 0;
              if (y <= screen(1.2)) return (y - screen(1)) / (screen(1.2) - screen(1));
              if (y <= screen(1.8)) return 1;
              if (y <= screen(1.85)) {
                return 1 - (y - screen(1.8)) / (screen(1.85) - screen(1.8));
              } return 0;
            })(),
            willChange: 'transform, opacity',
          }}
        >

          <h1
            className="font-sans font-extrabold text-transparent text-stroke text-[36px] md:text-[72px] lg:text-[128px] leading-none"
            style={{
              transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1), opacity 300ms cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            BIOGRAPHY
          </h1>
        </div>

        {/* BIOGRAPHY QUOTE */} 
        <div 
          className="relative z-40 pointer-events-none h-1/2 px-12 md:px-24 lg:px-96 flex flex-col justify-between"
          style={{
            textAlign: 'center',
            transform: (() => {
              const y = smoothedY;
              if (y <= screen(1.5)) return 'translateY(0)';
              const dy = -(y - screen(1.5));
              return `translateY(${dy}px)`;
            })(),
          }}
        >
          {(() => {
            const y = smoothedY;
            const s = screen;

            const start = s(1.8);
            const end   = s(2.0);
            const t = Math.min(1, Math.max(0, (y - start) / (end - start))); // 0..1

            const quoteSize = 40 + (28 - 40) * t;
            const authorSize = 32 + (20 - 32) * t;

            return (
              <>
                <h1
                  className="text-[#F7F4ED] font-deco font-bold"
                  style={{ fontSize: `${quoteSize}px`, lineHeight: 1.2 }}
                >
                  “art plays a paramount role in promoting and enhancing harmony among humanity, and music as an art acts as a medium for enriching and enlivening the human soul.”
                </h1>
                <h1
                  className="text-[#F7F4ED] font-deco font-bold mt-8"
                  style={{ fontSize: `${authorSize}px`, lineHeight: 1.2 }}
                >
                  By Khalil Fong
                </h1>
              </>
            );
          })()}
        </div>

        {/* BIOGRAPHY CONTENT */}
        <div 
          className="relative z-50 h-full overflow-hidden overscroll-y-contain overflow-y-scroll scroll-smooth md:overflow-visible md:overscroll-y-none px-12 md:px-24 lg:px-36 text-[16px] lg:text-[20px] leading-[1.2]"
          style={{
            textAlign: 'center',
            transform: (() => {
              const y = smoothedY;
              if (y <= screen(2)) {
                return 'translateY(0)';
              }
              const dy = -(y - screen(2));
              return `translateY(${dy}px)`;
            })(),
          }}
        >
          <p className="text-[#F7F4ED] font-HK font-bold tracking-wide text-justify mb-6">
            Khalil Fong, born on 14 July, 1983 in Kauai, Hawaii, is a Mando-pop/R&B/Soul composer, producer and singer, notable for his unconventional and innovative approach in the Chinese music industry.
          </p>
          <p className="text-[#F7F4ED] font-HK font-bold tracking-wide text-justify mb-6">
            The evolution of his unique style is the result of diverse musical and cultural influences. Khalil was introduced to a variety of soul, funk, and jazz music at a very young age by his father, a professional drummer. By the age of 4, he had already shown interest in music, playing the drums at home and sitting in as a guest vocalist at his father's gigs. Khalil's first endeavour to learn an instrument himself came when he started to play the guitar at the age of 15. He later on expanded his musicianship to playing the piano and drums for the sake of becoming a better producer and arranger.
          </p>
          <p className="text-[#F7F4ED] font-HK font-bold tracking-wide text-justify mb-6">
            The movie La Bamba had a great influence on inspiring Khalil to be a musician. Likewise, amongst his biggest influences are artists such as Stevie Wonder, Michael Jackson, Steely Dan, D'Angelo, Jimi Hendrix, Questlove and Musiq Soulchild who have had a profound influence on the direction of Khalil's musical journey. Art plays a paramount role in promoting and enhancing harmony among humanity, and music as an art acts as a medium for enriching and enlivening the human soul.
          </p>
          <p className="text-[#F7F4ED] font-HK font-bold tracking-wide text-justify mb-6">
            Despite being born in Hawaii, Khalil has been nurtured in both Chinese culture and language during his childhood years, living in Shanghai and Guangzhou. After moving to Hong Kong, he started to experiment in songwriting and began to record simple demos at home. His aim was to eventually introduce a more authentic soul, R&B, and hip-hop sound into Chinese music. Hence, Khalil has produced mostly Mandarin songs, gaining him a loyal following in Greater China, Taiwan, Hong Kong and other Asian countries, In addition to his own works, he is constantly involved in songwriting and production, penning tracks for influential artists such as A-mei, Eason Chan, Jane Zhang, Fiona Sit, Andy Lau, Joey Yung, Ivana Wong, Kay Tse and Jacky Cheung. Khalil is one of the few Chinese artists to focus on hook and rhythm based songwriting versus the traditional Chinese melodic formula.
          </p>
          <p className="text-[#F7F4ED] font-HK font-bold tracking-wide text-justify mb-6">
            Besides his dedication to the arts, Khalil is also passionate about living green and healthy, and to pass on the spirit of peace and unity.
          </p>
        </div>

        {/* Picture elements */}
        <div 
          className="fixed z-30 pointer-events-none"
          style={{
            top:'33%',
            left:'10%',
            width: '480px',
            height: '320px',
            transform: (() => {
              const y = smoothedY;
              if (y <= screen(2)) {
                return '-translateX(20px) scale(0.9)';
              }
              if (y <= screen(3)) {
                const t = (y - screen(2)) / (screen(3) - screen(2));
                const dy = -screen(0.1) * t;
                const dx = screen(0.08) * t;
                return `translateY(${dy}px) scale(${0.9 + 0.1 * t}) translateX(${dx}px)`;
              }
            })(),
            opacity: (() => {
              const y = smoothedY;
              if (y <= screen(2)) return 0;
              if (y <= screen(2.2)) return (y - screen(2)) / (screen(2.2) - screen(2));
              if (y <= screen(2.8)) return 1;
              if (y <= screen(3)) {
                return 1 - (y - screen(2.8)) / (screen(3) - screen(2.8));
              } return 0;
            })(),
            willChange: 'transform, opacity',
          }}
        >
          <img src="/imgs/img1.png" alt="Khalil Fong" className="object-cover w-1/4 h-1/4 md:w-1/2 md:h-1/2 lg:w-full lg:h-full" />
        </div>

        <div 
          className="fixed z-30 pointer-events-none"
          style={{
            top:'67%',
            right:'10%',
            width: '320px',
            height: '240px',
            transform: (() => {
              const y = smoothedY;
              if (y <= screen(2)) {
                return '-translateX(20px) scale(0.9)';
              }
              if (y <= screen(3)) {
                const t = (y - screen(2)) / (screen(3) - screen(2));
                const dy = -screen(0.1) * t;
                const dx = screen(0.08) * t;
                return `translateY(${dy}px) scale(${0.9 + 0.1 * t}) translateX(${-dx}px)`;
              }
            })(),
            opacity: (() => {
              const y = smoothedY;
              if (y <= screen(2.2)) return 0;
              if (y <= screen(2.8)) return (y - screen(2.2)) / (screen(2.8) - screen(2.2));
              if (y <= screen(3)) {
                return 1 - (y - screen(2.8)) / (screen(3) - screen(2.8));
              } return 0;
            })(),
            willChange: 'transform, opacity',
          }}
        >
          <img src="/imgs/img2.png" alt="Khalil Fong" className="object-cover w-1/2 h-1/2 lg:w-full lg:h-full" />
        </div>


        
        {/* CAREER TITLE */}
         <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '96px',
            left: '48px',
            transform: (() => {
              const y = smoothedY;
              if (y <= screen(3)) {
                return 'translateY(20px)';
              }
              if (y <= screen(3.2)) {
                const t = (y - screen(3)) / (screen(3.2) - screen(3));
                const dy = 20 * (1 - t);
                return `translateY(${dy}px)`;
              }
              if (y <= screen(3.6)) {
                return 'translateY(0)';
              }
              if (y <= screen(3.65)) {
                const t = (y - screen(3.6)) / (screen(3.65) - screen(3.6));
                const dy = -screen(0.05) * t;
                return `translateY(${dy}px)`;
              }
              const dy = -(y - screen(3.65));
              return `translateY(${dy}px)`;
            })(),
            opacity: (() => {
              const y = smoothedY;
              if (y <= screen(3)) return 0;
              if (y <= screen(3.2)) return (y - screen(3)) / (screen(3.2) - screen(3));
              if (y <= screen(3.6)) return 1;
              if (y <= screen(3.65)) {
                return 1 - (y - screen(3.6)) / (screen(3.65) - screen(3.6));
              } return 0;
            })(),
            willChange: 'transform, opacity',
          }}
        >

          <h1
            className="font-sans font-extrabold text-transparent text-stroke text-[36px] md:text-[72px] lg:text-[128px] leading-none"
            style={{
              transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1), opacity 300ms cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            CAREER
          </h1>
        </div>




        {/* CAREER BACKGROUND */}
        <div 
          className="fixed z-10 h-full w-full pointer-events-none"
          style={{
            top:'10%',
            transform: (() => {
              const y = smoothedY;
              if (y <= screen(3)) {
                return '-translateX(20px)';
              }
              if (y <= screen(3.2)) {
                const t = (y - screen(3)) / (screen(3.2) - screen(3));
                const dy = -screen(0.1) * t;
                return `translateY(${dy}px)`;
              }
              if (y <= screen(9)) {
                return 'translateY(-10vh)';
              } const dy = -(y - screen(9)) - screen(0.1);
                return `translateY(${dy}px)`;
            })(),
            opacity: (() => {
              const y = smoothedY;
              if (y <= screen(3)) return 0;
              if (y <= screen(3.2)) return (y - screen(3)) / (screen(3.2) - screen(3));
              if (y > screen(3.2)) return 1;
            })(),
            willChange: 'transform, opacity',
          }}
        >
          <img src="/imgs/CAREERBG.png" alt="Career Background" className="object-cover w-full h-full" />
        </div>






        {/* CAREER PICTURE ELEMENTS */}
        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            right: '144px',
            width: '320px',
            height: '400px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s30 = screen(3.0);
              const s35 = screen(3.5);

              // Scale
              let scale = 0.9;
              if (y <= s30) {
                scale = 0.9;
              } else if (y <= s35) {
                const t = (y - s30) / (s35 - s30); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s30 ? 0 : -(y - s30);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s30 = screen(3.0);
              const s35 = screen(3.5);

              if (y <= s30) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s35) {
                const t = (y - s30) / (s35 - s30); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT01.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>

        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            left: '144px',
            width: '240px',
            height: '300px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s35 = screen(3.5);
              const s40 = screen(4.0);

              // Scale
              let scale = 0.9;
              if (y <= s35) {
                scale = 0.9;
              } else if (y <= s40) {
                const t = (y - s35) / (s40 - s35); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s35 ? 0 : -(y - s35);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s35 = screen(3.5);
              const s40 = screen(4.0);

              if (y <= s35) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s40) {
                const t = (y - s35) / (s40 - s35); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT02.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>

        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            right: '288px',
            width: '320px',
            height: '400px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s40 = screen(4.0);
              const s45 = screen(4.5);

              // Scale
              let scale = 0.9;
              if (y <= s40) {
                scale = 0.9;
              } else if (y <= s45) {
                const t = (y - s40) / (s45 - s40); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s40 ? 0 : -(y - s40);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s40 = screen(4.0);
              const s45 = screen(4.5);

              if (y <= s40) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s45) {
                const t = (y - s40) / (s45 - s40); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT03.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>

        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            left: '288px',
            width: '240px',
            height: '300px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s45 = screen(4.5);
              const s50 = screen(5.0);

              // Scale
              let scale = 0.9;
              if (y <= s45) {
                scale = 0.9;
              } else if (y <= s50) {
                const t = (y - s45) / (s50 - s45); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s45 ? 0 : -(y - s45);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s45 = screen(4.5);
              const s50 = screen(5.0);

              if (y <= s45) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s50) {
                const t = (y - s45) / (s50 - s45); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT04.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>

        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            right: '144px',
            width: '320px',
            height: '400px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s50 = screen(5.0);
              const s55 = screen(5.5);

              // Scale
              let scale = 0.9;
              if (y <= s50) {
                scale = 0.9;
              } else if (y <= s55) {
                const t = (y - s50) / (s55 - s50); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s50 ? 0 : -(y - s50);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s50 = screen(5.0);
              const s55 = screen(5.5);

              if (y <= s50) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s55) {
                const t = (y - s50) / (s55 - s50); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT05.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>

        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            left: '144px',
            width: '240px',
            height: '300px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s55 = screen(5.5);
              const s60 = screen(6.0);

              // Scale
              let scale = 0.9;
              if (y <= s55) {
                scale = 0.9;
              } else if (y <= s60) {
                const t = (y - s55) / (s60 - s55); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s55 ? 0 : -(y - s55);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s55 = screen(5.5);
              const s60 = screen(6.0);

              if (y <= s55) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s60) {
                const t = (y - s55) / (s60 - s55); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT06.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>

        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            right: '288px',
            width: '320px',
            height: '400px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s60 = screen(6.0);
              const s65 = screen(6.5);

              // Scale
              let scale = 0.9;
              if (y <= s60) {
                scale = 0.9;
              } else if (y <= s65) {
                const t = (y - s60) / (s65 - s60); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s60 ? 0 : -(y - s60);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s60 = screen(6.0);
              const s65 = screen(6.5);

              if (y <= s60) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s65) {
                const t = (y - s60) / (s65 - s60); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT07.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>

        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            left: '288px',
            width: '240px',
            height: '300px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s65 = screen(6.5);
              const s70 = screen(7.0);

              // Scale
              let scale = 0.9;
              if (y <= s65) {
                scale = 0.9;
              } else if (y <= s70) {
                const t = (y - s65) / (s70 - s65); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s65 ? 0 : -(y - s65);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s65 = screen(6.5);
              const s70 = screen(7.0);

              if (y <= s65) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s70) {
                const t = (y - s65) / (s70 - s65); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT08.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>

        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            right: '144px',
            width: '320px',
            height: '400px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s70 = screen(7.0);
              const s75 = screen(7.5);

              // Scale
              let scale = 0.9;
              if (y <= s70) {
                scale = 0.9;
              } else if (y <= s75) {
                const t = (y - s70) / (s75 - s70); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s70 ? 0 : -(y - s70);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s70 = screen(7.0);
              const s75 = screen(7.5);

              if (y <= s70) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s75) {
                const t = (y - s70) / (s75 - s70); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT09.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>

        <div
          className="fixed z-40 pointer-events-none"
          style={{
            top: '75%',
            left: '144px',
            width: '240px',
            height: '300px',

            transformOrigin: 'bottom right',

            // Position & Scale
            transform: (() => {
              const y = smoothedY;
              const s75 = screen(7.5);
              const s80 = screen(8.0);

              // Scale
              let scale = 0.9;
              if (y <= s75) {
                scale = 0.9;
              } else if (y <= s80) {
                const t = (y - s75) / (s80 - s75); // 0→1
                scale = 0.9 + 0.1 * t;
              } else {
                scale = 1.0;
              }

              // Vertical Translate
              const translateY =
                y <= s75 ? 0 : -(y - s75);
              return `translateY(${translateY}px) scale(${scale})`;
            })(),

            // Picture Expand
            clipPath: (() => {
              const y = smoothedY;
              const s75 = screen(7.5);
              const s80 = screen(8.0);

              if (y <= s75) {
                return 'inset(0% 0% 100% 0%)';
              }
              if (y <= s80) {
                const t = (y - s75) / (s80 - s75); // 0→1
                const bottom = (1 - t) * 100; // 100%→0%
                return `inset(0% 0% ${bottom}% 0%)`;
              }
              return 'inset(0% 0% 0% 0%)';
            })(),

            willChange: 'transform, clip-path',
          }}
        >
          <img
            src="/imgs/CAREERPICELEMENT10.png"
            alt="Khalil Fong"
            className="object-cover w-1/2 h-1/2 md:w-full md:h-full"
          />
        </div>






        {/* CAREER CONTENT */}
        <div className="relative h-full flex flex-row justify-between px-8 md:px-12 lg:px-16 py-16 gap-4 md:gap-6 lg:gap-8 z-40">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight text-nowrap">
              Early Beginning
            </h2>
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight">
              Before being a musician
            </h2>
          </div>

          <p className="text-[#F7F4ED] font-HK font-black text-[16px] md:text-[24px] lg:text-[28px] leading-[1.5] tracking-tight">
            Fong moved to Guangzhou at 12, sang with his father, and later wrote over 100 tunes for his mother's company after moving to Hong Kong at 14. He self-taught guitar and piano, sent demos at 17, wrote for famous singers, and finally signed with Warner Music at 22 in 2005.
          </p>
        </div>

        <div className="relative h-full flex flex-row justify-between px-8 md:px-12 lg:px-16 py-16 gap-4 md:gap-6 lg:gap-8 z-40">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight text-nowrap">
              2005-2008
            </h2>
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight">
              Soulboy, This Love, Wonderland, and Orange Moon
            </h2>
          </div>

          <p className="text-[#F7F4ED] font-HK font-black text-[16px] md:text-[24px] lg:text-[28px] leading-[1.5] tracking-tight">
            In 2005, Fong signed with Warner Music at the age of 22 after years of writing for other singers. In 2006, he released This Love, which received critical acclaim and multiple top-selling and popular song awards. In 2007, he held his first concert and released Wonderland, an environmentally themed album whose track Love Song topped charts and won major awards. In 2008, he staged the Wonderland Live concerts and released Orange Moon, a more approachable album that earned further recognition and music awards.
          </p>
        </div>

        <div className="relative h-full flex flex-row justify-between px-8 md:px-12 lg:px-16 py-16 gap-4 md:gap-6 lg:gap-8 z-40">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight text-nowrap">
              2009-2012
            </h2>
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight">
              Timeless, 15, and Back to Wonderland
            </h2>
          </div>

          <p className="text-[#F7F4ED] font-HK font-black text-[16px] md:text-[24px] lg:text-[28px] leading-[1.5] tracking-tight">
            In 2010, he cameoed in Love in Disguise but struggled with pneumothorax. In 2011, he launched his sixth album 15, won Best R&B/Soul Artist, and began his first major tour. In 2012, he released Back to Wonderland, returning to his R&B and soul roots.
          </p>
        </div>

        <div className="relative h-full flex flex-row justify-between px-8 md:px-12 lg:px-16 py-16 gap-4 md:gap-6 lg:gap-8 z-40">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight text-nowrap">
              2013-2017
            </h2>
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight">
              Dangerous World and Journey to the West
            </h2>
          </div>

          <p className="text-[#F7F4ED] font-HK font-black text-[16px] md:text-[24px] lg:text-[28px] leading-[1.5] tracking-tight">
            In 2013, Fong ended his Warner contract, joined Gold Typhoon, and launched his second tour Soulboy Lights Up. In 2014, he released Dangerous World, earning a third Golden Melody nomination. In 2016, he founded FU MUSIC and released Journey to the West, winning his first Golden Melody Award for Best Male Artist. In 2017, he paused music for health reasons but was named Billboard Radio China's Artist of the Year.
          </p>
        </div>

        <div className="relative h-full flex flex-row justify-between px-8 md:px-12 lg:px-16 py-16 gap-4 md:gap-6 lg:gap-8 z-40">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight text-nowrap">
              2018-2024
            </h2>
            <h2 className="text-[#F7F4ED]/60 font-HK font-extralight text-[12px] md:text-[14px] lg:text-[16px] tracking-tight">
              Emi The Dream Catcher and The Dreamer
            </h2>
          </div>

          <p className="text-[#F7F4ED] font-HK font-black text-[16px] md:text-[24px] lg:text-[28px] leading-[1.5] tracking-tight">
            In 2018, Fong released the Emi The Dream Catcher children's graphic novel series with accompanying songs and an EP, aiming to inspire young readers with values of empathy and imagination. In 2019, his singles including White Hair won him Best Male Singer and Golden Song of the Year. In 2020, he released the EP Home Sweet Home, winning a Golden Melody Award for Best Single Producer, and in 2021 produced the film Guidance. In 2024, he returned with his tenth album The Dreamer, created during illness as a personal “memoir” to encourage resilience and hope.
          </p>
        </div>


        {/* HIGHLIGHTS */}
        <div className="relative bg-[url('/imgs/HIGHLIGHTBG.png')] bg-cover bg-center h-full z-40 py-24 overflow-hidden">
          <div className="w-full flex justify-center relative">
            <h1 className="relative z-50 font-sans font-extrabold text-transparent text-stroke text-[36px] md:text-[72px] lg:text-[128px] leading-none">
              HIGHLIGHTS
            </h1>
          </div>

          <div className="relative flex flex-col gap-3 items-center mt-8">
            {HLs01.map((HL01, index) => {
              const [hoverer, setHoverer] = useState(false);
              return (
                <div
                  key={index}
                  className="relative w-fit inline-block"
                >
                  <h1 
                    onMouseEnter={() => setHoverer(true)}
                    onMouseLeave={() => setHoverer(false)}
                    className={`relative z-50 font-HK text-[24px] md:text-[36px] lg:text-[64px] font-bold leading-[1] transition-all duration-300 ${hoverer ? 'text-stroke text-transparent' : 'text-[#F7F4ED]/80'}`}
                  >
                    {HL01.HL01Txt}
                  </h1>
                  <Image
                    src={HL01.HL01Img}
                    alt={HL01.HL01Txt}
                    width={500}
                    height={300}
                    className={`absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-300 ease-in-out ${hoverer ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              );
            })}
            {HLs02.map((HL02, index) => {
              const [hoverer, setHoverer] = useState(false);
              return (
                <div
                  key={index}
                  className="relative"
                >
                  <h1 
                    onMouseEnter={() => setHoverer(true)}
                    onMouseLeave={() => setHoverer(false)}
                    className={`relative z-50 font-HK text-[24px] md:text-[36px] lg:text-[64px] font-bold leading-[1] transition-all duration-300 ${hoverer ? 'text-stroke text-transparent' : 'text-[#F7F4ED]/80'}`}
                  >
                    {HL02.HL02Txt}
                  </h1>
                  <Image
                    src={HL02.HL02Img}
                    alt={HL02.HL02Txt}
                    width={300}
                    height={500}
                    className={`absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-300 ease-in-out ${hoverer ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              );
            })}
            {HLs03.map((HL03, index) => {
              const [hoverer, setHoverer] = useState(false);
              return (
                <div
                  key={index}
                  className="relative w-fit inline-block"
                >
                  <h1 
                    onMouseEnter={() => setHoverer(true)}
                    onMouseLeave={() => setHoverer(false)}
                    className={`relative z-50 font-HK text-[24px] md:text-[36px] lg:text-[64px] font-bold leading-[1] transition-all duration-300 ${hoverer ? 'text-stroke text-transparent' : 'text-[#F7F4ED]/80'}`}
                  >
                    {HL03.HL03Txt}
                  </h1>
                  <Image
                    src={HL03.HL03Img}
                    alt={HL03.HL03Txt}
                    width={600}
                    height={400}
                    className={`absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-300 ease-in-out ${hoverer ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              );
            })}
            {HLs04.map((HL04, index) => {
              const [hoverer, setHoverer] = useState(false);
              return (
                <div
                  key={index}
                  className="relative w-fit inline-block"                  
                >
                  <h1 
                    onMouseEnter={() => setHoverer(true)}
                    onMouseLeave={() => setHoverer(false)}
                    className={`relative z-50 font-HK text-[24px] md:text-[36px] lg:text-[64px] font-bold leading-[1] transition-all duration-300 ${hoverer ? 'text-stroke text-transparent' : 'text-[#F7F4ED]/80'}`}
                  >
                    {HL04.HL04Txt}
                  </h1>
                  <Image
                    src={HL04.HL04Img}
                    alt={HL04.HL04Txt}
                    width={600}
                    height={300}
                    className={`absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-300 ease-in-out ${hoverer ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              );
            })}
            {HLs05.map((HL05, index) => {
              const [hoverer, setHoverer] = useState(false);
              return (
                <div
                  key={index}
                  className="relative w-fit inline-block"
                >
                  <h1 
                    onMouseEnter={() => setHoverer(true)}
                    onMouseLeave={() => setHoverer(false)}
                    className={`relative z-50 font-HK text-[24px] md:text-[36px] lg:text-[64px] font-bold leading-[1] transition-all duration-300 ${hoverer ? 'text-stroke text-transparent' : 'text-[#F7F4ED]/80'}`}
                  >
                    {HL05.HL05Txt}
                  </h1>
                  <Image
                    src={HL05.HL05Img}
                    alt={HL05.HL05Txt}
                    width={500}
                    height={300}
                    className={`absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-300 ease-in-out ${hoverer ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              );
            })}
            {HLs06.map((HL06, index) => {
              const [hoverer, setHoverer] = useState(false);
              return (
                <div
                  key={index}
                  className="relative w-fit inline-block"
                >
                  <h1 
                    onMouseEnter={() => setHoverer(true)}
                    onMouseLeave={() => setHoverer(false)}
                    className={`relative z-50 font-HK text-[24px] md:text-[36px] lg:text-[64px] font-bold leading-[1] transition-all duration-300 ${hoverer ? 'text-stroke text-transparent' : 'text-[#F7F4ED]/80'}`}
                  >
                    {HL06.HL06Txt}
                  </h1>
                  <Image
                    src={HL06.HL06Img}
                    alt={HL06.HL06Txt}
                    width={300}
                    height={600}
                    className={`absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-300 ease-in-out ${hoverer ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              );
            })}
          </div>
          
        </div>


        {/* footer */}
        {/* Footer（贴在页面末尾） */}
        <ContactCard />

      </div>

      
    </div>
  );
}