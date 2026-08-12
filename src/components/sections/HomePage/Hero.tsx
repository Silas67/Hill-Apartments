"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { heroSlides } from "@/components/constants";
import AchievementStat from "../Achievement";

import "swiper/css";
import "swiper/css/effect-fade";

const stats = [
  { target: 70, suffix: "+", label: "Satisfied Customers" },
  { target: 100, suffix: "+", label: "Projects Completed" },
  { target: 10, suffix: "+", label: "Years in Business" },
];

const ease = [0.22, 1, 0.36, 1] as const;

// The container needs its own `variants` for the labels to propagate reliably
// to the children; staggerChildren replaces hand-tuned per-item delays.
const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const Hero = () => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const multiple = heroSlides.length > 1;
  const slide = heroSlides[active];

  return (
    <section className="relative w-full h-[92vh] min-h-[34rem] overflow-hidden bg-primary">
      {/*
        The slider carries the imagery only, pinned behind everything. The copy
        and the stats live together in one flex column above it, so the stats
        bar's top rule can never cut across the call-to-action — which is what
        happened when the stats were absolutely positioned over the slides.
      */}
      {/*
        Wrapper does the positioning: `swiper/css` sets `.swiper{position:relative}`
        and loads after Tailwind, so an `absolute` utility on the Swiper itself
        loses the specificity tie-break and the slider stays in flow.
      */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade, Keyboard]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          loop={multiple}
          allowTouchMove={multiple}
          keyboard={{ enabled: multiple }}
          autoplay={
            multiple
              ? {
                  delay: 6500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActive(s.realIndex)}
          className="w-full h-full"
        >
          {heroSlides.map((item, index) => (
            <SwiperSlide key={item.title} className="relative w-full h-full">
              <Image
                src={item.image}
                alt=""
                placeholder="blur"
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/70"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Foreground column: copy on top, stats pinned to the bottom. */}
      <div className="relative z-10 h-full shell flex flex-col justify-end pointer-events-none">
        <motion.div
          key={active}
          variants={group}
          initial="hidden"
          animate="show"
          className="max-w-[46rem] pointer-events-auto pb-[clamp(2rem,4vw,3rem)]"
        >
          <motion.p
            variants={rise}
            className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-white/70"
          >
            {slide.kind === "event" && (
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            )}
            {slide.eyebrow}
          </motion.p>

          <motion.h1
            variants={rise}
            className="display-xl text-white mt-5 max-w-[16ch]"
          >
            {slide.title}
          </motion.h1>

          {slide.meta && (
            <motion.p
              variants={rise}
              className="mt-5 text-white/80 text-[0.95rem]"
            >
              {slide.meta}
            </motion.p>
          )}

          <motion.div variants={rise} className="mt-8">
            <Link
              href={slide.cta.href}
              className="group inline-flex items-center gap-3 border border-white/60 px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-500"
            >
              {slide.cta.label}
              <Icon
                icon="line-md:arrow-right"
                className="text-base transition-transform duration-500 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Slide controls — in flow, between the copy and the stats. */}
        {multiple && (
          <div
            className="flex gap-3 pb-[clamp(1.25rem,2.5vw,2rem)] pointer-events-auto"
            role="tablist"
            aria-label="Hero slides"
          >
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={item.title}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className="group py-2"
              >
                <span
                  className={`block h-px w-9 transition-colors duration-400 ${
                    active === index
                      ? "bg-white"
                      : "bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        <div className="border-t border-white/20 pt-6 pb-[clamp(1.5rem,3vw,2.5rem)] text-white">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <AchievementStat target={stat.target} suffix={stat.suffix} />
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/70 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
