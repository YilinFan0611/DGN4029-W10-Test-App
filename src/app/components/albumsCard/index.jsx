"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function AlbumsCard({
  albumPic,
  albumAlt,
  title,
  date,
  type,
  bgImageCode,
}) {
  return (
    <div
      className="h-[100vh] w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageCode})` }}
    >
      {/* Album Title */}
      <Parallax 
        speed={-5}
        translateY={[-40, 0]}

        className="pt-24 z-10"
    >
        <h1 className="text-transparent text-stroke text-[64px] md:text-[128px] font-sans font-extrabold text-center">
          {title}
        </h1>
      </Parallax>

      {/* Other Elements */}
      <Parallax 
        speed={10} 
        translateY={[-40, 0]}
        className="z-10"
    >
        <div className="relative w-[300px] h-[200px] md:w-[600px] md:h-[400px] border border-[#F7F4ED]/60 flex flex-col items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[175px] h-[175px] md:w-[350px] md:h-[350px] rounded-full border border-[#F7F4ED]/80" />
          </div>


          <div className="relative w-[75px] h-[75px] md:w-[200px] md:h-[200px] z-10">
            <Image
              src={albumPic}
              alt={albumAlt}
              fill
              style={{ objectFit: "cover" }}
              className="shadow-lg"
            />
          </div>


          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F7F4ED]/80 text-[16px] md:text-[24px] font-HK font-light">
            {type}
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F7F4ED]/80 text-[16px] md:text-[24px] font-HK font-light">
            {date}
          </div>


          <div className="absolute bottom-6 text-[#F7F4ED] text-[24px] md:text-[32px] font-extrabold font-sans tracking-tighter">
            {title}
          </div>
        </div>
      </Parallax>
    </div>
  );
}
