import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <Link href="/">OBO</Link>
        </div>

        <div className="nav-right">
          <Link href="/">Home</Link>
          <Link href="/business">Business</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>

      {/* ABOUT CONTENT */}
      <section>
        <h1 className="hero-title">About OBO</h1>

        <p className="hero-subtitle">
          OBO is a premium platform designed to help local service businesses
          present their information in a clean, structured format that search
          engines understand — and customers can find.
        </p>

        <p className="hero-subtitle" style={{ marginTop: "2rem" }}>
          Every page is built with clarity, performance, and real‑world
          usability in mind. The goal is simple: make local businesses visible,
          accessible, and trustworthy online.
        </p>
      </section>

      {/* IMAGE */}
      <section>
        <Image
          src="/images/two.jpg"
          alt="Portrait"
          width={260}
          height={260}
          className="about-image"
        />
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Online Business Optimiser.
      </footer>
    </div>
  );
}
