// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      <nav className="navbar" role="navigation" aria-label="Main">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Business Website Optimiser
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/business">Businesses</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </nav>

      <section className="about-hero">
        <div className="about-intro">
          <h1>Built to make local businesses visible</h1>
          <p className="about-tagline">
            Your business deserves to be easy to find, easy to understand, and
            accessible to everyone.
          </p>
        </div>
      </section>

      <section className="about-content">
        <p>
          Business Website Optimiser creates clean, semantic, search‑ready pages
          and embeddable business cards from your existing details.
        </p>

        <p>
          Every page is built with accessibility in mind: proper headings,
          readable typography, meaningful link text, and layouts that work with
          screen readers and keyboard navigation.
        </p>

        <p>
          We optimise how your business appears to Google by presenting your
          services, location, and contact details in a consistent,
          machine‑readable format.
        </p>

        <p>
          Your business profile and card can be embedded anywhere—Google
          Business Profile, your existing website, partner sites, newsletters,
          or directories.
        </p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Business Website Optimiser — Built for
        visibility, accessibility, and real‑world traffic.
      </footer>
    </main>
  );
}
