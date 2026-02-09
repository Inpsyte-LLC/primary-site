// components/Contact.tsx
"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" tabIndex={-1} className="bg-white px-2 py-16 sm:py-20" aria-label="Contact">
      <div className="mx-auto max-w-6xl container-px">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-blue-950">
            Get in touch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Reach out with questions about services, scheduling, or consultation.
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded bg-teal-500/70" />
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
          {/* LEFT: Contact info + Map */}
            <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-extrabold text-blue-950">
                Contact information
                </h3>

                <div className="mt-6 space-y-4 text-slate-800">
                <div className="flex items-start gap-3">
                    <span
                    className="material-symbols-outlined mt-0.5 text-teal-600"
                    aria-hidden
                    >
                    location_on
                    </span>
                    <div>
                    <p className="font-semibold text-slate-900">Inpsyte, LLC</p>
                    <p className="text-sm text-slate-700">
                        1320 Nagel Rd, PO Box 54864
                        <br />
                        Cincinnati, OH 45255
                    </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-teal-600">
                    phone_enabled
                    </span>
                    <div className="text-sm">
                    <a
                        className="font-semibold text-slate-900 hover:underline"
                        href="tel:15136044378"
                    >
                        (513) 604-4378
                    </a>
                    <div className="text-slate-600">Main line</div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-teal-600">
                    mail
                    </span>
                    <div className="text-sm">
                    <a
                        className="font-semibold text-slate-900 hover:underline"
                        href="mailto:weisman.inpsyte@inpsytellc.org"
                    >
                        weisman.inpsyte@inpsytellc.org
                    </a>
                    <div className="text-slate-600">Email</div>
                    </div>
                </div>
                </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-teal-600">
                    map
                    </span>
                    <p className="text-sm font-semibold text-slate-900">
                    Location
                    </p>
                </div>

                <a
                    className="text-sm font-semibold text-teal-700 hover:underline"
                    href="https://www.google.com/maps/search/?api=1&query=1320+Nagel+Rd+Cincinnati+OH+45255"
                    target="_blank"
                    rel="noreferrer"
                >
                    Open in Google Maps
                </a>
                </div>

                <div className="relative h-[360px] w-full">
                <iframe
                    title="Map"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=1320%20Nagel%20Rd%20Cincinnati%20OH%2045255&z=13&output=embed"
                />
                </div>
            </div>
            </div>


          {/* RIGHT: Form + Map */}
          <div className="space-y-6">
            {/* Form (UI only) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-extrabold text-blue-950">Send a message</h3>
              <p className="mt-2 text-sm text-red-600">
                This form is currently for layout only, does not work!
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-800">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-teal-500/30 focus:ring-4"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-800">Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-teal-500/30 focus:ring-4"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-800">Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="(555) 555-5555"
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-teal-500/30 focus:ring-4"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-800">Subject</label>
                    <input
                      type="text"
                      placeholder="Scheduling / Evaluation / Consultation"
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-teal-500/30 focus:ring-4"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800">Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help?"
                    className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-teal-500/30 focus:ring-4"
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    Please don’t include highly sensitive personal details in the initial message.
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-bold text-white shadow-soft hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
