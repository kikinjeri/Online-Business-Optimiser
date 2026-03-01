import { supabaseServer } from "@/lib/supabase/server";
import Link from "next/link";

export default async function BusinessIndexPage() {
  const supabase = await supabaseServer();

  const { data: businesses, error } = await supabase
    .from("businesses")
    .select("*")
    .order("name");

  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <Link href="/">OBO</Link>
        </div>

        <div className="nav-right">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/businesses">Business</Link>
        </div>
      </nav>

      {/* BUSINESS LIST */}
      <section>
        <h1 className="hero-title">Business</h1>

        {error && <p>Error loading businesses.</p>}
        {businesses?.length === 0 && <p>No businesses found.</p>}

        <div className="business-list">
          {businesses?.map((b) => (
            <div key={b.id} className="business-row">
              <div>
                <div className="business-name">{b.name}</div>
                <div className="business-category">{b.category}</div>
                <div className="business-category">{b.status}</div>
              </div>

              <div>
                <Link href={`/business/${b.slug}`}>View Profile</Link>
                <span style={{ margin: "0 0.5rem" }}></span>
                <Link href={`/business/${b.slug}/card`}>View Card</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Online Business Optimiser.
      </footer>
    </div>
  );
}
