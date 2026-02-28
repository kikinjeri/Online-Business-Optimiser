"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white text-neutral-800">
      {/* NAVBAR */}
      <nav className="w-full border-b border-neutral-200 bg-white text-neutral-900 py-4 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400">
              {/* Upward arrow with stem */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="h-4 w-4"
              >
                <path d="M12 3l6 6h-4v9h-4V9H6l6-6z" />
              </svg>
            </span>

            <span className="text-sm font-semibold tracking-[0.18em] uppercase">
              Online Business Optimiser
            </span>
          </Link>

          <div className="flex gap-8 text-sm">
            <Link href="/" className="hover:text-emerald-600 transition">
              Home
            </Link>
            <Link
              href="/businesses"
              className="hover:text-emerald-600 transition"
            >
              Business
            </Link>
            <Link href="/about" className="hover:text-emerald-600 transition">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="px-8 py-20">
        <h1 className="text-5xl font-semibold tracking-tight text-center mb-16 text-black">
          About OBO
        </h1>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* TEXT */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-emerald-600">
                Optimising Local Businesses for the Online World
              </h2>

              <p className="text-lg leading-relaxed text-neutral-700">
                I’m Mwihaki Githii, a web developer specialising in semantic
                structure, accessibility, and search‑ready interfaces. I created
                OBO to help local businesses present their information in a
                clean, structured format that search engines understand — and
                customers can find.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-neutral-700">
              My work focuses on HTML‑first business pages, structured business
              cards, and embeddable profiles that improve visibility,
              accessibility, and discoverability across the web. Every page is
              built with clarity, performance, and real‑world usability in mind.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center items-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-emerald-500/10 blur-2xl" />
              <img
                src="/images/two.jpg"
                alt="Portrait of Mwihaki Githii"
                className="relative h-[260px] w-auto rounded-xl shadow-xl object-cover border border-neutral-200"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
