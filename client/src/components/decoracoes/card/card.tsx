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

export interface ItemCardProps {
  category: string;
  title: string;
  images: string[];
}

const ItemCard: React.FC<ItemCardProps> = ({ category, title, images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="mt-2 rounded-lg border p-4 dark:bg-muted/25 dark:shadow-muted/10 bg-white/75  shadow-md ">
      {/* Imagem principal clicável */}
      <img
        src={images[0]}
        alt={title}
        className="mb-2 h-64 w-full cursor-pointer rounded-lg object-cover"
        onClick={openLightbox}
      />

      <p className="mb-1 text-lg font-bold">{title}</p>
      <p className="mb-1 leading-relaxed text-gray-500">{category}</p>

      {lightboxOpen && (
        <Lightbox
          plugins={[Zoom, Thumbnails, Captions, Counter]}
          open={lightboxOpen}
          close={closeLightbox}
          counter={{ container: { style: { top: "unset",  left: "unset", bottom: 0, right:0 } } }}
          slides={images.map((src, index) => ({
            src,
            alt: `${title} - Image ${index + 1}`,
            title: `${title}`,
            description: `${category}`
          }))}
        />
      )}
    </div>
  );
};

export default ItemCard;
