// app/business/page.tsx
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";

export default async function BusinessPage() {
  const supabase = await supabaseServer();

  const { data: businesses, error } = await supabase
    .from("businesses")
    .select("id, name, phone, email, website_url, slug, tagline_en, address")
    .order("name");

  if (error) return <p>Error loading businesses.</p>;

  return (
    <main className="business-directory">
      {/* NAVBAR */}
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

      <h1 className="directory-title">Local Businesses</h1>

      <section className="directory-list">
        {businesses.map((b) => (
          <Link
            key={b.id}
            href={`/business/${b.slug}`}
            className="directory-row"
          >
            <span className="row-name">{b.name}</span>

            <span className="row-tagline">{b.tagline_en || "—"}</span>

            <span className="row-phone">{b.phone || "—"}</span>

            <span className="row-website">
              {b.website_url
                ? b.website_url.replace("https://", "").replace("http://", "")
                : "—"}
            </span>

            <span className="row-city">{b.address?.city || "—"}</span>

            <span className="row-view">View →</span>
          </Link>
        ))}
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Business Website Optimiser
      </footer>
    </main>
  );
}
