"use client";
import { startTransition, useActionState, useRef, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { saveBlogPost, type FormState } from "@/app/admin/blog/actions";
import { slugify, type BlogPost, type Block } from "@/lib/blog";
import { btnCls, btnDangerCls, btnGhostCls, inputCls, labelCls } from "./ui";

const MAX_BYTES = 10 * 1024 * 1024;

type BlockType = "p" | "h" | "quote" | "list";
type EditorBlock = { id: number; type: BlockType; text: string };

const TYPE_LABEL: Record<BlockType, string> = {
  p: "Paragraph",
  h: "Heading",
  quote: "Quote",
  list: "List",
};

// Stored shape <-> editor shape (a list is edited as one item per line).
function toEditor(blocks: Block[], nextId: () => number): EditorBlock[] {
  return blocks.map((b) =>
    "h" in b
      ? { id: nextId(), type: "h", text: b.h }
      : "quote" in b
      ? { id: nextId(), type: "quote", text: b.quote }
      : "list" in b
      ? { id: nextId(), type: "list", text: b.list.join("\n") }
      : { id: nextId(), type: "p", text: b.p }
  );
}

function toBlocks(blocks: EditorBlock[]): Block[] {
  const out: Block[] = [];
  for (const b of blocks) {
    const text = b.text.trim();
    if (!text) continue;
    if (b.type === "h") out.push({ h: text });
    else if (b.type === "quote") out.push({ quote: text });
    else if (b.type === "list") {
      const items = text.split("\n").map((s) => s.trim()).filter(Boolean);
      if (items.length) out.push({ list: items });
    } else out.push({ p: text });
  }
  return out;
}

export default function BlogForm({
  post,
  categories,
}: {
  post?: BlogPost;
  categories: string[];
}) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    saveBlogPost,
    {}
  );

  const idRef = useRef(0);
  const nextId = () => ++idRef.current;

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(!!post);
  const [cover, setCover] = useState<string | null>(post?.image_url ?? null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [blocks, setBlocks] = useState<EditorBlock[]>(() =>
    post && post.body.length
      ? toEditor(post.body, nextId)
      : [{ id: nextId(), type: "p", text: "" }]
  );

  function onTitle(v: string) {
    setTitle(v);
    if (!slugTouched) setSlug(slugify(v));
  }

  async function handleCover(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    const file = input.files?.[0];
    if (!file) return;

    if (file.size > MAX_BYTES) {
      setUploadError(`${file.name} is over 10 MB.`);
      input.value = "";
      return;
    }

    setUploading(true);
    setUploadError(null);
    const supabase = createClient();
    const ext = (file.name.split(".").pop() ?? "jpg").toLowerCase();
    const path = `blog/${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage
      .from("media")
      .upload(path, file, { contentType: file.type, cacheControl: "31536000" });

    if (error) setUploadError(error.message);
    else setCover(supabase.storage.from("media").getPublicUrl(path).data.publicUrl);

    setUploading(false);
    input.value = "";
  }

  // ----- block editor operations -----
  const update = (id: number, patch: Partial<EditorBlock>) =>
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, ...patch } : b)));
  const remove = (id: number) =>
    setBlocks((prev) => (prev.length > 1 ? prev.filter((b) => b.id !== id) : prev));
  const move = (index: number, dir: -1 | 1) =>
    setBlocks((prev) => {
      const to = index + dir;
      if (to < 0 || to >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[to]] = [next[to], next[index]];
      return next;
    });
  const add = (type: BlockType) =>
    setBlocks((prev) => [...prev, { id: nextId(), type, text: "" }]);

  // onSubmit (not <form action>) so React doesn't wipe the fields when the
  // server returns a validation error.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(() => formAction(fd));
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form onSubmit={onSubmit} className="max-w-4xl bg-background border border-line p-6 sm:p-10">
      <input type="hidden" name="id" value={post?.id ?? ""} />
      <input type="hidden" name="image_url" value={cover ?? ""} />
      <input type="hidden" name="body" value={JSON.stringify(toBlocks(blocks))} />

      <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="title" className={labelCls}>Title</label>
          <input id="title" name="title" required value={title} onChange={(e) => onTitle(e.target.value)} placeholder="Why Location Still Matters" className={inputCls} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="slug" className={labelCls}>URL slug</label>
          <input
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(e.target.value);
            }}
            placeholder="why-location-still-matters"
            className={inputCls}
          />
          <p className="text-xs text-ink-faint mt-2">
            Address: /blog/{slug || "…"}
            {post && " (changing this breaks existing links to the article)"}
          </p>
        </div>

        <div>
          <label htmlFor="category" className={labelCls}>Category</label>
          <input id="category" name="category" required list="blog-categories" defaultValue={post?.category ?? ""} placeholder="Buying, Selling, Market…" className={inputCls} />
          <datalist id="blog-categories">
            {categories.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="status" className={labelCls}>Status</label>
          <select id="status" name="status" defaultValue={post?.status ?? "draft"} className={inputCls}>
            <option value="draft">Draft (hidden)</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div>
          <label htmlFor="published_at" className={labelCls}>Publish date</label>
          <input id="published_at" name="published_at" type="date" defaultValue={post?.published_at ?? ""} placeholder={today} className={inputCls} />
          <p className="text-xs text-ink-faint mt-2">Leave empty to use today when you publish.</p>
        </div>

        <div>
          <label htmlFor="read_time" className={labelCls}>Read time</label>
          <input id="read_time" name="read_time" defaultValue={post?.read_time ?? ""} placeholder="Auto, e.g. 5 min read" className={inputCls} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="excerpt" className={labelCls}>Excerpt (shown on cards and in search results)</label>
          <textarea id="excerpt" name="excerpt" rows={3} required maxLength={400} defaultValue={post?.excerpt ?? ""} className={`${inputCls} resize-y`} />
        </div>
      </div>

      {/* Cover */}
      <div className="mt-12">
        <p className={labelCls}>Cover image</p>
        <p className="text-xs text-ink-faint mt-2">
          Landscape works best (16:9). JPG, PNG, WebP or AVIF, up to 10 MB.
        </p>

        {cover && (
          <div className="relative aspect-[16/9] max-w-xl bg-paper mt-6 border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cover} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="flex items-center gap-6 mt-6">
          <label>
            <span className={`${btnCls} cursor-pointer ${uploading ? "opacity-50 pointer-events-none" : ""}`}>
              {uploading ? "Uploading…" : cover ? "Replace cover" : "Upload cover"}
            </span>
            <input type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={handleCover} className="sr-only" />
          </label>
          {cover && (
            <button type="button" onClick={() => setCover(null)} className={btnDangerCls}>
              Remove
            </button>
          )}
        </div>
        {uploadError && <p role="alert" className="mt-3 text-sm text-red-700">{uploadError}</p>}
      </div>

      {/* Body */}
      <div className="mt-14">
        <p className={labelCls}>Article body</p>
        <p className="text-xs text-ink-faint mt-2">
          Build the article from blocks. Empty blocks are ignored when you save.
        </p>

        <ul className="mt-6 space-y-4">
          {blocks.map((b, i) => (
            <li key={b.id} className="border border-line p-4">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <select
                  aria-label="Block type"
                  value={b.type}
                  onChange={(e) => update(b.id, { type: e.target.value as BlockType })}
                  className="bg-transparent border-0 border-b border-line py-1 pr-6 text-[0.7rem] uppercase tracking-[0.18em] text-ink focus:outline-none focus:border-ink"
                >
                  {(Object.keys(TYPE_LABEL) as BlockType[]).map((t) => (
                    <option key={t} value={t}>{TYPE_LABEL[t]}</option>
                  ))}
                </select>

                <div className="flex items-center gap-4">
                  <button type="button" onClick={() => move(i, -1)} disabled={i === 0} className={`${btnGhostCls} disabled:opacity-30`}>Up</button>
                  <button type="button" onClick={() => move(i, 1)} disabled={i === blocks.length - 1} className={`${btnGhostCls} disabled:opacity-30`}>Down</button>
                  <button type="button" onClick={() => remove(b.id)} disabled={blocks.length === 1} className={`${btnDangerCls} disabled:opacity-30`}>Remove</button>
                </div>
              </div>

              {b.type === "h" ? (
                <input
                  aria-label="Heading text"
                  value={b.text}
                  onChange={(e) => update(b.id, { text: e.target.value })}
                  placeholder="Section heading"
                  className={inputCls}
                />
              ) : (
                <textarea
                  aria-label={`${TYPE_LABEL[b.type]} text`}
                  value={b.text}
                  onChange={(e) => update(b.id, { text: e.target.value })}
                  rows={b.type === "p" ? 5 : b.type === "list" ? 4 : 3}
                  placeholder={
                    b.type === "list"
                      ? "One item per line"
                      : b.type === "quote"
                      ? "A pull quote"
                      : "Write your paragraph…"
                  }
                  className="w-full bg-transparent border border-line p-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors resize-y"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">Add</span>
          {(Object.keys(TYPE_LABEL) as BlockType[]).map((t) => (
            <button key={t} type="button" onClick={() => add(t)} className={btnGhostCls}>
              + {TYPE_LABEL[t]}
            </button>
          ))}
        </div>
      </div>

      {state.error && (
        <p role="alert" className="mt-10 text-sm text-red-700">{state.error}</p>
      )}

      <div className="flex items-center gap-6 mt-10 pt-8 border-t border-line">
        <button type="submit" disabled={pending || uploading} className={btnCls}>
          {pending ? "Saving…" : post ? "Save changes" : "Create article"}
        </button>
        <Link href="/admin/blog" className={btnGhostCls}>Cancel</Link>
      </div>
    </form>
  );
}
