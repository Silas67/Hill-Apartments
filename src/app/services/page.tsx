"use client";
import Header from "@/components/sections/Header";
import React, { useState } from "react";
// import { GiStarsStack } from "react-icons/gi";
import { Btns, footerLinks, servicesfull } from "@/components/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useLenis from "@/hooks/useLenis";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import Image from "next/image";
import img1 from "@/components/assets/Images/img5.jpg";
import img6 from "@/components/assets/Images/hero.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
import Copy from "@/hooks/Copy";
// import Copy from "@/hooks/Copy";

const Services = () => {
  useLenis();
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <main className="lg:w-full sm:w-[100vw] overflow-hidden relative ">
      <Header color={false} />
      {/* Hero */}
      <section className="w-full lg:h-[50vh] text-center place-content-center relative all:h-[30vh]">
        <div className="relative z-30">
          {" "}
          <div className="w-full flex items-center justify-center pb-2">
            <Breadcrumbs />
          </div>
          <h1 className="font-sans text-4xl text-white font-bold ">Services</h1>
        </div>

        <div className="absolute inset-0">
          <div className="h-full w-full">
            <Image src={img6} alt="" className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="absolute bg-foreground opacity-45 inset-0 w-full h-full"></div>
      </section>

      {/* What we offer */}
      <section
        className="w-full flex justify-start items-center p-8 lg:px-[70px] all:px-[30px] gap-[50px] all:flex-col scale-[1]
      "
      >
        <div className="grid lg:w-full gap-[5px] all:w-full pt-6 ">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-full space-y-[10px]"
          >
            {" "}
            <h1 className="uppercase text-[10px] text-secondary font-bold">
              Services
            </h1>
            <h1 className="font-sans text-4xl text-primary font-bold">
              What We Offer
            </h1>{" "}
            <p className="font-mono text-sm font-extralight text-foreground lg:w-[70%]">
              Step into a world where your needs shape our services. Offering
              bespoke consultations, innovative design & automation, meticulous
              construction, and strategic project management, we make your
              journey seamless. Plus, unlock smart investment avenues for
              unparalleled ROI. With Mshel Homes, it&apos;s more than a home
              it&apos;s a lifetime investment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 all:grid-cols-1 gap-[50px] items-center place-content-center space-y-[10px] pt-[100px]">
            {servicesfull.map((id, item) => (
              <div
                key={item}
                className="w-[300px] rounded-[10px] overflow-hidden lg:p-4 relative grid grid-cols-subgrid"
              >
                <Copy>
                  {" "}
                  <div className="text-primary py-2 text-xl font-sans font-bold text-center">
                    {id.heading}
                  </div>
                </Copy>
                <Copy>
                  <p className="text-[12px] font-mono">{id.title}</p>
                </Copy>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full h-[50vh] my-12 flex items-center justify-center ">
        <div className="w-full h-full flex flex-col md:flex-row bg-accent text-white font-sans overflow-hidden">
          {/* Text Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-full flex flex-col justify-center px-12 space-y-3 max-sm:scale-[0.9] max-sm:px-4"
          >
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
          </motion.div>

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

export default Services;
