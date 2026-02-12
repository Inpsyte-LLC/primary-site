//components/AccessibilityMenu.tsx

"use client";

import { useEffect, useRef, useState } from "react";

type Settings = {
  largeText: boolean;
  highContrast: boolean;
  reduceMotion: boolean;
};

const STORAGE_KEY = "inpsyte_a11y";

function applyToDocument(s: Settings) {
  const root = document.documentElement;

  root.classList.toggle("a11y-large-text", s.largeText);
  root.classList.toggle("a11y-high-contrast", s.highContrast);
  root.classList.toggle("a11y-reduce-motion", s.reduceMotion);
}

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    largeText: false,
    highContrast: false,
    reduceMotion: false,
  });

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  // Load/save settings
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Settings>;
        const next: Settings = {
          largeText: !!parsed.largeText,
          highContrast: !!parsed.highContrast,
          reduceMotion: !!parsed.reduceMotion,
        };
        setSettings(next);
        applyToDocument(next);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    applyToDocument(settings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore
    }
  }, [settings]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Basic focus management
  useEffect(() => {
    if (!open) return;

    const prevActive = document.activeElement as HTMLElement | null;
    // Focus first control inside dialog
    setTimeout(() => {
      const first = dialogRef.current?.querySelector<HTMLElement>("button, input");
      first?.focus();
    }, 0);

    return () => {
      // restore focus
      (prevActive ?? openerRef.current)?.focus?.();
    };
  }, [open]);

  const toggle = (key: keyof Settings) =>
    setSettings((s) => ({ ...s, [key]: !s[key] }));

  const reset = () =>
    setSettings({ largeText: false, highContrast: false, reduceMotion: false });

  return (
    <>
      {/* Floating button */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-[200] hidden md:block">
        <div className="pointer-events-auto rounded-full bg-white shadow-soft">
          <button
            ref={openerRef}
            type="button"
            className="h-8 w-8 md:h-10 md:w-10 bg-blue-900 rounded-full flex items-center justify-center text-xl outline-none focus:ring-4 focus:ring-teal-500/30"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="a11y-dialog"
            aria-label="Open accessibility options"
            title="Accessibility options"
            onClick={() => setOpen(true)}
          >
            <span className="material-symbols-outlined">
              accessibility_new
            </span>
          </button>
        </div>
      </div>

      {/* Dialog */}
      {open ? (
        <div className="fixed inset-0 z-[300]" role="presentation">
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close accessibility options"
            onClick={() => setOpen(false)}
          />

          <div
            id="a11y-dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Accessibility options"
            className="absolute bottom-24 right-6 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-extrabold text-blue-950">Accessibility</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Adjust display options to improve readability.
                </p>
              </div>

              <button
                type="button"
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
                <span className="text-sm font-semibold text-slate-800">Larger text</span>
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={() => toggle("largeText")}
                  className="h-5 w-5"
                />
              </label>

              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
                <span className="text-sm font-semibold text-slate-800">High contrast</span>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={() => toggle("highContrast")}
                  className="h-5 w-5"
                />
              </label>

              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
                <span className="text-sm font-semibold text-slate-800">Reduce motion</span>
                <input
                  type="checkbox"
                  checked={settings.reduceMotion}
                  onChange={() => toggle("reduceMotion")}
                  className="h-5 w-5"
                />
              </label>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={reset}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
                >
                  Reset
                </button>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tip: You can navigate this site using a keyboard (Tab/Shift+Tab).
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
