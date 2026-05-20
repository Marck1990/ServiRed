import Link from "next/link";
import Header from "@/components/Header";

export default function RegistroPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* contenido principal */}
      <section className="px-5 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-teal-700">
              Crear cuenta
            </span>

            <h1 className="mt-6 text-3xl font-extrabold text-slate-950 md:text-4xl">
              ¿Cómo querés registrarte?
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base md:leading-8">
              Elegí una opción para continuar en ServiRed.
            </p>
          </div>

          {/* version celular */}
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 md:hidden">
            <Link
              href="/registro/cliente"
              className="rounded-2xl bg-teal-500 px-5 py-5 text-center font-bold text-white shadow-sm transition hover:bg-teal-600"
            >
              Soy cliente
              <span className="mt-1 block text-sm font-medium text-teal-50">
                Quiero publicar trabajos
              </span>
            </Link>

            <Link
              href="/registro/trabajador"
              className="rounded-2xl bg-orange-500 px-5 py-5 text-center font-bold text-white shadow-sm transition hover:bg-orange-600"
            >
              Soy trabajador
              <span className="mt-1 block text-sm font-medium text-orange-50">
                Quiero postularme a trabajos
              </span>
            </Link>
          </div>

          {/* version escritorio */}
          <div className="mt-10 hidden items-stretch gap-6 md:grid md:grid-cols-2">
            <article className="flex min-h-96 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-2xl font-extrabold text-white">
                C
              </div>

              <h2 className="mt-6 text-2xl font-extrabold text-slate-950">
                Soy cliente
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Publicá solicitudes de trabajo, recibí propuestas, compará
                trabajadores y elegí la mejor opción según precio, experiencia y
                reputación.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p>Publicar trabajos</p>
                <p>Recibir postulaciones</p>
                <p>Comparar perfiles</p>
                <p>Calificar trabajadores</p>
              </div>

              <Link
                href="/registro/cliente"
                className="mt-auto block rounded-xl bg-teal-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-teal-600"
              >
                Registrarme como cliente
              </Link>
            </article>

            <article className="flex min-h-96 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-extrabold text-white">
                T
              </div>

              <h2 className="mt-6 text-2xl font-extrabold text-slate-950">
                Soy trabajador
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Encontrá trabajos disponibles, enviá tus propuestas, mostrale tu
                perfil a los clientes y construí reputación dentro de ServiRed.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p>Ver solicitudes disponibles</p>
                <p>Enviar presupuestos</p>
                <p>Mostrar experiencia</p>
                <p>Calificar clientes</p>
              </div>

              <Link
                href="/registro/trabajador"
                className="mt-auto block rounded-xl bg-orange-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Registrarme como trabajador
              </Link>
            </article>
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            ¿Ya tenés cuenta?{" "}
            <Link href="/login" className="font-semibold text-teal-600">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}