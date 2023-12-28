import Footer from "@/components/footer/footer";
import Gallery from "@/components/galery/gallery";
import { CarouselPlugin } from "@/components/landingpage/carousel/carousel";
import Carousel2 from "@/components/landingpage/carousel/carousel2";
import Hero1 from "@/components/landingpage/hero1/hero1";
import Navbar from "@/components/navbar/navbar";
import React from "react";

function Landingpage() {
  return (
    <div>
      <div className="flex w-full justify-center pt-10">
        <CarouselPlugin></CarouselPlugin>
      </div>
      <Hero1></Hero1>
      <div className="mt-8">
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default Landingpage;
