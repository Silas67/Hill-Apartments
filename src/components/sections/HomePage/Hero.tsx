// import { Btns } from "@/components/constants";
import { motion } from "framer-motion";
// import Link from "next/link";
import Image from "next/image";
import img1 from "@/components/assets/Images/img30.jpg";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
// import { FaCaretDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full max-mobile:h-[80vh] md:h-[100vh] overflow-hidden">
      <div className="w-full h-full overflow-hidden">
        <Image src={img1} alt="/" className="w-full h-full object-cover" />
      </div>

      {/* Text Content */}
      <div className="relative flex flex-col w-full h-full items-start justify-center z-20 text-center text-white px-4 -mt-[100vh] max-mobile:-mt-[70vh]">
        <div className="absolute lg:right-[40px] md:right-[20px] max-md:top-[100px] top-[80px] text-left max-mobile:px-[20px] ">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-[30px] md:text-[35px] lg:text-4xl max-w-[400px] text-left text-background font-sans"
          >
            Where Vision Meets Structure and Dreams Becomes Purpose
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-sm mt-2 text-neutral-300 flex items-center gap-[10px] group  transition-all duration-500 cursor-pointer"
          >
            View Properties
            <Icon
              icon="line-md:arrow-right"
              className="-rotate-45 group-hover:rotate-0  transition-all duration-500 "
            />
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="absolute md:bottom-[10vh] bottom-[15vh] md:px-[30px] max-mobile:pr-[30px] z-30 w-full  flex md:justify-start md:items-start flex-col gap-[10px] scale-[1]">
          {/* <div className="flex flex-col items-center justify-center">
            <div className="w-[150px] h-[30px] bg-primary rounded-t-[10px] text-white text-[12px] flex items-center justify-between overflow-hidden">
              <div className="w-fit bg-white h-full px-[20px] text-primary flex items-center justify-center">
                All
              </div>
              <div className="w-fit h-full px-[15px]  flex items-center justify-center">
                Sale
              </div>
              <div className="w-fit h-full px-[15px]  flex items-center justify-center">
                Rent
              </div>
            </div>
            <form className="w-[500px] mb-[30px] h-[60px] border rounded-[20px] bg-background flex px-[20px] py-[10px] gap-[10px]">
              <div className="border-r border-[#d6d6d6] flex justify-between items-center px-[10px]">
                <div className="flex flex-col items-start justify-center ">
                  <label htmlFor="" className="text-[#414141] text-[10px]">
                    Location
                  </label>
                  <input
                    type="text"
                    name="Location"
                    id="Location"
                    placeholder="Enter KeyWord"
                    className="text-black text-[12px] outline-none"
                  />
                </div>
                <button>
                  <FaCaretDown className="text-black w-1/2 cursor-pointer" />
                </button>
              </div>
              <div className="border-r border-[#d6d6d6] flex justify-between items-center px-[10px]">
                <div className="flex flex-col items-start justify-center ">
                  <label htmlFor="" className="text-[#414141] text-[10px]">
                    Type
                  </label>
                  <input
                    type="text"
                    name="Location"
                    id="Location"
                    placeholder="All Type"
                    className="text-black text-[12px] outline-none"
                  />
                </div>
                <button>
                  <FaCaretDown className="text-black w-1/2 cursor-pointer" />
                </button>
              </div>
              <button className="px-[20px] py-[10px] bg-primary text-white flex items-center justify-center rounded-[10px] text-[12px] gap-[3px]">
                Search
              </button>
            </form>
          </div> */}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex gap-8"
          >
            <div className="border-r pr-8">
              <h1 className="md:text-[50px] text-[30px]">70+</h1>
              <p className="text-[12px]">Satisfied Customers</p>
            </div>
            <div className="border-r pr-8">
              <h1 className="md:text-[50px] text-[30px]">100+</h1>
              <p className="text-[12px]">Projects Completed</p>
            </div>
            <div>
              <h1 className="md:text-[50px] text-[30px]">10+</h1>
              <p className="text-[12px]">Years in Business</p>
            </div>
          </motion.div>

          {/* <div className="flex gap-[20px] lg:pr-[50px]">
            {Btns.map((i, item) => (
              <Link key={item} href="/partner" className="btn">
                {i.icon}
              </Link>
            ))}
          </div> */}
        </div>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
};

export default Hero;
