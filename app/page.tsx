"use client";

import { useState } from "react";

export default function HomePage() {
  const [showExample, setShowExample] = useState(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-neutral-950 text-neutral-50">
        {/* HEADER */}
        <header className="border-b border-neutral-800">
          <nav
            className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8"
            aria-label="Primary"
          >
            {/* BRAND */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400">
                {/* Bold upward arrow with stem */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 3l6 6h-4v9h-4V9H6l6-6z" />
                </svg>
              </span>

              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-300">
                Online Business Optimiser
              </span>
            </div>

            {/* NAV LINKS */}
            <div className="hidden gap-6 text-sm text-neutral-300 md:flex">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <a
                href="/businesses"
                className="hover:text-white transition-colors"
              >
                Businesses
              </a>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
            </div>
          </nav>
        </header>

        {/* MAIN */}
        <main
          id="main"
          className="mx-auto max-w-6xl px-4 pb-16 pt-10 lg:px-8 lg:pt-20"
        >
          {/* HERO */}
          <section
            aria-labelledby="hero-heading"
            className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-emerald-300 uppercase">
                Local. Visible. Accessible.
              </p>

              {/* NEW HEADLINE */}
              <h1
                id="hero-heading"
                className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Accessible websites built to be found.
              </h1>

              {/* NEW SUBCOPY */}
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
                OBO converts your business details into a semantic, accessible
                page that performs well across search, devices, and assistive
                tech.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-medium text-neutral-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
                  Start an OBO page
                </button>

                <button
                  type="button"
                  onClick={() => setShowExample((prev) => !prev)}
                  className="rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                  aria-expanded={showExample}
                  aria-controls="example-card"
                >
                  {showExample
                    ? "Hide example business card"
                    : "See example business card"}
                </button>
              </div>
            </div>

            {/* CINEMATIC PANEL */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between text-[11px] text-neutral-400">
                  <span>OBO preview · Local service business</span>
                  <span>Semantic · Accessible · Search‑ready</span>
                </div>

                <div className="mt-4 rounded-2xl bg-neutral-950/80 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-emerald-300">
                        Greenline Physiotherapy
                      </p>
                      <p className="mt-1 text-[11px] text-neutral-400">
                        Evidence‑based care in downtown Ottawa. Fully
                        accessible, by appointment.
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-medium text-emerald-300">
                      OBO page
                    </span>
                  </div>

                  <dl className="mt-4 grid gap-3 text-[11px] text-neutral-300 sm:grid-cols-2">
                    <div>
                      <dt className="text-neutral-500">Location</dt>
                      <dd>245 Bank Street, Ottawa</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-500">Hours</dt>
                      <dd>Mon–Fri · 8:00–18:00</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-500">Contact</dt>
                      <dd>(613) 555‑0192 · info@greenlinephysio.ca</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-500">Accessibility</dt>
                      <dd>
                        Step‑free entrance · Elevator · Screen‑reader friendly
                        page
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>

          {/* TRUST STRIP — UPDATED */}
          <section className="mt-14 border-y border-neutral-900 py-6">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
              <p>
                Built to help businesses improve their visibility on Google.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-neutral-800 px-3 py-1">
                  Semantic HTML
                </span>
                <span className="rounded-full border border-neutral-800 px-3 py-1">
                  WCAG‑minded
                </span>
                <span className="rounded-full border border-neutral-800 px-3 py-1">
                  Search‑ready
                </span>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="mt-14" aria-labelledby="how-heading">
            <h2
              id="how-heading"
              className="text-lg font-semibold tracking-tight text-white sm:text-xl"
            >
              From raw details to a finished, premium business page.
            </h2>

            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              <li className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5">
                <p className="text-xs font-medium text-neutral-400">Step 1</p>
                <p className="mt-2 text-sm font-medium text-white">
                  You share the essentials.
                </p>
                <p className="mt-2 text-xs text-neutral-400">
                  Services, location, hours, accessibility, contact, and what
                  makes your work different.
                </p>
              </li>

              <li className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5">
                <p className="text-xs font-medium text-neutral-400">Step 2</p>
                <p className="mt-2 text-sm font-medium text-white">
                  OBO builds the semantic page.
                </p>
                <p className="mt-2 text-xs text-neutral-400">
                  Clean structure, correct landmarks, and copy that reads like a
                  premium site—not a directory listing.
                </p>
              </li>

              <li className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5">
                <p className="text-xs font-medium text-neutral-400">Step 3</p>
                <p className="mt-2 text-sm font-medium text-white">
                  You share or embed it anywhere.
                </p>
                <p className="mt-2 text-xs text-neutral-400">
                  Link it, embed it, or hand it to your web developer as a
                  ready‑to‑use foundation.
                </p>
              </li>
            </ol>
          </section>

          {/* ACCESSIBILITY SECTION */}
          <section className="mt-14" aria-labelledby="accessibility-heading">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
              <div>
                <h2
                  id="accessibility-heading"
                  className="text-lg font-semibold tracking-tight text-white sm:text-xl"
                >
                  Structured for clarity, trust, and real‑world accessibility.
                </h2>

                <p className="mt-3 text-sm text-neutral-300">
                  Every OBO page starts with semantic HTML, clear headings, and
                  meaningful landmarks so search engines, screen readers, and
                  busy humans can understand your business quickly.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  <li>
                    • Logical heading structure and ARIA where it actually
                    helps.
                  </li>
                  <li>
                    • Copy that respects attention and still feels high‑end.
                  </li>
                  <li>
                    • Layouts that stay readable on phones, tablets, and
                    desktops.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4 text-xs text-neutral-300">
                <p className="font-mono text-[11px] text-neutral-500 mb-2">
                  Example: HTML business card snippet
                </p>

                <pre
                  id="example-card"
                  className={`overflow-x-auto rounded-xl bg-neutral-950 p-3 text-[11px] leading-relaxed ${
                    showExample ? "opacity-100" : "opacity-40"
                  }`}
                  aria-hidden={!showExample}
                >
                  {`<section aria-labelledby="business-name">
  <h1 id="business-name">Greenline Physiotherapy</h1>
  <p>Evidence-based physiotherapy in downtown Ottawa.</p>
  <p><strong>Location:</strong> 245 Bank Street, Ottawa</p>
  <p><strong>Hours:</strong> Mon–Fri · 8:00–18:00</p>
  <p><strong>Contact:</strong> (613) 555-0192 · info@greenlinephysio.ca</p>
  <p><strong>Accessibility:</strong> Step-free entrance, elevator, screen-reader friendly page.</p>
</section>`}
                </pre>

                <p className="mt-3 text-[11px] text-neutral-400">
                  OBO turns this kind of clean structure into a fully styled,
                  premium‑feeling page or embeddable card.
                </p>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="mt-16 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-transparent px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-base font-semibold text-white sm:text-lg">
                  Ready to see your business through OBO’s lens?
                </h2>
                <p className="mt-2 text-sm text-neutral-200">
                  Share your details once. Get a page that feels like a custom
                  build, not a template.
                </p>
              </div>

              <button className="self-start rounded-full bg-white px-6 py-2.5 text-sm font-medium text-neutral-950 shadow-lg shadow-emerald-500/30 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
                Start an OBO page
              </button>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-neutral-900 py-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-xs text-neutral-500 lg:px-8">
            <p>© {new Date().getFullYear()} Online Business Optimiser.</p>
            <p>Built with care for local service businesses.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
