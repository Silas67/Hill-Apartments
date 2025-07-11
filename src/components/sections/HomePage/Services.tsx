import React from "react";
import Image from "next/image";
import img4 from "@/components/assets/Images/img25.jpg";
// import { services } from "@/components/constants";
// import Copy from "@/hooks/Copy";
import { motion } from "framer-motion";
import Link from "next/link";
// import { GiStarsStack } from "react-icons/gi";
import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
  return (
    <div
      className="w-full flex justify-between items-center p-8 px-[100px] max-sm:px-[30px] py-16 gap-[30px] bg-black/10 flex-col lg:flex-row
      "
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="lg:w-[500px] overflow-hidden rounded-[10px] lg:h-[450px]"
      >
        <Image src={img4} alt="/" className="object-cover w-full h-full" />
      </motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex lg:items-start max-mobile:items-center justify-center flex-col lg:text-left max-mobile:text-center flex-1 gap-[20px]"
      >
        <h1 className="font-sans text-3xl text-primary mt-[5px]">
          Desiging spaces that insipire and elevate
        </h1>
        <p className="text-sm text-foreground  lg:max-w-[80%] max-mobile:w-full">
          Step into a world where your needs shape our services. Offering
          bespoke consultations, innovative design & automation, meticulous
          construction, and strategic project management, we make your journey
          seamless. Plus, unlock smart investment avenues for unparalleled ROI.
          With Mshel Homes, it&apos;s more than a home it&apos;s a lifetime
          investment.
        </p>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="w-full max-mobile:flex max-mobile:items-center max-mobile:justify-center "
        >
          {" "}
          <div className="text-sm mt-2 text-neutral-300 flex items-center gap-[10px] group  transition-all duration-500 cursor-pointer text-primary">
            <Link href={"/services"} className="flex items-center gap-[10px]">
              {" "}
              View Services
              <Icon
                icon="line-md:arrow-right"
                className="-rotate-45 group-hover:rotate-0  transition-all duration-500 "
              />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
