"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Btns, company, footerLinks } from "../constants";
import img5 from "@/components/assets/Images/Logo.png";

export default function Footer() {
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");

    setSubscribeStatus("sending");
    setSubscribeMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setSubscribeStatus("error");
        setSubscribeMessage(result.error ?? "Please try again.");
        return;
      }

      form.reset();
      setSubscribeStatus("sent");
      setSubscribeMessage("You are on the list — thank you.");
    } catch {
      setSubscribeStatus("error");
      setSubscribeMessage("Could not reach the server. Please try again.");
    }
  };

  return (
    <footer className="bg-primary text-background">
      <div className="shell pt-[clamp(4rem,8vw,7rem)] pb-10">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row justify-between gap-[clamp(2rem,5vw,4rem)] pb-[clamp(3rem,6vw,5rem)]"
        >
          <h2 className="display-lg max-w-[13ch]">
            Stay close to the market
          </h2>

          <form onSubmit={handleSubscribe} className="w-full lg:max-w-[26rem]">
            <label htmlFor="newsletter-email" className="sr-only">
              Your email
            </label>
            <div className="flex items-center gap-4 border-b border-white/30 focus-within:border-white transition-colors duration-300">
              <input
                type="email"
                name="email"
                id="newsletter-email"
                autoComplete="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent py-3 text-background placeholder:text-white/45 focus:outline-none"
              />
              <button
                type="submit"
                disabled={subscribeStatus === "sending"}
                className="shrink-0 text-[0.7rem] uppercase tracking-[0.2em] hover:text-accent transition-colors duration-300 disabled:opacity-50"
              >
                {subscribeStatus === "sending" ? "..." : "Subscribe"}
              </button>
            </div>

            {subscribeMessage && (
              <p
                aria-live="polite"
                className={`mt-3 text-sm ${
                  subscribeStatus === "error" ? "text-red-300" : "text-accent"
                }`}
              >
                {subscribeMessage}
              </p>
            )}
          </form>
        </motion.div>

        <hr className="border-0 h-px bg-white/15" />

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 py-[clamp(2.5rem,5vw,4rem)]">
          {footerLinks.map((footer) => (
            <div key={footer.heading}>
              <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-white/45">
                {footer.heading}
              </h3>
              <ul className="mt-6 space-y-3">
                {footer.link.map((link) => (
                  <li key={link.name + link.href}>
                    {link.href.startsWith("https") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-sm text-white/75 hover:text-background transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="link-underline text-sm text-white/75 hover:text-background transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {company.offices.map((office) => (
            <div key={office.label}>
              <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-white/45">
                {office.label}
              </h3>
              <p className="mt-6 text-sm text-white/75 leading-relaxed">
                {office.address}
              </p>
            </div>
          ))}
        </div>

        <hr className="border-0 h-px bg-white/15" />

        {/* Base line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-10">
          <Link href="/" aria-label="OG Winners Homes — home">
            <Image
              src={img5}
              alt="OG Winners Homes logo"
              className="w-[92px] h-auto object-contain brightness-0 invert"
            />
          </Link>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`tel:${company.phoneHref}`}
              className="link-underline text-sm text-white/75 hover:text-background transition-colors"
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="link-underline text-sm text-white/75 hover:text-background transition-colors"
            >
              {company.email}
            </a>
          </div>

          <div className="flex gap-5">
            {Btns.map((i, item) => (
              <a
                key={item}
                href={i.href}
                aria-label={i.label}
                target={i.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-white/60 hover:text-background transition-colors duration-300"
              >
                {i.icon}
              </a>
            ))}
          </div>
        </div>

        <p className="text-[0.7rem] tracking-wide text-white/40 pt-10">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
