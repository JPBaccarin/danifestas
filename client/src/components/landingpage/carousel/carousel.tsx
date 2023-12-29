'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  // Array de URLs das imagens
  const imageUrls = [
    "https://cbgd.ask.fm/wallpapers2/078/211/546/624/original/file.jpg",
    "https://i.pinimg.com/originals/43/b2/e2/43b2e2c63d3a44b85d8d6e94f74a0e51.jpg",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.pinimg.com/originals/43/b2/e2/43b2e2c63d3a44b85d8d6e94f74a0e51.jpg",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
    "https://i.iheart.com/v3/re/assets.getty/5f91ebb085fe21e085ff5d42",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className=""
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageUrls.map((imageUrl, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Card className="border border-none rounded-none m-2 w-full">
                <img src={imageUrl} alt="" />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
