"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaQs } from "@/components/constants";

type FaqProps = {
  /** Chapter numeral, when the page is using the editorial rhythm. */
  index?: number;
};

/**
 * Single source of the FAQ accordion. Previously copy-pasted into the about
 * page, the contact page and the homepage — the contact copy rendered its
 * answers in white on white, so they were invisible when expanded.
 *
 * Uses a 0fr/1fr grid rather than max-height so the reveal animates to the
 * answer's true height instead of an arbitrary cap.
 */
export default function Faq({ index }: FaqProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background">
      <div className="shell section">
        <div className="flex flex-col lg:flex-row gap-[clamp(2rem,6vw,5rem)]">
          {/* Sticky heading column */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-32">
              {index !== undefined ? (
                <p className="chapter-num">
                  <span>{String(index).padStart(2, "0")}</span>
                  <span className="text-ink-muted">Questions</span>
                </p>
              ) : (
                <p className="eyebrow">Questions</p>
              )}

              <h2 className="display-lg text-ink mt-6 max-w-[14ch]">
                Frequently asked
              </h2>

              <p className="prose-quiet mt-6">
                Answers to what we hear most from buyers, sellers and
                investors. If yours is not here, talk to an agent.
              </p>

              <Link
                href="/contact"
                className="link-underline inline-block mt-8 text-[0.72rem] uppercase tracking-[0.2em] text-ink"
              >
                Have a question?
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:w-3/5">
            <hr className="hairline" />
            {FaQs.map((item, id) => {
              const isOpen = open === id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 * id,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-line"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${id}`}
                      className="group flex items-start justify-between gap-6 w-full text-left py-7 text-ink"
                    >
                      <span className="text-[0.95rem] md:text-base font-medium leading-snug">
                        {item.Question.trim()}
                      </span>
                      {/* Plus that rotates into a minus — quieter than a chevron. */}
                      <span
                        aria-hidden="true"
                        className="relative shrink-0 w-4 h-4 mt-1"
                      >
                        <span className="absolute top-1/2 left-0 w-4 h-px bg-ink -translate-y-1/2" />
                        <span
                          className={`absolute top-1/2 left-0 w-4 h-px bg-ink -translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isOpen ? "rotate-0" : "rotate-90"
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${id}`}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="prose-quiet pb-7 pr-10">{item.Answer}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
