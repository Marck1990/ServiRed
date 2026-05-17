import Link from "next/link";

export default function RegistroPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="flex h-16 items-center border-b border-slate-200 bg-white px-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
            S
          </div>

          <span className="text-lg font-bold tracking-wide text-slate-900">
            ServiRed
          </span>
        </Link>
      </header>

      <section className="px-5 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Únete a ServiRed
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Elige el tipo de cuenta que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="flex min-h-[520px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-500">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <h2 className="mt-7 text-2xl font-bold text-slate-950">
                Soy Cliente
              </h2>

              <p className="mt-3 min-h-[84px] text-base leading-7 text-slate-600">
                Necesito contratar profesionales para trabajos en mi hogar o
                negocio.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-800">
                <li className="flex gap-2">
                  <span className="text-teal-500">✓</span>
                  Publica solicitudes de trabajo
                </li>

                <li className="flex gap-2">
                  <span className="text-teal-500">✓</span>
                  Recibe postulaciones de profesionales
                </li>

                <li className="flex gap-2">
                  <span className="text-teal-500">✓</span>
                  Elige al mejor candidato
                </li>
              </ul>

              <Link
                href="/registro/cliente"
                className="mt-auto block rounded-xl bg-teal-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-teal-600"
              >
                Registrarse como cliente
              </Link>
            </article>

            <article className="flex min-h-[520px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="7" width="18" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M3 13h18" />
                </svg>
              </div>

              <h2 className="mt-7 text-2xl font-bold text-slate-950">
                Soy Trabajador
              </h2>

              <p className="mt-3 min-h-[84px] text-base leading-7 text-slate-600">
                Ofrezco mis servicios profesionales y busco nuevos clientes.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-800">
                <li className="flex gap-2">
                  <span className="text-orange-500">✓</span>
                  Encuentra trabajos disponibles
                </li>

                <li className="flex gap-2">
                  <span className="text-orange-500">✓</span>
                  Postúlate a proyectos que te interesen
                </li>

                <li className="flex gap-2">
                  <span className="text-orange-500">✓</span>
                  Construye tu reputación
                </li>
              </ul>

              <Link
                href="/registro/trabajador"
                className="mt-auto block rounded-xl bg-orange-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Registrarse como trabajador
              </Link>
            </article>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-100 px-5 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500 text-sm font-bold text-white">
              S
            </div>

            <span className="font-bold text-slate-600">ServiRed</span>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:gap-8">
            <a href="#">Sobre nosotros</a>
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <a href="#">Contacto</a>
          </nav>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          © 2026 ServiRed. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}