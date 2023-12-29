// Algum outro arquivo onde você importa ItemCard
import ItemCard, { ItemCardProps } from "@/components/decoracoes/card/card";
import Whatsb from "@/components/whatsappbutton/whatsb";

// Uso do ItemCard
const MyComponent = () => {
  // Array de dados de exemplo (substitua pelos seus dados reais)
  const portfolioData: ItemCardProps[] = [
    {
      category: "Aniversário",
      title: "Decoração 1",
      images: [
        "https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/44/494/325/the-beatles-monochrome-men-musician-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/124/990/570/music-the-beatles-british-music-bands-sgt-peppers-lonely-hearts-club-band-1680x1050-entertainment-music-hd-art-wallpaper-preview.jpg",
      ],
    },
    {
      category: "Casamento",
      title: "Decoração 2",
      images: [
        "https://c4.wallpaperflare.com/wallpaper/124/990/570/music-the-beatles-british-music-bands-sgt-peppers-lonely-hearts-club-band-1680x1050-entertainment-music-hd-art-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/44/494/325/the-beatles-monochrome-men-musician-wallpaper-preview.jpg",
      ],
    },

    {
      category: "Casamento",
      title: "Decoração 2",
      images: [
        "https://c4.wallpaperflare.com/wallpaper/44/494/325/the-beatles-monochrome-men-musician-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/124/990/570/music-the-beatles-british-music-bands-sgt-peppers-lonely-hearts-club-band-1680x1050-entertainment-music-hd-art-wallpaper-preview.jpg",
      ],
    },
    {
      category: "Aniversário",
      title: "Decoração 1",
      images: [
        "https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/44/494/325/the-beatles-monochrome-men-musician-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/124/990/570/music-the-beatles-british-music-bands-sgt-peppers-lonely-hearts-club-band-1680x1050-entertainment-music-hd-art-wallpaper-preview.jpg",
      ],
    },
    {
      category: "Casamento",
      title: "Decoração 2",
      images: [
        "https://c4.wallpaperflare.com/wallpaper/124/990/570/music-the-beatles-british-music-bands-sgt-peppers-lonely-hearts-club-band-1680x1050-entertainment-music-hd-art-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/44/494/325/the-beatles-monochrome-men-musician-wallpaper-preview.jpg",
      ],
    },

    {
      category: "Casamento",
      title: "Decoração 2",
      images: [
        "https://c4.wallpaperflare.com/wallpaper/44/494/325/the-beatles-monochrome-men-musician-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/124/990/570/music-the-beatles-british-music-bands-sgt-peppers-lonely-hearts-club-band-1680x1050-entertainment-music-hd-art-wallpaper-preview.jpg",
      ],
    },

    // Adicione mais itens conforme necessário
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:m-5 sm:grid-cols-2 md:grid-cols-3">
     
      {portfolioData.map((item, index) => (
        <ItemCard key={index} {...item} />
      ))}
      <Whatsb></Whatsb>
    </div>
  );
};

export default MyComponent;
