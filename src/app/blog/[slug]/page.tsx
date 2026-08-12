import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import Banner from "@/components/sections/ServicesPage/cta";
import { blogs, company, siteUrl } from "@/components/constants";

type Block = { p?: string; h?: string; quote?: string; list?: string[] };
type Post = (typeof blogs)[number];

type Params = { params: Promise<{ slug: string }> };

const findPost = (slug: string) =>
  blogs.find((post) => post.slug === slug) as Post | undefined;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/**
 * The article set is fixed and known at build time, so anything outside it
 * should be a real 404 rather than a soft one. Without this, an unknown slug
 * renders the not-found page but still returns HTTP 200, which search engines
 * treat as a valid page.
 */
export const dynamicParams = false;

/** Pre-renders every article at build time. */
export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) notFound();

  // Same category first, then anything else, capped at three.
  const related = [
    ...blogs.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogs.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    articleSection: post.category,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
  };

  return (
    <main className="w-full">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article header */}
      <header className="shell pt-[clamp(7rem,14vw,11rem)] pb-[clamp(2rem,4vw,3rem)]">
        <div className="text-ink-muted">
          <Breadcrumbs />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
          <span className="text-accent">{post.category}</span>
          <span aria-hidden="true">/</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">/</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="display-xl text-ink mt-6 max-w-[20ch]">{post.title}</h1>
        <p className="lede mt-8">{post.excerpt}</p>
      </header>

      <div className="shell">
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-paper">
          <Image
            src={post.image}
            alt={post.title}
            placeholder="blur"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Body — narrow measure for comfortable reading. */}
      <article className="shell section">
        <div className="max-w-[68ch]">
          {(post.body as Block[]).map((block, index) => {
            if (block.h) {
              return (
                <h2
                  key={index}
                  className="display-md text-ink mt-14 first:mt-0 mb-5"
                >
                  {block.h}
                </h2>
              );
            }

            if (block.quote) {
              return (
                <blockquote
                  key={index}
                  className="my-12 pl-8 border-l-2 border-accent"
                >
                  <p className="text-ink text-[clamp(1.1rem,1.7vw,1.4rem)] leading-relaxed italic">
                    {block.quote}
                  </p>
                </blockquote>
              );
            }

            if (block.list) {
              return (
                <ul key={index} className="my-8 border-t border-line">
                  {block.list.map((entry) => (
                    <li
                      key={entry}
                      className="py-4 border-b border-line text-ink-muted text-[0.975rem] leading-relaxed"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p
                key={index}
                className="text-ink-muted text-[1.05rem] leading-[1.8] mb-6"
              >
                {block.p}
              </p>
            );
          })}

          <hr className="hairline mt-16" />

          <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
            <p className="text-sm text-ink-faint">
              Written by {company.name}
            </p>
            <Link
              href="/blog"
              className="link-underline text-[0.72rem] uppercase tracking-[0.2em] text-ink"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-paper">
          <div className="shell section">
            <p className="chapter-num">
              <span>02</span>
              <span className="text-ink-muted">Keep Reading</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-12">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group block"
                >
                  <div className="relative w-full aspect-[3/2] overflow-hidden bg-background">
                    <Image
                      src={item.image}
                      alt={item.title}
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint mt-5">
                    {item.category}
                  </p>
                  <h3 className="text-ink text-base font-medium leading-snug mt-2">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Banner />
      <Footer />
    </main>
  );
}
