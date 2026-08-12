"use client";
import { property } from "@/components/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Properties = () => {
  return (
    <section className="bg-paper">
      <div className="shell section">
        <p className="chapter-num">
          <span>02</span>
          <span className="text-ink-muted">What We Offer</span>
        </p>

        <h2 className="display-lg text-ink mt-6 max-w-[14ch]">
          Three ways to own
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {property.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: 0.1 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href="/properties" className="group block">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-background">
                  <Image
                    src={item.img}
                    alt={item.label}
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="display-md text-ink mt-6">{item.label}</h3>
                <p className="prose-quiet mt-3">{item.text}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
