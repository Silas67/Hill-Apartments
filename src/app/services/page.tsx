"use client";
import Header from "@/components/sections/Header";
import React, { useState } from "react";
// import { GiStarsStack } from "react-icons/gi";
import { Btns, footerLinks } from "@/components/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useLenis from "@/hooks/useLenis";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import Image from "next/image";
import img1 from "@/components/assets/Images/img5.jpg";
import { BiRightArrowAlt } from "react-icons/bi";

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
      <section
        style={{
          backgroundImage: "url('/Images/Hero.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "left",
        }}
        className="w-full h-[50vh] text-center place-content-center relative all:h-[30vh]"
      >
        <div className="relative z-30">
          {" "}
          <div className="w-full flex items-center justify-center pb-2">
            <Breadcrumbs />
          </div>
          <h1 className="font-sans text-4xl text-white font-bold ">Services</h1>
        </div>

        <div className="overlay opacity-80 bg-primary"></div>
      </section>

      {/* What we offer */}
      <section
        className="w-full flex justify-start items-center p-8 lg:px-[70px] all:px-[30px] gap-[50px] all:flex-col scale-[1]
      "
      >
        <div className="grid lg:w-full gap-[5px] all:w-full pt-6 ">
          <div className="w-full space-y-[10px]">
            <h1 className="uppercase text-[10px] text-secondary font-bold">
              Services
            </h1>
            <h1 className="font-sans text-4xl text-primary font-bold">
              What We Offer
            </h1>
            <p className="font-mono text-sm font-extralight text-foreground lg:w-[70%]">
              Step into a world where your needs shape our services. Offering
              bespoke consultations, innovative design & automation, meticulous
              construction, and strategic project management, we make your
              journey seamless. Plus, unlock smart investment avenues for
              unparalleled ROI. With Mshel Homes, it&apos;s more than a home
              it&apos;s a lifetime investment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 all:grid-cols-1 gap-[50px] items-center place-content-center space-y-[10px] pt-[100px]">
            {[1, 2, 3, 4].map((id, item) => (
              <div
                key={id}
                className="w-[300px] rounded-[10px] overflow-hidden lg:p-4 relative grid grid-cols-subgrid"
              >
                <div className="text-primary py-2 text-xl font-sans font-bold text-center">
                  Some Text{item}
                </div>
                <p className="text-[12px]  font-mono">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  natus ex perspiciatis, nesciunt necessitatibus veniam
                  quibusdam. Quisquam debitis est sapiente placeat accusamus
                  ullam, repellendus sunt quidem delectus ratione libero
                  adipisci.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ipsa natus ex perspiciatis, nesciunt necessitatibus
                  veniam quibusdam. Quisquam debitis est sapiente placeat
                  accusamus ullam, repellendus sunt quidem delectus ratione
                  libero adipisci. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsa natus ex perspiciatis, nesciunt
                  necessitatibus veniam quibusdam. Quisquam debitis est sapiente
                  placeat accusamus ullam, repellendus sunt quidem delectus
                  ratione libero adipisci.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="w-full h-[50vh] items-center justify-center flex my-12">
        <div className="w-[80%] h-full bg-accent text-white font-sans rounded-[10px] flex items-center justify-between overflow-hidden max-sm:w-full">
          <div className="w-1/2 h-full flex flex-col items-start justify-center px-[50px] space-y-[10px] max-sm:scale-[0.9]">
            <h1 className="text-3xl">Discover Our Finest Selection</h1>
            <p className="text-[12px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              placeat earum impedit laudantium id totam beatae blanditiis
            </p>
            <div className="p-2  flex items-center justify-center rounded-[10px] text-sm gap-1 text-foreground bg-accent2">
              {" "}
              Discover
              <BiRightArrowAlt className="text-lg" />
            </div>
          </div>
          <div className="w-1/2 h-full overflow-hidden">
            <Image src={img1} alt="/" className="w-full  h-full object-cover" />
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
          <div className="flex items-center justify-between border-b-[1px] mb-2 pb-2">
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

            <div className="grid grid-row-4 lg:grid-cols-3 gap-4 md:gap-12 lg:px-12 all:space-y-[0px] md:space-y-[100px]">
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

        <div className="text-[12px] cursor-default w-full border-t-[1px] border-white p-4 flex justify-between max-sm:text-[10px] max-sm:gap-4">
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
