import Link from "next/link";

export default function NuevaSolicitudPage() {
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
        <div className="mx-auto max-w-2xl">
          <Link
            href="/cliente/dashboard"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
          >
            Volver al panel
          </Link>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-extrabold text-slate-950">
              Publicar nueva solicitud
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Completá los datos del trabajo para que los trabajadores puedan
              postularse.
            </p>

            {/* formulario de solicitud */}
            <form className="mt-7 flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Categoría
                </label>

                <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none focus:border-teal-500">
                  <option>Selecciona una categoría</option>
                  <option>Sanitaria</option>
                  <option>Electricidad</option>
                  <option>Albañilería</option>
                  <option>Pintura</option>
                  <option>Jardinería</option>
                  <option>Carpintería</option>
                  <option>Limpieza</option>
                  <option>Mudanzas</option>
                  <option>Reparación general</option>
                  <option>Cámaras y seguridad</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Título
                </label>

                <input
                  type="text"
                  placeholder="Ej: Instalación de tomas en cocina"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Descripción
                </label>

                <textarea
                  placeholder="Describí el trabajo que necesitás..."
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Ubicación
                </label>

                <input
                  type="text"
                  placeholder="Ej: Montevideo, Cordón"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Presupuesto estimado
                  </label>

                  <input
                    type="number"
                    placeholder="Ej: 2500"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Fecha límite
                  </label>

                  <input
                    type="date"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Fotos del problema
                </label>

                <div className="mt-2 flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
                  <p className="font-medium text-slate-700">
                    Haz clic para subir fotos
                  </p>

                  <p className="mt-1">
                    Podrás agregar imágenes del problema más adelante.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-2 rounded-lg bg-teal-500 px-5 py-3 font-semibold text-white transition hover:bg-teal-600"
              >
                Publicar solicitud
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}