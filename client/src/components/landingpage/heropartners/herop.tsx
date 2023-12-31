"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const HeroP: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (
      scroller &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      addAnimation(scroller);
    }
  }, []);

  const addAnimation = (scroller: HTMLDivElement) => {
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner?.children || []);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner?.appendChild(duplicatedItem);
    });
  };

  const imageUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Coca-Cola_logo_white.png",
    "https://logospng.org/wp-content/uploads/mariadb.png",
    "https://logospng.org/wp-content/uploads/mongodb.png",
    "https://logospng.org/wp-content/uploads/kaercher.png",
    "https://logospng.org/wp-content/uploads/vite-js-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Coca-Cola_logo_white.png",
  ];

  return (
    <div
      className="scroller mx-8  my-4 border bg-amber-500 p-2 "
      ref={scrollerRef}
      data-direction="right"
      data-speed="slow"
    >
      <h5 className="text my-2 mb-4 text-center text-3xl font-bold text-foreground">
        Nossos parceiros:
      </h5>
      <div className="scroller__inner  ">
        {imageUrls.map((imageUrl, index) => (
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            key={index}
            quality={100}
            height={128}
            width={250}
            className=" "
          />
        ))}
      </div>
    </div>
  );
};

export default HeroP;
