"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import img1 from "@/components/assets/Images/img5.jpg";

const Banner = () => {
  return (
    <section className="bg-paper">
      <div className="shell section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row items-stretch gap-[clamp(2rem,5vw,4rem)]"
        >
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="eyebrow">Featured</p>
            <h2 className="display-lg text-ink mt-6 max-w-[14ch]">
              Discover our finest selection
            </h2>
            <p className="prose-quiet mt-6">
              Step into a world where design meets comfort. Each space is
              thoughtfully crafted to reflect timeless elegance, modern
              functionality and lasting quality.
            </p>
            <div className="mt-10">
              <Link
                href="/properties"
                className="group inline-flex items-center gap-3 border border-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-background transition-colors duration-500"
              >
                Discover
                <Icon
                  icon="line-md:arrow-right"
                  className="text-base transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[18rem] overflow-hidden">
              <Image
                src={img1}
                alt="Interior of a featured OG Winners Homes property"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
