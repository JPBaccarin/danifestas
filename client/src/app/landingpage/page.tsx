import Footer from "@/components/footer/footer";
import Gallery from "@/components/landingpage/galery/gallery";
import { CarouselHero } from "@/components/landingpage/carousel/carousel";
import Hero1 from "@/components/landingpage/hero1/hero1";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import Whatsb from "@/components/whatsappbutton/whatsb";
import Hero2 from "@/components/landingpage/hero2/hero2";

function Landingpage() {
  return (
    <div>
      <Whatsb></Whatsb>
      <div className="flex w-full justify-center py-5">
        <CarouselHero></CarouselHero>
      </div>
      <Hero1></Hero1>
      <Hero2></Hero2>
      <div className="mt-8">  
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default Landingpage;