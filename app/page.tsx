// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import HomeClient from "@/components/HomeClient";
import About from "@/components/About";

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

function Services() {
  const assessmentItems = [
    "General Mental Health Assessment and Evaluation",
    "Intellectual, cognitive, and personality testing",
    "Psychoeducational Evaluations (e.g., learning disability, ADHD)",
    "Police, Corrections, and Public Safety Pre-Employment",
    "Adoption",
    "Risk Assessment",
    "Independent Examinations for Guardianship and Civil Commitment",
    "Competence to Stand Trial",
    "Mental Condition at the Time of Offense Charged (NGRI)",
    "Treatment in Lieu of Conviction",
    "Amenability to Treatment",
    "Department of Disability Services/Social Security",
    "Workers’ Compensation",
  ];

  const therapyItems = [
    "Life transitions",
    "General life stressors",
    "Depression",
    "Anxiety disorders",
    "Posttraumatic Stress Disorder",
    "Personality disorders",
    "Group therapy (process groups, DBT, CBT)",
  ];

  const workshopsItems = [
    "Trauma-informed care (TIC)",
    "Assessment and treatment of Posttraumatic Stress Disorder (PTSD) and complex trauma",
    "Stress management",
    "Self-care",
    "Ethics",
    "Major mental illnesses",
    "Treatment of substance use disorders",
    "Mental health and addiction",
    "Medical illnesses that mimic mental illness",
    "Personality disorders",
    "Motivational interviewing",
    "Professional development",
  ];

  return (
    <section id="services" className="bg-inpsyte-fog py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <SectionTitle title="Our Services" subtitle="Explore offerings and jump to details below." />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Link
            href="#service-assessment"
            className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inpsyte-fog text-2xl text-inpsyte-tealDark">
              <span aria-hidden>📝</span>
            </div>
            <h3 className="mt-6 text-lg font-extrabold text-inpsyte-navy">Assessment &amp; Evaluation</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Adult and child assessments, psychoeducational testing, risk and forensic-related evaluations.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-inpsyte-tealDark">
              View details <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
            </span>
          </Link>

          <Link
            href="#service-therapy"
            className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inpsyte-fog text-2xl text-inpsyte-tealDark">
              <span aria-hidden>🌿</span>
            </div>
            <h3 className="mt-6 text-lg font-extrabold text-inpsyte-navy">Therapy Services</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Targeted, evidence-based treatment for adults, including trauma-focused approaches.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-inpsyte-tealDark">
              View details <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
            </span>
          </Link>

          <Link
            href="#service-workshops"
            className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inpsyte-fog text-2xl text-inpsyte-tealDark">
              <span aria-hidden>👥</span>
            </div>
            <h3 className="mt-6 text-lg font-extrabold text-inpsyte-navy">Workshops, Seminars, &amp; Consultation</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Trainings for public agencies and providers, plus consultation tailored to your needs.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-inpsyte-tealDark">
              View details <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
            </span>
          </Link>
        </div>

        <div className="mt-14 space-y-8">
          <ServiceDetail
            id="service-assessment"
            title="Assessment & Evaluation"
            body={
              <>
                <p>
                  Dr. Weisman has specialized in assessment and evaluation during his training and career. His work in
                  both criminal and civil evaluations also involves providing expert testimony and routine and
                  specialized consultation with the courts, other legal entities, other agencies, and other
                  psychologists.
                </p>
                <p className="mt-4 font-semibold text-inpsyte-navy">
                  Assessment and evaluation specialties for both adults and children include:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {assessmentItems.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </>
            }
          />

          <ServiceDetail
            id="service-therapy"
            title="Therapy Services"
            body={
              <>
                <p>
                  Dr. Weisman has earned a reputation as a highly effective therapist. He developed and led the
                  implementation of an evidence-based trauma-focused treatment package for the Montgomery County
                  Specialty Court dockets during his internship and post-doctoral fellowship.
                </p>
                <p className="mt-4">
                  His blend of cognitive-behavioral and interpersonal process interventions is designed to be targeted
                  and rapid—helping patients address specific issues and improve quickly. He currently works with
                  individual adult patients and would consider referrals as young as 16. Group therapy referrals are
                  also being accepted for adults.
                </p>
                <p className="mt-4 font-semibold text-inpsyte-navy">Clinical treatment specialties include:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {therapyItems.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </>
            }
          />

          <ServiceDetail
            id="service-workshops"
            title="Workshops, Seminars, & Consultation"
            body={
              <>
                <p>
                  Dr. Weisman has conducted seminars and workshops for the lay public, police departments, court staff,
                  citizens returning from incarceration, and clinical providers and consumers from around the world.
                </p>
                <p className="mt-4 font-semibold text-inpsyte-navy">Topics include:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {workshopsItems.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-inpsyte-teal px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-inpsyte-tealDark focus:outline-none focus:ring-2 focus:ring-inpsyte-teal focus:ring-offset-2"
                  >
                    Contact Inpsyte for a custom training
                  </Link>
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function ServiceDetail({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft"
      aria-label={title}
    >
      <h3 className="text-2xl font-extrabold text-inpsyte-navy">{title}</h3>
      <div className="mt-4 text-sm leading-relaxed text-slate-700">{body}</div>
    </section>
  );
}

function FAQs() {
  return (
    <section id="faqs" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <SectionTitle title="FAQs" subtitle="This section is a placeholder — we can copy the actual FAQ content next." />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {[
            {
              q: "Do you accept insurance?",
              a: "Add your real answer here. We can also include a short ‘Rates & Payment’ block.",
            },
            { q: "How do I get started?", a: "Typically: reach out via phone/email, brief consult, schedule an appointment." },
            { q: "Where are you located?", a: "Cincinnati, OH. Add details about in-person vs telehealth." },
          ].map((item) => (
            <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
              <summary className="cursor-pointer text-base font-bold text-inpsyte-navy">{item.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white px-2 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-inpsyte-navy">Get in touch with us!</h2>

            <div className="mt-8 space-y-3 text-slate-700">
              <p className="flex items-start gap-3">
                <span aria-hidden className="mt-0.5">📍</span>
                <span>
                  Inpsyte, LLC 1320 Nagel Rd, PO Box 54864
                  <br />
                  Cincinnati, OH 45255
                </span>
              </p>
              <p className="flex items-center gap-3">
                <span aria-hidden>📞</span>
                <a className="hover:underline" href="tel:15136044378">
                  (513) 604-4378
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span aria-hidden>✉️</span>
                <a className="hover:underline" href="mailto:weisman.inpsyte@inpsytellc.org">
                  weisman.inpsyte@inpsytellc.org
                </a>
              </p>
            </div>

            <div className="mt-10">
              <a
                href="mailto:weisman.inpsyte@inpsytellc.org?subject=Inpsyte%20Inquiry"
                className="inline-flex items-center justify-center rounded-md bg-inpsyte-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-inpsyte-tealDark focus:outline-none focus:ring-2 focus:ring-inpsyte-teal focus:ring-offset-2"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-inpsyte-fog p-6 shadow-soft">
            <p className="text-sm font-semibold text-inpsyte-navy">Optional:</p>
            <p className="mt-2 text-sm text-slate-600">
              If you want a contact form (name/email/message) that emails Dr. Weisman, we can add Resend, Postmark, or
              AWS SES in the next stage.
            </p>

            <div className="mt-6 space-y-3">
              <div className="h-12 rounded-md bg-white" />
              <div className="h-12 rounded-md bg-white" />
              <div className="h-28 rounded-md bg-white" />
              <div className="h-12 rounded-md bg-inpsyte-teal/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-inpsyte-navy text-white">
      <div className="mx-auto max-w-6xl py-12 container-px">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="relative h-10 w-40 bg-transparent">
              <Image
                src="/logo-placeholder.png"
                alt="Inpsyte"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="mt-4 text-sm text-white/80">Your source for psychological services in the greater Cincinnati area.</p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-wide">Useful Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link className="hover:text-white" href="#top">Home</Link></li>
              <li><Link className="hover:text-white" href="#services">Services</Link></li>
              <li><Link className="hover:text-white" href="#faqs">FAQs</Link></li>
              <li><Link className="hover:text-white" href="#contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-wide">Contact & Location</h3>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>1320 Nagel Road PO Box 54864, Cincinnati, OH 45255</p>
              <p><a className="hover:text-white" href="tel:15136044378">(513) 604-4378</a></p>
              <p><a className="hover:text-white" href="mailto:weisman.inpsyte@inpsytellc.org">weisman.inpsyte@inpsytellc.org</a></p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/70">
          Copyright © {new Date().getFullYear()} Inpsyte, LLC.
        </div>
      </div>
    </footer>
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
