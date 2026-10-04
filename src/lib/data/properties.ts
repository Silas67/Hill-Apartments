import { cache } from "react";
import { createPublicClient } from "@/lib/supabase/public";
import type { Property } from "@/lib/types";

// Public-site readers. RLS already limits visitors to published/sold/let,
// so drafts can never leak even if a query forgets to filter.

// The slim shape the listing cards need (keeps the client payload small).
export type PropertyItem = Pick<
  Property,
  | "id"
  | "title"
  | "price"
  | "beds"
  | "baths"
  | "size_sqm"
  | "location"
  | "listing_type"
  | "images"
  | "status"
>;

export const toCardItem = (p: Property): PropertyItem => ({
  id: p.id,
  title: p.title,
  price: p.price,
  beds: p.beds,
  baths: p.baths,
  size_sqm: p.size_sqm,
  location: p.location,
  listing_type: p.listing_type,
  images: p.images,
  status: p.status,
});

export async function getPublishedProperties(): Promise<Property[]> {
  const { data, error } = await createPublicClient()
    .from("properties")
    .select("*")
    .in("status", ["published", "sold", "let"])
    .order("created_at", { ascending: false });
  if (error) console.error("getPublishedProperties:", error.message);
  return (data ?? []) as Property[];
}

export async function getFeaturedProperties(limit = 7): Promise<Property[]> {
  const { data, error } = await createPublicClient()
    .from("properties")
    .select("*")
    .eq("status", "published")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) console.error("getFeaturedProperties:", error.message);
  return (data ?? []) as Property[];
}

// cache() lets generateMetadata and the page share one query per request.
export const getPropertyById = cache(
  async (id: string): Promise<Property | null> => {
    const { data } = await createPublicClient()
      .from("properties")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    return (data as Property | null) ?? null;
  }
);
