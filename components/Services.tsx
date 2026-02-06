//components/Services.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-950">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          {subtitle}
        </p>
      )}

      <div className="mx-auto mt-8 h-1 w-24 rounded bg-teal-500/70" />
    </div>
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
      <h3 className="text-3xl font-extrabold text-blue-950">{title}</h3>
      <div className="mt-4 text-lg leading-relaxed text-slate-700">
        {body}
      </div>
    </section>
  );
}

export default function Services() {
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
    "Assessment and treatment of PTSD and complex trauma",
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
    <section id="services" className="bg-gray-200 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl container-px">
        <SectionTitle
          title="Our Services"
          subtitle="Explore offerings and jump to details below."
        />

        {/* SUMMARY CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Assessment */}
          <Link
            href="#service-assessment"
            className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100">
              <Image
                src="/assessment.png"
                alt="Assessment icon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <h3 className="mt-6 text-xl font-extrabold text-blue-950">
              Assessment & Evaluation
            </h3>

            <p className="mt-3 text-lg leading-relaxed text-slate-700">
              Adult and child assessments, psychoeducational testing, risk and
              forensic-related evaluations.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
              View details →
            </span>
          </Link>

          {/* Therapy */}
          <Link
            href="#service-therapy"
            className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100">
              <Image
                src="/psychology.png"
                alt="Psychology icon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <h3 className="mt-6 text-xl font-extrabold text-blue-950">
              Therapy Services
            </h3>

            <p className="mt-3 text-lg leading-relaxed text-slate-700">
              Targeted, evidence-based treatment for adults, including
              trauma-focused approaches.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
              View details →
            </span>
          </Link>

          {/* Workshops */}
          <Link
            href="#service-workshops"
            className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100">
              <Image
                src="/workshops.png"
                alt="Workshops icon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <h3 className="mt-6 text-xl font-extrabold text-blue-950">
              Workshops, Seminars, & Consultation
            </h3>

            <p className="mt-3 text-lg leading-relaxed text-slate-700">
              Trainings for public agencies and providers, plus consultation
              tailored to your needs.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
              View details →
            </span>
          </Link>
        </div>

        {/* DETAILS */}
        <div className="mt-14 space-y-8">
          <ServiceDetail
            id="service-assessment"
            title="Assessment & Evaluation"
            body={
              <>
                <p>
                  Dr. Weisman has specialized in assessment and evaluation during his training and career. His work in both criminal and civil evaluations also involves providing expert testimony and routine and specialized consultation with the courts, other legal entities, other agencies, and other psychologists.
                <br />
                <br />
                Dr. Weisman’s assessment and evaluation specialties for both adults and children include:
                </p>

                <p className="mt-4 font-semibold text-blue-950">
                  Assessment specialties include:
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
                  Dr. Weisman has earned a reputation as a highly effective therapist. He developed and led the implementation of an evidence-based trauma-focused treatment package for the Montgomery County Specialty Court dockets during his internship and post-doctoral fellowship. Dr. Weisman’s carefully measured blend of cognitive-behavioral and interpersonal process interventions continue to quickly and effectively help a diverse population with a wide variety of life circumstances and problems. His approach to treatment is targeted and rapid to address specific issues and help a patient quickly improve his/her/their situation and life. Dr. Weisman presently works with individual adult patients and would consider a referral for a patient as young as 16. Group therapy referrals are also presently being accepted for adults. His clinical treatment specialties include:
                </p>

                <p className="mt-4 font-semibold text-blue-950">
                  Clinical treatment specialties include:
                </p>

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
                  Dr. Weisman has conducted seminars and workshops for the lay public, police departments, court staff, citizens returning from incarceration, and clinical providers and consumers from around the world on topics that include:
                </p>

                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {workshopsItems.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href="#contact"
                    className="inline-flex items-center uppercase justify-center rounded-md bg-teal-400 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-teal-600"
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

