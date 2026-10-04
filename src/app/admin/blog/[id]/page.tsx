import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import PageHeader from "@/components/admin/PageHeader";
import BlogForm from "@/components/admin/BlogForm";
import type { BlogPost } from "@/lib/blog";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { supabase } = await requireAdmin();
  const { id } = await params;

  const [{ data: post }, { data: cats }] = await Promise.all([
    supabase.from("blog_posts").select("*").eq("id", id).maybeSingle(),
    supabase.from("blog_posts").select("category"),
  ]);

  if (!post) notFound();
  const categories = [...new Set((cats ?? []).map((r) => r.category as string))].sort();

  return (
    <>
      <PageHeader eyebrow="Journal" title="Edit article" />
      <BlogForm post={post as BlogPost} categories={categories} />
    </>
  );
}
