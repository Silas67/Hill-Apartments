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
import img1 from "@/components/assets/Images/img5.jpg";
import img5 from "@/components/assets/Images/Logo.png";
import { BiRightArrowAlt } from "react-icons/bi";

const Blog = () => {
  useLenis();
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <main className="lg:w-full overflow-hidden relative sm">
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
      <section className="py-12 w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-[300px] rounded-[10px] overflow-hidden bg-white shadow-md transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="h-[250px] w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt="blog image"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <Link href={"/"}>
                <div className="p-4 space-y-2">
                  <h1 className="text-xl font-bold">{blog.title}</h1>
                  <div className="text-[#5c5c5c] text-sm flex items-start gap-1">
                    <CiLocationOn className="mt-[2px]" />
                    <p className="line-clamp-2">{blog.excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="w-full h-[50vh] my-12 flex items-center justify-center ">
        <div className="w-full h-full flex flex-col md:flex-row bg-accent text-white font-sans overflow-hidden">
          {/* Text Content */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-12 space-y-3 max-sm:scale-[0.9] max-sm:px-4">
            <h1 className="text-3xl max-sm:text-2xl font-semibold">
              Discover Our Finest Selection
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              placeat earum impedit laudantium id totam beatae blanditiis
            </p>
            <button className="p-2 flex items-center justify-center rounded-[10px] text-sm gap-1 text-foreground bg-accent2 w-fit">
              Discover
              <BiRightArrowAlt className="text-lg" />
            </button>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 h-full overflow-hidden">
            <Image
              src={img1}
              alt="Discover"
              className="w-full h-full object-cover"
              priority
            />
          </div>
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

export default Blog;
