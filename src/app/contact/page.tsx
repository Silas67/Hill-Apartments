"use client";
import { company } from "@/components/constants";
import Header from "@/components/sections/Header";
import { motion } from "framer-motion";
import useLenis from "@/hooks/useLenis";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import Faq from "@/components/sections/Faq";
import FormField from "@/components/sections/FormField";

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  useLenis();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

      <PageHero
        title="Contact"
        lede="Tell us what you are looking for. We usually reply within one business day."
      />

      {/* 01 — Details + form */}
      <section className="bg-background">
        <div className="shell section">
          <div className="flex flex-col lg:flex-row gap-[clamp(2.5rem,7vw,6rem)]">
            {/* Details */}
            <div className="lg:w-2/5">
              <p className="chapter-num">
                <span>01</span>
                <span className="text-ink-muted">Where to find us</span>
              </p>

              <h2 className="display-lg text-ink mt-6 max-w-[13ch]">
                Let&apos;s talk about your next move
              </h2>

              <div className="mt-10 space-y-8">
                {company.offices.map((office) => (
                  <div key={office.label} className="flex gap-4">
                    <FaMapMarkerAlt className="text-accent mt-1 shrink-0" />
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
                        {office.label}
                      </p>
                      <p className="prose-quiet mt-1">{office.address}</p>
                    </div>
                  </div>
                ))}

                <hr className="hairline" />

                <div className="space-y-4">
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="flex gap-4 items-center text-ink hover:text-accent transition-colors"
                  >
                    <FaPhone className="text-accent shrink-0" />
                    <span className="text-sm">{company.phone}</span>
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex gap-4 items-center text-ink hover:text-accent transition-colors"
                  >
                    <MdMail className="text-accent shrink-0" />
                    <span className="text-sm">{company.email}</span>
                  </a>
                </div>

                <div className="flex gap-6 pt-2">
                  {company.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-faint hover:text-ink transition-colors duration-300"
                    >
                      <Icon
                        icon={`line-md:${social.name.toLowerCase()}`}
                        width="20"
                        height="20"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-3/5">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="grid md:grid-cols-2 gap-x-10">
                  <FormField
                    id="name"
                    label="Name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                  />
                  <FormField
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>

                <FormField
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(+234) 800 000 0000"
                />

                <FormField
                  id="subject"
                  label="Subject"
                  type="text"
                  placeholder="What is this about?"
                />

                <div className="pt-8">
                  <label
                    htmlFor="message"
                    className="block text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us what you need..."
                    className="w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="pt-10 flex flex-wrap items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-3 border border-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-background transition-colors duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending" : "Send Message"}
                    <Icon
                      icon="line-md:arrow-right"
                      className="text-base transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </button>

                  <p aria-live="polite" className="text-sm">
                    {status === "sent" && (
                      <span className="text-accent">
                        Thank you — your message is on its way.
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
        </div>
      </section>

      <Faq index={2} />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Contact;
