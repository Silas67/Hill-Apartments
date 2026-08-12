import { Recommended } from "@/components/constants";
import PropertyCard from "../PropertyCard";

const Property = () => {
  return (
    <section className="bg-background">
      <div className="shell section">
        <div className="flex items-baseline justify-between gap-6 pb-10">
          <p className="chapter-num max-w-[22rem]">
            <span>01</span>
            <span className="text-ink-muted">Available Now</span>
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint whitespace-nowrap">
            {Recommended.length} Listings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
          {Recommended.map((item, index) => (
            <PropertyCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Property;
