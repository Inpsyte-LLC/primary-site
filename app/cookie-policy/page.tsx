// app/cookie-policy/page.tsx
import ConsentPreferencesButton from "@/components/ConsentPreferencesButton";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="w-full bg-white text-neutral-800">
      <div className="prose mx-auto max-w-4xl px-4 py-10">
        <Link
          href="/#top"
          className="inline-flex items-center text-sm font-semibold text-teal-700 hover:underline"
        >
          ← Back to home
        </Link>

        <h1 className="text-2xl pt-5">Cookie Policy</h1>

        <p>
          <strong>Effective date:</strong> February 12, 2026
          <br />
          <strong>Last updated:</strong> February 12, 2026
        </p>

        <h2>What are cookies?</h2>
        <p>
          This Cookie Policy explains what cookies are and how we use them. Cookies
          are small text files used to store small pieces of information. They are
          stored on your device when a website loads in your browser.
        </p>
        <p>
          Cookies help websites function properly, improve security, provide a
          better user experience, and understand site performance so we can improve
          content and usability.
        </p>

        <h2>How do we use cookies?</h2>
        <p>Like most websites, we use first-party and third-party cookies for different purposes:</p>
        <ul>
          <li>
            <strong>First-party cookies</strong> are typically necessary for the
            website to function properly and for saving your cookie consent
            choices. These cookies generally do not store personally identifiable
            information.
          </li>
          <li>
            <strong>Third-party cookies</strong> (such as analytics cookies) help
            us understand how visitors use the site (e.g., pages viewed, time on
            site, and traffic sources) so we can improve the site.
          </li>
        </ul>

        <p>
          We do not use cookies for logging into accounts (this website does not
          provide login functionality).
        </p>

        <h2>Types of cookies we use</h2>

        <h3>Necessary</h3>
        <p>
          Necessary cookies help make the website usable by enabling basic
          functions like page navigation and saving your consent preferences. The
          website cannot function properly without these cookies.
        </p>
        <p>
          These may include cookies or local storage entries used by our consent
          management platform (CookieYes) to remember your choices.
        </p>
        <p>
          <em>
            Note: The exact names of necessary cookies can vary depending on your
            configuration and whether CookieYes updates their implementation.
          </em>
        </p>

        <h3>Analytics</h3>
        <p>
          Analytics cookies help us understand how visitors interact with the
          website. The information collected is used to compile reports and help us
          improve the site.
        </p>
        <p>
          If enabled, this site may use Google Analytics, which can set cookies such as:
        </p>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Duration</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>_ga</code></td>
                <td>2 years</td>
                <td>Used by Google Analytics to distinguish users and measure site usage.</td>
              </tr>
              <tr>
                <td><code>_ga_*</code></td>
                <td>2 years</td>
                <td>Used by Google Analytics to store and count page views / session data (property-specific).</td>
              </tr>
              <tr>
                <td><code>_gid</code></td>
                <td>24 hours</td>
                <td>Used by Google Analytics to distinguish users for reporting.</td>
              </tr>
              <tr>
                <td><code>_gat</code></td>
                <td>1 minute</td>
                <td>Used by Google Analytics to throttle request rate.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Important:</strong> Actual cookies may differ depending on whether
          you use Google Analytics directly, Google Tag Manager, Consent Mode, and
          the specific GA configuration. CookieYes can scan and populate the live
          cookie list.
        </p>

        <h2>Manage cookie preferences</h2>

        <h3>Consent Preferences</h3>
        <p>
          You can change your cookie settings at any time by clicking the{" "}
          <strong>“Consent Preferences”</strong> button (or by reopening the cookie
          banner). This lets you review, update, or withdraw your consent.
        </p>

        {/* Optional: If you want a visible button on the page */}
        <p className="not-prose">
          <ConsentPreferencesButton />
        </p>


        <h3>Browser controls</h3>
        <p>
          You can also control cookies through your browser settings. Most browsers
          allow you to view, manage, delete, and block cookies for a website.
        </p>

        <ul>
          <li>
            Chrome:{" "}
            <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noreferrer">
              https://support.google.com/accounts/answer/32050
            </a>
          </li>
          <li>
            Safari:{" "}
            <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">
              https://support.apple.com/en-in/guide/safari/sfri11471/mac
            </a>
          </li>
          <li>
            Firefox:{" "}
            <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noreferrer">
              https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
            </a>
          </li>
          <li>
            Internet Explorer:{" "}
            <a
              href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
              target="_blank"
              rel="noreferrer"
            >
              https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
            </a>
          </li>
        </ul>

        <h2>Updates to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in
          technology, law, or our website practices. When we do, we will revise the
          “Last updated” date at the top of this page.
        </p>

        <p>
          <em>Cookie Policy generated/managed using CookieYes.</em>
        </p>
      </div>
    </div>
  );
}
