"use client";

import React, { useState } from "react";

export default function Contact() {
  // ⭐ Replace with your real Formspree endpoint
  const FORMSPREE_URL = "https://formspree.io/f/mvzbkkag";

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot spam trap
    const trap = (formData.get("company") as string) || "";
    if (trap.trim().length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);

        const message =
          data?.error ||
          data?.errors?.[0]?.message ||
          "Unable to send your message right now. Please try again.";

        throw new Error(message);
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="bg-white px-2 py-16 sm:py-20"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-6xl container-px">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-blue-950">
            Get in Touch
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Reach out with questions about services, scheduling, or consultation.
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded bg-teal-500/70" />
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-extrabold text-blue-950">
                Contact Information
              </h3>

              <div className="mt-6 space-y-4 text-slate-800">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-teal-600">
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

                {/* Phone */}
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

                {/* Email */}
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

          {/* RIGHT COLUMN — FORM */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-extrabold text-blue-950">
                Send a Message
              </h3>

              {/* Therapist liability shield */}
              <p className="mt-2 text-xs text-slate-600">
                Please don’t include highly sensitive personal or medical details
                in your message. This form is not intended for emergencies.
                If you are experiencing a mental health emergency, call 911.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <input type="hidden" name="_subject" value="New website inquiry (Inpsyte)" />
                <input type="hidden" name="source" value="Contact form — inpsytellc.org" />


                {/* Name + Email */}
                <div>
                  <div>
                    <label className="text-sm font-semibold text-slate-800">
                      Name
                    </label>

                    <input
                      name="name"
                      required
                      placeholder="Your name*"
                      className="mt-2 text-black w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 ring-teal-500/30"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="text-sm font-semibold text-slate-800">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com*"
                      className="mt-2 w-full text-black rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 ring-teal-500/30"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Phone (optional)
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="mt-2 text-black w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 ring-teal-500/30"
                  />
                </div>


                {/* Message */}
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Message
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help?*"
                    className="mt-2 text-black w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 ring-teal-500/30"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-bold text-white hover:bg-teal-700 focus:ring-4 focus:ring-teal-500/30 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                {/* Success */}
                {status === "success" && (
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    Message sent successfully. We’ll get back to you soon.
                  </div>
                )}

                {/* Error */}
                {status === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {errorMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
