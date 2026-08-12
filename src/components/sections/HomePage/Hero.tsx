"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import img1 from "@/components/assets/Images/img22.jpeg";
import AchievementStat from "../Achievement";

const stats = [
  { target: 70, suffix: "+", label: "Satisfied Customers" },
  { target: 100, suffix: "+", label: "Projects Completed" },
  { target: 10, suffix: "+", label: "Years in Business" },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[92vh] min-h-[34rem] overflow-hidden">
      <Image
        src={img1}
        alt="Luxury residential property by OG Winners Homes"
        placeholder="blur"
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient rather than a flat wash: keeps the image readable at the
          top and bottom without dulling the middle. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/45 via-black/15 to-black/65"
      />

      <div className="relative z-20 h-full shell flex flex-col justify-end pb-[clamp(2.5rem,6vw,5rem)] text-white">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.7rem] uppercase tracking-[0.28em] text-white/70"
        >
          Abuja &amp; Lagos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl mt-6 max-w-[16ch]"
        >
          Where vision meets structure
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <Link
            href="/properties"
            className="group inline-flex items-center gap-3 border border-white/60 px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-colors duration-500"
          >
            View Properties
            <Icon
              icon="line-md:arrow-right"
              className="text-base transition-transform duration-500 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-x-12 gap-y-6 mt-14 pt-8 border-t border-white/20"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <AchievementStat target={stat.target} suffix={stat.suffix} />
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/70 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
