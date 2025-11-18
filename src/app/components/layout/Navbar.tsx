import Link from "next/link";
import { BookOpen, Search, Users, Library } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#F9F9F7] backdrop-blur-md p-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <BookOpen className="h-6 w-6 text-brand-indigo transitio-transform group-hover:-rotate-12" />
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-ink">
            SamePage
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
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
          <button className="rounded-full bg-brand-ink px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
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
