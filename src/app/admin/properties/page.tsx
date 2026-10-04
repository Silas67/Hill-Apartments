import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";
import PageHeader from "@/components/admin/PageHeader";
import DeleteButton from "@/components/admin/DeleteButton";
import { btnCls, btnGhostCls } from "@/components/admin/ui";
import { formatNaira } from "@/lib/format";
import type { Property } from "@/lib/types";
import { deleteProperty } from "./actions";

const statusStyle: Record<Property["status"], string> = {
  published: "text-green-700",
  draft: "text-ink-faint",
  sold: "text-red-700",
  let: "text-accent",
};

export default async function PropertiesPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });
  const properties = (data ?? []) as Property[];

  return (
    <>
      <PageHeader
        eyebrow="Listings"
        title="Properties"
        action={
          <Link href="/admin/properties/new" className={btnCls}>
            Add property
          </Link>
        }
      />

      {properties.length === 0 ? (
        <p className="prose-quiet">No properties yet. Add your first listing.</p>
      ) : (
        <div className="bg-background border border-line overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
                <th className="px-5 py-4 font-normal">Property</th>
                <th className="px-5 py-4 font-normal">Type</th>
                <th className="px-5 py-4 font-normal">Price</th>
                <th className="px-5 py-4 font-normal">Status</th>
                <th className="px-5 py-4 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((p) => (
                <tr key={p.id} className="border-b border-line last:border-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 bg-paper shrink-0 overflow-hidden">
                        {p.images[0] && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.images[0]} alt="" className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-ink font-medium truncate">{p.title}</p>
                        <p className="text-xs text-ink-faint truncate">{p.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-ink-muted whitespace-nowrap">
                    {p.listing_type === "rent" ? "To rent" : "For sale"}
                  </td>
                  <td className="px-5 py-4 text-ink whitespace-nowrap">{formatNaira(p.price)}</td>
                  <td className={`px-5 py-4 whitespace-nowrap capitalize ${statusStyle[p.status]}`}>
                    {p.status}
                    {p.featured && <span className="ml-2 text-ink-faint">★</span>}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-5">
                      <Link href={`/admin/properties/${p.id}`} className={btnGhostCls}>
                        Edit
                      </Link>
                      <DeleteButton
                        id={p.id}
                        action={deleteProperty}
                        confirmText={`Delete "${p.title}"? This cannot be undone.`}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
