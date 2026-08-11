"use client";
import { company, FaQs } from "@/components/constants";
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

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  useLenis();
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage(
        "We could not reach the server. Please check your connection and try again."
      );
    }
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

              <div className="flex flex-col lg:items-start gap-[20px] max-mobile:mt-[20px] md:items-center pb-4">
                {company.offices.map((office) => (
                  <div
                    key={office.label}
                    className="text-white flex gap-2 items-start text-[14px]"
                  >
                    <FaMapMarkerAlt className="text-xl shrink-0" />
                    <span>
                      <strong className="block">{office.label}</strong>
                      {office.address}
                    </span>
                  </div>
                ))}

                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-white hover:text-gray-500 transition-colors flex gap-2 items-center text-[14px]"
                >
                  <FaPhone className="text-xl" /> {company.phone}
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="text-white hover:text-gray-500 transition-colors flex gap-2 items-center text-[14px]"
                >
                  <MdMail className="text-xl" /> {company.email}
                </a>
              </div>

              <div className="flex gap-6 ">
                {company.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon={`line-md:${social.name.toLowerCase()}`}
                      width="20"
                      height="20"
                      className="text-white hover:scale-110 transition-all duration-300 hover:rotate-6"
                    />
                  </a>
                ))}
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
                onSubmit={handleSubmit}
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
                      name="name"
                      autoComplete="name"
                      className="px-6 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                      placeholder="Your full name"
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
                      name="email"
                      autoComplete="email"
                      className="px-6 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-neutral-800 font-bold mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className="px-4 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                    placeholder="(+234) 800 000 0000"
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
                    name="subject"
                    className="px-4 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                    placeholder="What is this about?"
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
                    name="message"
                    rows={4}
                    className="px-4 py-2 rounded-3xl bg-neutral-100  border border-neutral-300 "
                    placeholder="Tell us what you need..."
                    required
                  ></textarea>
                </div>
                <div className="w-full flexcent flex-col gap-3">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex items-center gap-2 bg-primary hover:bg-white transition-all text-white font-semibold py-2 px-6 rounded-3xl outline-none hover:scale-105 hover:shadow-2xl hover:text-primary border border-primary duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <p className="transition-all duration-500 text-sm">
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </p>
                    <Icon
                      icon="line-md:arrow-right"
                      className="-rotate-45 group-hover:-rotate-0 text-lg transition-all duration-500"
                    />
                  </button>

                  <p aria-live="polite" className="text-sm text-center">
                    {status === "sent" && (
                      <span className="text-green-700">
                        Thank you — your message is on its way. We usually reply
                        within one business day.
                      </span>
                    )}
                    {status === "error" && (
                      <span className="text-red-600">{errorMessage}</span>
                    )}
                  </p>
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
              Answers to the questions we hear most from buyers, sellers and
              investors. If yours is not here, talk to an agent.
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
