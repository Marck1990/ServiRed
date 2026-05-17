import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="flex h-16 items-center border-b border-slate-200 bg-white px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
            S
          </div>

          <span className="text-lg font-bold tracking-wide text-slate-900">
            ServiRed
          </span>
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-slate-900 px-5 py-16">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(15,23,42,0.70)),url('/hero-servired.jpg')] bg-cover bg-center" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Conectá con profesionales de confianza
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
            La plataforma que une clientes con trabajadores calificados para
            resolver servicios del hogar, comercio o edificio.
          </p>

          <Link
            href="/registro"
            className="mt-10 rounded-xl bg-teal-500 px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-teal-600"
          >
            Comenzar
          </Link>
        </div>
      </section>
    </main>
  );
}