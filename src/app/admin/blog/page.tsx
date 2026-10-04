import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";
import PageHeader from "@/components/admin/PageHeader";
import DeleteButton from "@/components/admin/DeleteButton";
import { btnCls, btnGhostCls } from "@/components/admin/ui";
import { formatDate } from "@/lib/format";
import type { BlogPost } from "@/lib/blog";
import { deleteBlogPost } from "./actions";

export default async function BlogAdminPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false, nullsFirst: true })
    .order("created_at", { ascending: false });
  const posts = (data ?? []) as BlogPost[];

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Blog"
        action={
          <Link href="/admin/blog/new" className={btnCls}>
            New article
          </Link>
        }
      />

      {posts.length === 0 ? (
        <p className="prose-quiet">No articles yet. Write your first one.</p>
      ) : (
        <div className="bg-background border border-line overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
                <th className="px-5 py-4 font-normal">Article</th>
                <th className="px-5 py-4 font-normal">Category</th>
                <th className="px-5 py-4 font-normal">Date</th>
                <th className="px-5 py-4 font-normal">Status</th>
                <th className="px-5 py-4 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-b border-line last:border-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 bg-paper shrink-0 overflow-hidden">
                        {p.image_url && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.image_url} alt="" className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-ink font-medium truncate max-w-[26rem]">{p.title}</p>
                        <p className="text-xs text-ink-faint truncate">/blog/{p.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-ink-muted whitespace-nowrap">{p.category}</td>
                  <td className="px-5 py-4 text-ink-muted whitespace-nowrap">
                    {p.published_at ? formatDate(p.published_at) : "—"}
                  </td>
                  <td className={`px-5 py-4 whitespace-nowrap capitalize ${p.status === "published" ? "text-green-700" : "text-ink-faint"}`}>
                    {p.status}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-5">
                      {p.status === "published" && (
                        <Link href={`/blog/${p.slug}`} target="_blank" className={btnGhostCls}>
                          View
                        </Link>
                      )}
                      <Link href={`/admin/blog/${p.id}`} className={btnGhostCls}>
                        Edit
                      </Link>
                      <DeleteButton
                        id={p.id}
                        action={deleteBlogPost}
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
