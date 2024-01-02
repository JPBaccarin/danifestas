import Image from "next/image";
import React from "react";
import Link from "next/link";

function Hero2() {
  return (
    <div className="mx-0 flex flex-col items-center justify-center font-sans sm:mx-4 sm:flex-row">
      <div className="m-5 flex w-1/3 items-center justify-center rounded-md">
        <Image
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt="foto danifestas"
          className="rounded-md"
          height={828}
          width={640}
        />
      </div>
      <div className="p-8 sm:w-2/3 sm:p-20 flex flex-col justify-center items-center">
        <h1 className="-translate-y-8 text-center text-3xl font-bold">
          Dani Festas
        </h1>
        <p className="text-lg mt-6 text-justify font-semibold">
          Bem-vindo à DaniFestas, onde transformamos sonhos em celebrações
          inesquecíveis! 🎉 Seja para  <span className="font-bold">festas temáticas infantis, eventos adultos
          ou empresariais</span>, estamos aqui para tornar cada momento extraordinário.
          Descubra o encanto das nossas festas, repletas de magia e detalhes
          feitos sob medida para você. Na DaniFestas, não apenas organizamos
          eventos; criamos experiências memoráveis que refletem sua
          individualidade. Deixe-nos cuidar dos detalhes, enquanto você
          aproveita cada instante de alegria e celebração. Sua festa perfeita
          começa aqui, na DaniFestas. Vamos transformar seu evento em uma
          experiência única. ✨🎈
        </p>
        <div>
          <Link
            href="/decoracoes"
            className=" mt-6 rounded-full text-center border w-fit flex justify-center items-center border-amber-700/25 bg-amber-500 p-4 font-semibold text-background shadow-md duration-200 hover:scale-110 hover:shadow-xl"
          >
            Ver decorações <span className="pl-3 hover:scale-110 duration-75">❱</span>
          </Link>
        </div>
        
      </div>
    
    </div>
  );
}

export default Hero2;
