import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css';
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Гриф | Новости",
  description: "Новостной портал МВД РФ",
  icons: {
    icon: './icon.ico'
  }
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

        <main className="wrapper">

          {children}
          
        </main>

      </body>
    </html>
  );
}
