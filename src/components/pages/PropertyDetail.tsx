"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsPlayCircle } from "react-icons/bs";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { formatNaira } from "@/lib/format";
import type { Property } from "@/lib/types";

const badgeFor = (p: Property) => {
  if (p.status === "sold") return "Sold";
  if (p.status === "let") return "Let";
  return p.listing_type === "sale" ? "For Sale" : "To Rent";
};

const isHttp = (u: string | null): u is string => !!u && /^https?:\/\//i.test(u);

export default function PropertyDetail({ property: p }: { property: Property }) {
  useLenis();
  const [active, setActive] = useState(0);

  const cover = p.images[active] ?? p.images[0];
  const mapQuery = p.address || `${p.location}, Abuja, Nigeria`;

  const specs: string[] = [];
  if (p.beds != null) specs.push(`${p.beds} Bed${p.beds === 1 ? "" : "s"}`);
  if (p.baths != null) specs.push(`${p.baths} Bath${p.baths === 1 ? "" : "s"}`);
  if (p.size_sqm != null) specs.push(`${p.size_sqm} sqm`);

  return (
    <main className="w-full">
      <Header />

      {/* Top section */}
      <section className="shell pt-[clamp(7rem,14vw,11rem)] pb-[clamp(3rem,6vw,5rem)] flex flex-col lg:flex-row gap-[clamp(2rem,5vw,4rem)] items-start">
        <div className="lg:w-1/2 w-full">
          <div className="relative aspect-[4/3] overflow-hidden bg-paper">
            {cover ? (
              <Image
                src={cover}
                alt={`${p.title} in ${p.location}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
                Photos coming soon
              </div>
            )}
          </div>

          {p.images.length > 1 && (
            <ul className="grid grid-cols-5 gap-3 mt-3">
              {p.images.map((url, i) => (
                <li key={url}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show photo ${i + 1}`}
                    aria-current={i === active}
                    className={`relative block w-full aspect-[4/3] overflow-hidden border transition-colors ${
                      i === active ? "border-ink" : "border-line hover:border-ink-faint"
                    }`}
                  >
                    <Image src={url} alt="" fill sizes="120px" className="object-cover" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="lg:w-1/2 w-full">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
            {badgeFor(p)}
          </p>
          <h1 className="display-lg text-ink mt-4 max-w-[16ch]">{p.title}</h1>
          <p className="text-ink-muted mt-3">{p.location}</p>
          <p className="display-md text-ink mt-6">{formatNaira(p.price)}</p>

          {specs.length > 0 && (
            <div className="flex items-center gap-6 mt-6 pt-5 border-t border-line text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">
              {specs.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          )}

          {p.description && (
            <p className="prose-quiet mt-8 whitespace-pre-line">{p.description}</p>
          )}

          {p.features.length > 0 && (
            <ul className="mt-8 border-t border-line">
              {p.features.map((feature) => (
                <li key={feature} className="py-4 border-b border-line text-sm text-ink">
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center mt-10 border border-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-background transition-colors duration-500"
          >
            Contact An Agent
          </Link>
        </div>
      </section>

      {/* Video: only when a tour link was added in the admin */}
      {isHttp(p.video_url) && (
        <section className="bg-paper">
          <div className="shell section flex flex-col lg:flex-row gap-[clamp(2rem,5vw,4rem)] items-center">
            <div className="lg:w-1/2 w-full">
              <p className="eyebrow">Video</p>
              <h2 className="display-lg text-ink mt-6">Take a tour</h2>
            </div>
            <div className="lg:w-1/2 w-full">
              <a
                href={p.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-ink"
              >
                <BsPlayCircle className="text-5xl transition-transform duration-500 group-hover:scale-110" />
                <span className="link-underline text-[0.72rem] uppercase tracking-[0.2em]">
                  Watch the video tour
                </span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Map */}
      <section>
        <iframe
          title={`Map showing ${mapQuery}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=14&output=embed`}
          className="w-full h-[380px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </main>
  );
}
