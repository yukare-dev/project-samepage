import { gql } from "@apollo/client";

export const SEARCH_BOOKS_QUERY = gql`
  query SearchBooks($query: String!) {
    search(query: $query, per_page: 10, page: 0) {
      error
      page
      per_page
      query
      query_type
      results
    }
  }
`;

export const GET_BOOK_DETAILS_QUERY = gql`
  query GetBookDetailsById($id: Int!) {
    books_by_pk(id: $id) {
      activities_count
      title
      release_year
      slug
      reviews_count
      release_date
      rating
      id
      description
      image {
        id
        url
      }
      pages
      users_read_count
    }
  }
`;

export interface SearchResult {
  search: {
    error?: Error | null;
    page: number;
    per_page: number;
    query: string;
    query_type: string;
    results: {
      facet_counts: [];
      found: number;
      hits: {
        document: any;
      }[];
    };
  };
}
