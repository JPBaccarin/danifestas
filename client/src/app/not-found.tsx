import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col rounded-3xl border border-border bg-card/75 py-10 sm:p-10">
        <h2 className="mb-8 text-center text-8xl">404</h2>
        <h2 className="mb-8 text-center text-4xl">Página Não Encontrada</h2>
        <p>
          Por favor, volte a nossa página principal ou veja as nossas lindas
          decorações:
        </p>
        <div className="flex flex-wrap justify-around">
          <Link
            href="/"
            className=" mt-6 rounded-full border border-amber-700/25 bg-amber-500 p-4 font-semibold text-background shadow-md duration-200 hover:scale-110 hover:shadow-xl"
          >
            Home
          </Link>
          <Link
            href="/decoracoes"
            className=" mt-6 rounded-full border border-amber-700/25 bg-amber-500 p-4 font-semibold text-background shadow-md duration-200 hover:scale-110 hover:shadow-xl"
          >
            Decorações
          </Link>
        </div>
      </div>
    </div>
  );
}
