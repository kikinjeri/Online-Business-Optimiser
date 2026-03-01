import "./globals.css";
import "../styles/styles.css";

export const metadata = {
  title: "OBO – Online Business Optimiser",
  description: "Structured, accessible, search‑ready business pages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[var(--obo-white)] text-[var(--obo-black)]">
        {children}
      </body>
    </html>
  );
}
