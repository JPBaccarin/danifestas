"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  // Array de URLs das imagens
  const imageUrls = [
    "https://i.pinimg.com/originals/72/06/62/720662a5771924de2681162b8b34759c.jpg",
    "http://sysdecorators.com/Gallery/Entrance12.jpg",
    "https://www.designsmag.com/wp-content/uploads/2016/11/indian-wedding-flower-decoration-on-decorations-with-indian-stage-wedding-mandap-and-stage-pinterest-18.jpg",
    "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/ce/a5/82/cea582bb-5048-8d7d-3d9d-54a6ced99386/689690725464_cover.jpg/1200x1200bf-60.jpg",
    "https://www.xn---24-eddgg6a2bdavr.xn--p1ai/static/mediafiles/images/1639715998,2763.jpeg",
    "https://i1.sndcdn.com/artworks-oJKlhULL5BcCqOAM-lJfGSg-t500x500.jpg",
    "https://i.pinimg.com/originals/5a/50/bf/5a50bf0c45d1b636ab8fe3ff66ca4975.png",
    "https://i.pinimg.com/736x/1a/de/32/1ade329a9ee1d0865b5c12cfd5833946.jpg",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className=" bg-card "
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageUrls.map((imageUrl, index) => (
          <CarouselItem
            key={index}
            className="bg-card shadow-none sm:basis-1/2"
          >
            <div className=" relative flex justify-center *:rounded-lg">
              <Card className="m-2 flex h-96 max-h-96 w-full items-center justify-center rounded-lg border border-none bg-card p-2 shadow-none ">
                <Image
                  src={imageUrl}
                  sizes="43vw"
                  quality={100}
                  layout="fill"
                  alt="imagem do carrossel"
                  objectFit="contain"
                  fill
                  className="duration-[1.5s] m-2 h-full rounded-lg opacity-0 transition-opacity sm:h-96 sm:max-h-96"
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
