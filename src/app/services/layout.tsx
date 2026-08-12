import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Home buying consultation, property sales and marketing, investment advice and full property management from OG Winners Homes.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
