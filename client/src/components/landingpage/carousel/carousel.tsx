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
    "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/363357746_666183078877818_6648685997636692564_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=C7jNHJaT3jEAX9nbDQQ&_nc_ht=scontent.fqps5-1.fna&oh=00_AfBdeo7cxozX2GPzS7G5Bm_h2epMhTrY7jeOiFVskIIxDA&oe=659C845A",
    "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/364790565_669027755260017_7103325141659467946_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LxEUIxUQSqkAX_-TTCA&_nc_ht=scontent.fqps5-1.fna&oh=00_AfD7iw20jd_nUTkajuZq4JJCaAd9KVr01JqVsCfDOAAO2w&oe=659B2D47",
    "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/364800967_669031601926299_8558897484228355685_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XW8hj_DPdSUAX-E3zcb&_nc_ht=scontent.fqps5-1.fna&oh=00_AfCHc2iDOMTpUyxttzjrjaWrLp9tcKSth65Q-dlpADiaxA&oe=659BAB09",
    "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/365142246_669033768592749_8710759888198230217_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=OOr00QxkMcAAX_vZK4l&_nc_ht=scontent.fqps5-1.fna&oh=00_AfByxh96o8CC17ebiD4yK0alsfNUjpA4R2isosSjsosv7A&oe=659C530C",
    "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/364701636_669038518592274_9024551298772866999_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=IgPj3i7JBeEAX8gzBgo&_nc_ht=scontent.fqps5-1.fna&oh=00_AfCB5wrB_tcDNzdrxI6URKBiFvuj_SgsUscGfoDh6Nk7eg&oe=659C5388",
    "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/385780789_18359407609077575_1851999018634769922_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UHjUInkWPPEAX8YmIlW&_nc_ht=scontent.fqps5-1.fna&oh=00_AfAWDRt1wAtnftuB9s8eF3JGRg2w3RD4G9optZnNnJnQ-A&oe=659BE5BD",
    "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/361659221_665738532255606_1836467138311262540_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=VUa4wwREdbQAX9gU1to&_nc_ht=scontent.fqps5-1.fna&oh=00_AfAi3K47-Uiy0KPUBT5fMrNsgBV06Brwli5wXWD0PXN31A&oe=659BD15C",
    "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/293486008_407689934727135_2781205482422412636_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=awvmoNxvHbgAX9KiMvl&_nc_ht=scontent.fqps5-1.fna&oh=00_AfANruSDBq584N9N4HcZ9FVvF531vAEI8bg5oqIcEclTRQ&oe=659C0AAB",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className=" bg-[#E6C661]"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageUrls.map((imageUrl, index) => (
          <CarouselItem
            key={index}
            className="px-1  shadow-none  sm:basis-1/2 sm:px-4"
          >
            <div className=" relative flex justify-center   rounded-lg">
              <Card className="m-2 flex h-96 max-h-96 w-full items-center justify-center rounded-lg border border-none bg-transparent p-2 shadow-none ">
                <Image
                  src={imageUrl}
                  sizes="43vw"
                  quality={100}
                  alt="imagem do carrossel"
                  fill
                  className="duration-[1.5s] m-2  h-full rounded-lg  object-cover pb-4 sm:pb-0 opacity-0 transition-opacity sm:h-96 sm:max-h-96 sm:object-cover"
                  onLoad={(event) => {
                    const image = event.target as HTMLImageElement;
                    image.classList.remove("opacity-0");
                  }}
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
