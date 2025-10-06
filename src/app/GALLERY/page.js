"use client";
import TopNav from "../components/topNav";
import Image from "next/image";
import PhotoGalleryCard from "../components/photoGalleryCard";
import ContactCard from "../components/contactCard";

export default function PHOTOS() {
  return (
    <div>
      {/* Top Navigation */}
      <TopNav />
      <div className="fixed w-full h-full top-0 left-0 -z-10">
        <Image 
          src="/imgs/BG.png" 
          alt="bg" 
          fill
          objectFit="cover"
        />
      </div>
      
      {/* Page Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 px-12 py-48 justify-center-safe place-items-center">
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery01.png"
            galleryAlt="DCFE Concert 2015"
            hoverText="DCFE Concert 2015"
            galleryImages={[
              "/imgs/1gallery01.png",
              "/imgs/1gallery02.png",
              "/imgs/1gallery03.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery02.png"
            galleryAlt="MV JTW Wú Suǒ Wèi"
            hoverText="MV JTW Wú Suǒ Wèi"
            galleryImages={[
              "/imgs/2gallery01.png",
              "/imgs/2gallery02.png",
              "/imgs/2gallery03.png",
              "/imgs/2gallery04.png",
              "/imgs/2gallery05.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery03.png"
            galleryAlt="MV JTW Flavour"
            hoverText="MV JTW Flavour"
            galleryImages={[
              "/imgs/3gallery01.png",
              "/imgs/3gallery02.png",
              "/imgs/3gallery03.png",
              "/imgs/3gallery04.png",
              "/imgs/3gallery05.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery04.png"
            galleryAlt="KEF Spokesperson 2015-2017"
            hoverText="KEF Spokesperson 2015-2017"
            galleryImages={[
              "/imgs/4gallery01.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery05.png"
            galleryAlt="HK International Youth Music Festival 2016"
            hoverText="HK International Youth Music Festival 2016"
            galleryImages={[
              "/imgs/5gallery01.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery06.png"
            galleryAlt="KEF Live 2015"
            hoverText="KEF Live 2015"
            galleryImages={[
              "/imgs/6gallery01.png",
              "/imgs/6gallery02.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery07.png"
            galleryAlt="MV Black White and Grey"
            hoverText="MV Black White and Grey"
            galleryImages={[
              "/imgs/7gallery01.png",
              "/imgs/7gallery02.png",
              "/imgs/7gallery03.png",
              "/imgs/7gallery04.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery08.png"
            galleryAlt="MV JTW Wù Kōng"
            hoverText="MV JTW Wù Kōng"
            galleryImages={[
              "/imgs/8gallery01.png",
              "/imgs/8gallery02.png",
              "/imgs/8gallery03.png",
              "/imgs/8gallery04.png",
              "/imgs/8gallery05.png",
              "/imgs/8gallery06.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery09.png"
            galleryAlt="Listen x KEF Photo shoot"
            hoverText="Listen x KEF Photo shoot"
            galleryImages={[
              "/imgs/9gallery01.png",
              "/imgs/9gallery02.png",
              "/imgs/9gallery03.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery10.png"
            galleryAlt="Dangerous World PC 2014"
            hoverText="Dangerous World PC 2014"
            galleryImages={[
              "/imgs/10gallery01.png",
              "/imgs/10gallery02.png",
              "/imgs/10gallery03.png",
              "/imgs/10gallery04.png",
              "/imgs/10gallery05.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery11.png"
            galleryAlt="KEF x JTW Listening Session 2016"
            hoverText="KEF x JTW Listening Session 2016"
            galleryImages={[
              "/imgs/11gallery01.png",
              "/imgs/11gallery02.png",
              "/imgs/11gallery03.png",
              "/imgs/11gallery04.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery12.png"
            galleryAlt="MV Listen"
            hoverText="MV Listen"
            galleryImages={[
              "/imgs/12gallery01.png",
              "/imgs/12gallery02.png",
              "/imgs/12gallery03.png",
              "/imgs/12gallery04.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery13.png"
            galleryAlt="MV JTW HBDD"
            hoverText="MV JTW HBDD"
            galleryImages={[
              "/imgs/13gallery01.png",
              "/imgs/13gallery02.png",
              "/imgs/13gallery03.png",
              "/imgs/13gallery04.png",
              "/imgs/13gallery05.png",
            ]}
          />
        </div>
        <div>
          <PhotoGalleryCard
            galleryPic="/imgs/photogallery14.png"
            galleryAlt="KKBox LIVE: Khalil JTW 2016"
            hoverText="KKBox LIVE: Khalil JTW 2016"
            galleryImages={[
              "/imgs/14gallery01.png",
              "/imgs/14gallery02.png",
              "/imgs/14gallery03.png",
              "/imgs/14gallery04.png",
            ]}
          />
        </div>
      </div>
      <ContactCard />
      
    </div>
  );
}
