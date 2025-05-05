"use client";
import React, { useState } from "react";
import Header from "@/components/sections/Header";
import AnimatedNumbers from "react-animated-numbers";
import Image from "next/image";
import {
  achievementsList,
  Btns,
  FaQs,
  footerLinks,
  Recommended,
  values,
} from "@/components/constants";
import img1 from "@/components/assets/Images/profile2.png";
import img2 from "@/components/assets/Images/img27.jpg";
import img3 from "@/components/assets/Images/profile.png";
import useLenis from "@/hooks/useLenis";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsQuote } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Breadcrumbs from "@/components/sections/Breadcrumbs";

const overlayVariants = {
  initial: { y: "100%" },
  hover: { y: "0%" },
};
const textVariants = {
  initial: { opacity: 1 },
  hover: { opacity: 0 },
};

const About = () => {
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
          backgroundPosition: "top right",
        }}
        className="w-full h-[50vh] text-center place-content-center relative max-sm:h-[30vh]"
      >
        <div className="relative z-30">
          {" "}
          <div className="w-full flex items-center justify-center pb-2">
            <Breadcrumbs />
          </div>
          <h1 className="font-sans text-4xl text-white font-bold ">About Us</h1>
        </div>

        <div className="overlay opacity-80 bg-primary"></div>
      </section>

      {/* Who We Are */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full bg-accent2 flex justify-between items-start p-8 px-[70px] gap-[50px] all:flex-col lg:flex-row
      "
      >
        <div className="relative lg:w-1/2 h-full overflow-hidden  rounded-[10px] all:w-full">
          <Image src={img2} alt="/" className="object-cover w-full h-full" />
          <div className="absolute w-full h-full inset-[0] bg-foreground opacity-30"></div>
        </div>

        <div className="grid lg:w-1/2 gap-[5px] all:w-full pt-6">
          <h1 className="uppercase text-[10px] text-secondary font-bold">
            Our Story
          </h1>
          <h1 className="font-sans text-4xl text-primary font-bold">
            Who We Are
          </h1>
          <p className="font-mono text-[12px] font-extralight text-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            doloremque, magnam possimus omnis, repellendus dolore ducimus velit
            similique alias natus quis vitae nobis, ipsum aliquam aspernatur et
            fugit excepturi quod debitis illum nulla. Impedit maxime illum,
            ipsum eum aliquid ad veniam dicta cum dolor natus aperiam, assumenda
            molestias voluptate! Impedit!
          </p>
          <p className="font-mono text-[12px] font-extralight text-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            doloremque, magnam possimus omnis, repellendus dolore ducimus velit
            similique alias natus quis vitae nobis, ipsum aliquam aspernatur et
            fugit excepturi quod debitis illum nulla. Impedit maxime illum,
            ipsum eum aliquid ad veniam dicta cum dolor natus aperiam, assumenda
            molestias voluptate! Impedit!
          </p>
          <div className="grid all:grid-cols-2 md:grid-cols-4 place-content-center items-center w-full my-[20px]">
            {achievementsList.map((achievement, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                >
                  <h2 className="text-3xl text-primary font-bold flex items-center">
                    {achievement.prefix}
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={parseInt(achievement.value)}
                      locale="en-US"
                      className=" text-[#0f0f0f] text-3xl font-bold"
                    />

                    {achievement.postfix}
                  </h2>
                  <p className="text-[#151515] text-nowrap text-sm">
                    {achievement.metric}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Mission and Vision */}
      <section className="w-full">
        <div className="flex items-center w-full justify-center my-12 gap-[50px] flex-wrap">
          {values.map((id, item) => (
            <motion.div
              key={item}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.1 * item,
              }}
              className="w-[300px] h-[250px] bg-background flex items-center justify-center flex-col rounded-[10px] overflow-hidden shadow p-4 relative"
            >
              <h1 className="text-2xl font-bold text-primary font-sans">
                {id.title}
              </h1>
              <p className="text-[12px] text-foreground font-mono text-center p-2">
                {id.text}
              </p>
              <div className="w-full h-full opacity-30 absolute inset-[0] text-7xl text-secondary top-[40%] left-[40%]">
                {id.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full grid-rows-2 items-center my-[50px]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="w-full text-center space-y-[5px]"
        >
          <h1 className="text-[12px] text-secondary font-sans font-bold uppercase">
            Our Teams
          </h1>
          <p className="text-3xl font-[400]">Meet Our Management</p>
        </motion.div>

        <div className="flex items-center justify-center gap-[50px] my-[30px] all:flex-col md:flex-row flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.1 * index,
              }}
              key={index}
            >
              <motion.div
                className="relative w-[300px] h-[300px] rounded-[10px] overflow-hidden"
                initial="initial"
                whileHover="hover"
                animate="initial"
              >
                {/* Background Image */}
                <Image
                  src={img1}
                  alt="property"
                  className="object-cover w-full h-full "
                  fill
                />

                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-full absolute z-30 bottom-[20px] text-center"
                >
                  <Link className="text-accent2" href={"/"}>
                    <div className="font-[600]">Name</div>
                    <div className="italic text-[#d1d1d1]">Position</div>
                  </Link>
                </motion.div>

                {/* Gradient overlay always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent z-10" />

                {/* Sliding colored overlay */}
                <div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-20 opacity-90 flex  px-12 pt-3 gap-2
                      "
                    variants={overlayVariants}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="text-[#e4e2e2] text-sm">
                        <div className="flex gap-3">
                          {Btns.map((i, item) => (
                            <Link key={item} href="/partner" className="btn">
                              {i.icon}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent w-full py-[40px]  relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="w-full text-center text-white"
        >
          <div className="text-4xl font-sans text-background pb-6 font-bold">
            Testimonials
          </div>
        </motion.div>

        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            690: { slidesPerView: 2, spaceBetween: 5 },
            700: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="w-[80%]"
        >
          <div className="flex items-center justify-center gap-[20px] py-12 px-8 ">
            {Recommended.map((id, item) => (
              <SwiperSlide key={item}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.05 * item,
                  }}
                  className="w-[300px] h-[250px] rounded-[10px]  mt-8 bg-accent2 p-3 relative"
                >
                  <div className="w-full flex  h-full items-center justify-center text-sm text-foreground text-center flex-col ">
                    <div>
                      <BsQuote />
                    </div>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur repellendus, assumenda ad nesciunt,
                    </p>
                    <div className="relative -bottom-[4vh] italic">
                      <h1 className="font-[600]">Ejimonye Silas</h1>
                      <p>Worker</p>
                    </div>
                    <div className="absolute w-[80px] h-[80px] rounded-full border-[5px] border-accent -top-[5vh] overflow-hidden right-[37%]">
                      <Image
                        src={img3}
                        alt="/"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>

      {/* FAQ */}
      <section className="w-full py-[20px] relative px-[70px]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="w-full text-center pb-6"
        >
          <div className="text-2xl font-sans pt-6 font-bold">
            Frequently Asked{" "}
            <span className="bg-secondary p-2">Questions?</span>
          </div>
          <p className="pt-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas ea
            beatae dolorem ratione neque
          </p>
        </motion.div>
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
                className="flex justify-between w-full text-left font-sans font-bold text-sm "
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

export default About;
