import PropertyCard from "../PropertyCard";
import type { PropertyItem } from "@/lib/data/properties";

const Property = ({ items }: { items: PropertyItem[] }) => {
  return (
    <section className="bg-background">
      <div className="shell section">
        <div className="flex items-baseline justify-between gap-6 pb-10">
          <p className="chapter-num max-w-[22rem]">
            <span>01</span>
            <span className="text-ink-muted">Available Now</span>
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint whitespace-nowrap">
            {items.length} Listing{items.length === 1 ? "" : "s"}
          </p>
        </div>

        {items.length === 0 ? (
          <p className="prose-quiet">
            New listings are on the way. Contact us and we will match you with
            something before it is advertised.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
            {items.map((item) => (
              <PropertyCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Property;
