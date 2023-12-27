import Link from 'next/link';
import React from 'react';

interface NavLink {
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { href: '#', text: 'Home' },
  { href: '#', text: 'About' },
  { href: '#', text: 'Services' },
  { href: '#', text: 'Pricing' },
  { href: '#', text: 'Contact' },
];

function Navbar() {
  return (
    <div>
      <div className='w-full h-auto font-semibold bg-red-500 flex flex-col whitespace-nowrap justify-center items-center py-2 pr-16 text-sm md:flex-row md:py-4 md:pl-12'>
        <div className='w-1/2'>Whatsapp: (19)99999-9999</div>
        <div className='w-1/2'>Email: teste@gmail.com</div>
      </div>

      <nav className="bg-white border-b-4 border-slate-800">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="#" passHref className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://scontent.fqps4-1.fna.fbcdn.net/v/t39.30808-6/292954388_407220864774042_2015158424773815475_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=UMWlzXxGPE8AX9aNC6o&_nc_ht=scontent.fqps4-1.fna&oh=00_AfBA6vlx6G1VjaRo4bYD52zpF80jMHJqSupaNPhzeFLa1g&oe=6591F255" className="h-8" alt="DaniFestas Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">DaniFestas</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu </span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-semibold flex flex-col border pt-2 border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 items-center justify-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} passHref className={`
                  block py-1 px-3 text-gray-900 
                  border-b-2 border-transparent hover:border-sky-600 hover:text-blue-400 hover:scale-110 duration-75`} > {link.text}
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
