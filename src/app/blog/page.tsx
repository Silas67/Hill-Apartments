"use client";
import { blogs } from "@/components/constants";
import Header from "@/components/sections/Header";
import useLenis from "@/hooks/useLenis";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Banner from "@/components/sections/ServicesPage/cta";
import Footer from "@/components/sections/Footer";

const Blog = () => {
  useLenis();
  return (
    <main className="lg:w-full overflow-hidden relative sm">
      <Header />

      <PageHero
        title="Blog"
        lede="Guides and market insight for buyers, sellers and investors in the Nigerian property market."
      />

      {/* 01 — Articles */}
      <section className="bg-background">
        <div className="shell section">
          <p className="chapter-num pb-12">
            <span>01</span>
            <span className="text-ink-muted">Latest Writing</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {blogs.map((blog, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.06 * (index % 3),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-paper">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>

                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint mt-6">
                  Insight
                </p>
                <h2 className="display-md text-ink mt-3">{blog.title}</h2>
                <p className="prose-quiet mt-3 line-clamp-3">{blog.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <Banner />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Blog;
