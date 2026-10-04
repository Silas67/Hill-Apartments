import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import PageHeader from "@/components/admin/PageHeader";
import PropertyForm from "@/components/admin/PropertyForm";
import type { Property } from "@/lib/types";

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { supabase } = await requireAdmin();
  const { id } = await params;

  const { data } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!data) notFound();

  return (
    <>
      <PageHeader eyebrow="Listings" title="Edit property" />
      <PropertyForm property={data as Property} />
    </>
  );
}
