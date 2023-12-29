"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importando usePathname
import React, { useState } from "react";
import Image from "next/image";
import { logoP } from "../../../public";

interface NavLink {
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { href: "/landingpage", text: "Home" },
  { href: "/decoracoes", text: "Mini-Table" },
  { href: "/decoracoes", text: "Decorações" },
  { href: "#", text: "Últimos Eventos" },
  { href: "/sobre", text: "Sobre" },
];

function Navbar() {
  const pathname = usePathname(); // Usando usePathname
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 border-b-4 border-amber-300 bg-white shadow-md shadow-primary/5 dark:bg-primary-foreground">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between p-4">
        <Link href="#" passHref>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src={logoP}
              height={40}
              width={0}
              className="max-w-20 rounded-lg"
              alt="asd"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              DaniFestas
            </span>
          </div>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
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
                <Link href={link.href} passHref>
                  <div
                    className={`
                      block px-3 py-1 text-gray-900 duration-75 hover:scale-110 hover:border-b-2 hover:border-amber-950 hover:text-amber-900 dark:border-amber-600  dark:text-white hover:dark:border-amber-600 hover:dark:text-amber-500
                      ${
                        pathname.startsWith(link.href)
                          ? "border-b-2 border-amber-950 text-amber-900 dark:border-amber-600 dark:text-amber-500"
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
