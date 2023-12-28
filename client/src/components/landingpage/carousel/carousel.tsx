"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const imageMap: string[] = [
  "https://scontent.fqps4-1.fna.fbcdn.net/v/t39.30808-6/410240307_18371821006077575_2374142010490111496_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=wmk5lJ14YmIAX-D6w1E&_nc_ht=scontent.fqps4-1.fna&oh=00_AfBp7DoD46MeW40cVWiUc0dknbX0awgSYQ7H5rSLYUxrMQ&oe=65922782",
  "https://scontent.fqps4-1.fna.fbcdn.net/v/t39.30808-6/394748894_717998433696282_2304312575070661511_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=gCJ99iO2zsEAX894t79&_nc_ht=scontent.fqps4-1.fna&oh=00_AfCBCLflcoWPRqKcVtkdg_FUj3kokULlgglRs9QfWNtu1A&oe=65923F93",
  "https://scontent.fqps4-1.fna.fbcdn.net/v/t39.30808-6/381167263_2245046865681070_6657313779375446171_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=nCU8TVChnScAX9vb8W5&_nc_ht=scontent.fqps4-1.fna&oh=00_AfBm3IfT_JG3TI2TlVgtbeW4vr8QL9bog6IcCi-JcRB0Zw&oe=6592010D",
  "https://scontent.fqps4-1.fna.fbcdn.net/v/t39.30808-6/381034876_2245042472348176_2259788658618935663_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6aFk0k76QnEAX-xsX2A&_nc_ht=scontent.fqps4-1.fna&oh=00_AfApVVbH2bZPqjpcqUMm989JN0q5hD4usbP7SEYS93oO0g&oe=6592035D",
  // Adicione mais URLs conforme necessário
];

export function CarouselHero() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-md">
        {imageMap.map((imageUrl, index) => (
          <CarouselItem key={index} className="p-1">
            <Card className="m-0 ">
            <CardContent className="flex items-center justify-center p-6">
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="mt-2  max-h-[75vh] w-full rounded-md "
                />
                {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
