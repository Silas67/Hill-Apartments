import { FaQs } from "@/components/constants";
import Copy from "@/hooks/Copy";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Questions = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <section className="w-full py-[20px] relative px-[70px] max-sm:px-[30px]">
      <div className="w-full text-center pb-6">
        <Copy>
          <div className="text-2xl font-sans pt-6 font-bold  max-sm:text-xl text-nowrap">
            Frequently Asked{" "}
            <span className="bg-secondary p-2">Questions?</span>
          </div>
        </Copy>
        <Copy>
          <p className="pt-1 max-sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas ea
            beatae dolorem ratione neque
          </p>
        </Copy>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-12 gap-8">
        {FaQs.map((item, id) => (
          <motion.div
            key={id}
            className="flex flex-col items-center justify-center gap-4 shadow p-2 rounded-[10px]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.05 * id,
            }}
          >
            <button
              onClick={() => toggleSection(id)}
              className="flex justify-between w-full text-left font-sans font-bold text-[12px] "
            >
              {item.Question}
              {openSection === id ? (
                <IoIosArrowUp className="text-xl outline-none text-secondary" />
              ) : (
                <IoIosArrowDown className="text-xl outline-none text-secondary" />
              )}
            </button>
            <div
              className={`space-y-2 text-foreground text-sm transition-all duration-500 ease-in-out overflow-hidden ${
                openSection === id ? "max-h-full p-2" : " max-h-0 p-0"
              }`}
            >
              <p>{item.Answer}</p>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-center gap-4 shadow p-2 rounded-[10px] border border-dashed font-sans font-bold text-sm text-[#424242]"
        >
          <Link href={"/contact"}>Have A Question?</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Questions;
