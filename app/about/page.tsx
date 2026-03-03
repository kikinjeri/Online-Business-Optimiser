// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-shell">
      {/* NAVBAR — consistent across app */}
      <nav className="site-navbar" role="navigation" aria-label="Main">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Business Website Optimiser
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/guide">Guide</Link>
            <Link href="/business">Businesses</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </nav>

      <div className="page-container">
        {/* TITLE */}
        <h1 className="page-title">About Us</h1>

        <p className="page-intro">
          We’re a small team of web developers who care about clean, accessible
          design and helping local businesses connect with more people. Our goal
          is to make it easier for business owners to share accurate, up‑to‑date
          information everywhere customers look.
        </p>

        <section className="guide-section">
          <h2 className="section-title">What We Do</h2>
          <p className="section-text">
            Business Website Optimiser provides simple tools that help you keep
            your business information consistent across the web. Your Business
            Profile and Embed Code work together to present your services,
            hours, and contact details in a clear, trustworthy format that’s
            easy for customers — and search engines — to understand.
          </p>
        </section>

        <section className="guide-section">
          <h2 className="section-title">Why It Matters</h2>
          <p className="section-text">
            Clear, consistent information builds trust and improves visibility.
            When customers can quickly understand what you offer and how to
            reach you, they’re more likely to get in touch. When search engines
            can read your content easily, your business becomes easier to find.
          </p>
        </section>

        <section className="guide-section">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-text">
            If you have questions, feedback, or ideas, we’d love to hear from
            you. You can reach out anytime through the{" "}
            <Link href="/guide" className="underline">
              Guide
            </Link>{" "}
            or by exploring your business profile tools.
          </p>
        </section>

        <footer className="guide-footer">
          <p>© {new Date().getFullYear()} Business Website Optimiser</p>
        </footer>
      </div>
    </main>
  );
}
