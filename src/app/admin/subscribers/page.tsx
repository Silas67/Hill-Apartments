import { requireAdmin } from "@/lib/admin/auth";
import PageHeader from "@/components/admin/PageHeader";
import DeleteButton from "@/components/admin/DeleteButton";
import { btnCls } from "@/components/admin/ui";
import { formatDate } from "@/lib/format";
import type { Subscriber } from "@/lib/types";
import { deleteSubscriber } from "./actions";

export default async function SubscribersPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase
    .from("subscribers")
    .select("*")
    .order("created_at", { ascending: false });
  const subscribers = (data ?? []) as Subscriber[];

  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title={`Subscribers (${subscribers.length})`}
        action={
          subscribers.length > 0 ? (
            <a href="/admin/subscribers/export" className={btnCls}>
              Export CSV
            </a>
          ) : undefined
        }
      />

      {subscribers.length === 0 ? (
        <p className="prose-quiet">No subscribers yet.</p>
      ) : (
        <div className="bg-background border border-line max-w-3xl overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
                <th className="px-5 py-4 font-normal">Email</th>
                <th className="px-5 py-4 font-normal">Subscribed</th>
                <th className="px-5 py-4 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s) => (
                <tr key={s.id} className="border-b border-line last:border-0">
                  <td className="px-5 py-4 text-ink">{s.email}</td>
                  <td className="px-5 py-4 text-ink-muted whitespace-nowrap">
                    {formatDate(s.created_at)}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end">
                      <DeleteButton
                        id={s.id}
                        action={deleteSubscriber}
                        confirmText={`Remove ${s.email}?`}
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
