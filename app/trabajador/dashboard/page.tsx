import Link from "next/link";
import Header from "@/components/Header";

export default function TrabajadorDashboardPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header mostrarCerrarSesion />

      {/* contenido principal */}
      <section className="px-5 py-8">
        <div className="mx-auto max-w-6xl">
          {/* titulo y acciones */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-950">
                Solicitudes disponibles
              </h1>

              <p className="mt-2 text-slate-600">
                Encontrá trabajos publicados por clientes y enviá tu propuesta.
              </p>
            </div>

            <Link
              href="/trabajador/perfil"
              className="rounded-xl bg-orange-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
            >
              Ver mi perfil
            </Link>
          </div>

          {/* resumen del trabajador */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-600">
                Calificación promedio
              </p>

              <p className="mt-2 text-3xl font-extrabold text-slate-950">
                4.8 / 5
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-600">
                Trabajos finalizados
              </p>

              <p className="mt-2 text-3xl font-extrabold text-slate-950">
                24
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-600">
                Postulaciones activas
              </p>

              <p className="mt-2 text-3xl font-extrabold text-slate-950">
                3
              </p>
            </article>
          </div>

          {/* filtros */}
          <div className="mt-8 grid grid-cols-2 rounded-xl bg-slate-200 p-1 text-sm font-medium text-slate-600 md:max-w-xl md:grid-cols-4">
            <button className="rounded-lg bg-white px-4 py-2 text-slate-950 shadow-sm">
              Todas
            </button>

            <button className="px-4 py-2">Electricidad</button>

            <button className="px-4 py-2">Pintura</button>

            <button className="px-4 py-2">Sanitaria</button>
          </div>

          {/* listado de solicitudes */}
          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="flex min-h-105 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-800">
                  Electricidad
                </span>

                <span className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-bold text-white">
                  Nueva
                </span>
              </div>

              <h2 className="mt-5 min-h-16 text-xl font-bold leading-8 text-slate-950">
                Instalación de tomas y luces en cocina
              </h2>

              <p className="mt-4 min-h-28 leading-7 text-slate-600">
                Cliente necesita instalar 4 tomas nuevas y 3 puntos de luz en
                una cocina remodelada.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>Ubicación: Palermo, CABA</p>
                <p>Presupuesto estimado: $2450</p>
                <p>Plazo: 24/5/2026</p>
              </div>

              <Link
                href="/trabajador/solicitudes/1"
                className="mt-auto block rounded-xl bg-orange-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Ver solicitud
              </Link>
            </article>

            <article className="flex min-h-105 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-800">
                  Pintura
                </span>

                <span className="rounded-lg bg-yellow-500 px-3 py-1 text-sm font-bold text-white">
                  Postulada
                </span>
              </div>

              <h2 className="mt-5 min-h-16 text-xl font-bold leading-8 text-slate-950">
                Pintura de living y comedor
              </h2>

              <p className="mt-4 min-h-28 leading-7 text-slate-600">
                Trabajo de pintura completa en living-comedor, con preparación
                de paredes y dos manos de látex.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>Ubicación: Belgrano, CABA</p>
                <p>Presupuesto estimado: $3200</p>
                <p>Plazo: 31/5/2026</p>
              </div>

              <Link
                href="/trabajador/solicitudes/2"
                className="mt-auto block rounded-xl bg-orange-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Ver solicitud
              </Link>
            </article>

            <article className="flex min-h-105 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-800">
                  Sanitaria
                </span>

                <span className="rounded-lg bg-green-500 px-3 py-1 text-sm font-bold text-white">
                  Disponible
                </span>
              </div>

              <h2 className="mt-5 min-h-16 text-xl font-bold leading-8 text-slate-950">
                Reparación de pérdida en baño
              </h2>

              <p className="mt-4 min-h-28 leading-7 text-slate-600">
                Cliente necesita revisión y reparación de una pérdida de agua en
                la canilla del lavatorio.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>Ubicación: Palermo, CABA</p>
                <p>Presupuesto estimado: $850</p>
                <p>Plazo: 19/5/2026</p>
              </div>

              <Link
                href="/trabajador/solicitudes/3"
                className="mt-auto block rounded-xl bg-orange-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Ver solicitud
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}