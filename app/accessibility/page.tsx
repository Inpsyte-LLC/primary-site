//app/accessibility/page.tsx

import Link from "next/link";

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="bg-white px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#top"
          className="inline-flex items-center text-sm font-semibold text-teal-700 hover:underline"
        >
          ← Back to home
        </Link>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-blue-950">
          Accessibility Statement
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Inpsyte, LLC is committed to providing a website that is accessible to the widest
          possible audience, regardless of technology or ability. We aim to improve the user
          experience for everyone and apply relevant accessibility best practices.
        </p>

        <h2 className="mt-10 text-2xl font-extrabold text-blue-950">Standards and guidelines</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          We strive to align this website with generally recognized accessibility standards,
          including the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA, where feasible.
        </p>

        <h2 className="mt-10 text-2xl font-extrabold text-blue-950">Accessibility features</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-700">
          <li>Keyboard navigation support across primary site features</li>
          <li>Visible focus indicators to assist keyboard users</li>
          <li>Responsive layout for different devices and zoom levels</li>
          <li>An accessibility options menu (text size, contrast, reduce motion)</li>
        </ul>

        <h2 className="mt-10 text-2xl font-extrabold text-blue-950">Limitations</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          While we work to ensure accessibility, some content or third-party integrations may not
          fully conform to every accessibility standard. We are actively working to identify and
          address issues.
        </p>

        <h2 className="mt-10 text-2xl font-extrabold text-blue-950">Feedback and assistance</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          If you experience difficulty accessing any part of this website, please contact us and
          we will do our best to provide the information you need in an accessible format.
        </p>

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <p className="mt-2 text-sm text-slate-700">
            Phone:{" "}
            <a className="font-semibold text-teal-700 hover:underline" href="tel:15136044378">
              (513) 604-4378
            </a>
            <br />
            Email:{" "}
            <a
              className="font-semibold text-teal-700 hover:underline"
              href="mailto:weisman.inpsyte@inpsytellc.org"
            >
              weisman.inpsyte@inpsytellc.org
            </a>
          </p>
          <p className="mt-3 text-xs text-slate-600">
            We aim to respond within 2 business days.
          </p>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>
      </div>
    </main>
  );
}
