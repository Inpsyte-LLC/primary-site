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
    <div className="p-1 w-full md:text-black bg-blue-950 md:bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-[12px] text-inpsyte-slate sm:flex-row sm:items-center justify-center lg:justify-between container-px">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-teal-500">
              location_on
            </span>
            1320 Nagel Road PO Box 54864, Cincinnati, OH 45255
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

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
          <a
            className="inline-flex items-center gap-2 hover:underline"
            href="tel:15136044378"
          >
            <span className="material-symbols-outlined text-teal-500">
              phone_enabled
            </span>
            (513) 604-4378
          </a>
          <a
            className="inline-flex items-center gap-2 hover:underline"
            href="mailto:weisman.inpsyte@inpsytellc.org"
          >
            <span className="material-symbols-outlined text-teal-500">
              mail
            </span>
            weisman.inpsyte@inpsytellc.org
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
