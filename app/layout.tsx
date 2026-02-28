import "./globals.css";

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
      <body className="antialiased bg-[#F7F3EB] text-[#0A1A2F]">
        {children}
      </body>
    </html>
  );
}
