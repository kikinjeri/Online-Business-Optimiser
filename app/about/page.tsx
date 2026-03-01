// app/about/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* GLOBAL HEADER */}
      <header className="global-header">
        <Link href="/" className="header-logo">
         OBO
        </Link>

        <nav className="header-nav">
          <Link href="/">Home</Link>
          <Link href="/business">Businesses</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="about-hero">
        <div className="about-intro">
          <h1>Our Mission</h1>
          <p className="about-tagline">
            Support local businesses by creating an accessible, search‑ready platforms where they can easily be found.
          </p>
        </div>
      </section>

      {/* CORE EXPLANATION */}
      <section className="about-content">
        <p>
          OBO creates clean, semantic HTML pages for every business — the same
          structure Google prefers when indexing local services. This gives each
          business a fast, lightweight presence that loads instantly and works
          everywhere.
        </p>

        <p>
          Every page is built with accessibility in mind: readable typography,
          proper headings, alt text, and keyboard‑friendly navigation. This
          ensures that all customers — including those using assistive
          technologies — can access your business information.
        </p>

        <p>
          OBO improves Google visibility by presenting business details in a
          structured, machine‑readable format. Search engines can understand
          your services, location, and contact information more clearly, which
          increases impressions and ranking opportunities.
        </p>

        <p>
          Each business page can be embedded anywhere — websites, blogs,
          newsletters, directories, or partner pages. This makes your business
          more discoverable and allows your information to travel beyond a
          single platform.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} OBO — Online Business Optimiser
      </footer>
    </main>
  );
}
