import Image from "next/image";
import Link from "next/link";
import { Star, Users } from "lucide-react";
import { SamePageBook } from "@/types/books";

export function BookCard({
  id,
  title,
  author,
  coverUrl,
  rating,
  buddyReadsCount,
}: SamePageBook) {
  return (
    <Link
      href={`/explore/${id}`}
      className="group relative flex w-[160px] flex-col gap-3 cursor-pointer"
    >
      <div className="group relative flex w-40 flex-col gap-3 cursor-pointer">
        <div className="relative aspect-2/3 w-full overflow-hidden rounded-r-lg rounded-l-sm bg-gray-200 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={`Capa do livro ${title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px, 200px"
              quality={75}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center bg-brand-paper p-4 text-center border border-gray-200">
              <span className="font-serif text-sm text-gray-400 italic">
                Sem capa
              </span>
            </div>
          )}

          <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-r from-black/20 to-transparent mix-blend-multiply" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-serif text-base font-bold leading-tight text-brand-ink line-clamp-2 group-hover:text-brand-indigo transition-colors">
            {title}
          </h3>
          <p className="text-xs font-medium text-gray-500 line-clamp-1">
            {author}
          </p>
          <div className="flex items-center justify-between mt-1">
            {rating && rating > 0 ? (
              <div className="flex items-center gap-1 text-amber-500">
                <Star size={12} fill="currentColor" />
                <span className="text-xs font-bold text-gray-600">
                  {rating.toFixed(1)}
                </span>
              </div>
            ) : (
              <span className="text-xs text-gray-400">Sem nota</span>
            )}

            {typeof buddyReadsCount === "number" && buddyReadsCount > 0 && (
              <div className="flex items-center gap-1 text-gray-500">
                <Users size={12} />
                <span className="text-xs font-medium">{buddyReadsCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
