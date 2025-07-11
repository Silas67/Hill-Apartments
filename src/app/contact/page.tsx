"use client";
import { FaQs } from "@/components/constants";
import Header from "@/components/sections/Header";
import { motion } from "framer-motion";
import useLenis from "@/hooks/useLenis";
import Link from "next/link";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { Icon } from "@iconify/react/dist/iconify.js";
import Copy from "@/hooks/Copy";
import Image from "next/image";
import img1 from "@/components/assets/Images/img30.jpg";
import Footer from "@/components/sections/Footer";

const Contact = () => {
  useLenis();
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <main className="lg:w-full sm:w-[100vw] overflow-hidden relative ">
      <Header />

      {/* Getintouch */}
      <section className="w-full flex items-center justify-center flex-col bg-white md:py-20  gap-[20px] ">
        <div className="relative md:rounded-[20px] overflow-hidden flexcent">
          <div className="lg:w-[90%] w-full lg:h-[100vh]  flex md:py-[30px] max-mobile:px-[10px] max-mobile:py-[100px] md:px-[30px] lg:items-start md:items-center flex-col-reverse lg:flex-row ">
            {/* Left */}
            <div className="w-full md:p-8 flex lg:items-start justify-between gap-4 flex-col text-white p-2 h-full md:items-center z-30">
              <div className="w-[80%] hidden lg:block">
                <h1 className="lg:text-[30px]  font-bold md:text-3xl">
                  Let&apos;s discuss on something cool together
                </h1>
              </div>

              <div className="flex flex-col lg:items-start gap-[20px] max-mobile:mt-[20px]">
                <div className="text-white  hover:text-gray-500 transition-colors flex gap-2 items-center text-[14px]">
                  <FaMapMarkerAlt className="text-xl" />
                  T19 Road 2 Lekki Garden Phase 4, Lekki Lagos.
                </div>

                <div className="text-white  hover:text-gray-500 transition-colors flex gap-2 items-center text-[14px]">
                  <FaPhone className="text-xl" /> (+234) 803 283 2962
                </div>

                <div className="text-white  hover:text-gray-500 transition-colors flex gap-2 items-center text-[14px]">
                  <MdMail className="text-xl" /> HillsApartment@gmail.com
                </div>
              </div>

              <div className="flex gap-6 ">
                <Link href="https://instagram.com">
                  <Icon
                    icon="line-md:instagram"
                    width="20"
                    height="20"
                    className="text-white hover:scale-110 transition-all duration-300 hover:rotate-6"
                  />
                </Link>
                <Link href="https://twitter.com">
                  <Icon
                    icon="line-md:twitter"
                    width="20"
                    height="20"
                    className="text-white hover:scale-110 transition-all duration-300 hover:rotate-6"
                  />
                </Link>
                <Link href="https://linkedin.com">
                  <Icon
                    icon="line-md:linkedin"
                    width="20"
                    height="20"
                    className="text-white hover:scale-110 transition-all duration-300 hover:rotate-6"
                  />
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="flexcent flex-col gap-6 z-30">
              <div className="w-[80%] max-mobile:w-full text-white lg:hidden">
                <h1 className="lg:text-[30px]  font-bold md:text-3xl text-center max-mobile:text-4xl">
                  Let&apos;s discuss on something cool together
                </h1>
              </div>
              <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="flex-1 rounded-xl space-y-6 w-full bg-white p-[20px] flex flex-col justify-center"
              >
                <div className="flex items-center justify-between gap-6 max-mobile:flex-col">
                  <div className="flex flex-col max-mobile:w-full">
                    <label
                      htmlFor="name"
                      className="text-neutral-800 font-bold mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="px-6 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                      placeholder="Silas Ejimonye"
                      required
                    />
                  </div>
                  <div className="flex flex-col max-mobile:w-full">
                    <label
                      htmlFor="email"
                      className="text-neutral-800 font-bold mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="px-6 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                      placeholder="chibukesilas@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="Phone"
                    className="text-neutral-800 font-bold mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="px-4 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                    placeholder="(+234)-810-488-4845"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="subject"
                    className="text-neutral-800 font-bold mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="px-4 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-neutral-800 font-bold mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="px-4 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                    placeholder="Tell us what you need..."
                    required
                  ></textarea>
                </div>
                <div className="w-full flexcent">
                  <button
                    type="submit"
                    className="group flex items-center gap-2 bg-primary hover:bg-white transition-all text-white font-semibold py-2 px-6 rounded-3xl outline-none hover:scale-105 hover:shadow-2xl hover:text-primary border border-primary duration-200"
                  >
                    <p className="transition-all duration-500 text-sm">
                      Send Message
                    </p>
                    <Icon
                      icon="line-md:arrow-right"
                      className="-rotate-45 group-hover:-rotate-0 text-lg transition-all duration-500"
                    />
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
          {/* Background */}
          <div className="absolute inset-0 w-full h-full z-10">
            <Image src={img1} alt="/" className="object-cover w-full h-full" />
          </div>
          <div className="absolute bg-black/50 z-20 w-full h-full"></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-[20px] relative px-[70px] max-sm:px-[30px]">
        <div className="w-full text-center pb-6">
          <Copy>
            <div className="text-2xl font-sans pt-6 font-bold  max-sm:text-xl text-nowrap">
              Frequently Asked{" "}
              <span className="bg-secondary p-2 text-white">Questions?</span>
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
                className={`space-y-2 text-white text-sm transition-all duration-500 ease-in-out overflow-hidden ${
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
      <Footer />
    </main>
  );
};

export default Contact;
