"use client";
import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import Image from "next/image";

export const Navbar = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const [navIsLive, setNavIsLive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setNavIsLive(!navIsLive);
    console.log(navIsLive);
  };
  useEffect(() => {
    if (navIsLive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navIsLive]);

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

          <div
            onClick={handleClick}
            className="hidden text-2xl max-sm:flex max-[1030px]:flex sm:text-3xl relative transition-all duration-[2s] z-50"
          >
            {navIsLive ? (
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: 180, scale: 1.2 }}
                exit={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: easeInOut }}
              >
                <MdClose className="text-foreground lg:hidden" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: -180, scale: 1 }}
                animate={{ rotate: 0, scale: 1.2 }}
                exit={{ rotate: -180, scale: 1 }}
                transition={{ duration: 0.3, ease: easeInOut }}
              >
                <MdMenu className="lg:hidden" />
              </motion.div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div>
        <div className="lg:hidden">
          <motion.aside
            initial={{ x: "-100%", opacity: 0 }}
            animate={
              navIsLive
                ? { x: 0, opacity: 1 }
                : { x: "30%", opacity: 0, display: "none" }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden fixed top-0 left-0 w-full lg:h-screen  h-screen bg-accent2 text-white z-40 flex flex-col justify-between px-6 pt-8 pb-6"
          >
            <div className="flex justify-between items-center">
              <div className="text-xl font-anton">HillsApartment</div>
              <button
                onClick={handleClick}
                className="text-white text-2xl"
              ></button>
            </div>

            <ul className="flex flex-col gap-6 uppercase transform -translate-y-14 text-5xl ">
              {Navbar.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="break-after-all font-heather tracking-wide text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-full items-center flex flex-col justify-center">
              {" "}
              <button className="bg-secondary w-fit p-[8px] rounded-lg flex flex-row gap-1 justify-center items-center hover:bg-primary hover:text-white transition-colors duration-300 border border-secondary mb-3">
                {" "}
                <Link href="/contact" className="text-[10px] text-primary">
                  Contact An Agent{" "}
                </Link>
              </button>
              <p className="text-primary py-3 text-[10px] text-nowrap border-y-1 border-[#bcbcbc]">
                +(234)-810-488-4845, +(234)-812-456-5509
              </p>
              <p className="text-primary py-3 text-[10px] text-nowrap border-b-1 border-[#bcbcbc]">
                @info.company&apo;smail@gmail.com
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default Header;
