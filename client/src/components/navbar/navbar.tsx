import Link from "next/link";
import React from "react";

interface NavLink {
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { href: "#", text: "Home" },
  { href: "#", text: "About" },
  { href: "#", text: "Services" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Contact" },
];

function Navbar() {
  return (
    <div>
      <nav className="border-b-4 border-slate-800 bg-white">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between p-4">
          <Link href="#" passHref>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://scontent.fqps4-1.fna.fbcdn.net/v/t39.30808-6/292954388_407220864774042_2015158424773815475_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=UMWlzXxGPE8AX9aNC6o&_nc_ht=scontent.fqps4-1.fna&oh=00_AfBA6vlx6G1VjaRo4bYD52zpF80jMHJqSupaNPhzeFLa1g&oe=6591F255"
                className="h-8"
                alt="DaniFestas Logo"
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
                  <Link
                    href={link.href}
                    passHref
                  >
                    <div className={`
                      block border-b-2 border-transparent px-3 
                      py-1 text-gray-900 duration-75 hover:scale-110 hover:border-sky-600 hover:text-blue-400`}
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
