"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CornerNavGSAP from "./Corner";

export const Navbar = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   if (navIsLive) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   // Cleanup on unmount
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [navIsLive]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(isScrolled);
  }, [isScrolled]);

  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 left-0 px-[70px] w-full h-[10vh] flex items-center justify-center z-50 transition-all duration-300 bg-transparent text-white
      max-sm:pl-6 max-sm:pr-8 max-sm:py-4
      `}
    >
      <nav className="w-full flex items-center justify-between md:mx-[0px]">
        <Link href={"/"} className="outline-none">
          <Image
            src={"/Logo.png"}
            alt="/"
            width={100}
            height={100}
            className={` ${
              isScrolled
                ? "filter invert-0 transition-all duration-500"
                : "filter invert-100 transition-all duration-500"
            }`}
          />
        </Link>

        <div className="flex items-center border rounded-r-full rounded-l-full bg-black/30 backdrop-blur-[5px]">
          {Navbar.map((link, id) => {
            const active = pathname === link.href;
            return (
              <motion.div key={id} className="hidden lg:flex">
                <Link
                  href={link.href}
                  className={`flex flex-col relative font-normal hover:font-bold transition-all duration-500 text-[12px]  py-[8px] px-[32px]  rounded-r-full rounded-l-full ${
                    active
                      ? " bg-secondary text-white font-[700]"
                      : "text-inherit"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="flex gap-7 items-center">
          <button className="bg-secondary w-fit py-[8px] px-[12px] rounded-l-full rounded-r-full flex flex-row gap-1 justify-center items-center max-sm:hidden max-md:flex max-[690px]:flex hover:bg-white hover:text-primary scale-[1] hover:scale-105 font-normal hover:font-bold transition-all duration-300  ">
            {" "}
            <Link href="/contact" className="text-[10px]">
              Contact An Agent{" "}
            </Link>
          </button>

          <div className="lg:hidden">
            <CornerNavGSAP />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
    </div>
  );
};

export default Header;
