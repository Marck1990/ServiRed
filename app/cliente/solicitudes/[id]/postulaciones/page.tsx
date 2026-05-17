import Link from "next/link";

export default function PostulacionesSolicitudPage() {
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
            href="/cliente/solicitudes/1"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
          >
            Volver a la solicitud
          </Link>

          <div className="mt-6">
            <h1 className="text-3xl font-extrabold text-slate-950">
              Postulaciones recibidas
            </h1>

            <p className="mt-2 text-slate-600">
              Revisá las propuestas enviadas por los trabajadores.
            </p>
          </div>

          {/* listado de postulaciones */}
          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
            <article className="flex min-h-105 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    Carlos Rodríguez
                  </h2>

                  <p className="mt-1 text-sm text-slate-600">
                    Pintor y reparador general
                  </p>
                </div>

                <span className="rounded-lg bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                  4.8 / 5
                </span>
              </div>

              <div className="mt-5 space-y-2 text-sm text-slate-700">
                <p>Trabajos finalizados: 24</p>
                <p>Zona: Montevideo y alrededores</p>
                <p>Presupuesto propuesto: $3200</p>
                <p>Tiempo estimado: 2 días</p>
              </div>

              <p className="mt-5 min-h-28 leading-7 text-slate-600">
                Puedo realizar el trabajo esta semana. Incluye preparación de
                paredes, dos manos de pintura y limpieza básica al finalizar.
              </p>

              <div className="mt-auto grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="rounded-xl bg-teal-500 px-5 py-3 font-semibold text-white transition hover:bg-teal-600"
                >
                  Aceptar
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Ver perfil
                </button>
              </div>
            </article>

            <article className="flex min-h-105 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    Martín Silva
                  </h2>

                  <p className="mt-1 text-sm text-slate-600">
                    Técnico en mantenimiento
                  </p>
                </div>

                <span className="rounded-lg bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                  4.6 / 5
                </span>
              </div>

              <div className="mt-5 space-y-2 text-sm text-slate-700">
                <p>Trabajos finalizados: 17</p>
                <p>Zona: Montevideo centro</p>
                <p>Presupuesto propuesto: $2900</p>
                <p>Tiempo estimado: 3 días</p>
              </div>

              <p className="mt-5 min-h-28 leading-7 text-slate-600">
                Tengo disponibilidad desde el jueves. Puedo revisar el espacio,
                confirmar materiales y ajustar el presupuesto si corresponde.
              </p>

              <div className="mt-auto grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="rounded-xl bg-teal-500 px-5 py-3 font-semibold text-white transition hover:bg-teal-600"
                >
                  Aceptar
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Ver perfil
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}