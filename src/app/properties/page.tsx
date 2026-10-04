import type { Metadata } from "next";
import PropertiesClient from "@/components/pages/PropertiesClient";
import { getPublishedProperties, toCardItem } from "@/lib/data/properties";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse homes, apartments and serviced plots for rent and sale across Abuja.",
  alternates: { canonical: "/properties" },
};

// Re-fetch at most once a minute, and instantly when the admin saves
// (the admin actions call revalidatePath).
export const revalidate = 60;

export default async function PropertiesPage() {
  const properties = await getPublishedProperties();
  return <PropertiesClient items={properties.map(toCardItem)} />;
}
