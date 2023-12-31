import Image from "next/image";
import React from "react";

function Hero2() {
  return (
    <div className="mx-0 flex flex-col items-center justify-center font-sans sm:mx-4 sm:flex-row">
      <div className="m-5 flex w-1/3 items-center justify-center rounded-md">
        
        <Image
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt="foto danifestas"
          className="rounded-md" 
          height={828}
          width={640}  
        />
      </div>
      <div className="p-8 sm:w-2/3 sm:p-20">
        <h1 className="-translate-y-8 text-center text-3xl font-bold">
          Dani Festas
        </h1>
        <p className="text-md mt-6 text-justify font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque doloribus libero facilis, placeat provident animi! Eum, animi exercitationem ut adipisci aut, deserunt, aspernatur recusandae deleniti temporibus a eius qui.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis fuga similique accusamus, nisi repudiandae porro ducimus rem aut maxime dolores atque tempora unde. Necessitatibus itaque libero provident dolorum exercitationem dolorem.
        </p>
      </div>
    </div>
  );
}

export default Hero2;
