import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client/react";
import { SEARCH_BOOKS_QUERY, SearchResult } from "@/lib/queries";
import { SamePageBook } from "@/types/books";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const normalizeHardcoverBook = (document: any): SamePageBook => {
  const authorName = document.author_names.join(", ");

  return {
    id: document.id,
    title: document.title,
    author: authorName || "Autor Desconhecido",
    coverUrl: document.image.url || undefined,
    rating: document.rating || 0,
    buddyReadsCount: document.users_read_count || 0,
  };
};

export function useBookSearch(searchTerm: string) {
  const debouncedQuery = useDebounce(searchTerm, 500);
  const shouldSkipQuery = debouncedQuery.length < 3;

  const { loading, error, data } = useQuery<SearchResult>(SEARCH_BOOKS_QUERY, {
    variables: { query: debouncedQuery },
    skip: shouldSkipQuery,
    fetchPolicy: "cache-and-network",
  });

  const books = useMemo(() => {
    console.log(data?.search);

    if (!data?.search) return [];
    return data.search.results.hits.map(({ document }) =>
      normalizeHardcoverBook(document)
    );
  }, [data]);

  return {
    books,
    loading: loading && !shouldSkipQuery,
    error,
    hasSearched: debouncedQuery.length >= 3,
  };
}
