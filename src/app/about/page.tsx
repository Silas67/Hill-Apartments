"use client";
import React, { useState } from "react";
import Header from "@/components/sections/Header";
import AnimatedNumbers from "react-animated-numbers";
import Image from "next/image";
import { achievementsList, Btns, FaQs, values } from "@/components/constants";
import img2 from "@/components/assets/Images/img27.jpg";
import img3 from "@/components/assets/Images/img30.jpg";
import useLenis from "@/hooks/useLenis";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
// import Testimonials from "@/components/sections/HomePage/Testimonials";
import img1 from "@/components/assets/Images/Ceo.jpg";
import Footer from "@/components/sections/Footer";

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
      <Header />

      {/* Hero */}
      <section className="w-full lg:h-[50vh] text-center place-content-center relative all:h-[30vh] ">
        <div className="relative z-30 w-full flexcent flex-col h-full">
          {" "}
          <div className="w-full flex items-center justify-center pb-2">
            <Breadcrumbs />
          </div>
          <h1 className="font-sans text-4xl text-white font-bold ">About Us</h1>
        </div>

        <div className="absolute inset-0">
          <Image src={img3} alt="/" className="object-cover w-full h-full" />
        </div>

        <div className="absolute bg-black/80 inset-0 w-full h-full"></div>
      </section>

      {/* Who We Are */}
      <section className="w-full px-[70px] py-20 max-sm:px-[30px]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="w-full flex justify-around items-center gap-[0px] all:flex-col lg:flex-row-reverse "
        >
          <div className="relative lg:w-[450px] h-[350px] overflow-hidden  rounded-[10px] all:w-full">
            <Image src={img2} alt="/" className="object-cover w-full h-full" />
            <div className="absolute w-full h-full inset-[0] bg-foreground opacity-30"></div>
          </div>

          <div className="grid lg:w-1/2 gap-[5px] all:w-full pt-6">
            <h1 className="uppercase text-[10px] text-secondary font-bold">
              Our Story
            </h1>

            <h1 className="text-4xl text-primary font-bold">Who We Are</h1>

            <p className="text-[12px]  text-foreground">
              This is Hill’s Apartments & Homes — a team of visionary builders,
              designers, and thinkers committed to redefining modern living.
              With a strong focus on innovation, elegance, and sustainability,
              we create spaces that go beyond walls and roofs — we create
              lifestyles.
            </p>

            <p className=" text-[12px] text-foreground">
              Every project we deliver is a reflection of deep understanding,
              thoughtful design, and an unwavering passion for excellence. From
              contemporary apartments to luxurious family homes, we’re building
              more than properties — we’re shaping the future of how people
              live, feel, and connect with their spaces.
            </p>

            <div className=" grid md:grid-cols-4 max-sm:grid-cols-2 place-content-start items-center w-full my-[20px] ">
              {achievementsList.map((achievement, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col lg:items-start max-mobile:items-center justify-center mx-1 my-4"
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
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="w-full flex justify-between items-start gap-[30px] mt-[30px]  max-tab:flex-col "
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative lg:w-[500px] h-full overflow-hidden all:w-full rounded-[10px]"
          >
            <Image src={img1} alt="/" className="object-cover w-full h-full" />
            <div className="absolute w-full h-full inset-[0] bg-black/30"></div>
          </motion.div>
          <div className="w-1/2 space-y-[50px]  max-tab:w-full">
            <h1 className="text-4xl lg:max-w-[70%]  max-tab:w-full max-mobile:text-3xl">
              Desiging spaces that insipire and elevate
            </h1>
            <p className=" text-sm ">
              At Hill’s Apartments & Homes, we believe that every space tells a
              story. Our passion lies in creating luxurious, functional
              environments that reflect elegance, comfort, and timeless design.
              From concept to completion, we focus on every detail — because we
              know home is more than a place, it’s a feeling. Whether
              you&apos;re investing, relocating, or simply upgrading your
              lifestyle, our commitment to quality and innovation ensures that
              every project exceeds expectations.
            </p>
            <div className="">
              <h1>Ejimonye Silas</h1>
              <p className="text-[#a4a4a4]">CEO Noxa</p>
            </div>
          </div>
        </motion.div>
      </section>

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
              className="w-[300px] h-[250px] bg-background flex items-center justify-center flex-col rounded-[10px] overflow-hidden shadow-lg p-4 relative"
            >
              <h1 className="text-2xl font-bold text-primary font-sans">
                {id.title}
              </h1>
              <p className="text-[12px] text-foreground  text-center p-2">
                {id.text}
              </p>
              <div className="w-full h-full opacity-20 absolute inset-[0] text-7xl text-secondary top-[40%] left-[40%]">
                {id.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full grid-rows-2 items-center py-20 lg:px-[100px]">
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

        <div className="lg:grid lg:grid-cols-3 lg:gap-[20px] lg:place-items-center flex items-center justify-center gap-[50px] my-[30px] all:flex-col md:flex-row flex-wrap">
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
                className="relative w-[250px] h-[250px] rounded-[10px] overflow-hidden bg-black/80"
                initial="initial"
                whileHover="hover"
                animate="initial"
              >
                {/* Background Image */}

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

                {/* Sliding colored overlay */}
                <div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-20 opacity-90 flex  px-12 pt-3 gap-2
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
      {/* <section>
        <Testimonials />
      </section> */}

      {/* FAQ */}
      <section className="w-full py-20 relative px-[70px] max-sm:px-[30px]">
        <div className="w-full text-center pb-6">
          <div className="text-2xl font-sans pt-6 font-bold  max-sm:text-xl text-nowrap">
            Frequently Asked{" "}
            <span className="bg-secondary p-2 text-white">Questions?</span>
          </div>

          <p className="pt-1 max-sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas ea
            beatae dolorem ratione neque
          </p>
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
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default About;
