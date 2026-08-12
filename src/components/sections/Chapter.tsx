"use client";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

type ChapterProps = {
  /** Zero-padded on render: pass 1, get "01". */
  index: number;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
  /** Which side the image sits on. Alternate down the page for rhythm. */
  align?: "left" | "right";
  /** Off-white band, used to separate consecutive chapters without a border. */
  tone?: "paper" | "plain";
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * One numbered chapter in the page narrative: marker, heading, copy, and an
 * optional image that alternates sides. The building block for the editorial
 * storytelling layout used across the site.
 */
export default function Chapter({
  index,
  eyebrow,
  title,
  children,
  image,
  imageAlt = "",
  align = "right",
  tone = "plain",
}: ChapterProps) {
  return (
    <section className={tone === "paper" ? "bg-paper" : "bg-background"}>
      <div className="shell section">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className={`flex gap-[clamp(2rem,6vw,5rem)] items-start ${
            image
              ? align === "left"
                ? "flex-col lg:flex-row-reverse"
                : "flex-col lg:flex-row"
              : "flex-col"
          }`}
        >
          {/* Text column */}
          <div className={image ? "lg:w-1/2 w-full" : "w-full"}>
            <p className="chapter-num">
              <span>{String(index).padStart(2, "0")}</span>
              <span className="text-ink-muted">{eyebrow}</span>
            </p>

            <h2 className="display-lg text-ink mt-6 max-w-[18ch]">{title}</h2>

            <div className="mt-6 space-y-4">{children}</div>
          </div>

          {/* Image column */}
          {image && (
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
