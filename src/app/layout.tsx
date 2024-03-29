import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";

const inter = Poppins({ subsets: ["latin"],weight: ["400","500","700"] });

export const metadata: Metadata = {
  title: "Browserhub - Easy to use no-code web scraping and data extraction software",
  description: "Generated by create next app",
  icons : {
    icon: ["https://www.browserhub.io/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
