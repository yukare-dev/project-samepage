"use client";

import { GET_BOOK_DETAILS_QUERY } from "@/lib/queries";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import { Loader, Star, Users } from "lucide-react";
import { BookStatusButtons } from "./BookStatusButtons";

interface BookData {
  books_by_pk: {
    activities_count: number;
    title: string;
    release_year: number;
    slug: string;
    reviews_count: number;
    release_date: string;
    rating: number;
    description: string;
    image: {
      id: number;
      url: string;
    };
    id: number;
    pages: number;
    users_read_count: number;
  };
}

export default function BookDetails({ bookId }: { bookId: string }) {
  console.log(bookId);
  const { data, error, loading } = useQuery<BookData>(GET_BOOK_DETAILS_QUERY, {
    variables: { id: bookId },
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
        <Loader className="animate-spin" />
        <span className="text-gray-400">carregando ...</span>
      </div>
    );
  }

  if (error || !data?.books_by_pk) {
    console.log("GraphQL Error:", error);
    return (
      <div className="p-10 text-center text-gray-600">
        Livro não encontrado ou erro de conexão.
      </div>
    );
  }
  const book = data.books_by_pk;

  //   const authorNames = book.authors.map((a) => a.name).join(", ");
  const year = book.release_year
    ? new Date(book.release_year).getFullYear()
    : "N/A";
  const synopsisClean = (book.description ?? "").replace(/<[^>]*>?/gm, "");

  return (
    <div className="mx-auto max-w-7xl px-6 pt-10 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* --- COLUNA ESQUERDA: CAPA & AÇÕES --- */}
        <div className="md:col-span-1 flex flex-col items-center self-start">
          <div className="relative aspect-2/3 w-full max-w-[250px] overflow-hidden rounded-r-xl rounded-l-sm shadow-2xl">
            {book.image.url && (
              <Image
                src={book.image.url}
                alt={`Capa de ${book.title}`}
                width={250}
                height={375}
                className="object-cover"
              />
            )}
          </div>

          <div className="mt-6 w-full max-w-[250px]">
            <BookStatusButtons
              bookId={book.id}
              // por enquanto, o status inicial é NONE
              // futuramente: status real do usuário logado
              initialStatus="NONE"
            />
          </div>

          <div className="mt-6 text-sm w-full max-w-[250px] space-y-2 text-gray-600">
            <p className="flex justify-between">
              <span>Páginas:</span> <span>{book.pages}</span>
            </p>
            <p className="flex justify-between">
              {/* <span>Idioma:</span> <span>{book.language}</span> */}
            </p>
            <p className="flex justify-between">
              <span>Publicação:</span> <span>{year}</span>
            </p>
          </div>
        </div>

        {/* --- COLUNA DIREITA: DETALHES & REVIEWS --- */}
        <div className="md:col-span-2">
          <p className="text-xl text-gray-600 font-medium mb-1">
            {/* {authorNames} */}
          </p>
          <h1 className="font-serif text-5xl font-bold text-brand-ink mb-4 leading-tight">
            {book.title}
          </h1>

          {/* ESTATÍSTICAS SOCIAIS */}
          <div className="flex items-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-1 text-amber-500">
              <Star size={20} fill="currentColor" />
              <span className="font-bold text-xl">
                {book.rating.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={20} />
              <span className="font-medium">
                {book.users_read_count}{" "}
                {/* {book.readingGoalsCount === 1
                  ? "pessoa quer ler"
                  : "pessoas querem ler"} */}
              </span>
            </div>
          </div>

          {/* DESCRIÇÃO */}
          <h2 className="font-bold text-lg text-brand-ink mt-8 mb-2 border-b pb-1 border-gray-200">
            Sinopse
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {synopsisClean}
          </p>

          {/* REVIEWS DA COMUNIDADE */}
          <h2 className="font-bold text-lg text-brand-ink mt-10 mb-4 border-b pb-1 border-gray-200">
            {/* Reviews ({book.userReviews.edges.length}) */}
          </h2>
          <div className="space-y-4">
            {/* {book.userReviews.edges.map((review: any) => (
              <div
                key={review.node.id}
                className="p-4 bg-gray-50 rounded-lg border border-gray-100"
              >
                <p className="font-semibold text-brand-ink mb-1">
                  {review.node.user.username}
                </p>
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {Array.from({ length: Math.round(review.node.rating) }).map(
                    (_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    )
                  )}
                </div>
                <p className="text-gray-700 italic">{review.node.body}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
