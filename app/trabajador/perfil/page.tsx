import Link from "next/link";
import Header from "@/components/Header";

export default function PerfilTrabajadorPage() {
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

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            {/* resumen del perfil */}
            <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-3xl font-extrabold text-white">
                  C
                </div>

                <h1 className="mt-5 text-2xl font-extrabold text-slate-950">
                  Carlos Rodríguez
                </h1>

                <p className="mt-1 text-sm text-slate-600">
                  Pintor y reparador general
                </p>

                <span className="mt-4 rounded-lg bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
                  4.8 / 5
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex justify-between gap-4 border-t border-slate-200 pt-4">
                  <span>Trabajos finalizados</span>
                  <span className="font-semibold text-slate-950">24</span>
                </div>

                <div className="flex justify-between gap-4 border-t border-slate-200 pt-4">
                  <span>Postulaciones activas</span>
                  <span className="font-semibold text-slate-950">3</span>
                </div>

                <div className="flex justify-between gap-4 border-t border-slate-200 pt-4">
                  <span>Zona de trabajo</span>
                  <span className="font-semibold text-slate-950">
                    Montevideo
                  </span>
                </div>

                <div className="flex justify-between gap-4 border-t border-slate-200 pt-4">
                  <span>Miembro desde</span>
                  <span className="font-semibold text-slate-950">2026</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Editar perfil
              </button>
            </aside>

            {/* informacion principal */}
            <section className="space-y-6">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">
                  Información profesional
                </h2>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Rubros principales
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      Pintura, reparaciones generales, mantenimiento del hogar.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Experiencia
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      Más de 5 años realizando trabajos particulares y
                      mantenimiento en viviendas.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Disponibilidad
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      Lunes a sábado, horario a coordinar.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Forma de trabajo
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      Presupuesto previo, coordinación con el cliente y
                      seguimiento hasta finalizar.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">
                  Calificaciones recibidas
                </h2>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl bg-slate-100 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-semibold text-slate-950">
                        Laura Martínez
                      </p>

                      <span className="w-fit rounded-lg bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                        5 / 5
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-slate-600">
                      Muy buen trabajo. Fue puntual, prolijo y dejó todo limpio
                      al terminar.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-100 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-semibold text-slate-950">
                        Martín Gómez
                      </p>

                      <span className="w-fit rounded-lg bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                        4.6 / 5
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-slate-600">
                      Buen trato y buena comunicación. El presupuesto fue claro
                      desde el principio.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-100 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-semibold text-slate-950">
                        Sofía Núñez
                      </p>

                      <span className="w-fit rounded-lg bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                        4.8 / 5
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-slate-600">
                      Cumplió con lo acordado y explicó bien cada parte del
                      trabajo.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">
                  Trabajos recientes
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="flex h-28 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
                    Trabajo 1
                  </div>

                  <div className="flex h-28 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
                    Trabajo 2
                  </div>

                  <div className="flex h-28 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
                    Trabajo 3
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}