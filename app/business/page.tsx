// app/business/page.tsx
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";

export default async function BusinessPage() {
  const supabase = await supabaseServer();

  const { data: businesses, error } = await supabase
    .from("businesses")
    .select("id, name, slug")
    .order("name");

  if (error) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Error loading businesses</h1>
        <p>Please try again later.</p>
      </main>
    );
  }

  // Global accessible theme (same defaults as BusinessCard)
  const theme = {
    primary: "#111827",
    text: "#111827",
    accent: "#2563eb",
  };

  return (
    <main
      className="business-directory"
      style={{
        padding: "32px 0",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {/* Navbar */}
        <nav
          className="navbar"
          role="navigation"
          aria-label="Main"
          style={{
            marginBottom: "32px",
            paddingBottom: "16px",
            borderBottom: `1px solid ${theme.primary}22`,
          }}
        >
          <div
            className="nav-inner"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              href="/"
              className="nav-logo"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                textDecoration: "none",
                color: theme.primary,
              }}
            >
              Business Website Optimiser
            </Link>

            <div
              className="nav-links"
              style={{
                display: "flex",
                gap: "18px",
                fontSize: "0.95rem",
              }}
            >
              <Link
                href="/"
                style={{ textDecoration: "none", color: theme.text }}
              >
                Home
              </Link>
              <Link
                href="/guide"
                style={{ textDecoration: "none", color: theme.text }}
              >
                Guide
              </Link>
              <Link
                href="/business"
                style={{ textDecoration: "none", color: theme.text }}
              >
                Business
              </Link>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: theme.text }}
              >
                About
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Title */}
        <h1
          className="directory-title"
          style={{
            fontSize: "2rem",
            marginBottom: "24px",
            color: theme.primary,
          }}
        >
          Local Businesses
        </h1>

        {/* Simple list of business names */}
        <section
          className="directory-list"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {businesses?.map((b) => (
            <Link
              key={b.id}
              href={`/business/${b.slug}`}
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: theme.accent,
                textDecoration: "none",
                padding: "4px 0",
              }}
            >
              {b.name}
            </Link>
          ))}
        </section>

        {/* Footer */}
        <footer
          className="footer"
          style={{
            marginTop: "40px",
            paddingTop: "20px",
            borderTop: `1px solid ${theme.primary}22`,
            textAlign: "center",
            color: `${theme.text}aa`,
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} Business Website Optimiser
        </footer>
      </div>
    </main>
  );
}
