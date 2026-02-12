//components/ConsentPreferencesButton.tsx

"use client";

export default function ConsentPreferencesButton() {
  const handleClick = () => {
    // CookieYes sometimes loads under different globals.
    if (typeof window !== "undefined") {
      // try common APIs safely
      // @ts-ignore
      window?.CookieYes?.show?.();

      // fallback some installs use
      // @ts-ignore
      window?.cookieyes?.show?.();

      // LAST fallback — reopen banner
      document.dispatchEvent(new Event("cookieyes_show_banner"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
    >
      Consent Preferences
    </button>
  );
}
