"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import { estimateReadTime, SLUG_RE, slugify, type Block } from "@/lib/blog";

export type FormState = { error?: string };

const text = (f: FormData, k: string) => String(f.get(k) ?? "").trim();

// Only accept cover images that live in OUR media bucket.
const storagePrefix = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/`;
const ownedPath = (url: string | null | undefined) =>
  url && url.startsWith(storagePrefix)
    ? decodeURIComponent(url.slice(storagePrefix.length))
    : null;

const clip = (s: unknown, max: number) =>
  typeof s === "string" ? s.trim().slice(0, max) : "";

// Rebuild the body from scratch so only the four known block shapes, with
// plain strings, can ever reach the database.
function cleanBody(raw: unknown): Block[] {
  if (!Array.isArray(raw)) return [];
  const out: Block[] = [];
  for (const item of raw.slice(0, 300)) {
    if (!item || typeof item !== "object") continue;
    const b = item as Record<string, unknown>;
    if (typeof b.h === "string") {
      const v = clip(b.h, 300);
      if (v) out.push({ h: v });
    } else if (typeof b.quote === "string") {
      const v = clip(b.quote, 2000);
      if (v) out.push({ quote: v });
    } else if (Array.isArray(b.list)) {
      const items = b.list.map((x) => clip(x, 1000)).filter(Boolean).slice(0, 50);
      if (items.length) out.push({ list: items });
    } else if (typeof b.p === "string") {
      const v = clip(b.p, 10000);
      if (v) out.push({ p: v });
    }
  }
  return out;
}

function revalidateBlog(...slugs: (string | undefined | null)[]) {
  revalidatePath("/admin", "layout");
  revalidatePath("/blog");
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
  for (const s of slugs) if (s) revalidatePath(`/blog/${s}`);
}

export async function saveBlogPost(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const { supabase } = await requireAdmin();

  const id = text(formData, "id");
  const title = text(formData, "title");
  const category = text(formData, "category");
  const excerpt = text(formData, "excerpt");
  const status = text(formData, "status");
  const slug = text(formData, "slug") || slugify(title);
  const image_url = text(formData, "image_url") || null;
  let published_at: string | null = text(formData, "published_at") || null;

  if (!title) return { error: "Title is required." };
  if (title.length > 200) return { error: "Title is too long (200 characters max)." };
  if (!category) return { error: "Category is required." };
  if (category.length > 60) return { error: "Category is too long." };
  if (!excerpt) return { error: "Add a short excerpt." };
  if (excerpt.length > 400) return { error: "Excerpt is too long (400 characters max)." };
  if (!SLUG_RE.test(slug))
    return { error: "The URL slug can only use lowercase letters, numbers and hyphens." };
  if (!["draft", "published"].includes(status)) return { error: "Choose a status." };
  if (image_url && !ownedPath(image_url)) return { error: "Cover image is not valid. Please re-upload it." };

  if (published_at && !/^\d{4}-\d{2}-\d{2}$/.test(published_at))
    return { error: "Enter a valid publish date." };
  if (status === "published" && !published_at)
    published_at = new Date().toISOString().slice(0, 10);

  let raw: unknown = [];
  try {
    raw = JSON.parse(text(formData, "body") || "[]");
  } catch {
    return { error: "The article body was malformed. Please reload the page and try again." };
  }
  const body = cleanBody(raw);
  if (body.length === 0) return { error: "Write at least one block of content." };

  const read_time = text(formData, "read_time").slice(0, 30) || estimateReadTime(body);

  const payload = { slug, title, category, excerpt, image_url, read_time, body, status, published_at };

  // When editing, remember the old slug/cover so we can refresh and clean up.
  let previous: { slug: string; image_url: string | null } | null = null;
  if (id) {
    const { data } = await supabase
      .from("blog_posts")
      .select("slug, image_url")
      .eq("id", id)
      .maybeSingle();
    previous = data;
  }

  const { error } = id
    ? await supabase.from("blog_posts").update(payload).eq("id", id)
    : await supabase.from("blog_posts").insert(payload);

  if (error) {
    if (error.code === "23505") return { error: "Another article already uses that URL slug." };
    return { error: error.message };
  }

  // Remove the replaced cover so Storage doesn't fill with orphans.
  const oldPath = ownedPath(previous?.image_url);
  if (oldPath && previous?.image_url !== image_url) {
    await supabase.storage.from("media").remove([oldPath]);
  }

  revalidateBlog(slug, previous?.slug);
  redirect("/admin/blog");
}

export async function deleteBlogPost(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = text(formData, "id");
  if (!id) return;

  const { data } = await supabase
    .from("blog_posts")
    .select("slug, image_url")
    .eq("id", id)
    .maybeSingle();

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error(error.message);

  const path = ownedPath(data?.image_url);
  if (path) await supabase.storage.from("media").remove([path]);

  revalidateBlog(data?.slug);
}
