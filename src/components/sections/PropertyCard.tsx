import Image from "next/image";
import Link from "next/link";
import { formatNaira } from "@/lib/format";
import type { PropertyItem } from "@/lib/data/properties";

const badgeFor = (item: PropertyItem) => {
  if (item.status === "sold") return "Sold";
  if (item.status === "let") return "Let";
  return item.listing_type === "sale" ? "For Sale" : "To Rent";
};

/**
 * Minimal listing card: image, then a hairline-separated spec row. No shadow,
 * no rounded box — the image and the rule do the work.
 *
 * Shared by the homepage "Recommended" strip and the properties index.
 */
export default function PropertyCard({ item }: { item: PropertyItem }) {
  const cover = item.images[0];

  const specs: string[] = [];
  if (item.beds != null) specs.push(`${item.beds} Bed${item.beds === 1 ? "" : "s"}`);
  if (item.baths != null) specs.push(`${item.baths} Bath${item.baths === 1 ? "" : "s"}`);
  if (item.size_sqm != null) specs.push(`${item.size_sqm} sqm`);

  return (
    <Link href={`/properties/${item.id}`} className="group block">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-paper">
        {cover ? (
          <Image
            src={cover}
            alt={`${item.title} in ${item.location}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
            Photo coming soon
          </div>
        )}
        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-ink">
          {badgeFor(item)}
        </span>
      </div>

      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-ink text-base font-medium leading-snug">
            {item.title}
          </h3>
          <p className="text-ink text-base font-medium whitespace-nowrap">
            {formatNaira(item.price)}
          </p>
        </div>

        <p className="text-ink-muted text-sm mt-1">{item.location}</p>

        {specs.length > 0 && (
          <div className="flex items-center gap-6 mt-5 pt-4 border-t border-line text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">
            {specs.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
