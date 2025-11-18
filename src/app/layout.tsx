import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { ApolloProviderWrapped } from "../components/layout/ApolloProviderWrapped";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});
export const metadata: Metadata = {
  title: { template: "%s | SamePage", default: "SamePage" },
  description: "Read together. Stay on the SamePage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} antialiased bg-[#F9F9F7] text-[#24292F] min-h-screen flex flex-col`}
      >
        <ApolloProviderWrapped>
          <Navbar />
          {children}
        </ApolloProviderWrapped>
      </body>
    </html>
  );
}
