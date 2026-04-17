// app/layout.tsx
import type { Metadata } from "next";
import { Zalando_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  metadataBase: new URL("https://inpsytellc.org"),
  title: "Psychological Services in Cincinnati, OH | Inpsyte LLC",
  description:
    "Professional psychological services in Cincinnati, Ohio. Inpsyte LLC provides assessment, therapy, consultation, and training.",
  keywords: [
    "psychologist Cincinnati",
    "psychological services Cincinnati",
    "therapy Cincinnati Ohio",
    "mental health Cincinnati",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Psychological Services in Cincinnati, OH | Inpsyte LLC",
    description:
      "Professional psychological services in Cincinnati, Ohio. Inpsyte LLC provides assessment, therapy, consultation, and training.",
    url: "https://inpsytellc.org",
    siteName: "Inpsyte LLC",
    locale: "en_US",
    type: "website",
  },
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
        {/* CookieYes Banner */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/93f8b0cedcde06214c8157499a435fc9/script.js"
          strategy="afterInteractive"
        />
        
        {children}
      </body>
    </html>
  );
}
