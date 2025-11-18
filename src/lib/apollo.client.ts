import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";

const HARDCOVER_API_URL = "/api/graphql";
// const HARDCOVER_API_URL = "https://api.hardcover.app/v1/graphql";
// const API_KEY = process.env.HARDCOVER_API_KEY;

const httpLink = new HttpLink({
  uri: HARDCOVER_API_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
