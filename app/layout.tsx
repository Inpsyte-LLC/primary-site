import type { Metadata } from "next";
import { Zalando_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const zalando = Zalando_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Inpsyte",
  description: "Psychological services in the greater Cincinnati area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${zalando.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
