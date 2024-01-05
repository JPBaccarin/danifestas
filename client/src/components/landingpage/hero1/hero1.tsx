import React from "react";
import { abelhaSvg } from "../../../../public";

import Image from "next/image";

function Hero1() {
  return (
    <div className="absolute bottom-10 left-1/2 right-10 translate-y-16 transition-all duration-1000 active:rotate-[360deg]  sm:left-1/4">
      <Image
        src={abelhaSvg}
        width={0}
        height={250}
        className="rotate-45  "
        alt=""
      />
    </div>
  );
}

export default Hero1;
