import type { Metadata } from "next";

export const metadata: Metadata = {
  // A plain string here would reset the root template for child routes, so
  // individual articles would lose the "| OG Winners Homes" suffix.
  title: {
    default: "Blog",
    template: "%s | OG Winners Homes",
  },
  description:
    "Guides and market insight for buyers, sellers and investors in the Nigerian property market.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
