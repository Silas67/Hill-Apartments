"use client";
import { startTransition, useActionState, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { saveProperty, type FormState } from "@/app/admin/properties/actions";
import type { Property } from "@/lib/types";
import { btnCls, btnDangerCls, btnGhostCls, inputCls, labelCls } from "./ui";

const MAX_BYTES = 10 * 1024 * 1024;

export default function PropertyForm({ property }: { property?: Property }) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    saveProperty,
    {}
  );
  const [images, setImages] = useState<string[]>(property?.images ?? []);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    const files = Array.from(input.files ?? []);
    if (!files.length) return;

    setUploading(true);
    setUploadError(null);
    const supabase = createClient();
    const added: string[] = [];

    for (const file of files) {
      if (file.size > MAX_BYTES) {
        setUploadError(`${file.name} is over 10 MB.`);
        continue;
      }
      const ext = (file.name.split(".").pop() ?? "jpg").toLowerCase();
      const path = `properties/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage
        .from("media")
        .upload(path, file, { contentType: file.type, cacheControl: "31536000" });
      if (error) {
        setUploadError(error.message);
        continue;
      }
      added.push(supabase.storage.from("media").getPublicUrl(path).data.publicUrl);
    }

    setImages((prev) => [...prev, ...added]);
    setUploading(false);
    input.value = "";
  }

  const makeCover = (url: string) =>
    setImages((prev) => [url, ...prev.filter((u) => u !== url)]);
  const remove = (url: string) =>
    setImages((prev) => prev.filter((u) => u !== url));

  // Submitting through onSubmit (instead of <form action>) stops React from
  // wiping the fields when the server returns a validation error.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(() => formAction(fd));
  }

  const p = property;

  return (
    <form onSubmit={onSubmit} className="max-w-3xl bg-background border border-line p-6 sm:p-10">
      <input type="hidden" name="id" value={p?.id ?? ""} />
      <input type="hidden" name="images" value={JSON.stringify(images)} />

      <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="title" className={labelCls}>Title</label>
          <input id="title" name="title" required defaultValue={p?.title} placeholder="3-Bedroom Bungalow" className={inputCls} />
        </div>

        <div>
          <label htmlFor="listing_type" className={labelCls}>Listing type</label>
          <select id="listing_type" name="listing_type" defaultValue={p?.listing_type ?? "rent"} className={inputCls}>
            <option value="rent">To rent</option>
            <option value="sale">For sale</option>
          </select>
        </div>

        <div>
          <label htmlFor="category" className={labelCls}>Category</label>
          <select id="category" name="category" defaultValue={p?.category ?? "third_party"} className={inputCls}>
            <option value="sites_services">Sites &amp; Services</option>
            <option value="ultra">Ultra</option>
            <option value="third_party">3rd Party Sale</option>
          </select>
        </div>

        <div>
          <label htmlFor="price" className={labelCls}>Price (₦)</label>
          <input id="price" name="price" type="number" min="0" step="any" required defaultValue={p?.price} placeholder="17000000" className={inputCls} />
        </div>

        <div>
          <label htmlFor="property_type" className={labelCls}>Property type</label>
          <input id="property_type" name="property_type" defaultValue={p?.property_type ?? ""} placeholder="apartment, bungalow, duplex, plot" className={inputCls} />
        </div>

        <div>
          <label htmlFor="beds" className={labelCls}>Bedrooms</label>
          <input id="beds" name="beds" type="number" min="0" step="1" defaultValue={p?.beds ?? ""} className={inputCls} />
        </div>

        <div>
          <label htmlFor="baths" className={labelCls}>Bathrooms</label>
          <input id="baths" name="baths" type="number" min="0" step="1" defaultValue={p?.baths ?? ""} className={inputCls} />
        </div>

        <div>
          <label htmlFor="size_sqm" className={labelCls}>Size (sqm)</label>
          <input id="size_sqm" name="size_sqm" type="number" min="0" step="any" defaultValue={p?.size_sqm ?? ""} className={inputCls} />
        </div>

        <div>
          <label htmlFor="status" className={labelCls}>Status</label>
          <select id="status" name="status" defaultValue={p?.status ?? "draft"} className={inputCls}>
            <option value="draft">Draft (hidden)</option>
            <option value="published">Published</option>
            <option value="sold">Sold</option>
            <option value="let">Let</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="location" className={labelCls}>Location (shown on cards)</label>
          <input id="location" name="location" required defaultValue={p?.location} placeholder="Hills Estate, Apo" className={inputCls} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className={labelCls}>Full address (used for the map)</label>
          <input id="address" name="address" defaultValue={p?.address ?? ""} placeholder="Hills Estate, Apo, Abuja, Nigeria" className={inputCls} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="description" className={labelCls}>Description</label>
          <textarea id="description" name="description" rows={5} defaultValue={p?.description ?? ""} className={`${inputCls} resize-y`} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="features" className={labelCls}>Features (one per line)</label>
          <textarea id="features" name="features" rows={4} defaultValue={(p?.features ?? []).join("\n")} placeholder={"Spacious Living Room\nModern Kitchen"} className={`${inputCls} resize-y`} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="video_url" className={labelCls}>Video tour URL (optional)</label>
          <input id="video_url" name="video_url" type="url" defaultValue={p?.video_url ?? ""} placeholder="https://" className={inputCls} />
        </div>

        <label className="md:col-span-2 flex items-center gap-3 cursor-pointer">
          <input type="checkbox" name="featured" defaultChecked={p?.featured ?? false} className="w-4 h-4 accent-[#0e252e]" />
          <span className="text-sm text-ink">Feature in &ldquo;Recommended for you&rdquo; on the homepage</span>
        </label>
      </div>

      {/* Photos */}
      <div className="mt-12">
        <p className={labelCls}>Photos</p>
        <p className="text-xs text-ink-faint mt-2">
          JPG, PNG, WebP or AVIF, up to 10 MB each. The first photo is the cover.
        </p>

        {images.length > 0 && (
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {images.map((url, i) => (
              <li key={url} className="border border-line">
                <div className="relative aspect-[4/3] bg-paper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt="" className="w-full h-full object-cover" />
                  {i === 0 && (
                    <span className="absolute top-2 left-2 bg-ink text-background text-[0.6rem] uppercase tracking-[0.18em] px-2 py-1">
                      Cover
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  {i === 0 ? <span /> : (
                    <button type="button" onClick={() => makeCover(url)} className={btnGhostCls}>
                      Make cover
                    </button>
                  )}
                  <button type="button" onClick={() => remove(url)} className={btnDangerCls}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <label className="inline-block mt-6">
          <span className={`${btnCls} cursor-pointer ${uploading ? "opacity-50 pointer-events-none" : ""}`}>
            {uploading ? "Uploading…" : "Add photos"}
          </span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            multiple
            onChange={handleFiles}
            className="sr-only"
          />
        </label>
        {uploadError && <p role="alert" className="mt-3 text-sm text-red-700">{uploadError}</p>}
      </div>

      {state.error && (
        <p role="alert" className="mt-10 text-sm text-red-700">{state.error}</p>
      )}

      <div className="flex items-center gap-6 mt-10 pt-8 border-t border-line">
        <button type="submit" disabled={pending || uploading} className={btnCls}>
          {pending ? "Saving…" : p ? "Save changes" : "Create property"}
        </button>
        <Link href="/admin/properties" className={btnGhostCls}>Cancel</Link>
      </div>
    </form>
  );
}
