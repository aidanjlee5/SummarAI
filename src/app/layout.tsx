import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SummarAI - Get the Scoop in Seconds",
  description: "An web scraping tool powered by AI that summarizes articles in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="kumbh-sans">{children}</body>
    </html>
  );
}
