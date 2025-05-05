"use client";
import { blogs, Btns, footerLinks } from "@/components/constants";
import Header from "@/components/sections/Header";
import useLenis from "@/hooks/useLenis";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Breadcrumbs from "@/components/sections/Breadcrumbs";

const Blog = () => {
  useLenis();
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <main className="lg:w-full overflow-hidden relative ">
      <Header color={false} />

      {/* Hero */}
      <section
        style={{
          backgroundImage: "url('/Images/Hero.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "top",
        }}
        className="w-full h-[50vh] text-center place-content-center relative max-sm:h-[30vh]"
      >
        <div className="relative z-30 ">
          {" "}
          <div className="w-full flex items-center justify-center pb-2">
            <Breadcrumbs />
          </div>
          <h1 className="font-sans text-4xl text-white font-bold ">Blog</h1>
        </div>

        <div className="overlay opacity-80 bg-primary"></div>
      </section>

      {/* Blogs */}
      <section className="">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="grid lg:grid-cols-4 md:grid-cols-2 all:grid-cols-1 w-full px-[70px] py-[50px] "
        >
          {blogs.map((id, item) => (
            <div
              key={item}
              className="w-[300px] rounded-[10px] overflow-hidden grid grid-cols-subgrid mb-6 md:scale-[0.9] "
            >
              {/* Image */}
              <div className="h-[250px] w-full overflow-hidden rounded-b-[10px]">
                <Image
                  src={id.image}
                  alt="/"
                  className="w-full h-full object-cover scale-[1] hover:scale-[1.3] transition-all duration-500"
                />
              </div>
              <Link href={"/"}>
                {" "}
                <div className="w-full pt-4">
                  <div className="flex items-start justify-between flex-col">
                    <h1 className="text-2xl font-bold">{id.title}</h1>
                    <h1 className="text-[#5c5c5c] font-sans text-sm flex items-center gap-[2px] pt-1 ">
                      <CiLocationOn />{" "}
                      <p className="text-sm line-clamp-2">{id.excerpt}</p>
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full h-fit pt-16 pb-4 text-foreground flex flex-col px-12 shadow-inner bg-[#170e01] gap-14 text-white">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="lg:flex flex-col "
        >
          <div className="flex items-start justify-between border-b-[1px] mb-2 pb-2 all:flex-col gap-[10px] lg:flex-row ">
            <h1 className="text-2xl">HillsApartment</h1>
            <div className="flex gap-3">
              {Btns.map((i, item) => (
                <Link key={item} href="/partner" className="btn">
                  {i.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex pt-4 flex-col md:flex-row">
            <div className=" basis-1/2 pb-12">
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

            <div className="grid grid-row-4 lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-12 lg:px-12 all:space-y-[0px] md:space-y-[100px] md:pl-8">
              {footerLinks.map((footer, id) => (
                <div key={id}>
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(id)}
                    className="flex justify-between items-center w-full text-lg font-sans font-bold md:text-nowrap"
                  >
                    {footer.heading}
                    {openSection === id ? (
                      <IoIosArrowUp className="text-xl outline-none text-secondary md:hidden" />
                    ) : (
                      <IoIosArrowDown className="text-xl outline-none text-secondary md:hidden" />
                    )}
                  </button>

                  {/* Collapsible Links */}
                  <ul
                    className={`mt-2 space-y-2 text-neutral-400 text-sm overflow-hidden md:overflow-visible transition-all duration-300 ease-in-out ${
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

export default Blog;
