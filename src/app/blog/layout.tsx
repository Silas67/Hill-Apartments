import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
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
