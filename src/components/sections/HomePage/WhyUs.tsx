import Copy from "@/hooks/Copy";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from "@/components/assets/Images/img24.jpg";

const WhyUs = () => {
  return (
    <div className="w-full my-12 px-[100px] flex flex-col items-center justify-center py-16 max-mobile:px-[30px]">
      <div
        className="w-full flex justify-between items-center  lg:gap-[70px] all:flex-col lg:flex-row-reverse max-mobile:gap-[40px] md:gap-[50px] 
      "
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
          className="text-center md:hidden gap-[30px] w-full py-4 "
        >
          <p className="underline underline-offset-2 text-[12px] text-secondary font-bold">
            Why Us
          </p>{" "}
          <h1 className="font-sans text-4xl text-primary md:w-[80%] all:w-full">
            The Art of Living Begins With Us
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="relative lg:w-1/2 h-full overflow-hidden  rounded-[10px] all:w-full"
        >
          <Image src={img1} alt="/" className="object-cover w-full h-full" />
          <div className="absolute w-full h-full inset-[0]  opacity-30"></div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.15,
          }}
          className="grid lg:w-1/2 lg:gap-[30px] all:w-full py-4 "
        >
          <div>
            <p className="underline underline-offset-2 text-[12px] text-secondary font-bold max-mobile:hidden lg:mb-2">
              Why Us
            </p>{" "}
            <h1 className="font-sans text-4xl text-primary md:w-[80%] all:w-full max-mobile:hidden">
              The Art of Living Begins With Us
            </h1>
          </div>

          <p className="text-[12px]  text-primary all:w-full">
            Choosing the right real estate partner can make all the difference.
            At HillsApartment, we combine industry expertise with a commitment
            to client satisfaction, guiding you through every step of the
            buying, selling, or investing journey. Whether you&apos;re a
            first-time buyer or a seasoned investor, we’re here to make your
            experience smooth, informed, and rewarding.
          </p>
          <div className="pt-2 pl-4">
            <ul className="list-disc text-sm grid grid-cols-2">
              <Copy>
                <li>
                  <span className="font-bold">Expert Knowledge</span>
                </li>
              </Copy>
              <Copy>
                <li>
                  <span className="font-bold">Transparent Communication</span>
                </li>
              </Copy>
              <Copy>
                <li>
                  <span className="font-bold">Tailored Solutions</span>
                </li>
              </Copy>
              <Copy>
                <li>
                  <span className="font-bold"> Client-First Approach</span>
                </li>
              </Copy>
            </ul>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.15,
        }}
        className="w-[80%] text-center flex items-center justify-center  max-sm:w-full max-sm:justify-center mt-4"
      >
        <div className="bg-secondary px-3 py-3 flex items-center justify-center text-accent2 text-sm rounded-[10px]">
          <Link href={"/"}>Contact an Agent</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
