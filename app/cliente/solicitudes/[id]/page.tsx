import Link from "next/link";

export default function DetalleSolicitudPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* encabezado principal */}
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
            S
          </div>

          <span className="text-lg font-bold tracking-wide text-slate-900">
            ServiRed
          </span>
        </Link>

        <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">
          Cerrar sesión
        </button>
      </header>

      {/* contenido principal */}
      <section className="px-5 py-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/cliente/dashboard"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
          >
            Volver al panel
          </Link>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
            {/* detalle de la solicitud */}
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="w-fit rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-800">
                  Electricidad
                </span>

                <span className="w-fit rounded-lg bg-blue-500 px-3 py-1 text-sm font-bold text-white">
                  Publicada
                </span>
              </div>

              <h1 className="mt-5 text-2xl font-extrabold text-slate-950">
                Instalación de tomas y luces en cocina
              </h1>

              <p className="mt-4 leading-7 text-slate-600">
                Necesito instalar 4 tomas nuevas y 3 puntos de luz en una cocina
                remodelada. El trabajo incluye cableado, cajas, conexión y
                revisión final para dejar todo funcionando correctamente.
              </p>

              <div className="mt-6 grid gap-4 rounded-xl bg-slate-100 p-4 text-sm text-slate-700 sm:grid-cols-3">
                <div>
                  <p className="font-semibold text-slate-950">Ubicación</p>
                  <p className="mt-1">Palermo, CABA</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-950">Presupuesto</p>
                  <p className="mt-1">$2450</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-950">Plazo</p>
                  <p className="mt-1">24/5/2026</p>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-bold text-slate-950">
                  Fotos del problema
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="flex h-28 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
                    Foto 1
                  </div>

                  <div className="flex h-28 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
                    Foto 2
                  </div>

                  <div className="flex h-28 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
                    Foto 3
                  </div>
                </div>
              </div>
            </article>

            {/* resumen de la solicitud */}
            <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">Resumen</h2>

              <div className="mt-5 space-y-4 text-sm text-slate-700">
                <div className="flex justify-between gap-4">
                  <span>Postulaciones</span>
                  <span className="font-semibold text-slate-950">3</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Estado</span>
                  <span className="font-semibold text-slate-950">Publicada</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Fecha de publicación</span>
                  <span className="font-semibold text-slate-950">20/5/2026</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-teal-500 px-5 py-3 font-semibold text-white transition hover:bg-teal-600">
                Ver postulaciones
              </button>

              <button className="mt-3 w-full rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50">
                Cancelar solicitud
              </button>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}