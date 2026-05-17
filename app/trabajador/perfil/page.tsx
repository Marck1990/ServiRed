import Link from "next/link";

export default function PerfilTrabajadorPage() {
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

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.4fr]">
            {/* resumen del perfil */}
            <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-orange-100 text-3xl font-bold text-orange-600">
                CR
              </div>

              <h1 className="mt-5 text-2xl font-extrabold text-slate-950">
                Carlos Rodríguez
              </h1>

              <p className="mt-2 text-slate-600">
                Técnico en pintura y reparaciones generales.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-950">Rubro:</span>{" "}
                  Pintura
                </p>

                <p>
                  <span className="font-semibold text-slate-950">Zona:</span>{" "}
                  Montevideo y alrededores
                </p>

                <p>
                  <span className="font-semibold text-slate-950">
                    Calificación:
                  </span>{" "}
                  4.8 / 5
                </p>

                <p>
                  <span className="font-semibold text-slate-950">
                    Trabajos finalizados:
                  </span>{" "}
                  24
                </p>
              </div>
            </aside>

            {/* datos editables */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">
                Información profesional
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Estos datos serán visibles para los clientes cuando revisen tu
                perfil.
              </p>

              <form className="mt-7 flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Nombre completo
                  </label>

                  <input
                    type="text"
                    defaultValue="Carlos Rodríguez"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Descripción profesional
                  </label>

                  <textarea
                    rows={5}
                    defaultValue="Trabajo en pintura interior, reparaciones generales y mantenimiento del hogar. Me enfoco en cumplir los plazos y dejar el espacio limpio al terminar."
                    className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-900">
                      Rubro principal
                    </label>

                    <select
                      defaultValue="Pintura"
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none focus:border-orange-500"
                    >
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
                      Zona de cobertura
                    </label>

                    <input
                      type="text"
                      defaultValue="Montevideo y alrededores"
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900">
                    Fotos de trabajos realizados
                  </label>

                  <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <div className="flex h-28 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
                      Trabajo 1
                    </div>

                    <div className="flex h-28 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
                      Trabajo 2
                    </div>

                    <div className="flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
                      Agregar foto
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Guardar cambios
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}