"use client";
import { motion } from "framer-motion";
import Breadcrumbs from "./Breadcrumbs";

type PageHeroProps = {
  title: string;
  /** Optional supporting line under the title. Keep it to one sentence. */
  lede?: string;
};

/**
 * The white, minimal page opener used on every page except the homepage,
 * which keeps its full-bleed photographic hero.
 *
 * Deliberately has no background image. The previous version stacked a photo
 * under a full-opacity overlay, so the browser still downloaded a multi-MB
 * image that no one could ever see.
 */
export default function PageHero({ title, lede }: PageHeroProps) {
  return (
    <header className="w-full bg-background">
      <div className="shell pt-[clamp(7rem,14vw,11rem)] pb-[clamp(2.5rem,5vw,4rem)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-ink-muted">
            <Breadcrumbs />
          </div>

          <h1 className="display-xl text-ink mt-4 max-w-[16ch]">{title}</h1>

          {lede && <p className="lede mt-6">{lede}</p>}
        </motion.div>
      </div>

      <div className="shell">
        <hr className="hairline" />
      </div>
    </header>
  );
}
