import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse apartments, bungalows, duplexes and serviced plots for sale and rent across Abuja and Lagos.",
  alternates: { canonical: "/properties" },
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
