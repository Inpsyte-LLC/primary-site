//components/FAQ.tsx
import React from "react";

type FAQItem = { q: string; a: React.ReactNode };

const FAQS: FAQItem[] = [
  {
    q: "What insurance do you accept?",
    a: (
      <>
        <p>
          Dr. Weisman currently does not accept insurance. All expenses are
          typically out-of-pocket; however, some HSA’s may accept psychotherapy
          services. Patients with HSA’s should consult with their HSA provider
          to determine whether or not they may use HSA funds to cover fees.
        </p>
      </>
    ),
  },
  {
    q: "How much does a session cost?",
    a: (
      <>
        <p>
          For psychotherapy, Dr. Weisman charges one standard fee for an
          initial/intake session that includes a diagnostic interview and
          treatment plan. A separate standard fee is charged for additional
          treatment sessions. Those fees are available over the phone or email.
        </p>
        <p className="mt-4">
          Federal law now requires all providers of psychological services who
          do not accept insurance to provide patients with a Good Faith Estimate
          (GFE) at the outset of treatment that informs the patient of the
          projected length of treatment and the cost. Dr. Weisman will draft a
          GFE during the treatment planning process in the intake session.
        </p>
      </>
    ),
  },
  {
    q: "What should I bring to the intake appointment?",
    a: (
      <p>
        A picture ID (preferably state-issued), list of medications, and any
        phone numbers that may be helpful.
      </p>
    ),
  },
  {
    q: "Do you do custody evaluations?",
    a: <p>Dr. Weisman does not conduct custody and/or divorce proceeding-related evaluations.</p>,
  },
];

export default function FAQ() {
  return (
    <section id="faqs" tabIndex={-1} className="bg-white py-8 sm:py-12" aria-label="FAQs">
      <div className="mx-auto max-w-6xl container-px">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-950">
            FAQs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Here is the list of questions we’ve been frequently asked:
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded bg-teal-500/70" />
        </div>

        {/* FAQ items */}
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold text-blue-950">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="ml-4 text-slate-500 transition-transform duration-200 group-open:rotate-180"
                >
                  ▼
                </span>
              </summary>

              <div className="mt-3 text-sm leading-relaxed text-slate-700">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
