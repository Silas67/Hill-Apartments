"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/components/constants";
import img1 from "@/components/assets/Images/profile.jpg";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="bg-primary text-background">
      <div className="shell section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="chapter-num text-white/40">
            <span>06</span>
            <span className="text-white/60">Testimonials</span>
          </p>
          <h2 className="display-lg mt-6 max-w-[14ch]">
            What our clients say
          </h2>
        </motion.div>

        <Swiper
          className="w-full mt-14 !pb-16"
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name} className="h-auto">
              <figure className="border-t border-white/20 pt-8 h-full">
                <blockquote className="text-base leading-relaxed text-white/85">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4 mt-8">
                  <span className="relative w-11 h-11 overflow-hidden rounded-full shrink-0">
                    <Image
                      src={img1}
                      alt=""
                      placeholder="blur"
                      sizes="44px"
                      className="object-cover w-full h-full"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-medium">
                      {item.name}
                    </span>
                    <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-white/50 mt-1">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
