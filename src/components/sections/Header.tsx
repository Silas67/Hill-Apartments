"use client";
import { useEffect, useState } from "react";
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
  const pathname = usePathname();

  // Only the homepage opens on a full-bleed photo. Every other page opens on
  // white, so the header must render in dark ink there or it disappears.
  const overPhoto = pathname === "/" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,color] duration-500 ${
        overPhoto
          ? "text-white bg-transparent border-b border-transparent"
          : "text-ink bg-background/85 backdrop-blur-md border-b border-line"
      }`}
    >
      <nav className="shell flex items-center justify-between h-[72px] md:h-[84px]">
        <Link href="/" aria-label="OG Winners Homes — home" className="shrink-0">
          <Image
            src="/Logo-2.png"
            alt="OG Winners Homes logo"
            width={150}
            height={100}
            priority
            // The source artwork is dark, so it only needs inverting when it
            // sits on the photographic hero.
            className={`h-[64px] w-auto object-contain transition-[filter] duration-500 ${
              overPhoto ? "invert" : "invert-0"
            }`}
          />
        </Link>

        {/* Desktop nav — plain text with a rule under the active item. */}
        <ul className="hidden lg:flex items-center gap-10">
          {Navbar.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[0.72rem] uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-100 ${
                    active ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-0 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center text-[0.72rem] uppercase tracking-[0.2em] px-6 py-3 border transition-colors duration-300 ${
              overPhoto
                ? "border-white/50 hover:bg-white hover:text-ink"
                : "border-ink/25 hover:bg-ink hover:text-background"
            }`}
          >
            Contact an Agent
          </Link>

          <div className="lg:hidden">
            <CornerNavGSAP />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
