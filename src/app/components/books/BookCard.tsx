import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  coverUrl?: string;
  rating?: number;
}

export function BookCard({ title, author, coverUrl, rating }: BookCardProps) {
  return (
    <div className="group relative flex w-40 flex-col gap-3 cursor-pointer">
      <div className="relative aspect-2/3 w-full overflow-hidden rounded-r-lg rounded-l-sm bg-gray-200 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={`Capa do livro ${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 160px, 200px"
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
        {rating && (
          <div className="flex items-center gap-1 text-amber-500 mt-1">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-bold text-gray-600">{rating}</span>
          </div>
        )}
      </div>
    </div>
  );
}
