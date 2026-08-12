import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Details",
  description:
    "View full details, photos and location for this OG Winners Homes listing.",
  alternates: { canonical: "/individualprop" },
};

export default function IndividualpropLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
