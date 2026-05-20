import Link from "next/link";

type HeaderProps = {
  mostrarCerrarSesion?: boolean;
};

export default function Header({ mostrarCerrarSesion = false }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5">
      {/* logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
          S
        </div>

        <span className="text-lg font-bold tracking-wide text-slate-900">
          ServiRed
        </span>
      </Link>

      {/* accion de sesion */}
      {mostrarCerrarSesion && (
        <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">
          Cerrar sesión
        </button>
      )}
    </header>
  );
}