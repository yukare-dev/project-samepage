"use client";

import { ApolloProvider } from "@apollo/client/react";
import client from "@/lib/apollo.client";

export function ApolloProviderWrapped({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
