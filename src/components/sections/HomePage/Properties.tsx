import { property } from "@/components/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const overlayVariants = {
  initial: { y: "100%", opacity: "0" },
  hover: { y: "0%", opacity: "100%" },
};
const textVariants = {
  initial: { opacity: 1 },
  hover: { opacity: 0 },
};

const Properties = () => {
  return (
    <div className="w-full grid-rows-2 items-center py-16 bg-black/10">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full md:px-[100px] max-mobile:px-[50px] text-center space-y-[10px] pb-[10px]"
      >
        <h1 className="text-[12px] text-secondary font-sans font-bold underline underline-offset-2">
          Our Properties
        </h1>
        <p className="text-3xl text-primary">
          Dive Into The Diffrent Options We Have
        </p>
      </motion.div>

      <div className="flex items-center justify-center gap-[50px] my-[30px] all:flex-col md:flex-row flex-wrap">
        {property.map((item, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
            key={index}
          >
            <motion.div
              className="relative w-[300px] h-[300px] rounded-[10px] overflow-hidden"
              initial="initial"
              whileHover="hover"
              animate="initial"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Background Image */}
              <Image
                src={item.img}
                alt="property"
                className="object-cover w-full h-full "
                fill
              />

              <motion.div
                variants={textVariants}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="w-full absolute z-30 bottom-[20px] text-center"
              >
                <Link className="text-accent2" href={"/"}>
                  {item.label}
                </Link>
              </motion.div>

              {/* Gradient overlay always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent z-10" />

              {/* Sliding colored overlay */}
              <Link href={"/"}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20 opacity-90 flex  px-12 pt-3 gap-2
              "
                  variants={overlayVariants}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <div className="h-full bg-white w-2 "></div>
                  <div className="flex flex-col gap-[100px]">
                    <div className="text-4xl font-bold pt-4 text-white font-sans">
                      {" "}
                      {item.label}
                    </div>

                    <div className="text-[#e4e2e2] text-sm">
                      Lorem ipsum dolor sit amet con sectetur adipisicing elit.
                      Dolorem ut architecto
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
