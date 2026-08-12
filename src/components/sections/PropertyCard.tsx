"use client";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type PropertyItem = {
  img: StaticImageData;
  title: string;
  price: string;
  beds: number;
  bath: number;
  size: number;
  location: string;
  tag: string;
};

/**
 * Minimal listing card: image, then a hairline-separated spec row. No shadow,
 * no rounded box — the image and the rule do the work.
 *
 * Shared by the homepage "Recommended" strip and the properties index so the
 * two can no longer drift apart.
 */
export default function PropertyCard({ item }: { item: PropertyItem }) {
  return (
    <Link href="/individualprop" className="group block">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-paper">
        <Image
          src={item.img}
          alt={`${item.title} in ${item.location}`}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-ink">
          {/* Source data mixes "Rent" and "rent". */}
          {item.tag.toLowerCase() === "buy" ? "For Sale" : "To Rent"}
        </span>
      </div>

      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-ink text-base font-medium leading-snug">
            {item.title}
          </h3>
          <p className="text-ink text-base font-medium whitespace-nowrap">
            {item.price}
          </p>
        </div>

        <p className="text-ink-muted text-sm mt-1">{item.location}</p>

        <div className="flex items-center gap-6 mt-5 pt-4 border-t border-line text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">
          <span>
            {item.beds} Bed{item.beds > 1 ? "s" : ""}
          </span>
          <span>
            {item.bath} Bath{item.bath > 1 ? "s" : ""}
          </span>
          <span>{item.size} sqm</span>
        </div>
      </div>
    </Link>
  );
}
