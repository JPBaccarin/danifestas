import Image from "next/image";
import Link from "next/link";
import React from "react";
import { colmeia1, colmeia2, colmeia3 } from "../../../public";

function page() {
  return (
    <div>
      <div
        className="min-w-screen flex min-h-[75vh] flex-col items-center justify-center bg-fixed shadow-sm"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/originals/5b/59/7d/5b597da1523e27d77931dca55feddb40.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-2xl font-bold text-white md:text-5xl">
          Conheça nossa história
        </h1>
      </div>
      <div className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-card bg-fixed ">
        <span className="my-4 px-12 text-justify text-lg font-semibold md:-translate-y-[6.5rem]">
          Na DaniFestas, acreditamos que cada festa é única, assim como cada
          pessoa que a celebra. Seja para comemorar os primeiros passos de uma
          criança, o aniversário de um jovem ou uma festa corporativa, estamos
          aqui para tornar cada ocasião verdadeiramente especial. Nossas festas
          temáticas infantis são repletas de magia e imaginação, transportando
          os pequenos para mundos mágicos onde seus sonhos se tornam realidade.
          Com personagens adoráveis, decorações encantadoras e atividades
          divertidas, garantimos que cada festa seja uma aventura única. Para os
          adultos, oferecemos festas sofisticadas e cheias de estilo, adaptadas
          aos gostos e personalidade de cada cliente. Seja uma festa elegante,
          uma comemoração descontraída ou um evento corporativo, a DaniFestas
          cuida de cada detalhe para que você possa aproveitar ao máximo cada
          momento. Nosso compromisso vai além da organização impecável. Queremos
          transmitir não apenas uma festa, mas sim um sentimento de alegria,
          união e gratidão. Afinal, acreditamos que cada celebração é uma
          oportunidade de fortalecer laços, criar memórias preciosas e celebrar
          a vida. Junte-se a nós na jornada de transformar seus eventos em
          experiências extraordinárias. Na DaniFestas, cada celebração é única,
          assim como você. Deixe-nos fazer parte dos seus momentos especiais e
          transformar seus sonhos em realidade.
        </span>
        <Link
          href="/decoracoes"
          className=" mb-4 flex w-fit items-center justify-center rounded-full border border-[#E6C661]/25 bg-[#F3CB3F] p-4 text-center font-semibold text-background shadow-md duration-200 hover:scale-110 hover:shadow-xl"
        >
          Ver decorações{" "}
          <span className="pl-3 duration-300 hover:scale-105">❱</span>
        </Link>
        <div className="hidden md:absolute md:right-8 md:flex md:translate-y-40">
          <Image src={colmeia2} height={120} alt="" />
        </div>
        <div className="hidden md:absolute md:left-8 md:flex md:translate-y-40">
          <Image src={colmeia1} height={120} alt="" />
        </div>
      </div>
    </div>
  );
}

export default page;
