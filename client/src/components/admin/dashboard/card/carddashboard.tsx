// components/ItemCard.tsx
"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Image from "next/image";
import NextJsImageLightbox from "@/components/decoracoes/lightbox/nextImageLB";

export interface ItemCardProps {
  category: string;
  title: string;
  theme: string;
  type?: string;
  images: string[];
  event?: string;
}

interface CardDashboardProps extends ItemCardProps {
  children?: React.ReactNode;
}

const CardDashboard: React.FC<CardDashboardProps> = ({ category, title, theme, type, images, children }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const absolutePath = (image: string) => `${image}`;

  return (
    <div className=" rounded-lg border w-full bg-white/75 m-2 p-6 shadow-md dark:bg-muted/25 dark:shadow-muted/10">
      <div className="relative mb-3 h-64 hover:shadow-md sm:h-72 sm:max-h-72">
        <Image
          src={absolutePath(images[0])}
          sizes="26vw"
          quality={50}
          layout="fill"
          alt={title}
          objectFit="cover"
          fill
          className="duration-[1.5s] h-64 w-full cursor-pointer rounded-lg object-cover opacity-0 shadow-sm duration-150 hover:duration-300 transition-all hover:scale-[1.02] hover:shadow-md sm:h-72 sm:max-h-72"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          onClick={openLightbox}
        />
      </div>
      <p className="mb-1 text-lg font-bold">{title}</p>
      <p className="mb-1 leading-relaxed text-gray-500">{category}</p>
      <p className="mb-1 leading-relaxed text-gray-500">{theme}</p>
      {type && <p className="mb-1 leading-relaxed text-gray-500">{type}</p>}

      {children}

      {lightboxOpen && (
        <Lightbox
          plugins={[Zoom, Thumbnails, Captions, Counter]}
          open={lightboxOpen}
          close={closeLightbox}
          render={{
            slide: NextJsImageLightbox,
            thumbnail: NextJsImageLightbox,
          }}
          counter={{
            container: {
              style: { top: "unset", left: "unset", bottom: 0, right: 0 },
            },
          }}
          slides={images.map((src, index) => ({
            src: absolutePath(src),
            alt: `${title} - Image ${index + 1}`,
            title: `${title}`,
            description: `${category}`,
          }))}
        />
      )}
    </div>
  );
};

export default CardDashboard;
