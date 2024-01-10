"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importando usePathname
import React, { useState } from "react";
import Image from "next/image";
import { abelhaSvg, logoP } from "../../../public";

interface NavLink {
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { href: "/landingpage", text: "Home" },
  { href: "/decoracoes", text: "Decorações" },
  { href: "/sobre", text: "Sobre" },
];

function Navbar() {
  const pathname = usePathname(); // Usando usePathname
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-[#E6C661] bg-white shadow-md shadow-primary/5 dark:bg-primary-foreground">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between p-4">
        <Link href="#" passHref>
          <div className="hidden
          md:absolute md:top-0 md:flex md:h-32 md:w-52 md:items-center md:justify-center md:space-x-3 md:rounded-b-full md:bg-[#94AAD5] md:p-4 md:px-8 md:rtl:space-x-reverse">
            <Image
              src={abelhaSvg}
              width={100}
              height={100}
              className="absolute top-1 rotate-12 rounded-lg"
              alt="DaniFestas e eventos"
            />
          </div>
        </Link>
        <span className="mr-8 whitespace-nowrap text-2xl font-semibold text-slate-700 dark:text-[#E39CC1]">
          DaniFestas e Eventos
        </span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-label="botão da navbar"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col items-center justify-center md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} aria-label={link.text}>
                  <div
                    className={`
                      block border-b-2 border-transparent px-3 py-1 font-semibold text-[#94AAD5] duration-75 hover:scale-110 hover:border-b-2 hover:border-[#E39CC1] hover:text-[#E39CC1]
                      ${
                        pathname.startsWith(link.href)
                          ? "border-b-2 border-[#E39CC1] text-[#E39CC1]"
                          : "border-transparent"
                      }
                    `}
                  >
                    {link.text}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
