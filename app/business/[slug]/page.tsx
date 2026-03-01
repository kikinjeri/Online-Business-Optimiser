// app/business/[slug]/page.tsx
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";
import BusinessCard from "@/components/BusinessCard";

export default async function BusinessDetailPage({ params }) {
  const supabase = await supabaseServer();

  // Fetch business
  const { data: business } = await supabase
    .from("businesses")
    .select(
      "id, name, slug, tagline_en, phone, email, website_url, address, hours_json",
    )
    .eq("slug", params.slug)
    .single();

  // Fetch services
  const { data: services } = await supabase
    .from("services")
    .select("id, name_en, description_en, starting_price")
    .eq("business_id", business.id);

  // Fetch service areas
  const { data: areas } = await supabase
    .from("service_areas")
    .select("id, name_en")
    .eq("business_id", business.id);

  return (
    <main className="business-page">
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

      {/* HERO */}
      <section className="business-hero">
        <h1>{business.name}</h1>
        {business.tagline_en && (
          <p className="tagline">{business.tagline_en}</p>
        )}

        <div className="hero-actions">
          {business.phone && (
            <a href={`tel:${business.phone}`} className="btn-primary">
              Call {business.phone}
            </a>
          )}
          {business.website_url && (
            <a
              href={business.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit Website
            </a>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section className="business-services">
        <h2>Services</h2>

        {services.length === 0 && <p>No services listed yet.</p>}

        <ul className="service-list">
          {services.map((s) => (
            <li key={s.id} className="service-item">
              <h3>{s.name_en}</h3>
              {s.description_en && <p>{s.description_en}</p>}
              {s.starting_price && (
                <p className="price">Starting at: {s.starting_price}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICE AREAS */}
      <section className="business-areas">
        <h2>Service Areas</h2>
        {areas.length === 0 && <p>No service areas listed.</p>}

        <ul className="area-list">
          {areas.map((a) => (
            <li key={a.id}>{a.name_en}</li>
          ))}
        </ul>
      </section>

      {/* CONTACT + HOURS */}
      <section className="business-contact">
        <h2>Contact</h2>

        {business.phone && (
          <p>
            <strong>Phone:</strong> {business.phone}
          </p>
        )}
        {business.email && (
          <p>
            <strong>Email:</strong> {business.email}
          </p>
        )}
        {business.website_url && (
          <p>
            <strong>Website:</strong>{" "}
            <a href={business.website_url} target="_blank">
              {business.website_url}
            </a>
          </p>
        )}

        {business.address && (
          <p>
            <strong>Address:</strong>{" "}
            {`${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postal}`}
          </p>
        )}

        {business.hours_json && (
          <div>
            <strong>Hours:</strong>
            <pre>{JSON.stringify(business.hours_json, null, 2)}</pre>
          </div>
        )}
      </section>

      {/* EMBED CARD */}
      <section className="business-card-embed">
        <h2>Business Card</h2>
        <BusinessCard
          name={business.name}
          tagline={business.tagline_en}
          phone={business.phone}
          address={
            business.address
              ? `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postal}`
              : null
          }
          slug={business.slug}
          services={services}
        />
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Business Website Optimiser
      </footer>
    </main>
  );
}
