import BookDetails from "@/components/books/BookDetails";
import { GET_BOOK_DETAILS_QUERY } from "@/lib/queries";
import { useQuery } from "@apollo/client/react";
import { Star, Users } from "lucide-react";
import Image from "next/image";

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const bookId = (await params).id;
  console.log(bookId);

  return <BookDetails bookId={bookId} />;
}
