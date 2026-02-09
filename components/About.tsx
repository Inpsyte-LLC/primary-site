//components/About.tsx

"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-950">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}

      <div className="mx-auto mt-6 h-1 w-24 rounded bg-teal-500/70" />
    </div>
  );
}

export default function About() {
  const [open, setOpen] = useState(false);
  const contentId = useId();
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // Smooth accordion height
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    if (open) {
      setMaxHeight(`${el.scrollHeight}px`);

      // Recalculate after fonts/images render
      const t = setTimeout(() => {
        setMaxHeight(`${el.scrollHeight}px`);
      }, 150);

      return () => clearTimeout(t);
    } else {
      setMaxHeight("0px");
    }
  }, [open]);

  return (
    <section id="about" tabIndex={-1} className="bg-white py-8" aria-label="About">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="About Us" />

        {/* GRID */}
        <div className="grid gap-12 sm:grid-cols-[1.25fr_.75fr] sm:items-start">

          
          {/* LEFT — COPY */}
          <div className="text-slate-700 leading-relaxed">
            <p className="text-base sm:text-lg text-justify">
              Inpsyte, LLC, is owned and operated by Dr. Jason Weisman. We offer
              a variety of psychological services across assessment and
              evaluation, treatment, consultation, and training in order to help
              you find insight and clarity in emotional, cognitive, behavioral,
              and general life challenges.
            </p>

            {/* BUTTON */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={contentId}
                className="inline-flex justify-center items-center gap-2 rounded-md bg-teal-400/90 uppercase px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900"
              >
                {open ? "Hide Credentials" : "Credentials & Experience"}

                <span
                  className={`transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            </div>

            {/* ACCORDION */}
            <div
              id={contentId}
              aria-hidden={!open}
              style={{
                maxHeight,
                opacity: open ? 1 : 0,
              }}
              className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300"
            >
              <div ref={innerRef} className="p-6">
                <h3 className="text-xl font-bold text-blue-950">
                  Credentials and Experience
                </h3>

                <p className="mt-3 leading-relaxed">
                  Jason Weisman, Psy.D., earned a bachelor’s degree (B.A.) in
                  psychology from the University of Cincinnati in 2005, a
                  master’s degree in clinical psychology (M.A.) from the
                  University of Dayton in 2013, and a doctorate in clinical
                  psychology from Wright State University School of Professional
                  Psychology in 2015.
                </p>

                <p className="mt-3 leading-relaxed">
                  He trained at the Forensic Psychiatry Center for Western Ohio
                  during his internship and two-year postdoctoral fellowship.
                  Dr. Weisman has conducted psychotherapy and psychological
                  evaluations, trainings and workshops, and supervised
                  doctoral-level trainees and postdoctoral fellows at both
                  community-based outpatient mental health centers and in
                  private practice since 2018.
                </p>

                <p className="mt-3 text-sm leading-relaxed">
                  A Curriculum Vitae (CV) is available upon request.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — HEADSHOT */}
          <div className="flex justify-center sm:justify-end">
            <div className="w-full max-w-[200px] sm:max-w-[220px]">
              
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-slate-200">
                <Image
                  src="/headshot.jpg"
                  alt="Dr. Jason Weisman"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-center text-xs text-slate-500">
                Dr. Jason Weisman, Psy.D.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
