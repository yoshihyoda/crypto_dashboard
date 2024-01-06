import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";

import "./globals.css";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Crypto Pulse",
  description: "Crypto Dashboard with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
