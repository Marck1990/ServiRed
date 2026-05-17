import Link from "next/link";

export default function CalificarClientePage() {
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
            href="/trabajador/solicitudes/2"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
          >
            Volver a la solicitud
          </Link>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-extrabold text-slate-950">
              Calificar cliente
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tu calificación ayuda a que otros trabajadores puedan conocer
              mejor el comportamiento del contratante.
            </p>

            {/* resumen del cliente */}
            <div className="mt-6 rounded-xl bg-slate-100 p-4">
              <p className="text-sm font-semibold text-slate-950">
                Cliente: Juan Pérez
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Trabajo realizado: Pintura de living y comedor
              </p>
            </div>

            {/* formulario de calificacion */}
            <form className="mt-7 flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Claridad del pedido
                </label>

                <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none focus:border-orange-500">
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
                  Trato respetuoso
                </label>

                <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none focus:border-orange-500">
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
                  Puntualidad
                </label>

                <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none focus:border-orange-500">
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
                  Cumplimiento del pago
                </label>

                <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none focus:border-orange-500">
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
                  placeholder="Contá cómo fue tu experiencia con el cliente..."
                  className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
                />
              </div>

              <button
                type="button"
                className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
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