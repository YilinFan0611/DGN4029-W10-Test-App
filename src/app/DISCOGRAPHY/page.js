"use client";
import TopNav from "../components/topNav";
import ContactCard from "../components/contactCard";
import AlbumsCard from "../components/albumsCard";

export default function DISCOGRAPHY() {
  return (
    <div className="relative h-[100vh] w-screen">
      {/* Top Navigation */}
      <TopNav />
      

      {/* Title */}
      
      {/* Page Content */}
      
      <AlbumsCard
        albumPic="/imgs/soulboy.png"
        albumAlt="soulboy Album Cover"
        title="SOULBOY"
        date="2005.11"
        type="LP"
        bgImageCode="/imgs/soulboyBG.png"
      />

      
      <AlbumsCard
        albumPic="/imgs/thislove.png"
        albumAlt="thislove Album Cover"
        title="THIS LOVE"
        date="2006.12"
        type="LP"
        bgImageCode="/imgs/thisloveBG.png"
      />

      <AlbumsCard
        albumPic="/imgs/wonderland.png"
        albumAlt="wonderland Album Cover"
        title="WONDERLAND"
        date="2007.12"
        type="LP"
        bgImageCode="/imgs/wonderlandBG.png"
      />

      <AlbumsCard
        albumPic="/imgs/orangemoon.png"
        albumAlt="orangemoon Album Cover"
        title="ORANGE MOON"
        date="2008.12"
        type="LP"
        bgImageCode="/imgs/orangemoonBG.png"
      />

      <AlbumsCard
        albumPic="/imgs/timeless.png"
        albumAlt="timeless Album Cover"
        title="TIMELESS"
        date="2009.08"
        type="LP"
        bgImageCode="/imgs/timelessBG.png"
      />

      <AlbumsCard
        albumPic="/imgs/15.png"
        albumAlt="15 Album Cover"
        title="15"
        date="2011.04"
        type="LP"
        bgImageCode="/imgs/15BG.png"
      />

      <AlbumsCard
        albumPic="/imgs/backtowonderland.png"
        albumAlt="backtowonderland Album Cover"
        title="BACK TO WONDERLAND"
        date="2012.11"
        type="LP"
        bgImageCode="/imgs/backtowonderlandBG.png"
      />

      <AlbumsCard
        albumPic="/imgs/dangerousWorld.png"
        albumAlt="dangerousWorld Album Cover"
        title="DANGEROUS WORLD"
        date="2014.04"
        type="LP"
        bgImageCode="/imgs/dangerousWorldBG.png"
      />

      <AlbumsCard
        albumPic="/imgs/JTW.png"
        albumAlt="JTW Album Cover"
        title="JTW"
        date="2016.09"
        type="LP"
        bgImageCode="/imgs/JTWBG.png"
      />

      <AlbumsCard
        albumPic="/imgs/thedreamer.png"
        albumAlt="thedreamer Album Cover"
        title="THE DREAMER"
        date="2024.10"
        type="LP"
        bgImageCode="/imgs/thedreamerBG.png"
      />
      <ContactCard />
    </div>
    
  );
}
