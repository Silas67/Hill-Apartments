import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import Banner from "@/components/sections/ServicesPage/cta";
import { company, siteUrl } from "@/components/constants";
import { getPostBySlug, getPublishedPosts } from "@/lib/data/blog";

type Params = { params: Promise<{ slug: string }> };

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

// New articles appear without a redeploy: unknown slugs are rendered on
// demand (and 404 properly if they don't exist), existing ones are cached
// and refreshed every minute or when the admin saves.
export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

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
      publishedTime: post.published_at ?? undefined,
      images: post.image_url ? [post.image_url] : undefined,
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
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // Same category first, then anything else, capped at three.
  const all = await getPublishedPosts();
  const related = [
    ...all.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...all.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at ?? undefined,
    articleSection: post.category,
    image: post.image_url ?? undefined,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
  };

  return (
    <main className="w-full">
      <Header />

      <script
        type="application/ld+json"
        // "<" escaped so a title can never close the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Article header */}
      <header className="shell pt-[clamp(7rem,14vw,11rem)] pb-[clamp(2rem,4vw,3rem)]">
        <div className="text-ink-muted">
          <Breadcrumbs />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
          <span className="text-accent">{post.category}</span>
          {post.published_at && (
            <>
              <span aria-hidden="true">/</span>
              <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
            </>
          )}
          {post.read_time && (
            <>
              <span aria-hidden="true">/</span>
              <span>{post.read_time}</span>
            </>
          )}
        </div>

        <h1 className="display-xl text-ink mt-6 max-w-[20ch]">{post.title}</h1>
        <p className="lede mt-8">{post.excerpt}</p>
      </header>

      {post.image_url && (
        <div className="shell">
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-paper">
            <Image
              src={post.image_url}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Body — narrow measure for comfortable reading. */}
      <article className="shell section">
        <div className="max-w-[68ch]">
          {post.body.map((block, index) => {
            if ("h" in block) {
              return (
                <h2 key={index} className="display-md text-ink mt-14 first:mt-0 mb-5">
                  {block.h}
                </h2>
              );
            }

            if ("quote" in block) {
              return (
                <blockquote key={index} className="my-12 pl-8 border-l-2 border-accent">
                  <p className="text-ink text-[clamp(1.1rem,1.7vw,1.4rem)] leading-relaxed italic">
                    {block.quote}
                  </p>
                </blockquote>
              );
            }

            if ("list" in block) {
              return (
                <ul key={index} className="my-8 border-t border-line">
                  {block.list.map((entry, i) => (
                    <li
                      key={i}
                      className="py-4 border-b border-line text-ink-muted text-[0.975rem] leading-relaxed"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="text-ink-muted text-[1.05rem] leading-[1.8] mb-6 whitespace-pre-line">
                {block.p}
              </p>
            );
          })}

          <hr className="hairline mt-16" />

          <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
            <p className="text-sm text-ink-faint">Written by {company.name}</p>
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
                <Link key={item.id} href={`/blog/${item.slug}`} className="group block">
                  <div className="relative w-full aspect-[3/2] overflow-hidden bg-background">
                    {item.image_url && (
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                    )}
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
