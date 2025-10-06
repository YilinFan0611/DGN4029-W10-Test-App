"use client";
import TopNav from "../components/topNav";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import ContactCard from "../components/contactCard";

export default function AWARDS() {
  return (
    <div>
      <TopNav />
      <div className="fixed w-full h-full top-0 left-0 -z-10">
        <Image src="/imgs/BG.png" alt="bg" fill objectFit="cover" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 py-12 justify-between">
        {/* 2005-2008 */}
        <Parallax speed={20} className="flex flex-col justify-start mt-24">
          <h1 className="text-[72px] lg:text-[96px] font-sans font-extrabold text-transparent text-stroke">
            2005-2008
          </h1>
          {/* 2005 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2005
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Metro Radio Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CRHKs Ultimate Song Chart Awards Presentation
            </p>
          </div>
          {/* 2006 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2006
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Metro Radio Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              IFPI Hong Kong Music Sales Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CRHKs Ultimate Song Chart Awards Presentation
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              RoadShow Music Awards
            </p>
          </div>
          {/* 2007 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2007
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              IFPI Hong Kong Music Sales Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Metro Radio Mandarin Hits Music Awards
            </p>
          </div>
          {/* 2008 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2008
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CRHKs Ultimate Song Chart Awards Presentation
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              10th Mnet KM Music Festival
            </p>
          </div>
        </Parallax>

        {/* 2009-2012 */}
        <Parallax speed={1} className="flex flex-col justify-start mt-24">
          <h1 className="text-[72px] lg:text-[96px] font-sans font-extrabold text-transparent text-stroke">
            2009-2012
          </h1>
          {/* 2009 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2009
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              HITO Radio Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Metro Radio Mandarin Hits Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Metro Radio Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CRHKs Ultimate Song Chart Awards Presentation
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              RTHK's Top Ten Chinese Songs Music Awards
            </p>
          </div>
          {/* 2010 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2010
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CASH Golden Sail Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Metro Radio Mandarin Hits Music Awards Presentation
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Metro Radio Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CRHKs Ultimate Song Chart Awards Presentation
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              RTHK's Top Ten Chinese Songs Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Yahoo! Asia Buzz Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Sina Music Awards
            </p>
          </div>
          {/* 2011 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2011
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Metro Radio Mandarin Hits Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Metro Radio Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Yahoo! Asia Buzz Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CRHKs Ultimate Song Chart Awards Presentation
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Sina Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              RTHK's Top Ten Chinese Songs Music Awards
            </p>
          </div>
          {/* 2012 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2012
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Kugou Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Sina Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CRHKs Ultimate Song Chart Awards Presentation
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              RTHK's Top Ten Chinese Songs Music Awards
            </p>
          </div>
        </Parallax>

        {/* 2013-2017 */}
        <Parallax speed={-10} className="flex flex-col justify-start mt-24">
          <h1 className="text-[72px] lg:text-[96px] font-sans font-extrabold text-transparent text-stroke">
            2013-2017
          </h1>
          {/* 2013 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2013
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              RTHK's Top Ten Chinese Songs Music Awards
            </p>
          </div>
          {/* 2014 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2014
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Hito Pop Music Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CRHKs Ultimate Song Chart Awards Presentation
            </p>
          </div>
          {/* 2015 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2015
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Tencent x MTV Asia Music Gala 2016
            </p>
          </div>
          {/* 2016 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2016
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Asia Artist Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              RTHK's Top Ten Chinese Songs Music Awards
            </p>
          </div>
          {/* 2017 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2017
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              28th Golden Melody Awards
            </p>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              CMIC Music Awards
            </p>
          </div>
        </Parallax>

        {/* 2018-2024 */}
        <Parallax
          speed={20}
          translateY={[0, 40]}
          className="flex flex-col justify-start mt-24"
        >
          <h1 className="text-[72px] lg:text-[96px] font-sans font-extrabold text-transparent text-stroke">
            2018-2024
          </h1>
          {/* 2018 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2018
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              Freshasia Music Awards
            </p>
          </div>
          {/* 2020 */}
          <div className="flex flex-col gap-4 justify-start items-start my-8">
            <h2 className="text-[36px] md:text-[48px] font-sans font-extrabold tracking-tighter text-[#F7F4ED]/60">
              2020
            </h2>
            <p className="text-[16px] md:text-[24px] font-HK font-light text-[#F7F4ED]/80">
              32nd Golden Melody Awards
            </p>
          </div>
        </Parallax>
      </div>
      <ContactCard />
    </div>
  );
}
