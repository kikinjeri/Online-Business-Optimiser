OBO — Online Business Optimiser
OBO is a premium, accessibility‑first platform that transforms raw business details into semantic, search‑ready, editorial‑quality business pages. It’s designed for local service businesses that need clarity, trust, and visibility — without hiring a full web team.

Every OBO page is fast, accessible, WCAG‑minded, and structured for both humans and search engines. The result feels custom, intentional, and premium.

🌱 Purpose
Local businesses often struggle with:

Generic templates

Poor accessibility

Weak SEO structure

Inconsistent or unclear information

OBO solves this by generating clean, semantic HTML with editorial polish and consistent structure — elevating local businesses beyond directory listings.

🧭 How OBO Works
You provide the essentials  
Services, location, hours, accessibility details, and what makes the business unique.

OBO builds the semantic page  
Clean structure, correct landmarks, and premium editorial layout.

You share or embed it anywhere  
Google Business Profile, websites, social platforms, or as a standalone page.

🧩 Core Features
Semantic HTML with correct headings and ARIA landmarks

WCAG‑minded accessibility baked into every page

Editorial clarity that feels premium and trustworthy

Embeddable business cards for sharing and SEO

Consistent structure that improves search engine understanding

Mobile‑first, responsive layouts

📸 Screenshots
<div align="center">

🏠 Homepage
<img src="./screenshots/homepage.jpeg" alt="OBO Homepage" width="800" />

ℹ️ About Page
<img src="./screenshots/about.jpeg" alt="OBO About Page" width="800" />

</div>

🛠️ Tech Stack
Next.js / React — modern, fast, accessible UI

TypeScript — reliability and maintainability

Semantic HTML + ARIA — accessibility and structure

CSS Modules / Tailwind (depending on setup) — clean, scalable styling

Postgres / API layer — structured business data (if applicable)

📦 Getting Started
Install dependencies
bash
npm install
Run the development server
bash
npm run dev
Visit http://localhost:3000 to view the app.

📁 Project Structure
txt
/
├─ app/                # Next.js routes (homepage, about, business pages)
├─ components/         # Reusable UI components
├─ lib/                # Utilities, parsers, helpers
├─ public/             # Static assets (screenshots, icons)
└─ styles/             # Global and component styles
🧪 Example Output (Semantic Business Section)
html
<section aria-labelledby="business-name">
  <h1 id="business-name">Greenline Physiotherapy</h1>
  <p>Evidence-based physiotherapy in downtown Ottawa.</p>
  <p><strong>Location:</strong> 245 Bank Street, Ottawa</p>
  <p><strong>Hours:</strong> Mon–Fri · 8:00–18:00</p>
  <p><strong>Contact:</strong> (613) 555-0192 · info@greenlinephysio.ca</p>
  <p><strong>Accessibility:</strong> Step-free entrance, elevator, screen-reader friendly page.</p>
</section>
🎯 Vision
OBO exists to make local businesses visible, trustworthy, and accessible — without complexity.
It’s built with care, editorial intention, and a deep respect for structure.

📜 License
MIT License.

