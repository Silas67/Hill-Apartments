"use client";
import React from "react";
import Header from "@/components/sections/Header";
import AnimatedNumbers from "react-animated-numbers";
import Image from "next/image";
import {
  achievementsList,
  Btns,
  team,
  values,
} from "@/components/constants";
import img2 from "@/components/assets/Images/Agent.png";
import useLenis from "@/hooks/useLenis";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import PageHero from "@/components/sections/PageHero";
// import Testimonials from "@/components/sections/HomePage/Testimonials";
import img1 from "@/components/assets/Images/Ceo-2.png";
import Footer from "@/components/sections/Footer";
import Chapter from "@/components/sections/Chapter";
import Faq from "@/components/sections/Faq";

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
  return (
    <main className="lg:w-full sm:w-[100vw] overflow-hidden relative ">
      <Header />

      <PageHero
        title="About Us"
        lede="A team of builders, designers and advisors creating exceptional living spaces across Abuja and Lagos."
      />

      {/* 01 — Who we are */}
      <Chapter
        index={1}
        eyebrow="Our Story"
        title="Who we are"
        image={img2}
        imageAlt="An OG Winners Homes agent with a client"
        align="right"
      >
        <p className="prose-quiet">
          OG Winners Homes is a team of builders, designers and thinkers
          committed to redefining modern living. With a focus on innovation,
          elegance and sustainability, we create spaces that go beyond walls
          and roofs — we create lifestyles.
        </p>
        <p className="prose-quiet">
          Every project we deliver reflects deep understanding, thoughtful
          design and an unwavering passion for excellence. From contemporary
          apartments to family homes, we are building more than properties.
        </p>
      </Chapter>

      {/* Figures — a quiet band rather than four boxes */}
      <section className="bg-background">
        <div className="shell section-tight">
          <hr className="hairline" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 pt-10">
            {achievementsList.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-baseline text-ink display-md">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-ink"
                  />
                  <span>{achievement.postfix}</span>
                </div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
                  {achievement.metric}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Our approach */}
      <Chapter
        index={2}
        eyebrow="Our Approach"
        title="Designing spaces that inspire and elevate"
        image={img1}
        imageAlt="Chief Executive Officer of OG Winners Homes"
        align="left"
        tone="paper"
      >
        <p className="prose-quiet">
          We believe every space tells a story. Our work lies in creating
          functional environments that reflect elegance, comfort and timeless
          design. From concept to completion we focus on every detail —
          because a home is more than a place, it is a feeling.
        </p>
        <p className="prose-quiet">
          Whether you are investing, relocating or upgrading your lifestyle,
          our commitment to quality ensures every project exceeds
          expectations.
        </p>
        <div className="pt-6">
          <hr className="hairline max-w-[8rem]" />
          <p className="text-ink mt-4 text-sm font-medium">OG Winners Homes</p>
          <p className="text-ink-faint text-sm">Chief Executive Officer</p>
        </div>
      </Chapter>

      {/* 03 — What guides us */}
      <section className="bg-background">
        <div className="shell section">
          <p className="chapter-num">
            <span>03</span>
            <span className="text-ink-muted">What Guides Us</span>
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-line mt-12 border border-line">
            {values.map((id, item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 * item,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-background p-[clamp(1.75rem,3vw,2.75rem)] flex flex-col gap-5 group"
              >
                <span className="text-2xl text-accent transition-transform duration-500 group-hover:-translate-y-1">
                  {id.icon}
                </span>
                <h3 className="display-md text-ink">{id.title}</h3>
                <p className="prose-quiet">{id.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team — hidden until real team members are added to `team` */}
      <section
        className={`w-full grid-rows-2 items-center py-20 lg:px-[100px] ${
          team.length === 0 ? "hidden" : ""
        }`}
      >
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
          {team.map((member, index) => (
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
                {member.img && (
                  <Image
                    src={member.img}
                    alt={`${member.name}, ${member.role}`}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                )}

                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-full absolute z-30 bottom-[20px] text-center text-accent2"
                >
                  <div className="font-[600]">{member.name}</div>
                  <div className="italic text-[#d1d1d1]">{member.role}</div>
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
                            <a
                              key={item}
                              href={i.href}
                              aria-label={i.label}
                              target={
                                i.href.startsWith("mailto:")
                                  ? undefined
                                  : "_blank"
                              }
                              rel="noopener noreferrer"
                              className="btn"
                            >
                              {i.icon}
                            </a>
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

      <Faq index={4} />

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default About;
