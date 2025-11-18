import Link from "next/link";
import { Search, Users, Library, Home } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#F9F9F7] backdrop-blur-md p-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-ink">
            SamePage
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/" icon={<Home size={18} />} text="Página inicial" />
          <NavLink
            href="/explore"
            icon={<Search size={18} />}
            text="Explorar"
          />
          <NavLink
            href="/social"
            icon={<Users size={18} />}
            text="Buddy Reads"
          />
          <NavLink
            href="/dashboard"
            icon={<Library size={18} />}
            text="Biblioteca"
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            className="rounded-lg border border-indigo-200 py-2 px-4 text-center text-sm transition-all shadow-sm shadow-indigo-200 shadow-hover:shadow-lg text-brand-indigo hover:text-white hover:bg-indigo-600 hover:border-indigo-600 cursor-pointer"
            type="button"
          >
            Entrar
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-indigo transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
