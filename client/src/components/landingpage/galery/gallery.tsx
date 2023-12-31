import Image from "next/image";
import React from "react";

interface ImageInfo {
  id: number;
  src: string;
  alt: string;
}

const images: ImageInfo[] = [
  {
    id: 1,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    alt: "Descrição da imagem 1",
  },
  {
    id: 2,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    alt: "Descrição da imagem 2",
  },
  {
    id: 3,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    alt: "Descrição da imagem 3",
  },
  {
    id: 4,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    alt: "Descrição da imagem 4",
  },
  {
    id: 5,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    alt: "Descrição da imagem 5",
  },
  {
    id: 6,
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    alt: "Descrição da imagem 6",
  },
];

function Gallery() {
  return (
    <div className="m-5">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image) => (
          <div key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              className="h-auto max-w-full rounded-lg"
              height={828}
              width={640}
              quality={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
