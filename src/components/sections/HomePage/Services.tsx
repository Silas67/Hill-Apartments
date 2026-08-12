"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import img4 from "@/components/assets/Images/img25.jpg";

const Services = () => {
  return (
    <section className="bg-paper">
      <div className="shell section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row-reverse gap-[clamp(2rem,6vw,5rem)] items-start"
        >
          <div className="lg:w-1/2 w-full">
            <p className="chapter-num">
              <span>04</span>
              <span className="text-ink-muted">Services</span>
            </p>

            <h2 className="display-lg text-ink mt-6 max-w-[16ch]">
              Tailored real estate experiences, exceptionally delivered
            </h2>

            <p className="prose-quiet mt-6">
              Your needs shape our services. Bespoke consultation, considered
              design, meticulous construction and strategic project management
              — we make the journey seamless, and open up investment routes
              that keep working long after you have the keys.
            </p>

            <div className="mt-10">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-ink link-underline"
              >
                View Services
                <Icon
                  icon="line-md:arrow-right"
                  className="text-base transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={img4}
                alt="Interior of a finished OG Winners Homes property"
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

export default Services;
