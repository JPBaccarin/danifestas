import type { Metadata } from "next";
import { Bungee, Anton, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

const worksans = Work_Sans({ subsets: ["latin"], variable: "--workSans-font" });
const anton = Bungee({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--anton-font",
});

export const metadata: Metadata = {
  title: "Dani Festas",
  description: "Decoração de Festas Infantis - Adulto - Eventos Corporativos",
  category: "Decoração de Festas",
  keywords:
    "decoração de festas, festa temática, decoração personalizada, eventos especiais, ambiente festivo, design de eventos, decorador de festas, festas exclusivas, temas criativos, detalhes festivos, arranjos decorativos, cenografia para festas, organização de eventos, festas inesquecíveis, planejamento de festas, celebrações únicas, estilo festivo, montagem de festas, festas corporativas, decoração moderna, festas sociais, ambientação festiva, festas elegantes, decoração premium, design exclusivo, eventos sofisticados, arranjos florais, festas personalizadas, criatividade festiva, decoração de luxo, ideias para festas, temas inovadores, estilo contemporâneo, festas memoráveis, personalização de eventos, decoração vibrante, detalhes sofisticados, experiência festiva, ambientes temáticos, celebrar com estilo, decoração única, atmosfera festiva, eventos inovadores, decoração requintada, festas surpreendentes, criatividade em festas, design festivo, festas infantis, festas adultas, festas temáticas, decoração mini-table, festas corporativas exclusivas",
  robots: "index, follow",
  authors: [
    {
      name: "João Pedro Baccarin Sardinha",
      url: "https://www.instagram.com/joao_pedro_baccarin/",
    },
    {
      name: "Felipe Santos Jesus Silva",
      url: "https://www.instagram.com/felipesantosjesussilva/",
    },
    {
      name: "César Alexandre Teodoro",
      url: "https://www.instagram.com/ucesar.teodoro/",
    },
  ],

  openGraph: {
    title: "Dani Festas",
    description: "Decoração de Festas Infantis - Adulto - Eventos Corporativos",
    images: "/abelha256.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${worksans.variable} ${anton.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
