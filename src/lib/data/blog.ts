import { cache } from "react";
import { createPublicClient } from "@/lib/supabase/public";
import type { BlogPost } from "@/lib/blog";

// Public readers. RLS only exposes status = 'published' to visitors.

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await createPublicClient()
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) console.error("getPublishedPosts:", error.message);
  return (data ?? []) as BlogPost[];
}

// cache() lets generateMetadata and the page share one query per request.
export const getPostBySlug = cache(
  async (slug: string): Promise<BlogPost | null> => {
    const { data } = await createPublicClient()
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();
    return (data as BlogPost | null) ?? null;
  }
);
