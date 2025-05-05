"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Btns, footerLinks } from "@/components/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useLenis from "@/hooks/useLenis";
import { BsPlayCircle } from "react-icons/bs";
import Header from "@/components/sections/Header";

const PropertyPage = () => {
  useLenis();
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <div className="w-full py-10 ">
      <Header color />
      {/* Top Section */}
      <section className="flex items-center justify-center gap-[20px] all:py-[100px] lg:py-0 lg:my-12 px-[70px] flex-col lg:flex-row">
        <div className="w-[1/2] rounded overflow-hidden">
          <Image
            src="/Images/img13.jpg"
            alt="Property Image"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="all:w-full lg:w-[70%] font-sans lg:p-8 lg:scale-[0.9]">
          <h2 className="text-xl font-bold">
            3 BedRoom Fully Detached Bungalow
          </h2>
          <p className="text-2xl font-bold py-1">17,000,000</p>
          <p className="text-sm text-gray-600">3 Bed • 2 Bath • 1200 sqft</p>

          <div className="text-gray-600 text-sm lg:w-[80%] pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            doloribus voluptates totam illum, fuga sunt quis exercitationem
            optio, eius facilis quod nostrum repellendus repudiandae, quae
            veniam harum suscipit autem dicta.
          </div>
          <ul className="list-disc list-inside my-4 space-y-1 text-gray-700 font-mono">
            <li>Spacious Living Room</li>
            <li>Modern Kitchen</li>
            <li>Balcony with a View</li>
          </ul>
          <button className="bg-secondary text-white px-4 py-2 mt-2 rounded-md">
            Contact An Agent
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section className="flex items-center justify-center gap-[20px] bg-accent2 p-8 max-sm:flex-col">
        <div className="w-full text-5xl font-sans font-bold h-full items-center justify-center flex ">
          Take A Tour
        </div>
        <div className="w-[1/2] rounded overflow-hidden relative">
          <Image
            src="/Images/img9.jpg"
            alt="Property Image"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="overlay bg-foreground opacity-50 z-10 flex items-center justify-center"></div>
          <div className="absolute inset-0 z-50 flex items-center text-5xl text-background justify-center">
            <BsPlayCircle />
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?..."
          className="w-full h-[300px] border rounded-md mb-12"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* Reviews */}
      <section className="space-y-6 max-sm:px-[50px]">
        <h3 className="text-xl font-semibold">Reviews</h3>
        {[1, 2].map((_, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div>
              <p className="font-medium">User {i + 1}</p>
              <div className="flex text-yellow-400 mb-1">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <p className="text-gray-600">This property is amazing!</p>
            </div>
          </div>
        ))}
      </section>

      {/* Comment Form */}
      <section className="space-y-4 p max-sm:px-[50px]">
        <h4 className="text-lg font-semibold">Leave a Comment</h4>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-md"
          />
          <textarea
            placeholder="Your Comment"
            className="w-full border px-4 py-2 rounded-md h-32"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Mini Footer */}
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
    </div>
  );
};

export default PropertyPage;
