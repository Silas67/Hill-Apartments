import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Btns, footerLinks } from "../constants";
import Image from "next/image";
import img5 from "@/components/assets/Images/Logo.png";
import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <footer className="w-full h-fit pt-16 pb-4 text-foreground flex flex-col px-12 max-sm:px-6 bg-primary gap-8 text-white">
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="lg:flex flex-col "
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b-[1px]  pb-2 max-sm:flex-col max-sm:items-start ">
          <Image
            src={img5}
            alt="logo"
            className="w-[100px] h-[60px] object-cover invert-75"
          />

          <div className="flex gap-3">
            {Btns.map((i, item) => (
              <Link key={item} href="/partner" className="btn">
                {i.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex pt-4 flex-col md:flex-row max-sm:flex-col-reverse">
          {/* Links */}
          <div className="grid grid-row-4 lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-12 lg:px-12 md:pl-8">
            {footerLinks.map((footer, id) => (
              <div key={id}>
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(id)}
                  className="flex justify-between items-center w-full text-lg font-sans font-bold"
                >
                  {footer.heading}
                  {openSection === id ? (
                    <IoIosArrowUp className="text-xl outline-none text-secondary lg:hidden" />
                  ) : (
                    <IoIosArrowDown className="text-xl outline-none text-secondary lg:hidden" />
                  )}
                </button>

                {/* Collapsible Links */}
                <ul
                  className={`mt-2 space-y-2 text-neutral-400 text-sm overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out ${
                    openSection === id ? "max-h-full p-2" : " max-h-0 p-0"
                  }`}
                >
                  {footer.link.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:text-white hover:underline transition-all duration-300"
                    >
                      {link.href.startsWith("https") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link href={link.href}>{link.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex items-start md:flex-col max-mobile:gap-[10px]">
              <h1 className="font-bold">Address</h1>
              <p>The Mshel Hub, No. 2 Julius Adelusi Street, Guzape, Abuja.</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-[100%] py-12 max-sm:pb-12">
            <h1 className="font-sans font-bold text-xl ">
              Subscribe For Updates
            </h1>

            <div className="w-full flex items-center justify-center max-sm:w-full relative mt-8">
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Your email"
                className="w-full border-b border-white text-accent2 relative  transition-all duration-300 pb-2 "
              />

              <button className="absolute rounded-3xl text-primary transition-colors right-[0] bg-accent2 p-2 text-sm bottom-[0] mb-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="text-[12px] cursor-default w-full border-t-[1px] border-white p-4 flex justify-between max-sm:text-[10px] max-sm:gap-4 max-sm:flex-col-reverse items-center">
        <p>@ CopyRight. All rights reserved</p>
        <div>
          HillsAprtment 15 E I Gomos Road, Shandam close, Abacha road, Mararaba
          Nassarawa | Tel:(+234) 703 380 9119
        </div>
      </div>
    </footer>
  );
}
