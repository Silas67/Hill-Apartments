import { motion } from "framer-motion";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import img1 from "@/components/assets/Images/img5.jpg";

const Banner = () => {
  return (
    <section className="w-full h-[70vh] py-12 flex items-center justify-center md:px-[100px] px-[30px]">
      <div className="w-[90%] h-full flex flex-col-reverse md:flex-row bg-accent2 text-white rounded-[10px] font-sans overflow-hidden">
        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-full flex flex-col justify-center px-12 space-y-[20px] max-sm:scale-[0.9] max-sm:px-4 text-foreground"
        >
          <h1 className="text-3xl max-sm:text-2xl font-semibold max-w-[80%]">
            Discover Our Finest Selection
          </h1>
          <p className="text-sm">
            Step into a world where design meets comfort. Each space is
            thoughtfully crafted to reflect timeless elegance, modern
            functionality, and lasting quality.
          </p>
          <button className="p-2 flex items-center justify-center rounded-[10px] text-sm gap-1 text-white bg-foreground w-fit">
            Discover
            <BiRightArrowAlt className="text-lg" />
          </button>
        </motion.div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 h-full overflow-hidden">
          <Image
            src={img1}
            alt="Discover"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
