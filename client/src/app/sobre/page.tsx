import Filter2 from "@/components/decoracoes/filter/filter2";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <div className="min-w-screen flex min-h-screen items-center justify-center bg-fixed flex-col">
        <h1 className="text-5xl font-bold">Conheça nossa história</h1>
      </div>
      <div className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-blue-100 bg-fixed dark:bg-slate-800">
        <span className="text-lg p-20 text-justify font-semibold">
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
            className=" mt-6 rounded-full border border-amber-700/25 bg-amber-500 p-4 font-semibold text-background shadow-md duration-200 hover:scale-110 hover:shadow-xl"
          >
            Decorações
          </Link>
      </div>
    </div>
  );
}

export default page;
