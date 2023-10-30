import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//components

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuizNextapp",
  description: "testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
