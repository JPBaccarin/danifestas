// components/Footer.tsx
import { Facebook, Instagram, UserCog } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../ui/theme-toggler";
import { logoP } from "../../../public";

import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="bottom-1 w-full bg-gray-900 py-6 text-white  ">
    <div className="container mx-auto flex flex-wrap justify-center md:justify-between ">
      <div className="flex flex-col items-center justify-center ">
        <Image
          src={logoP}
          height={150}
          width={0}
          className="max-h-32 rounded-lg"
          alt="asd"
        />

        <div className="flex w-full items-center justify-between pt-2 text-gray-300">
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5519993794432&text&type=phone_number&app_absent=0"
            className=" text-green-700 shadow-sm duration-300 hover:text-green-500 "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              version="1.1"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path>
              <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path>
            </svg>
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/danifestasleme/"
            className=" text-blue-700 shadow-sm  duration-300 hover:text-blue-500 "
          >
            <Facebook size={24} />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/danifestasleme/"
            className="  text-pink-700 shadow-sm  duration-300 hover:text-pink-500 "
          >
            <Instagram size={24} />
          </Link>
        </div>

        {/*  */}
      </div>
      <div className="mt-6 flex w-full sm:justify-center md:mt-0 md:w-1/4 lg:w-1/5">
        <div>
          <h4 className="mb-2 scroll-m-20 border-b border-gray-300 text-lg font-semibold tracking-tight first:mt-0">
            Links Rápidos
          </h4>
          <ul className=" text-gray-300/80">
            <li>
              <Link
                className="leading-5 duration-300 hover:text-white [&:not(:first-child)]:mt-6"
                href=""
              >
                {" "}
                Início
              </Link>
            </li>
            <li>
              <Link
                className="leading-5 duration-300 hover:text-white [&:not(:first-child)]:mt-6"
                href=""
              >
                {" "}
                Eventos
              </Link>
            </li>
            <li>
              <Link
                className="leading-5 duration-300 hover:text-white [&:not(:first-child)]:mt-6"
                href=""
              >
                {" "}
                Serviços
              </Link>
            </li>
            <li>
              <Link
                className="leading-5 duration-300 hover:text-white [&:not(:first-child)]:mt-6"
                href=""
              >
                {" "}
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-/3 mt-6 flex w-full sm:justify-center md:mt-0 lg:w-1/4">
        <div>
          <h4 className="mb-2 scroll-m-20 border-b border-gray-300/80 text-lg font-semibold tracking-tight first:mt-0">
            Entre em Contato
          </h4>
          <ul className=" text-gray-300/80">
            <li>Email: danielafraimundo@hotmail.com</li>
            <li>Telefone: (19) 99379-4432</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 flex w-full sm:justify-center md:mt-0 md:w-1/4 lg:w-1/5">
        <div>
          <h4 className="mb-2 scroll-m-20 border-b border-gray-300/80 text-lg font-semibold tracking-tight first:mt-0">
            Login e tema
          </h4>
          <div className=" flex flex-row items-center justify-center gap-5">
            <Link
              href="/admin/login"
              className="rounded-md border border-border p-2 duration-100 hover:bg-gray-800"
            >
              <UserCog></UserCog>
            </Link>

            <ModeToggle></ModeToggle>
          </div>
        </div>
      </div>
    </div>
    <p className="mt-4 text-center text-xs text-gray-300/60">
      {" "}
      © {new Date().getFullYear()} Todos os direitos reservados.
    </p>
  </footer>
);

export default Footer;
