// Same block shape the site already uses in constants, now stored as jsonb.
export type Block =
  | { p: string }
  | { h: string }
  | { quote: string }
  | { list: string[] };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image_url: string | null;
  read_time: string | null;
  body: Block[];
  status: "draft" | "published";
  published_at: string | null; // YYYY-MM-DD
  created_at: string;
  updated_at: string;
};

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);

export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const blockText = (b: Block): string =>
  "p" in b ? b.p : "h" in b ? b.h : "quote" in b ? b.quote : b.list.join(" ");

export function estimateReadTime(blocks: Block[]): string {
  const words = blocks
    .map(blockText)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
