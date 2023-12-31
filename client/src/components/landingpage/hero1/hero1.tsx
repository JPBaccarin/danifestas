import React from "react";
import { abelhaSvg } from "../../../../public";

import Image from "next/image";

function Hero1() {
  return (
    <div className="flex h-32 w-full py-5">
      <div className="absolute left-1/2 sm:left-1/4">
        <Image
          src={abelhaSvg}
          width={0}
          height={250}
          className="rotate-45"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero1;
