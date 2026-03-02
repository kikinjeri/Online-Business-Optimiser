// app/guide/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Guide | Business Profile Link & Embed Code",
  description:
    "A concise guide explaining how your business profile link and embed code support visibility, consistency, and accessibility.",
};

export default function GuidePage() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-12">
      {/* NAVBAR */}
      <nav className="navbar" role="navigation" aria-label="Main">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Business Website Optimiser
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/">Guide</Link>
            <Link href="/business">Businesses</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </nav>

      {/* WELCOME */}
      <h1 className="text-xl font-semibold tracking-tight mb-3">
        Welcome to Business Website Optimiser
      </h1>

      <p className="text-gray-700 text-[0.9rem] leading-relaxed mb-8">
        This short guide explains how to use your business profile link and
        embed code. These tools help strengthen your online presence by keeping
        your information consistent, accessible, and easy for both customers and
        search engines to understand. They are designed to complement your
        existing website and marketing efforts, making it easier for people to
        find accurate, up‑to‑date details about your business wherever they
        look.
      </p>

      {/* WHAT THEY ARE */}
      <h2 className="text-[1.05rem] font-medium mb-2">
        What Your Link and Embed Code Are
      </h2>

      <p className="text-gray-700 text-[0.9rem] leading-relaxed mb-6">
        Your profile link directs customers to a structured business page that
        presents your services, hours, contact information, and location in a
        clear and accessible format. Your embed code is a small snippet you can
        add to your existing website to display your business card or services
        directly on your site. It updates automatically whenever your
        information changes, ensuring your website always reflects the most
        current details without requiring extra maintenance.
      </p>

      {/* BENEFITS */}
      <h2 className="text-[1.05rem] font-medium mb-2">
        How These Tools Support Your Online Presence
      </h2>

      <p className="text-gray-700 text-[0.9rem] leading-relaxed mb-6">
        Using your link and embed code helps maintain consistency across the
        web. When customers see the same information on your website, social
        media, Google Business Profile, and local directories, it builds trust
        and reduces confusion. These tools also create clearer signals for
        search engines. When your profile link appears in multiple trusted
        places, it helps Google confirm your business details and understand
        what you offer, which can strengthen your visibility in local search
        results. Your profile page is also built with accessibility in mind,
        making it easier for customers on all devices and assistive technologies
        to read and navigate your information.
      </p>

      {/* WHERE TO USE LINK */}
      <h2 className="text-[1.05rem] font-medium mb-2">
        Where You Can Use Your Profile Link
      </h2>

      <p className="text-gray-700 text-[0.9rem] leading-relaxed mb-6">
        Your profile link can be added anywhere customers look for information
        about your business. Many businesses include it on their Google Business
        Profile as their website, services link, or “Learn More” link. It also
        works well in an Instagram bio, on a Facebook page, on a LinkedIn
        company profile, or in an email signature. You can include it in QR
        codes on printed materials, add it to local directories, or use it in
        online ads and promotions. Wherever it appears, customers are taken to a
        clear, reliable page that presents your information consistently.
      </p>

      {/* EMBED CODE */}
      <h2 className="text-[1.05rem] font-medium mb-2">
        Where You Can Use Your Embed Code
      </h2>

      <p className="text-gray-700 text-[0.9rem] leading-relaxed mb-4">
        If you have a website, you can embed your business card or services list
        directly into your pages. This helps maintain consistency and ensures
        customers always see the most accurate information. The embed code works
        with most website builders and can be placed wherever you want your
        business details to appear.
      </p>

      <p className="text-xs font-mono bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto mb-8">
        {`<iframe
  src="https://yourdomain.com/business/your-slug"
  title="Your Business Profile"
  loading="lazy"
  style="border:0; width:100%; max-width:480px; height:420px; border-radius:12px;"
></iframe>`}
      </p>

      {/* CONCLUSION */}
      <h2 className="text-[1.05rem] font-medium mb-2">Thank You</h2>

      <p className="text-gray-700 text-[0.9rem] leading-relaxed mb-12">
        Thank you for taking the time to review this guide. If you have any
        questions or would like help using your link or embed code, please feel
        free to{" "}
        <Link href="/about" className="underline">
          contact me
        </Link>
        . I’m always happy to assist.
      </p>

      <footer className="text-xs text-gray-500 border-t pt-6">
        <p>This guide is designed to be accessible and easy to read.</p>
      </footer>
    </main>
  );
}
