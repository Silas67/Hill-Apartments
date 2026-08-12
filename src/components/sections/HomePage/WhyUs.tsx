"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/components/assets/Images/img24.jpg";

const reasons = [
  "Expert Knowledge",
  "Transparent Communication",
  "Tailored Solutions",
  "Client-First Approach",
];

const WhyUs = () => {
  return (
    <section className="bg-background">
      <div className="shell section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row gap-[clamp(2rem,6vw,5rem)] items-start"
        >
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={img1}
                alt="Contemporary home designed by OG Winners Homes"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <p className="chapter-num">
              <span>05</span>
              <span className="text-ink-muted">Why Us</span>
            </p>

            <h2 className="display-lg text-ink mt-6 max-w-[13ch]">
              The art of living begins with us
            </h2>

            <p className="prose-quiet mt-6">
              Choosing the right partner makes all the difference. We combine
              industry expertise with a commitment to client satisfaction,
              guiding you through every step of buying, selling or investing.
            </p>

            {/* Hairline list rather than bullets — quieter, easier to scan. */}
            <ul className="mt-10 border-t border-line">
              {reasons.map((reason, index) => (
                <li
                  key={reason}
                  className="flex items-baseline gap-6 py-5 border-b border-line"
                >
                  <span className="text-[0.7rem] tracking-[0.2em] text-ink-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink text-sm">{reason}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center border border-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-background transition-colors duration-500"
              >
                Contact an Agent
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
