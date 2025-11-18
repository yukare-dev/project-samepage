import { BookCard } from "./components/books/BookCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { title } from "process";

export default function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: "Harry Potter e a Pedra Filosofal",
      author: "J.K. Rowling",
      coverUrl:
        "https://books.google.com/books/content/images/frontcover/wrOQLV6xB-wC?fife=w400-h600",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Dom Casmurro",
      author: "Machado de Assis",
      // URL real do Google Books
      coverUrl:
        "https://books.google.com/books/content/images/frontcover/4m9iDQAAQBAJ?fife=w400-h600",
      rating: 5.0,
    },
    {
      id: 3,
      title: "O Hobbit",
      author: "J.R.R. Tolkien",
      coverUrl:
        "https://books.google.com/books/content/images/frontcover/pD6arQEACAAJ?fife=w400-h600",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Livro Misterioso Sem Capa",
      author: "Autor Desconhecido",
      coverUrl: undefined,
      rating: 3.5,
    },
  ];

  return (
    <main className="min-h-screen pb-20">
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl font-bold text-brand-ink mb-4 leading-tight">
            Encontre seu próximo capítulo favorito
          </h1>
          <p className="text-lg text-gray-600 font-sans mb-8">
            Organize sua leitura, descubra novos mundos e copartilhe a
            experiência com seus amigos
          </p>
          <div className="flex gap-4">
            <Link
              href="/explore"
              className="bg-brand-indigo text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition flex items-center gap-2"
            >
              Explorar livros <ArrowRight size={18} />
            </Link>
            <button className="px-6 py-3 rounded-md font-medium text-brand-ink border border-gay-300 hover:bg-gray-50 transition">
              Ver meu perfil
            </button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl font-bold text-brand-ink flex items-center gap-2">
            <span className="text-brand-indigo">●</span>Tendências agora
          </h2>
          <Link
            href="/explore"
            className="text-sm font-medium text-gray-500 hover:text-brand-indigo transition"
          >
            Ver todos
          </Link>
        </div>
        {/* grid de livros */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10">
          {featuredBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              coverUrl={book.coverUrl}
              rating={book.rating}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
