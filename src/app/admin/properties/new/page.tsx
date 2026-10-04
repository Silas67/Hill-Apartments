import { requireAdmin } from "@/lib/admin/auth";
import PageHeader from "@/components/admin/PageHeader";
import PropertyForm from "@/components/admin/PropertyForm";

export default async function NewPropertyPage() {
  await requireAdmin();
  return (
    <>
      <PageHeader eyebrow="Listings" title="Add property" />
      <PropertyForm />
    </>
  );
}
