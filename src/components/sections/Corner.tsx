"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { company, navLinks } from "../constants";
import { startScroll, stopScroll } from "@/hooks/useLenis";

// Home and Contact bracket the shared primary navigation.
const drawerLinks = [
  { label: "Home", href: "/" },
  ...navLinks,
  { label: "Contact", href: "/contact" },
];

export default function CornerNavGSAP() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

  const closeMenu = () => {
    if (tl.current) tl.current.reverse();
    setOpen(false);
  };

  // Hash Changing Utility
  useEffect(() => {
    setHash(window.location.hash);
    const handle = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);

  // Active Class Utility
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && hash === "";
    }
    if (href.startsWith("#")) {
      return hash === href;
    }
    return pathname === href;
  };

  // Hash Instant Changing Function
  const handleNavClick = (href: string) => {
    setHash(href); // ✅ instantly set active
    closeMenu(); // ✅ close the menu
  };

  // Lock Scrolling When Open. Lenis ignores `overflow: hidden`, so the
  // instance has to be stopped; the body style covers pages without Lenis.
  useEffect(() => {
    if (open) {
      stopScroll();
      document.body.style.overflow = "hidden";
    } else {
      startScroll();
      document.body.style.overflow = "";
    }
    return () => {
      startScroll();
      document.body.style.overflow = "";
    };
  }, [open]);

  // GSAP Animation For Opening and Closing Menu
  useGSAP(() => {
    if (!menuRef.current) return;

    gsap.set(menuRef.current, {
      clipPath: "circle(0% at 89% 5%)",
    });

    tl.current = gsap.timeline({
      paused: true,
      onStart: () => {
        menuRef.current!.style.display = "flex";
        menuRef.current!.style.pointerEvents = "auto";
      },
      onReverseComplete: () => {
        menuRef.current!.style.display = "none";
        menuRef.current!.style.pointerEvents = "none";
      },
    });

    tl.current.to(menuRef.current, {
      backgroundColor: "#fff",
      clipPath: "circle(150% at 100% 0%)", // expand from center
      ease: "power4.inOut",
      duration: 1,
    });
  }, []);

  // Toggle Utility Class for Opening and Closing Menu
  const toggle = () => {
    if (!tl.current) return;
    if (open) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setOpen(!open); // flips icon
  };

  // Function to Close Menu
  useEffect(() => {
    if (open) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Fuction to Close Menu if Hash Changes
  useEffect(() => {
    const handleHashChange = () => {
      if (open) closeMenu();
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [open]);

  return (
    <>
      {/* toggle button */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={toggle}
        // Colour is inherited so the Header can flip it between white (over
        // the homepage photo) and dark ink (on white pages).
        className="z-50 flex items-center justify-center
                    text-current rounded-xl transition-discrete
                    duration-300"
      >
        {/* A house icon gave no hint that this opens the navigation. */}
        <Icon
          icon={open ? "mdi:close" : "mdi:menu"}
          width="26"
          height="26"
          className={`z-50 ${open ? "text-primary" : ""}`}
        />
      </button>

      {/* menu */}

      <div
        id="mobile-menu"
        ref={menuRef}
        style={{
          display: "none",
          pointerEvents: "none",
          willChange: "clip-path",
        }}
        className="absolute inset-0 bg-primary
                   z-40 h-[100vh] md:px-[100px] px-8 flex items-center justify-between max-sm:flex-col pt-10"
      >
        <div
          className="md:w-[70%] w-full h-full  flex flex-col items-start justify-center gap-5
                   text-3xl text-neutral-300"
          onClick={closeMenu}
        >
          {" "}
          {drawerLinks.map((txt, idx) => {
            const active = isActive(txt.href);

            return (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "anticipate" }}
                key={idx}
              >
                <Link
                  href={txt.href}
                  onClick={() => handleNavClick(txt.href)}
                  aria-current={active ? "page" : undefined}
                  className={`uppercase hover:tracking-wider transition-all duration-300 hover:text-accent font-anton ${
                    active ? "text-accent" : "text-primary"
                  }`}
                >
                  {txt.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center flex-1 w-[30%]  h-full max-sm:hidden ">
          <div className="border-l border-primary px-[50px] space-y-8">
            {" "}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col items-start justify-center "
            >
              <h2 className="font-semibold text-xl text-primary">Offices</h2>
              <div className="text-sm flex-col items-start flex space-y-2 text-primary">
                {company.offices.map((office) => (
                  <span key={office.label}>
                    <strong className="block">{office.label}</strong>
                    {office.address}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col items-start justify-center "
            >
              <h2 className="font-semibold text-xl text-primary">Contact</h2>
              <p className="flex items-center  gap-2">
                <Icon
                  icon="line-md:phone-filled"
                  width="18"
                  height="18"
                  className="text-primary"
                />
                <span className="text-sm text-primary">{company.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon
                  icon="material-symbols:mail"
                  width="18"
                  height="18"
                  className="text-primary"
                />
                <span className="text-sm text-primary">{company.email}</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col items-start justify-center "
            >
              <h2 className="font-semibold text-xl text-primary">Social</h2>
              <p className="flex items-center gap-3 text-primary">
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
                      width="18"
                      height="18"
                      className="hover:scale-[1.2] transition-all duration-300 text-primary"
                    />
                  </a>
                ))}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-5 sm:mt-0 mt-8 md:hidden ">
          {/* small‑screen social icons */}
          <div className="flex gap-6 sm:hidden">
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
                  className="text-primary hover:text-accent transition"
                />
              </a>
            ))}
          </div>

          {/* Contact Us button */}
          <Link
            href="/contact"
            onClick={() => handleNavClick("/contact")}
            className="w-full max-w-xs py-3 bg-primary rounded-3xl text-center
               text-white font-semibold hover:bg-accent transition mb-[100px]"
          >
            Contact&nbsp;Us
          </Link>
        </div>
      </div>
    </>
  );
}
