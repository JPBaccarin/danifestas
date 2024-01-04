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
    src: "https://scontent.fqps5-1.fna.fbcdn.net/v/t1.6435-9/162227554_114691364019630_7110446912066465337_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=R18vPy0BzdcAX8Mw_AU&_nc_ht=scontent.fqps5-1.fna&oh=00_AfAKTka9vRX9C-jtmJvdUm3jUawygPhFdiDKd3PEcFz9GQ&oe=65BE8A5C",
    alt: "Descrição da imagem 1",
  },
  {
    id: 2,
    src: "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/257609457_261658662656232_7349557319221036203_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=NpmVXZv3n-0AX_SHIxu&_nc_ht=scontent.fqps5-1.fna&oh=00_AfAIqTRDJdh-Bk7b4olOtuHMgD5KDrSdjNqlKqQfTBhS2A&oe=659CDA50",
    alt: "Descrição da imagem 2",
  },
  {
    id: 3,
    src: "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/264127877_275847731237325_2200135354149822683_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=e5Eb1anzWXQAX_akyZt&_nc_ht=scontent.fqps5-1.fna&oh=00_AfCKSTkkJRQSbHu-RP6S69YZhiWr2rI9reZ6gRe-5us75g&oe=659B74AC",
    alt: "Descrição da imagem 3",
  },
  {
    id: 4,
    src: "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/350678639_1099529491004326_2800976448623613359_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xVHSIohqnwcAX_UFx0D&_nc_ht=scontent.fqps5-1.fna&oh=00_AfD5X5BANICFyRvnxq0h-aDhHNKUPfJUgoERQ6dpl6NpvA&oe=659B87C1",
    alt: "Descrição da imagem 4",
  },
  {
    id: 5,
    src: "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/361647624_665645388931587_8109230914002913719_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kFqahnPCwroAX_FnHnE&_nc_ht=scontent.fqps5-1.fna&oh=00_AfCSnlCMLlO4G9_1HAh--WXegv69k4U6YW9OSYrIPHBovw&oe=659C6DBC",
    alt: "Descrição da imagem 5",
  },
  {
    id: 6,
    src: "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/363772455_665722065590586_2225894316946437929_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uTi784xcN3IAX9x7TWu&_nc_ht=scontent.fqps5-1.fna&oh=00_AfD4jJ2pxn7SAhv0JBhsbpn73bBSG9CM112-BHaICO0azQ&oe=659C8E48",
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
              className="max-w-full h-96 object-cover rounded-lg"
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
