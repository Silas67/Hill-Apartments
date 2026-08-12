import { company, siteUrl } from "@/components/constants";

/**
 * RealEstateAgent structured data. Lets Google show the business name, both
 * office locations, phone and social profiles in search results rather than
 * guessing them from the page text.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: company.phone,
    image: `${siteUrl}/opengraph-image`,
    areaServed: company.offices.map((office) => office.label),
    address: company.offices.map((office) => ({
      "@type": "PostalAddress",
      addressLocality: office.label,
      addressCountry: "NG",
      streetAddress: office.address,
    })),
    sameAs: company.socials.map((social) => social.href),
  };

  return (
    <script
      type="application/ld+json"
      // Content is built from our own constants, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
