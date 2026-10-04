import { requireAdmin } from "@/lib/admin/auth";
import PageHeader from "@/components/admin/PageHeader";
import BlogForm from "@/components/admin/BlogForm";

export default async function NewArticlePage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("blog_posts").select("category");
  const categories = [...new Set((data ?? []).map((r) => r.category as string))].sort();

  return (
    <>
      <PageHeader eyebrow="Journal" title="New article" />
      <BlogForm categories={categories} />
    </>
  );
}
