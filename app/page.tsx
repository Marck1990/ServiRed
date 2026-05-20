import Link from "next/link";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* hero principal */}
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-teal-700">
              Servicios confiables en un solo lugar
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
              Conectamos clientes con trabajadores calificados
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              ServiRed permite publicar trabajos, recibir postulaciones,
              comparar perfiles y contratar trabajadores con reputación
              verificada por otros usuarios.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/registro"
                className="rounded-xl bg-teal-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-teal-600"
              >
                Crear cuenta
              </Link>

              <Link
                href="/login"
                className="rounded-xl border border-slate-300 px-6 py-4 text-center font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>

          {/* tarjeta visual */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Solicitud destacada
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-slate-950">
                    Reparación eléctrica en cocina
                  </h2>
                </div>

                <span className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-bold text-white">
                  Nueva
                </span>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                Un cliente necesita instalar tomas, revisar cableado y coordinar
                el trabajo con un técnico disponible.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">Presupuesto</p>
                  <p className="mt-1 font-bold text-slate-950">$2450</p>
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">Postulados</p>
                  <p className="mt-1 font-bold text-slate-950">3</p>
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">Zona</p>
                  <p className="mt-1 font-bold text-slate-950">Centro</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Trabajador recomendado
                </p>

                <div className="mt-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-950">
                      Carlos Rodríguez
                    </p>

                    <p className="text-sm text-slate-600">
                      Electricista y reparador general
                    </p>
                  </div>

                  <span className="rounded-lg bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                    4.8 / 5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* como funciona */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-950">
              Cómo funciona
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              El flujo está pensado para que ambas partes trabajen con más
              seguridad y claridad.
            </p>
          </div>

          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-3">
            <article className="flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 font-bold text-white">
                1
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Publicá una solicitud
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                El cliente describe el trabajo, agrega ubicación, presupuesto
                estimado y fecha límite.
              </p>
            </article>

            <article className="flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 font-bold text-white">
                2
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Recibí postulaciones
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Los trabajadores interesados envían propuesta, presupuesto y
                tiempo estimado.
              </p>
            </article>

            <article className="flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 font-bold text-white">
                3
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Contratá con reputación
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Compará perfiles, revisá calificaciones y elegí al trabajador
                que mejor se adapte.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* reputacion doble */}
      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-950">
              Reputación para clientes y trabajadores
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              En ServiRed no solo el cliente califica al trabajador. El
              trabajador también puede calificar al cliente. Esto ayuda a crear
              una comunidad más justa, clara y confiable.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">
                Clientes más seguros
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Pueden ver experiencia, puntajes y comentarios antes de
                contratar.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">
                Trabajadores protegidos
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                También pueden conocer la reputación del cliente antes de
                aceptar un trabajo.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}