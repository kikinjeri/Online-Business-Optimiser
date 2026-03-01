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

      <section className="directory-grid">
        {businesses.map((b) => (
          <Link
            key={b.id}
            href={`/business/${b.slug}`}
            className="directory-card"
          >
            <h2 className="card-name">{b.name}</h2>

            {b.tagline_en && <p className="card-tagline">{b.tagline_en}</p>}

            {b.address && (
              <p className="card-address">
                {b.address.street}, {b.address.city}
              </p>
            )}

            <div className="card-meta">
              {b.phone && <span>{b.phone}</span>}
              {b.website_url && (
                <span>
                  {b.website_url.replace("https://", "").replace("http://", "")}
                </span>
              )}
            </div>
          </Link>
        ))}
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Business Website Optimiser
      </footer>
    </main>
  );
}
