import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/Providers";
import { Navbar } from "../components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Professional Makeup Generator - Virtual Makeup Simulator",
  description: "Try on professional makeup looks virtually using AI. Upload your reference makeup photo and portrait image to preview instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full light" style={{ colorScheme: "light" }}>
      <body className={`${inter.variable} ${outfit.variable} h-full w-full flex flex-col antialiased bg-white text-zinc-900 font-sans overflow-hidden`}>
        <Providers>
          <Navbar />
          <div className="flex-1 flex flex-col overflow-hidden min-h-0">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
