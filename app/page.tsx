// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import HomeClient from "@/components/HomeClient";
import About from "@/components/About";
import Services from "@/components/Services";
import FAQs from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function TopBar() {
  return (
    <div className="w-full bg-blue-950 p-1 text-white md:bg-white md:text-slate-700">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-2 text-[12px] sm:flex-row sm:items-center justify-center lg:justify-between md:container-px">
        <div className="flex w-full min-w-0 flex-wrap justify-center items-center gap-x-4 gap-y-1 sm:w-auto">
          <span className="inline-flex w-full min-w-0 items-center justify-center gap-2 sm:w-auto">
            <span className="material-symbols-outlined shrink-0 text-teal-300 md:text-teal-500">
              location_on 
            </span>
            <span className="min-w-0 text-center leading-snug sm:text-left">
              <span className="sm:hidden">1320 Nagel Road, Cincinnati, OH</span>
              <span className="hidden sm:inline">1320 Nagel Road PO Box 54864, Cincinnati, OH 45255</span>
            </span>
          </span>
        </div>

        <Link href="#top" className="hidden md:flex items-center" aria-label="Go to top">
          <div className="relative h-35 w-64">
            <Image
              src="/logo-placeholder.png"
              alt="Inpsyte"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </Link>

        <div className="flex w-full min-w-0 flex-col justify-center items-center gap-1 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-x-4">
          <a
            className="inline-flex min-w-0 items-center gap-2 hover:underline"
            href="tel:15136044378"
          >
            <span className="material-symbols-outlined shrink-0 text-teal-300 md:text-teal-500">
              phone_enabled
            </span>
            <span className="min-w-0">(513) 604-4378</span>
          </a>
          <a
            className="inline-flex min-w-0 items-center gap-2 hover:underline"
            href="mailto:weisman.inpsyte@inpsytellc.org"
          >
            <span className="material-symbols-outlined shrink-0 text-teal-300 md:text-teal-500">
              mail
            </span>
            <span className="min-w-0">weisman.inpsyte@inpsytellc.org</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main id="top" tabIndex={-1} aria-label="Top">
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[500] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-blue-950 focus:shadow-soft"
      >
        Skip to main content
      </a>

      <TopBar />

      {/* Target for skip link; focusable so screen readers/keyboard users land cleanly */}
      <div id="main-content" tabIndex={-1} />

      <HomeClient />
      <About />
      <Services />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
}
