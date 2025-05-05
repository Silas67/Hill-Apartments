"use client";
import Header from "@/components/sections/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import useLenis from "@/hooks/useLenis";
import {
  achievementsList,
  achievementsList2,
  Btns,
  FaQs,
  footerLinks,
  property,
  Recommended,
  services,
  sidebarPosts,
} from "@/components/constants/index";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { slides } from "@/components/constants/index";
import img1 from "@/components/assets/Images/img23.jpg";
import img2 from "@/components/assets/Images/profile.png";
import img3 from "@/components/assets/Images/img24.jpg";
import img4 from "@/components/assets/Images/img888.png";
import { motion } from "framer-motion";
import AnimatedNumbers from "react-animated-numbers";
import { BsQuote } from "react-icons/bs";
import { GiBathtub, GiStarsStack } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import {
  TbRulerMeasure2,
  TbSquareRoundedArrowLeftFilled,
  TbSquareRoundedArrowRightFilled,
} from "react-icons/tb";
import { BiSolidRightArrow } from "react-icons/bi";
import "swiper/css/navigation";

import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Home() {
  useLenis();
  const overlayVariants = {
    initial: { y: "100%" },
    hover: { y: "0%" },
  };
  const textVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
  };

  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <main className="lg:w-full sm:w-[100vw] overflow-hidden relative ">
      <Header color={false} />

      {/* Hero */}
      <section>
        <ParallaxProvider>
          <div className="relative w-full h-[70vh] lg:h-[100vh] overflow-hidden">
            <Swiper
              effect="fade"
              modules={[Autoplay, EffectFade]}
              autoplay={{
                delay: 4500,
                disableOnInteraction: true,
              }}
              speed={2000}
              className="absolute inset-0 z-0"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  {/* Parallax effect per slide image */}
                  <Parallax speed={-20}>
                    <div className="w-full h-screen">
                      <Image
                        src={slide.img}
                        alt="/"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </Parallax>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-foreground opacity-30 z-10" />

            {/* Text Content */}
            <div className="relative -mt-[100vh] flex flex-col w-full h-full items-center justify-center z-20 text-center text-white px-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-4xl lg:text-5xl font-sans font-[600] "
              >
                Your <span className="text-secondary">Property.</span> Our
                Priority.
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                className="text-sm font-mono mt-2 text-[#ecebeb]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quas optio sunt.
              </motion.p>

              {/* Buttons */}
              <div className="absolute bottom-[10vh] px-[30px] z-30 w-full flex justify-between items-center max-sm:flex-col gap-[10px]">
                <div className="flex gap-8">
                  <Link
                    href="/properties"
                    className="btn all:text-[12px] md:text-sm"
                  >
                    See Our Properties
                  </Link>
                  <Link
                    href="/contact"
                    className="btn all:text-[12px] md:text-sm"
                  >
                    Download Newsletter
                  </Link>
                </div>
                <div className="flex gap-3">
                  {Btns.map((i, item) => (
                    <Link key={item} href="/partner" className="btn">
                      {i.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ParallaxProvider>
      </section>

      {/* About */}
      <section
        className="w-full bg-accent2 flex justify-between items-start p-8 px-[70px] gap-[50px] all:flex-col lg:flex-row
      "
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative lg:w-1/2 h-full overflow-hidden  rounded-[10px] all:w-full"
        >
          <Image src={img1} alt="/" className="object-cover w-full h-full" />
          <div className="absolute w-full h-full inset-[0] bg-foreground opacity-30"></div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="grid lg:w-1/2 gap-[10px] all:w-full"
        >
          <h1 className="uppercase text-[10px] text-secondary font-bold">
            About
          </h1>
          <h1 className="font-sans text-4xl text-primary font-bold">
            Our Story
          </h1>
          <p className="font-mono text-[12px] font-extralight text-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            doloremque, magnam possimus omnis, repellendus dolore ducimus velit
            similique alias natus quis vitae nobis, ipsum aliquam aspernatur et
            fugit excepturi quod debitis illum nulla. Impedit maxime illum,
            ipsum eum aliquid ad veniam dicta cum dolor natus aperiam, assumenda
            molestias voluptate! Impedit!
          </p>
          <div className="grid grid-cols-4 place-content-center items-center w-full my-[20px] max-sm:gap-[70px] ">
            {achievementsList.map((achievement, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-center mx-1 my-4 "
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
        </motion.div>
      </section>

      {/* Our Properties */}
      <section className="w-full grid-rows-2 items-center my-[50px]">
        <div className="w-full text-center space-y-[5px]">
          <h1 className="text-xl text-secondary font-sans font-bold">
            Our Properties
          </h1>
          <p className="text-3xl font-[100]">
            Dive Into The Diffrent Options We Have
          </p>
        </div>

        <div className="flex items-center justify-center gap-[50px] my-[30px] all:flex-col md:flex-row flex-wrap">
          {property.map((item, index) => (
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
                  src={item.img}
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
                    {item.label}
                  </Link>
                </motion.div>

                {/* Gradient overlay always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent z-10" />

                {/* Sliding colored overlay */}
                <Link href={"/"}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent z-20 opacity-90 flex  px-12 pt-3 gap-2
              "
                    variants={overlayVariants}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="h-full bg-white w-2 "></div>
                    <div className="flex flex-col gap-[100px]">
                      <div className="text-4xl font-bold pt-4 text-white font-serif">
                        {" "}
                        {item.label}
                      </div>

                      <div className="text-[#e4e2e2] text-sm">
                        Lorem ipsum dolor sit amet con sectetur adipisicing
                        elit. Dolorem ut architecto
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        className="w-full flex justify-between items-center p-8 px-[70px] gap-[50px] all:flex-col lg:flex-row-reverse scale-[0.9] max-sm:px-[30px]
      "
      >
        <div className="relative lg:w-1/2 h-full overflow-hidden rounded-b-[20px] all:w-full ">
          <Image src={img4} alt="/" className="object-cover w-full h-full " />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="grid lg:w-[70%] gap-[5px] all:w-full pt-6 "
        >
          <h1 className="uppercase text-[10px] text-secondary font-bold">
            Services
          </h1>
          <h1 className="font-sans text-4xl text-primary font-bold">
            What We Offer
          </h1>
          <div>
            <p className="font-mono text-sm font-extralight text-foreground">
              Step into a world where your needs shape our services. Offering
              bespoke consultations, innovative design & automation, meticulous
              construction, and strategic project management, we make your
              journey seamless. Plus, unlock smart investment avenues for
              unparalleled ROI. With Mshel Homes, it&apos;s more than a home
              it&apos;s a lifetime investment.
            </p>
            <div className="grid all:grid-cols-1 md:grid-cols-2 items-center place-content-center space-y-[10px] ">
              {services.map((id, item) => (
                <div
                  key={item}
                  className="w-[300px] h-[200px] rounded-[10px] overflow-hidden p-4 relative"
                >
                  <div className="text-secondary p-2 w-[35px] rounded-[5px] text-xl">
                    <GiStarsStack />
                  </div>
                  <div className="text-primary py-2 text-xl font-sans font-bold">
                    {id.Heading}
                  </div>
                  <p className="text-[12px] line-clamp-4 font-mono">
                    {id.text}
                  </p>
                  <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-[#a3a3a3] to-transparent opacity-10"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recommended */}
      <section className="bg-background w-full py-[20px] relative">
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
          <p className="uppercase text-[10px] text-neutral-100 text-secondary font-bold">
            Top Features
          </p>
          <div className="text-4xl font-sans text-primary font-bold max-sm:text-3xl">
            Recommended For You
          </div>
        </motion.div>
        <div className="absolute top-1/2 left-10 z-50 max-sm:left-0">
          <button className="button-prev text-foreground text-5xl">
            <TbSquareRoundedArrowLeftFilled />
          </button>
        </div>
        <div className="absolute top-1/2 right-15 z-50 max-sm:right-5">
          <button className="button-next text-5xl text-foreground">
            <TbSquareRoundedArrowRightFilled />
          </button>
        </div>

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
          <div className="flex items-center justify-center gap-[20px] py-12 px-8 overflow-hidden">
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
                  className="w-[300px] rounded-[10px] overflow-hidden mt-8 ml-[6px]"
                >
                  {/* Image */}
                  <div className="h-[250px] w-full overflow-hidden rounded-b-[10px]">
                    <Image
                      src={id.img}
                      alt="/"
                      className="w-full h-full object-cover scale-[1] hover:scale-[1.3] transition-all duration-500"
                    />
                  </div>
                  <Link href={"/"}>
                    {" "}
                    <div className="w-full py-4">
                      <div className="flex items-start justify-between flex-col font-sans">
                        <div className="flex items-center justify-between  w-full">
                          <h1 className="text-sm text-[#373737] font-bold">
                            {id.title}
                          </h1>
                          <h1 className="text-lg font-bold">{id.price}</h1>
                        </div>

                        <h1 className="text-[#5c5c5c] font-sans text-sm flex items-center gap-[2px] pt-1 ">
                          <CiLocationOn /> <p>{id.location}</p>
                        </h1>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-[10px] text-[#545454]">
                            <h1 className="flex items-center gap-[2px] text-[13px]">
                              <GiBathtub /> <p>{id.bath}</p>
                            </h1>
                            <h1 className="flex items-center gap-[2px] text-[13px]">
                              <FaBed /> <p>{id.beds}</p>
                            </h1>
                            <h1 className="flex items-center gap-[2px] text-[13px]">
                              <TbRulerMeasure2 /> <p>{id.mesuare}</p>
                            </h1>
                          </div>
                          <div className="text-background bg-foreground rounded-[5px] p-2">
                            <BiSolidRightArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>

      {/* Banner */}
      <section className="w-full flex gap-[20px] bg-[#f9f0e0] py-12 items-center justify-around px-[70px] my-12 all:flex-col md:flex-row">
        <div className="w-full items-center text-4xl font-sans font-black text-foreground">
          <h1>
            Take A Look <br />
            At The Numbers
          </h1>
        </div>
        <div className="grid grid-cols-4 place-content-center items-center w-full my-[20px] max-sm:gap-[50px] ">
          {achievementsList2.map((achievement, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center mx-1 my-4 "
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
      </section>

      {/* Why You Should Work With Us */}
      <section
        className="w-full flex justify-between items-start p-8 px-[70px] gap-[50px] all:flex-col lg:flex-row
      "
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="relative lg:w-1/2 h-full overflow-hidden  rounded-[10px] all:w-full"
        >
          <Image src={img3} alt="/" className="object-cover w-full h-full" />
          <div className="absolute w-full h-full inset-[0]  opacity-30"></div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.15,
          }}
          className="grid lg:w-1/2 gap-[10px] all:w-full py-4 "
        >
          <h1 className="font-sans text-4xl text-primary font-bold md:w-[80%] all:w-full">
            Why You Should Work With Us
          </h1>
          <p className="font-mono text-[12px] font-extralight text-foreground md:w-[80%] all:w-full">
            Choosing the right real estate partner can make all the difference.
            At HillsApartment, we combine industry expertise with a commitment
            to client satisfaction, guiding you through every step of the
            buying, selling, or investing journey. Whether you&apos;re a
            first-time buyer or a seasoned investor, we’re here to make your
            experience smooth, informed, and rewarding.
          </p>
          <div className="pt-2 pl-4">
            <ul className="list-disc text-sm">
              <li>
                <span className="font-bold">Expert Knowledge</span> – We stay on
                top of market trends to give you an edge.
              </li>
              <li>
                <span className="font-bold">Transparent Communication</span> –
                Clear, honest updates every step of the way.
              </li>
              <li>
                <span className="font-bold">Tailored Solutions</span> – Your
                goals are our blueprint for action.
              </li>
              <li>
                <span className="font-bold"> Client-First Approach</span> – Your
                satisfaction is our success.
              </li>
            </ul>
          </div>
          <div className="w-[80%] text-center flex items-center justify-start my-2">
            <div className="bg-secondary px-3 py-3 flex items-center justify-center text-accent2 text-sm">
              <Link href={"/"}>Contact an Agent</Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-foreground w-full py-[40px]  relative">
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
                  className="w-[300px] h-[250px] rounded-[10px]  ml-5 mt-[50px] bg-accent2 p-3 relative"
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
                    <div className="absolute w-[80px] h-[80px] rounded-full border-[5px] border-foreground -top-[5vh] overflow-hidden right-[37%]">
                      <Image
                        src={img2}
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
      <section className="w-full py-[20px] relative px-[70px] max-sm:px-[30px]">
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
          <div className="text-2xl font-sans pt-6 font-bold  max-sm:text-xl text-nowrap">
            Frequently Asked{" "}
            <span className="bg-secondary p-2">Questions?</span>
          </div>
          <p className="pt-1 max-sm:text-sm">
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

      {/* Blog */}
      <section className="w-full px-6 py-12 px-[70px] max-sm:px-[30px]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="w-full items-start flex flex-col"
        >
          <p className="text-sm text-gray-500 mb-2">Blog</p>
          <h1 className="text-4xl font-bold mb-6 font-sans">
            Recent Articles And News
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.1,
          }}
          className="grid grid-cols-1 md:grid-cols-2 place-content-center items-center scale-[0.9] "
        >
          {/* Main Content */}
          <div className=" space-y-4 w-[90%]">
            <div className="w-full h-64 relative">
              <Image
                src={img1} // Replace with real image
                alt="Main"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <h2 className="text-xl font-semibold">A Subtitle</h2>
            <p className="text-gray-600 text-sm line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat justo non orci fermentum, nec efficitur orci hendrerit.
            </p>
            <p className="text-gray-600 text-sm line-clamp-4">
              More text here to simulate a paragraph about the blog content.
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 md:border-l scale-[0.9] max-sm:grid max-sm:grid-cols-2 gap-[50px] max-sm:border-t pl-4 max-sm:pt-4">
            {sidebarPosts.map((post) => (
              <div
                key={post.id}
                className="flex gap-4 items-center justify-around all:flex-col md:flex-row"
              >
                <div className="w-full h-full relative rounded overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold text-sm">{post.title}</p>
                  <p className="text-gray-600 text-sm line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    consequat justo non orci fermentum, nec efficitur orci
                    hendrerit.
                  </p>
                </div>
              </div>
            ))}
          </div>
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
}
