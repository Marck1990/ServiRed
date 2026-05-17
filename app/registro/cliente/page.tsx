import Link from "next/link";

export default function RegistroClientePage() {
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

      <section className="px-5 py-10">
        <div className="mx-auto max-w-md">
          <Link
            href="/registro"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
          >
            ← Volver
          </Link>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-bold text-slate-950">
              Registro de Cliente
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Completa tus datos para crear tu cuenta
            </p>

            <form className="mt-7 flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Nombre completo
                </label>

                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="juan@ejemplo.com"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Contraseña
                </label>

                <input
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Confirmar contraseña
                </label>

                <input
                  type="password"
                  placeholder="Repite tu contraseña"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <button
                type="button"
                className="mt-1 rounded-lg bg-teal-500 px-5 py-3 font-semibold text-white transition hover:bg-teal-600"
              >
                Registrarse
              </button>
            </form>
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