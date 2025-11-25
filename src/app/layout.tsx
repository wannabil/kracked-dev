import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kracked Devs",
  description: "A community of cracked developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <LanguageProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
