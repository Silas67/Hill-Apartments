// import { Btns } from "@/components/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/components/assets/Images/img30.jpg";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import AchievementStat from "../Achievement";
// import { FaCaretDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full max-mobile:h-[70vh] md:h-[100vh] overflow-hidden">
      <div className="absolute w-full h-full z-10">
        <Image src={img1} alt="/" className="w-full h-full object-cover" />
      </div>

      {/* Text Content */}
      <div className="relative flex flex-col w-full h-full items-start justify-center z-20 text-center text-white px-4 max-mobile:px-[0px]">
        <div className="absolute lg:right-[40px] md:right-[20px] md:top-[100px] max-mobile:top-[80px] lg:top-[80px]  text-left max-mobile:px-[20px] max-w-[400px] max-mobile:max-w-[250px] max-mobile:right-[10px]">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-[30px] max-mobile:text-[20px] md:text-[35px] lg:text-4xl  text-left text-background font-sans max-mobile:text-right"
          >
            Where Vision Meets Structure and Dreams Becomes Purpose
          </motion.h1>

          <Link href={"/properties"}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-[16px] mt-2 text-neutral-300 flex items-center gap-[10px] group  transition-all duration-500 cursor-pointer"
            >
              <h1 className="max-mobile:text-right max-mobile:w-full font-bold">
                {" "}
                View Properties
              </h1>

              <Icon
                icon="line-md:arrow-right"
                className="-rotate-45 group-hover:rotate-0  transition-all duration-500 "
              />
            </motion.div>
          </Link>
        </div>

        {/* Buttons */}
        <div className="absolute md:bottom-[10vh] bottom-[7vh] md:px-[30px] max-mobile:pr-[100px] z-30 w-full flex md:justify-start md:items-start flex-col gap-[10px] scale-[0.8] max-mobile:w-full">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex gap-8 max-mobile:gap-4"
          >
            <div className="border-r pr-8">
              <AchievementStat target={70} suffix={"+"} />
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                className="text-[14px] max-mobile:text-[12px]"
              >
                Satisfied Customers
              </motion.p>
            </div>
            <div className="border-r pr-8">
              <AchievementStat target={100} suffix={"+"} />
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                className="text-[14px] max-mobile:text-[12px]"
              >
                Projects Completed
              </motion.p>
            </div>
            <div>
              <AchievementStat target={10} suffix={"+"} />
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                className="text-[14px] max-mobile:text-[12px]"
              >
                Years in Business
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20 z-10" />
    </div>
  );
};

export default Hero;
