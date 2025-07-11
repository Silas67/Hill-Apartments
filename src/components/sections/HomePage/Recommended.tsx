import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { TbRulerMeasure2 } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Recommended } from "@/components/constants/index";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Recommend = () => {
  return (
    <div className="bg-background w-full py-16 relative px-[50px]">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full text-center text-white pb-[20px]"
      >
        <p className="underline underline-offset-2 text-[10px] text-secondary font-bold">
          Top Features
        </p>
        <div className="text-3xl font-sans text-primary  max-sm:text-3xl">
          Recommended For You
        </div>
      </motion.div>

      {/* Swiper Navigation Buttons */}
      <div className="absolute top-1/2 left-6 z-30">
        <button className="button-prev bg-white p-2 rounded-full shadow">
          <Icon icon="guidance:left-arrow" width="20" height="20" />
        </button>
      </div>
      <div className="absolute top-1/2 right-6 z-30">
        <button className="button-next bg-white p-2 rounded-full shadow">
          <Icon icon="guidance:right-arrow" width="20" height="20" />
        </button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        className="w-[90%] mx-auto flex"
        navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 24 },
          690: { slidesPerView: 2, spaceBetween: 10 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {Recommended.map((id, item) => (
          <SwiperSlide key={item} className="scale-[0.85] ">
            {/* Image */}
            <div className="h-[250px] w-full rounded-[10px] overflow-hidden ">
              <Image
                src={id.img}
                alt="/"
                className="w-full h-full object-cover scale-[1] hover:scale-[1.1] transition-all duration-500"
              />
            </div>
            <Link href={"/properties"}>
              {" "}
              <div className="w-full py-4">
                <div className="flex items-start justify-between flex-col font-sans">
                  <div className="flex items-center justify-between gap-[20px]  w-full">
                    <h1 className="text-sm text-[#373737] font-bold">
                      {id.title}
                    </h1>
                    <h1 className="text-lg font-bold">{id.price}</h1>
                  </div>

                  <h1 className="text-[#5c5c5c] font-sans text-sm flex items-center gap-[2px] pt-1 ">
                    <CiLocationOn /> <p>{id.location}</p>
                  </h1>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-[10px] text-[#545454]">
                      <h1 className="flex items-center gap-[2px] text-[13px]">
                        <GiBathtub /> <p>{id.bath}</p>
                      </h1>
                      <h1 className="flex items-center gap-[2px] text-[13px]">
                        <FaBed /> <p>{id.beds}</p>
                      </h1>
                      <h1 className="flex items-center gap-[2px] text-[13px]">
                        <TbRulerMeasure2 /> <p>{id.mesuare}</p>
                      </h1>
                    </div>
                    <div className="text-background bg-foreground rounded-[5px] p-2">
                      <BiSolidRightArrow />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommend;
