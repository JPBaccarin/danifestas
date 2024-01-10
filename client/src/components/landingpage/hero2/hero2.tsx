import Image from "next/image";
import React from "react";
import Link from "next/link";

function Hero2() {
  return (
    <div className="mx-0 flex flex-col items-center justify-center font-sans sm:mx-4 md:flex-row">
      <div className=" m-5 md:mt-2 flex md:w-1/3 items-center justify-center rounded-md">
        <div className="md:w-[400px] md:h-[400px] md:absolute md:bg-[#94AAD5] md:-translate-x-7 md:-translate-y-6 md:-z-10 md:rounded-md md:flex hidden"></div>
        <Image
          src="https://scontent.fqps5-1.fna.fbcdn.net/v/t1.6435-9/178955024_127976949357738_2692323452988227875_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=5F1HTrNeK00AX9P71_4&_nc_ht=scontent.fqps5-1.fna&oh=00_AfDLLJaUa-qaXQ2u3k4msJZ3hNx4z7N0wFUVpOt70XYl9g&oe=65BE7BC7"
          alt="foto danifestas"
          className="rounded-md h-full"
          height={828}
          width={640}
        />
      </div>
      <div className="p-8 sm:w-2/3 sm:p-20 flex flex-col justify-center items-center">
        <h1 className="-translate-y-8 text-center text-5xl font-bold">
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
            className=" mt-6 rounded-full text-center border w-fit flex justify-center items-center border-[#E6C661]/25 bg-[#F3CB3F] p-4 font-semibold text-background shadow-md duration-200 hover:scale-110 hover:shadow-xl"
          >
            Ver decorações <span className="pl-3 hover:scale-105 duration-300">❱</span>
          </Link>
        </div>
        
      </div>
    
    </div>
  );
}

export default Hero2;
