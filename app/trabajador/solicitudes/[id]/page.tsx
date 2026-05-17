import Link from "next/link";

export default function DetalleSolicitudTrabajadorPage() {
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
            href="/trabajador/dashboard"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
          >
            Volver al panel
          </Link>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
            {/* detalle de la solicitud */}
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="w-fit rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-800">
                  Pintura
                </span>

                <span className="w-fit rounded-lg bg-blue-500 px-3 py-1 text-sm font-bold text-white">
                  Publicada
                </span>
              </div>

              <h1 className="mt-5 text-2xl font-extrabold text-slate-950">
                Pintura de living y comedor
              </h1>

              <p className="mt-4 leading-7 text-slate-600">
                El cliente necesita pintar un living comedor completo. El
                trabajo incluye preparación de paredes, reparación de detalles
                menores y dos manos de pintura látex.
              </p>

              <div className="mt-6 grid gap-4 rounded-xl bg-slate-100 p-4 text-sm text-slate-700 sm:grid-cols-3">
                <div>
                  <p className="font-semibold text-slate-950">Ubicación</p>
                  <p className="mt-1">Belgrano, CABA</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-950">Presupuesto</p>
                  <p className="mt-1">$3200</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-950">Plazo</p>
                  <p className="mt-1">31/5/2026</p>
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

            {/* postulacion del trabajador */}
            <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">
                Postularme al trabajo
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enviá una propuesta clara para que el cliente pueda evaluarte.
              </p>

              <form className="mt-6 flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Mensaje para el cliente
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Ej: Puedo realizar el trabajo esta semana. Incluye materiales básicos y mano de obra."
                    className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Presupuesto propuesto
                  </label>

                  <input
                    type="number"
                    placeholder="Ej: 3200"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Tiempo estimado
                  </label>

                  <input
                    type="text"
                    placeholder="Ej: 2 días"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                  />
                </div>

                <button
                  type="button"
                  className="rounded-xl bg-teal-500 px-5 py-3 font-semibold text-white transition hover:bg-teal-600"
                >
                  Enviar postulación
                </button>
              </form>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}