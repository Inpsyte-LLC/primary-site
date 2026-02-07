// components/HomeClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white p-1">
      <div className="mx-auto max-w-6xl container-px">
        <div className="flex items-center justify-between">
          <nav className="hidden w-full justify-center items-center gap-10 text-lg font-semibold text-blue-950 uppercase md:flex">
            <Link className="hover:text-inpsyte-teal" href="#top">Home</Link>
            <Link className="hover:text-inpsyte-teal" href="#services">Services</Link>
            <Link className="hover:text-inpsyte-teal" href="#faqs">FAQs</Link>
            <Link className="hover:text-inpsyte-teal" href="#contact">Contact Us</Link>
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
    <section className="relative" aria-label="Hero">
      <div className="relative h-[420px] w-full md:h-[520px]">
        <Image src="/hero_1.png" alt="" fill className="object-cover" priority />
        {/* Professional vertical gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b 
            from-gray-200/50 
            via-gray-200/70 
            to-blue-950/90"
        />

      </div>

      <div className="absolute inset-0 flex items-center px-2">
        <div className="mx-auto w-full max-w-6xl container-px">
          <div className=" text-blue-950 w-full">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl w-full">
              Welcome to Inpsyte (/in-sight/)
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-neutral-700 sm:text-3xl font-semibold text-strong">
              Your source for psychological services in the greater Cincinnati area.
            </p>

            <div className="mt-6 space-y-3 text-neutral-700 font-semibold text-lg">
              <p>
                <span className="text-xl italic">Insight:</span>{" "}
                an understanding of the inner nature of things or situations.
              </p>
              <p>
                <span className="text-xl italic">Psych (prefix)</span>{" "}
                from Greek <span className="italic">“psyche”</span>: breath, principle of life, soul, mind.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-tealy px-6 py-3 text-sm uppercase font-semibold text-white shadow-soft"
              >
                <div className="bg-teal-400/90 py-2 px-4 rounded-sm">
                  Get Started
                </div>
                
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-6 hidden md:block">
        <div className="pointer-events-auto rounded-full bg-white shadow-soft">
          <button
            type="button"
            className="h-12 w-12 rounded-full text-xl"
            aria-label="Accessibility options"
            title="Accessibility"
            onClick={() => {}}
          >
            ♿
          </button>
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
