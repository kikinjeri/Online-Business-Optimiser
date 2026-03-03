// components/BusinessCard.tsx
import Link from "next/link";

type BusinessCardProps = {
  name: string;
  tagline?: string | null;
  phone?: string | null;
  address?: string | null;
  website_url?: string | null;
  services?: string[];
  hours?: Record<string, string> | null;
  theme?: {
    primary: string;
    accent: string;
    text: string;
    background: string;
  };
  lat?: number | null;
  lng?: number | null;
  map_url?: string | null;
};

const DAY_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const DAY_LABELS: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

// Determine if business is open right now
function getOpenStatus(hours: Record<string, string> | null) {
  if (!hours) return null;

  const now = new Date();
  const day = DAY_ORDER[now.getDay() - 1]; // JS: 0=Sun, 1=Mon
  const todayHours = hours[day];

  if (!todayHours || todayHours.toLowerCase() === "closed") return "closed";

  if (todayHours.includes("24/7")) return "open";

  // Format: "9:00 AM - 5:00 PM"
  const [start, end] = todayHours.split(" - ");
  if (!start || !end) return null;

  const startDate = new Date(`1970-01-01 ${start}`);
  const endDate = new Date(`1970-01-01 ${end}`);

  if (now >= startDate && now <= endDate) return "open";
  return "closed";
}

export default function BusinessCard({
  name,
  tagline,
  phone,
  address,
  website_url,
  services = [],
  hours,
  theme,
  lat,
  lng,
  map_url,
}: BusinessCardProps) {
  const bg = theme?.background || "#ffffff";
  const text = theme?.text || "#111827";
  const primary = theme?.primary || "#111827";
  const accent = theme?.accent || "#2563eb";

  const hasHours = hours && Object.keys(hours).length > 0;
  const hasServices = Array.isArray(services) && services.length > 0;

  const openStatus = getOpenStatus(hours);

  const websiteDomain = website_url
    ? website_url.replace("https://", "").replace("http://", "").split("/")[0]
    : null;

  return (
    <article
      aria-label={`${name} business profile`}
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: "760px",
        margin: "0 auto",
        borderRadius: "18px",
        border: `1px solid ${primary}20`,
        background: bg,
        color: text,
        padding: "28px 28px 32px",
        boxShadow: "0 22px 55px rgba(0,0,0,0.16)",
      }}
    >
      {/* Header with tint */}
      <header
        style={{
          marginBottom: "20px",
          paddingBottom: "16px",
          borderBottom: `1px solid ${primary}25`,
          background: `${primary}08`,
          padding: "16px 20px",
          borderRadius: "12px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "1.8rem",
            lineHeight: 1.2,
            color: primary,
          }}
        >
          {name}
        </h1>

        {tagline && (
          <p
            style={{
              margin: "6px 0 0",
              fontSize: "1rem",
              color: `${text}aa`,
            }}
          >
            {tagline}
          </p>
        )}
      </header>

      {/* Contact + location */}
      <section
        aria-label="Contact and location"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.3fr)",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        <div>
          {address && (
            <p style={{ margin: "0 0 10px", fontSize: "1rem" }}>
              <span style={{ fontWeight: 600 }}>📍 Address:</span>{" "}
              <span style={{ color: `${text}cc` }}>{address}</span>
            </p>
          )}

          {map_url && (
            <p style={{ margin: "0 0 10px", fontSize: "1rem" }}>
              <a
                href={map_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: accent,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Open in Google Maps →
              </a>
            </p>
          )}

          {phone && (
            <p style={{ margin: "0 0 10px", fontSize: "1rem" }}>
              <span style={{ fontWeight: 600 }}>📞 Phone:</span>{" "}
              <a
                href={`tel:${phone}`}
                style={{
                  color: accent,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {phone}
              </a>
            </p>
          )}

          {websiteDomain && (
            <p style={{ margin: 0, fontSize: "1rem" }}>
              <span style={{ fontWeight: 600 }}>🌐 Website:</span>{" "}
              <a
                href={website_url!}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: accent,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {websiteDomain} →
              </a>
            </p>
          )}
        </div>

        {/* Hours */}
        {hasHours && (
          <div aria-label="Opening hours">
            <p
              style={{
                margin: "0 0 6px",
                fontSize: "1rem",
                fontWeight: 700,
                color: primary,
              }}
            >
              🕒 Hours{" "}
              {openStatus && (
                <span
                  style={{
                    marginLeft: "6px",
                    fontSize: "0.85rem",
                    padding: "2px 8px",
                    borderRadius: "999px",
                    background:
                      openStatus === "open" ? "#16a34a22" : "#dc262622",
                    color: openStatus === "open" ? "#15803d" : "#b91c1c",
                    fontWeight: 600,
                  }}
                >
                  {openStatus === "open" ? "Open now" : "Closed"}
                </span>
              )}
            </p>

            <dl
              style={{
                margin: 0,
                fontSize: "0.92rem",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                columnGap: "10px",
                rowGap: "4px",
              }}
            >
              {DAY_ORDER.map((day) => {
                const value = hours![day];
                if (!value) return null;

                return (
                  <div key={day} style={{ display: "contents" }}>
                    <dt style={{ fontWeight: 600 }}>
                      {DAY_LABELS[day] || day}
                    </dt>
                    <dd
                      style={{
                        margin: 0,
                        color: `${text}bb`,
                      }}
                    >
                      {value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        )}
      </section>

      {/* Services */}
      {hasServices && (
        <section
          aria-label="Key services"
          style={{
            marginTop: "26px",
            borderTop: `1px solid ${primary}15`,
            paddingTop: "18px",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "1.15rem",
              color: primary,
            }}
          >
            🛠️ Services at a glance
          </h2>

          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "6px 20px",
              fontSize: "0.95rem",
              color: `${text}cc`,
            }}
          >
            {services.slice(0, 8).map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>

          {services.length > 8 && (
            <p
              style={{
                marginTop: "8px",
                fontSize: "0.9rem",
                color: accent,
                fontWeight: 600,
              }}
            >
              + {services.length - 8} more services
            </p>
          )}
        </section>
      )}

      {/* Footer tags */}
      <footer
        aria-label="Trust and accessibility"
        style={{
          marginTop: "26px",
          paddingTop: "16px",
          borderTop: `1px solid ${primary}15`,
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 14px",
          fontSize: "0.85rem",
          color: `${text}99`,
        }}
      >
        <span
          style={{
            padding: "6px 10px",
            borderRadius: "999px",
            border: `1px solid ${accent}33`,
            color: accent,
            fontWeight: 600,
          }}
        >
          Accessible by design
        </span>

        <span
          style={{
            padding: "6px 10px",
            borderRadius: "999px",
            border: `1px solid ${primary}22`,
          }}
        >
          Screen‑reader friendly
        </span>

        <span
          style={{
            padding: "6px 10px",
            borderRadius: "999px",
            border: `1px solid ${primary}22`,
          }}
        >
          SEO‑ready business profile
        </span>
      </footer>
    </article>
  );
}
