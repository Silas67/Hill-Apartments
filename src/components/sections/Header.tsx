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

const Header = ({ color }: { color: boolean }) => {
  const [navIsLive, setNavIsLive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setNavIsLive(!navIsLive);
    console.log(navIsLive);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
      className={`fixed top-0 left-0 px-8 w-full h-[10vh] flex items-center justify-center z-50 transition-all duration-300
      max-sm:pl-0 max-sm:pr-8
      ${
        isScrolled || color
          ? "bg-white text-black shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="w-full flex items-center justify-between md:mx-[20px]">
        <div className="flex justify-between gap-10 items-center text-[12px]">
          <Link href={"/"}>
            <Image src={"/Logo.png"} alt="/" width={200} height={150} />
          </Link>
          {Navbar.map((link, id) => {
            const active = pathname === link.href;
            return (
              <motion.div
                key={id}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1, color: "var(--secondary)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="hidden lg:flex"
              >
                <Link
                  href={link.href}
                  className={`flex flex-col relative hover:scale-[1.1] ${
                    active
                      ? "underline underline-offset-4 text-[14px] text-secondary"
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
          <div
            className={` text-[14px] scale-[1] hover:scale-[1.1] hover:text-secondary transition-all duration-300${
              isScrolled ? "text-black" : "text-background"
            }`}
          >
            <Link href={"/signup"}>Sign Up</Link>
          </div>
          <button className="bg-secondary w-[100px] p-[8px] rounded-lg flex flex-row gap-1 justify-center items-center max-sm:hidden max-md:flex max-[690px]:flex hover:bg-primary hover:text-white transition-colors duration-300 border border-secondary">
            {" "}
            <Link href="/contact" className="text-[10px]">
              Contact{" "}
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

      <div>
        <div className="lg:hidden">
          <motion.aside
            initial={{ x: "100vw" }}
            animate={{ x: navIsLive ? 1 : "100vw" }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="sidebar relative shadow-lg"
          >
            <nav className="nav">
              <ul>
                {Navbar.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="a">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default Header;
