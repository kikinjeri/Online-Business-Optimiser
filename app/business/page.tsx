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
      <main className="page-shell">
        <div className="page-container">
          <h1 className="page-title">Error loading businesses</h1>
          <p className="section-text">Please try again later.</p>
        </div>
      </main>
    );
  }

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
        {/* PAGE TITLE */}
        <h1 className="page-title">Local Businesses</h1>

        <p className="page-intro">
          Browse local businesses and view their profiles, services, and contact
          details.
        </p>

        {/* BUSINESS LIST */}
        <section className="directory-list">
          <ul className="business-list">
            {businesses?.map((b) => (
              <li key={b.id}>
                <Link href={`/business/${b.slug}`} className="business-link">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* FOOTER */}
        <footer className="page-footer">
          <p>© {new Date().getFullYear()} Business Website Optimiser</p>
        </footer>
      </div>
    </main>
  );
}
