import Link from "next/link";
import Header from "@/components/Header";

export default function DetalleSolicitudTrabajadorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header mostrarCerrarSesion />

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

                <span className="w-fit rounded-lg bg-yellow-500 px-3 py-1 text-sm font-bold text-white">
                  Postulada
                </span>
              </div>

              <h1 className="mt-5 text-2xl font-extrabold text-slate-950">
                Pintura de living y comedor
              </h1>

              <p className="mt-4 leading-7 text-slate-600">
                El cliente necesita pintar un living-comedor completo. El
                trabajo incluye preparación de paredes, protección del espacio,
                dos manos de pintura y limpieza básica al finalizar.
              </p>

              <div className="mt-6 grid gap-4 rounded-xl bg-slate-100 p-4 text-sm text-slate-700 sm:grid-cols-3">
                <div>
                  <p className="font-semibold text-slate-950">Ubicación</p>
                  <p className="mt-1">Belgrano, CABA</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-950">
                    Presupuesto estimado
                  </p>
                  <p className="mt-1">$3200</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-950">Plazo</p>
                  <p className="mt-1">31/5/2026</p>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-bold text-slate-950">
                  Fotos del trabajo
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

            {/* propuesta del trabajador */}
            <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">
                Tu propuesta
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enviá un presupuesto y un mensaje breve para que el cliente
                pueda evaluar tu postulación.
              </p>

              <form className="mt-6 flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Presupuesto propuesto
                  </label>

                  <input
                    type="number"
                    placeholder="Ej: 3200"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Tiempo estimado
                  </label>

                  <input
                    type="text"
                    placeholder="Ej: 2 días"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Mensaje para el cliente
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Contale brevemente cómo harías el trabajo..."
                    className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="button"
                  className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Enviar propuesta
                </button>
              </form>

              <Link
                href="/trabajador/solicitudes/2/calificar"
                className="mt-3 block rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Calificar cliente
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}