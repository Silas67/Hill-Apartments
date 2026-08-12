"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogs } from "@/components/constants";

const Blog = () => {
  const [lead, ...rest] = blogs.slice(0, 4);

  return (
    <section className="bg-background">
      <div className="shell section">
        <div className="flex items-end justify-between gap-8 pb-12">
          <div>
            <p className="chapter-num">
              <span>07</span>
              <span className="text-ink-muted">Journal</span>
            </p>
            <h2 className="display-lg text-ink mt-6 max-w-[14ch]">
              Notes from the market
            </h2>
          </div>

          <Link
            href="/blog"
            className="link-underline hidden md:inline-block text-[0.72rem] uppercase tracking-[0.2em] text-ink shrink-0"
          >
            All articles
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-[clamp(2rem,5vw,4rem)]">
          {/* Lead article */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-3/5 group"
          >
            <Link href={`/blog/${lead.slug}`} className="block">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-paper">
              <Image
                src={lead.image}
                alt={lead.title}
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="display-md text-ink mt-8 max-w-[20ch]">
              {lead.title}
            </h3>
            <p className="prose-quiet mt-4">{lead.excerpt}</p>
            </Link>
          </motion.article>

          {/* Secondary list */}
          <div className="lg:w-2/5 flex flex-col">
            {rest.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-line first:border-t group"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex gap-6 py-7"
                >
                <div className="relative w-24 h-24 shrink-0 overflow-hidden bg-paper">
                  <Image
                    src={post.image}
                    alt={post.title}
                    placeholder="blur"
                    sizes="96px"
                    className="object-cover w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <div>
                  <h3 className="text-ink text-sm font-medium leading-snug">
                    {post.title}
                  </h3>
                  <p className="prose-quiet text-[0.85rem] mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                </Link>
              </motion.article>
            ))}

            <Link
              href="/blog"
              className="link-underline md:hidden inline-block mt-8 text-[0.72rem] uppercase tracking-[0.2em] text-ink"
            >
              All articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
