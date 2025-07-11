import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsQuote } from "react-icons/bs";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Recommended } from "@/components/constants";
import img1 from "@/components/assets/Images/profile.png";

const Testimonials = () => {
  return (
    <section className="bg-primary w-full py-20  relative">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full text-center text-white"
      >
        <div className="text-[10px] font-sans text-white underline underline-offset-2 pb-1">
          Testimonials
        </div>

        <div className="text-4xl font-sans text-white pb-6 ">
          What Our Customers Say
        </div>
      </motion.div>

      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          690: { slidesPerView: 2, spaceBetween: 5 },
          700: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="w-[80%]"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.15,
          }}
          className="w-full flex items-center justify-center gap-[20px] py-12 px-5 "
        >
          {Recommended.map((id, item) => (
            <SwiperSlide key={item}>
              <motion.div className="w-[300px] h-[250px] rounded-[10px] ml-[5px] mt-[50px] bg-accent2 p-3 relative">
                <div className="w-full h-full flex items-center justify-center text-sm text-foreground text-center flex-col ">
                  <div>
                    <BsQuote />
                  </div>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur repellendus, assumenda ad nesciunt,
                  </p>
                  <div className="relative -bottom-[4vh] italic">
                    <h1 className="font-[600]">Ejimonye Silas</h1>
                    <p>Worker</p>
                  </div>
                  <div className="absolute w-[80px] h-[80px] rounded-full border-[5px] border-primary -top-[5vh] overflow-hidden right-[37%]">
                    <Image
                      src={img1}
                      alt="/"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </motion.div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
