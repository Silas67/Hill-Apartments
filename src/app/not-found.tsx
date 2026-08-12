import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="w-full">
      <Header />

      <section className="shell pt-[clamp(9rem,18vw,14rem)] pb-[clamp(5rem,10vw,9rem)]">
        <p className="eyebrow">404</p>

        <h1 className="display-xl text-ink mt-6 max-w-[16ch]">
          We could not find that page
        </h1>

        <p className="lede mt-8">
          It may have been moved or renamed. Try one of these instead.
        </p>

        <ul className="mt-12 border-t border-line max-w-[34rem]">
          {[
            { href: "/properties", label: "Browse properties" },
            { href: "/services", label: "Our services" },
            { href: "/blog", label: "Read the journal" },
            { href: "/contact", label: "Talk to an agent" },
          ].map((link) => (
            <li key={link.href} className="border-b border-line">
              <Link
                href={link.href}
                className="group flex items-center justify-between py-5 text-ink"
              >
                <span className="text-sm">{link.label}</span>
                <span
                  aria-hidden="true"
                  className="text-ink-faint transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
