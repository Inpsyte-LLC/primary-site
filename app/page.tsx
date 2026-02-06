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
        <Link href="#top" className="hidden md:flex items-center">
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
          <a className="inline-flex items-center gap-2 hover:underline" href="tel:15136044378">
            <span className="material-symbols-outlined text-teal-500">
              phone_enabled
            </span>
            (513) 604-4378
          </a>
          <a className="inline-flex items-center gap-2 hover:underline" href="mailto:weisman.inpsyte@inpsytellc.org">
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

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-4xl font-extrabold tracking-tight text-inpsyte-navy">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-slate-600">{subtitle}</p> : null}
      <div className="mx-auto mt-8 h-1 w-24 rounded bg-inpsyte-teal/70" />
    </div>
  );
}

export default function Page() {
  return (
    <main id="top">
      <TopBar />
      <HomeClient />
      <About />
      <Services />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
}
