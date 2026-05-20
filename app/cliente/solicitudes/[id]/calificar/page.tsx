import Link from "next/link";
import Header from "@/components/Header";

export default function CalificarTrabajadorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header mostrarCerrarSesion />

      {/* contenido principal */}
      <section className="px-5 py-8">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/cliente/solicitudes/1"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
          >
            Volver a la solicitud
          </Link>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-extrabold text-slate-950">
              Calificar trabajador
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tu calificación ayuda a que otros clientes puedan contratar con
              más confianza.
            </p>

            {/* resumen del trabajador */}
            <div className="mt-6 rounded-xl bg-slate-100 p-4">
              <p className="text-sm font-semibold text-slate-950">
                Carlos Rodríguez
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Trabajo realizado: Pintura de living y comedor
              </p>
            </div>

            {/* formulario de calificacion */}
            <form className="mt-7 flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Puntualidad
                </label>

                <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none focus:border-teal-500">
                  <option>Selecciona una puntuación</option>
                  <option>1 - Muy mala</option>
                  <option>2 - Mala</option>
                  <option>3 - Regular</option>
                  <option>4 - Buena</option>
                  <option>5 - Excelente</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Calidad del trabajo
                </label>

                <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none focus:border-teal-500">
                  <option>Selecciona una puntuación</option>
                  <option>1 - Muy mala</option>
                  <option>2 - Mala</option>
                  <option>3 - Regular</option>
                  <option>4 - Buena</option>
                  <option>5 - Excelente</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Trato
                </label>

                <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none focus:border-teal-500">
                  <option>Selecciona una puntuación</option>
                  <option>1 - Muy malo</option>
                  <option>2 - Malo</option>
                  <option>3 - Regular</option>
                  <option>4 - Bueno</option>
                  <option>5 - Excelente</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Cumplimiento del presupuesto
                </label>

                <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none focus:border-teal-500">
                  <option>Selecciona una puntuación</option>
                  <option>1 - Muy malo</option>
                  <option>2 - Malo</option>
                  <option>3 - Regular</option>
                  <option>4 - Bueno</option>
                  <option>5 - Excelente</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Comentario
                </label>

                <textarea
                  rows={5}
                  placeholder="Contá cómo fue tu experiencia con el trabajador..."
                  className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <button
                type="button"
                className="rounded-xl bg-teal-500 px-5 py-3 font-semibold text-white transition hover:bg-teal-600"
              >
                Enviar calificación
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}