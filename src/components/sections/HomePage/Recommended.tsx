"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Recommended } from "@/components/constants/index";
import PropertyCard from "../PropertyCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Recommend = () => {
  return (
    <section className="bg-background">
      <div className="shell section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between gap-8 pb-12"
        >
          <div>
            <p className="chapter-num">
              <span>03</span>
              <span className="text-ink-muted">Selected</span>
            </p>
            <h2 className="display-lg text-ink mt-6 max-w-[14ch]">
              Recommended for you
            </h2>
          </div>

          {/* Controls sit with the heading rather than floating over the cards. */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              aria-label="Previous properties"
              className="button-prev w-11 h-11 border border-line flex items-center justify-center text-ink hover:bg-ink hover:text-background hover:border-ink transition-colors duration-300"
            >
              <Icon icon="guidance:left-arrow" width="14" height="14" />
            </button>
            <button
              aria-label="Next properties"
              className="button-next w-11 h-11 border border-line flex items-center justify-center text-ink hover:bg-ink hover:text-background hover:border-ink transition-colors duration-300"
            >
              <Icon icon="guidance:right-arrow" width="14" height="14" />
            </button>
          </div>
        </motion.div>

        <Swiper
          className="w-full !pb-14"
          navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
          autoplay={{ delay: 4500, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 24 },
            690: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 32 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {Recommended.map((item, index) => (
            <SwiperSlide key={index}>
              <PropertyCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Link
          href="/properties"
          className="link-underline inline-block text-[0.72rem] uppercase tracking-[0.2em] text-ink"
        >
          View all properties
        </Link>
      </div>
    </section>
  );
};

export default Recommend;
