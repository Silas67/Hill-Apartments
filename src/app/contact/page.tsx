"use client";
import { Btns, FaQs, footerLinks } from "@/components/constants";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import Header from "@/components/sections/Header";
import { motion } from "framer-motion";
import useLenis from "@/hooks/useLenis";
import Link from "next/link";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdMail } from "react-icons/md";
import Image from "next/image";
import img5 from "@/components/assets/Images/Logo.png";
import img6 from "@/components/assets/Images/hero.jpg";
import Copy from "@/hooks/Copy";

const Contact = () => {
  useLenis();
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <main className="lg:w-full sm:w-[100vw] overflow-hidden relative ">
      <Header color={false} />

      {/* Hero */}
      <section className="w-full lg:h-[50vh] text-center place-content-center relative h-[30vh]">
        <div className="relative z-30">
          {" "}
          <div className="w-full flex items-center justify-center pb-2">
            <Breadcrumbs />
          </div>
          <h1 className="font-sans text-4xl text-white font-bold ">Contact</h1>
        </div>
        <div className="absolute inset-0">
          <div className="h-full w-full">
            <Image src={img6} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="absolute bg-foreground opacity-45 inset-0 w-full h-full"></div>
        ``
      </section>

      {/* Getintouch */}
      <section className="w-full flex items-center justify-center flex-col bg-accent2">
        <div className="flex flex-col items-center mt-10 p-8 w-full gap-[10px]">
          <Copy>
            <h1 className="text-5xl font-sans font-bold text-primary">
              Get in Touch
            </h1>
          </Copy>
          <Copy>
            {" "}
            <p className="text-[12px] font-mono text-[#424242]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ullam.
            </p>
          </Copy>
        </div>

        <div className="w-full p-8 flex items-center justify-around gap-4 max-sm:flex-col">
          <div>
            <div className="text-foreground mb-8 hover:text-gray-500 transition-colors flex gap-2 items-center text-lg">
              <FaMapMarkerAlt className="text-xl" />
              T19 Road 2 Lekki Garden Phase 4, Lekki Lagos.
            </div>

            <div className="text-foreground mb-8 hover:text-gray-500 transition-colors flex gap-2 items-center text-lg">
              <FaPhone className="text-xl" /> (+234) 803 283 2962
            </div>

            <div className="text-foreground mb-8 hover:text-gray-500 transition-colors flex gap-2 items-center text-lg">
              <MdMail className="text-xl" /> Blinkzsparks@gmail.com
            </div>
          </div>

          <form className="w-1/2 flex flex-col bg-accent2 p-4 rounded-[10px] p-6 border border-primary max-sm:w-full mb-4">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-primary font-bold block mb-2 text-sm "
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-background border border-primary  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-primary font-bold block mb-2 text-sm "
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-background border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-primary font-bold block mb-2 text-sm "
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-background border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-transparent border border-primary hover:text-primary transition-all duration-500 font-bold text-white  py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas
              ea beatae dolorem ratione neque
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

      {/* Footer */}
      <footer className="w-full h-fit pt-16 pb-4 text-foreground flex flex-col px-12 max-sm:px-6 bg-[#170e01] gap-8 text-white">
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
            HillsAprtment 15 E I Gomos Road, Shandam close, Abacha road,
            Mararaba Nassarawa | Tel:(+234) 703 380 9119
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Contact;
