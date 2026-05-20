import Link from "next/link";
import Header from "@/components/Header";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* contenido principal */}
      <section className="px-5 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* formulario */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-extrabold text-slate-950">
              Iniciar sesión
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Accedé a tu cuenta para gestionar solicitudes, postulaciones y
              calificaciones.
            </p>

            <form className="mt-7 flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900">
                  Contraseña
                </label>

                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <button
                type="button"
                className="rounded-xl bg-teal-500 px-5 py-3 font-semibold text-white transition hover:bg-teal-600"
              >
                Entrar
              </button>
            </form>

            {/* accesos rapidos de demo */}
            <div className="mt-7 rounded-xl bg-slate-100 p-4">
              <p className="text-sm font-semibold text-slate-950">
                Accesos rápidos de prueba
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/cliente/dashboard"
                  className="rounded-xl bg-teal-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-teal-600"
                >
                  Entrar como cliente
                </Link>

                <Link
                  href="/trabajador/dashboard"
                  className="rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Entrar como trabajador
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-slate-600">
              ¿Todavía no tenés cuenta?{" "}
              <Link href="/registro" className="font-semibold text-teal-600">
                Crear cuenta
              </Link>
            </p>
          </div>

          {/* panel informativo */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <span className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-teal-700">
              ServiRed
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-950">
              Una cuenta para conectar trabajo, confianza y reputación
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Desde tu panel podés publicar trabajos, enviar propuestas,
              revisar perfiles, aceptar postulaciones y calificar a la otra
              parte cuando el servicio termina.
            </p>

            <div className="mt-7 grid gap-4">
              <article className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-950">Para clientes</h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Publicá una solicitud y compará trabajadores según
                  experiencia, precio y calificaciones.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-950">Para trabajadores</h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Encontrá oportunidades, enviá presupuestos y construí tu
                  reputación dentro de la plataforma.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}