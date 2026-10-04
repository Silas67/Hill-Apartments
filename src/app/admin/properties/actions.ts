"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";

export type FormState = { error?: string };

const LISTING = ["rent", "sale"];
const CATEGORY = ["sites_services", "ultra", "third_party"];
const STATUS = ["draft", "published", "sold", "let"];

const text = (f: FormData, k: string) => String(f.get(k) ?? "").trim();
const optText = (f: FormData, k: string) => text(f, k) || null;
const optNum = (f: FormData, k: string) => {
  const v = text(f, k).replace(/,/g, "");
  if (!v) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : NaN;
};

// Only accept image URLs that point at OUR media bucket.
const storagePrefix = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/`;

function revalidateAll() {
  revalidatePath("/admin", "layout");
  revalidatePath("/properties");
  revalidatePath("/");
}

export async function saveProperty(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const { supabase } = await requireAdmin();

  const id = text(formData, "id");
  const title = text(formData, "title");
  const location = text(formData, "location");
  const listing_type = text(formData, "listing_type");
  const category = text(formData, "category");
  const status = text(formData, "status");
  const price = optNum(formData, "price");
  const beds = optNum(formData, "beds");
  const baths = optNum(formData, "baths");
  const size_sqm = optNum(formData, "size_sqm");

  if (!title) return { error: "Title is required." };
  if (!location) return { error: "Location is required." };
  if (!LISTING.includes(listing_type)) return { error: "Choose Rent or Sale." };
  if (!CATEGORY.includes(category)) return { error: "Choose a category." };
  if (!STATUS.includes(status)) return { error: "Choose a status." };
  if (price === null || Number.isNaN(price) || price < 0)
    return { error: "Enter a valid price." };
  for (const [label, n] of [["Beds", beds], ["Baths", baths]] as const) {
    if (n !== null && (Number.isNaN(n) || n < 0 || !Number.isInteger(n)))
      return { error: `${label} must be a whole number.` };
  }
  if (size_sqm !== null && (Number.isNaN(size_sqm) || size_sqm < 0))
    return { error: "Size must be a positive number." };

  const video_url = optText(formData, "video_url");
  if (video_url && !/^https?:\/\//i.test(video_url))
    return { error: "The video link must start with http:// or https://." };

  let images: string[] = [];
  try {
    const parsed = JSON.parse(text(formData, "images") || "[]");
    if (Array.isArray(parsed)) images = parsed;
  } catch {
    return { error: "Image list was malformed. Please re-add the images." };
  }
  images = images.filter(
    (u): u is string => typeof u === "string" && u.startsWith(storagePrefix)
  );

  const features = text(formData, "features")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  const payload = {
    title,
    description: optText(formData, "description"),
    listing_type,
    category,
    property_type: optText(formData, "property_type"),
    price,
    beds,
    baths,
    size_sqm,
    location,
    address: optText(formData, "address"),
    features,
    images,
    video_url,
    featured: formData.get("featured") === "on",
    status,
  };

  const { error } = id
    ? await supabase.from("properties").update(payload).eq("id", id)
    : await supabase.from("properties").insert(payload);

  if (error) return { error: error.message };

  revalidateAll();
  redirect("/admin/properties");
}

export async function deleteProperty(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = text(formData, "id");
  if (!id) return;

  const { data } = await supabase
    .from("properties")
    .select("images")
    .eq("id", id)
    .maybeSingle();

  const { error } = await supabase.from("properties").delete().eq("id", id);
  if (error) throw new Error(error.message);

  // Clean up the property's photos from Storage.
  const paths = ((data?.images ?? []) as string[])
    .filter((u) => u.startsWith(storagePrefix))
    .map((u) => decodeURIComponent(u.slice(storagePrefix.length)));
  if (paths.length) await supabase.storage.from("media").remove(paths);

  revalidateAll();
}
