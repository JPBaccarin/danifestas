import React from "react";
import { abelhaSvg, colmeia3 } from "../../../../public";

import Image from "next/image";

function Hero1() {
  return (
    <div className="hidden md:absolute md:left-1/4 md:right-10 md:flex md:-translate-y-6">
        <Image
          src={abelhaSvg}
          width={200}
          height={200}
          className="rotate-45"
          alt=""
        />    
      <div className="hidden md:absolute md:-right-32 md:flex md:translate-y-8">
        <Image src={colmeia3} height={100} alt="" />
      </div>
    </div>
  );
}

export default Hero1;
