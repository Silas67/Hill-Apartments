// import { achievementsList2 } from "@/components/constants";
// import Copy from "@/hooks/Copy";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from "@/components/assets/Images/Ceo.jpg";
// import AnimatedNumbers from "react-animated-numbers";

const About = () => {
  return (
    <div className="w-full flex justify-center items-start px-8 md:px-[100px] gap-[20px] flex-col py-12">
      <motion.h1
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        className="text-[12px] text-secondary font-bold underline underline-offset-2"
      >
        About Us
      </motion.h1>

      <div className="w-full flex justify-between items-start gap-[50px] max-mobile:flex-col">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="w-1/2 max-mobile:w-full"
        >
          <h1 className="text-3xl">
            Innovative Architecture For A Changing World
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="w-1/2 space-y-[20px]  max-mobile:w-full"
        >
          <p className=" text-sm ">
            At Hill’s Apartments & Homes, we don’t just build properties — we
            design spaces that adapt to evolving lifestyles. With a deep
            understanding of today’s architectural needs, we combine elegance,
            technology, and sustainability to create homes that truly stand the
            test of time. From modern apartments to luxurious family residences,
            our mission is to elevate everyday living.
          </p>

          <button className="bg-primary text-white border border-primary w-fit py-[8px] px-[12px] rounded-l-[10px] rounded-r-[10px] flex flex-row gap-1 justify-center items-center hover:bg-white hover:text-primary scale-[1] hover:scale-105 transition-all duration-300 ">
            {" "}
            <Link href="/contact" className="text-[10px]">
              More about us{" "}
            </Link>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        className="w-full flex justify-between items-start gap-[30px] mt-[50px]  max-tab:flex-col "
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative lg:w-[500px] h-full overflow-hidden all:w-full rounded-[10px]"
        >
          <Image src={img1} alt="/" className="object-cover w-full h-full" />
          <div className="absolute w-full h-full inset-[0] bg-black/30"></div>
        </motion.div>
        <div className="w-1/2 space-y-[50px]  max-tab:w-full">
          <h1 className="text-4xl lg:max-w-[70%]  max-tab:w-full max-mobile:text-3xl">
            Desiging spaces that insipire and elevate
          </h1>
          <p className=" text-sm ">
            At Hill’s Apartments & Homes, we believe that every space tells a
            story. Our passion lies in creating luxurious, functional
            environments that reflect elegance, comfort, and timeless design.
            From concept to completion, we focus on every detail — because we
            know home is more than a place, it’s a feeling. Whether you&apos;re
            investing, relocating, or simply upgrading your lifestyle, our
            commitment to quality and innovation ensures that every project
            exceeds expectations.
          </p>
          <div className="">
            <h1>Ejimonye Silas</h1>
            <p className="text-[#a4a4a4]">CEO Noxa</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
