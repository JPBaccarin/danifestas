import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoP from "../../../public";

interface NavLink {
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { href: "./landingpage", text: "Home" },
  { href: "./decoracoes", text: "Mini-Table" },
  { href: "#", text: "Decorações" },
  { href: "#", text: "Últimos Eventos" },
  { href: "#", text: "Sobre" },
];

function Navbar() {
  return (
    <div>
      <nav className="border-b-4 border-amber-300 bg-white ">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between p-4">
          <Link href="#" passHref>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src={logoP}
                height={75}
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
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu </span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col items-center justify-center rounded-lg border border-gray-100 pt-2 font-semibold md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} passHref>
                    <div
                      className={`
                      block border-b-2 border-transparent px-3 
                      py-1 text-gray-900 duration-75 hover:scale-110 hover:border-amber-950 hover:text-amber-900`}
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
    </div>
  );
}

export default Navbar;
