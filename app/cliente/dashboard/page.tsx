import Link from "next/link";
import Header from "@/components/Header";

export default function ClienteDashboardPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header mostrarCerrarSesion />

      {/* contenido del panel */}
      <section className="px-5 py-8">
        <div className="mx-auto max-w-6xl">
          {/* titulo y accion principal */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-950">
                Mis solicitudes
              </h1>

              <p className="mt-2 text-slate-600">
                Gestioná los trabajos que publicaste en ServiRed.
              </p>
            </div>

            <Link
              href="/cliente/solicitudes/nueva"
              className="rounded-xl bg-teal-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-teal-600"
            >
              Publicar solicitud
            </Link>
          </div>

          {/* filtros de solicitudes */}
          <div className="mt-8 grid grid-cols-2 rounded-xl bg-slate-200 p-1 text-sm font-medium text-slate-600 md:max-w-xl md:grid-cols-4">
            <button className="rounded-lg bg-white px-4 py-2 text-slate-950 shadow-sm">
              Todas
            </button>

            <button className="px-4 py-2">Publicadas</button>

            <button className="px-4 py-2">En proceso</button>

            <button className="px-4 py-2">Finalizadas</button>
          </div>

          {/* listado de solicitudes */}
          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="flex min-h-105 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-800">
                  Electricidad
                </span>

                <span className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-bold text-white">
                  Publicada
                </span>
              </div>

              <h2 className="mt-5 min-h-16 text-xl font-bold leading-8 text-slate-950">
                Instalación de tomas y luces en cocina
              </h2>

              <p className="mt-4 min-h-28 leading-7 text-slate-600">
                Necesito instalar 4 tomas nuevas y 3 puntos de luz en cocina
                remodelada. Incluye cableado y cajas.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>Ubicación: Palermo, CABA</p>
                <p>Presupuesto: $2450</p>
                <p>Plazo: 24/5/2026</p>
              </div>

              <Link
                href="/cliente/solicitudes/1"
                className="mt-auto block rounded-xl bg-teal-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-teal-600"
              >
                Ver detalles
              </Link>
            </article>

            <article className="flex min-h-105 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-800">
                  Pintura
                </span>

                <span className="rounded-lg bg-yellow-500 px-3 py-1 text-sm font-bold text-white">
                  En proceso
                </span>
              </div>

              <h2 className="mt-5 min-h-16 text-xl font-bold leading-8 text-slate-950">
                Pintura de living y comedor
              </h2>

              <p className="mt-4 min-h-28 leading-7 text-slate-600">
                Pintura completa de living-comedor. Incluye preparación de
                paredes y dos manos de látex.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>Ubicación: Belgrano, CABA</p>
                <p>Presupuesto: $3200</p>
                <p>Plazo: 31/5/2026</p>
              </div>

              <Link
                href="/cliente/solicitudes/2"
                className="mt-auto block rounded-xl bg-teal-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-teal-600"
              >
                Ver detalles
              </Link>
            </article>

            <article className="flex min-h-105 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-800">
                  Sanitaria
                </span>

                <span className="rounded-lg bg-green-500 px-3 py-1 text-sm font-bold text-white">
                  Finalizada
                </span>
              </div>

              <h2 className="mt-5 min-h-16 text-xl font-bold leading-8 text-slate-950">
                Reparación de pérdida en baño
              </h2>

              <p className="mt-4 min-h-28 leading-7 text-slate-600">
                Pérdida de agua en canilla de lavatorio. Necesito revisión y
                reparación urgente.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>Ubicación: Palermo, CABA</p>
                <p>Presupuesto: $850</p>
                <p>Plazo: 19/5/2026</p>
              </div>

              <Link
                href="/cliente/solicitudes/3"
                className="mt-auto block rounded-xl bg-teal-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-teal-600"
              >
                Ver detalles
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}