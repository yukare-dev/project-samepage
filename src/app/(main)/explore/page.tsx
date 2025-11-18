"use client";

import { useState } from "react";
import { Loader, SearchIcon } from "lucide-react";
import { BookCard } from "@/components/books/BookCard";
import { useBookSearch } from "@/hooks/useBookSearch";

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { books, loading, error, hasSearched } = useBookSearch(searchTerm);

  return (
    <div className="flex flex-col items-center gap-12 min-h-screen p-12">
      <h1 className="font-serif text-4xl font-bold text-brand-ink">
        Explorar o Universo Literário
      </h1>
      <div className="relative w-1/2">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="search"
          placeholder="Pesquisar por título, autor, ou gênero (mínimo 3 letras)"
          className="w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-6 text-lg focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo outline-none transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && (
        <p className="flex gap-4 text-xl text-brand-indigo">
          Buscando livros... <Loader className="animate-spin" />
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 mt-8">
          Ocorreu um erro ao conectar: {error.message}.
        </p>
      )}

      {/* --- RESULTADOS --- */}
      <div className="mt-10">
        {books.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                coverUrl={book.coverUrl}
                rating={book.rating}
                id={book.id}
                buddyReadsCount={book.buddyReadsCount}
              />
            ))}
          </div>
        ) : (
          !loading &&
          hasSearched && (
            <p className="text-center text-gray-500 mt-8">
              Nenhum livro encontrado para "{searchTerm}". Tente outros termos.
            </p>
          )
        )}

        {!hasSearched && !loading && (
          <p className="text-center text-gray-500 mt-8">
            Comece sua busca para preencher sua estante de descobertas!
          </p>
        )}
      </div>
    </div>
  );
}
