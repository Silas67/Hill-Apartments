"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import img1 from "@/components/assets/Images/Ceo-2.png";

const About = () => {
  return (
    <section className="bg-background">
      <div className="shell section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="chapter-num">
            <span>01</span>
            <span className="text-ink-muted">About Us</span>
          </p>

          <div className="flex flex-col lg:flex-row gap-[clamp(2rem,6vw,5rem)] mt-10">
            <div className="lg:w-1/2">
              <h2 className="display-lg text-ink max-w-[15ch]">
                Innovative architecture for a changing world
              </h2>
            </div>

            <div className="lg:w-1/2">
              <p className="prose-quiet">
                At OG Winners Homes we do not just build properties — we design
                spaces that adapt to evolving lifestyles. We combine elegance,
                technology and sustainability to create homes that stand the
                test of time.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-ink link-underline"
                >
                  More about us
                  <Icon
                    icon="line-md:arrow-right"
                    className="text-base transition-transform duration-500 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] overflow-hidden mt-16">
            <Image
              src={img1}
              alt="Chief Executive Officer of OG Winners Homes"
              placeholder="blur"
              sizes="100vw"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
