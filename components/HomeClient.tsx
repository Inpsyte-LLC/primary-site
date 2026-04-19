// components/HomeClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import AccessibilityMenu from "@/components/AccessibilityMenu";

function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white p-1">
      <div className="mx-auto max-w-6xl container-px">
        <div className="flex items-center justify-between">
          <nav className="hidden w-full justify-center items-center gap-10 text-lg font-semibold text-blue-950 uppercase md:flex" aria-label="Primary">
            <Link className="hover:text-inpsyte-teal" href="#top">Home</Link>
            <Link className="hover:text-inpsyte-teal" href="#services">Services</Link>
            <Link className="hover:text-inpsyte-teal" href="#faqs">FAQs</Link>
            <Link className="hover:text-inpsyte-teal" href="#contact">Contact Me</Link>
          </nav>

          <div className="md:hidden w-full">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative" aria-label="Psychological services in Cincinnati">
      <div className="relative h-[460px] w-full md:h-[520px]">
        <Image src="/hero_1.png" alt="Psychological services and therapy resources in Cincinnati Ohio" fill className="object-cover" priority />
        {/* Professional vertical gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b 
            from-white/80
            via-gray-200/75
            to-blue-950/90"
        />

      </div>

      <div className="absolute inset-0 flex items-start px-4 pt-10 md:items-center md:px-2 md:pt-0">
        <div className="mx-auto w-full max-w-6xl container-px">
          <div className="w-full max-w-full overflow-hidden text-blue-950">
            
            <h1 className="w-full text-[1.9rem] font-extrabold leading-tight tracking-tight sm:text-5xl">
              <span className="block sm:inline">Psychological Services</span>{" "}
              <span className="block sm:inline">in Cincinnati, Ohio</span>
            </h1>

            <h2 className="mt-4 max-w-[20rem] text-sm leading-relaxed text-neutral-700 sm:max-w-none sm:text-3xl font-semibold text-strong">
              Welcome to Inpsyte — Professional Psychological Services
            </h2>

            <div className="mt-6 max-w-[20rem] space-y-3 text-sm font-semibold text-neutral-700 sm:max-w-none sm:text-lg">
              <p>
                <span className="text-base italic sm:text-xl">Insight:</span>{" "}
                an understanding of the inner nature of things or situations.
              </p>
              <p>
                <span className="text-base italic sm:text-xl">Psych (prefix)</span>{" "}
                from Greek <span className="italic">“psyche”</span>: breath, principle of life, soul, mind.
              </p>
            </div>
            <p className="sr-only">
              Licensed psychologist providing psychological services in Cincinnati, Ohio.
            </p>
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-tealy px-6 py-3 text-sm uppercase font-semibold text-white shadow-soft"
              >
                <div className="bg-teal-500/90 py-2 px-4 rounded-sm">
                  Get Started
                </div>
                
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-6 hidden md:block">
        <div className="pointer-events-auto rounded-full bg-white shadow-soft">
          <AccessibilityMenu />
        </div>
      </div>
    </section>
  );
}

export default function HomeClient() {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}
