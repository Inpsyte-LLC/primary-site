// components/MobileMenu.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Item = { id: string; label: string };

const ITEMS: Item[] = [
  { id: "top", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLButtonElement | null>(null);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Focus first item on open (nice accessibility)
  useEffect(() => {
    if (open) setTimeout(() => firstLinkRef.current?.focus(), 0);
  }, [open]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    setOpen(false);
    // allow overlay close animation to start before scroll
    setTimeout(() => {
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const goTop = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="md:hidden w-full">
      {/* TOP ROW: hamburger left, logo centered */}
      <div className="grid grid-cols-3 items-center w-full">
        {/* left: hamburger */}
        <div className="justify-self-start">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center text-3xl justify-center rounded-md border border-white/30 bg-white/10 px-3 py-2 text-black backdrop-blur"
          >
            <span className="material-symbols-outlined leading-non text-3xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* center: logo */}
        <div className="justify-self-center">
          <Link
            href="#top"
            onClick={(e) => {
              // avoid default anchor jump so we can smooth scroll
              e.preventDefault();
              goTop();
            }}
            className="block"
            aria-label="Go to top"
          >
            <div className="relative h-18 w-40">
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
        </div>

        {/* right: spacer so center is truly centered */}
        <div className="justify-self-end">
          <div className="h-10 w-10" />
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={[
          "fixed inset-0 z-[100] transition-opacity duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu backdrop"
          className="absolute inset-0 bg-black/55"
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={[
            "absolute inset-x-0 top-0 mx-auto h-[100dvh] w-full",
            "bg-inpsyte-navy/95 backdrop-blur",
            "transition-transform duration-300 ease-out",
            open ? "translate-y-0" : "-translate-y-6",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col px-6 py-6">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <Link
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  goTop();
                }}
                className="flex items-center gap-3"
                aria-label="Go to top"
              >
                <div className="relative h-16 w-40">
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

              <button
                type="button"
                className="rounded-md border border-white/20 bg-white/15 px-3 py-2 text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-[22px] leading-none">close</span>
              </button>
            </div>

            {/* Links */}
            <div className="mt-10 flex flex-col gap-4">
              {ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/15 px-5 py-4 text-left text-lg font-semibold text-white transition hover:bg-white/10"
                >
                  <span className="uppercase">{item.label}</span>
                  <span className="material-symbols-outlined text-[22px] text-white/70 transition group-hover:translate-x-0.5">
                    chevron_right
                  </span>
                </button>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-auto pt-8">
              <button
                type="button"
                onClick={() => goTo("contact")}
                className="w-full rounded-xl bg-inpsyte-teal px-6 py-4 text-base font-bold text-white shadow-soft hover:bg-inpsyte-tealDark focus:outline-none focus:ring-2 focus:ring-inpsyte-teal focus:ring-offset-2 focus:ring-offset-inpsyte-navy"
              >
                Contact Us
              </button>
              <p className="mt-3 text-center text-xs text-white/60">
                Press <span className="font-semibold">Esc</span> to close
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
