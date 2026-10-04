import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetail from "@/components/pages/PropertyDetail";
import { getPropertyById } from "@/lib/data/properties";
import { formatNaira } from "@/lib/format";

export const revalidate = 60;

type Params = { params: Promise<{ id: string }> };

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  if (!UUID.test(id)) return { title: "Property not found" };

  const p = await getPropertyById(id);
  if (!p) return { title: "Property not found" };

  const description =
    p.description?.slice(0, 160) ??
    `${p.title} in ${p.location}, ${formatNaira(p.price)}.`;

  return {
    title: `${p.title}, ${p.location}`,
    description,
    alternates: { canonical: `/properties/${p.id}` },
    openGraph: {
      title: p.title,
      description,
      images: p.images[0] ? [p.images[0]] : undefined,
    },
  };
}

export default async function PropertyPage({ params }: Params) {
  const { id } = await params;
  if (!UUID.test(id)) notFound();

  // Drafts are invisible to the public client (RLS), so they 404 here.
  const property = await getPropertyById(id);
  if (!property) notFound();

  return <PropertyDetail property={property} />;
}
