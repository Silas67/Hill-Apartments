"use client";
import { servicesfull } from "@/components/constants";
import { motion } from "framer-motion";
import Chapter from "../Chapter";
import img1 from "@/components/assets/Images/img23.jpeg";
import img2 from "@/components/assets/Images/img24.jpeg";
import img3 from "@/components/assets/Images/img22.jpeg";
import img4 from "@/components/assets/Images/img21.jpg";

const images = [img1, img2, img3, img4];

const eyebrows = [
  "Buying",
  "Selling",
  "Investing",
  "Managing",
];

const Ourservice = () => {
  return (
    <>
      {/* Section intro */}
      <section className="bg-background">
        <div className="shell section-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[52ch]"
          >
            <p className="eyebrow">What We Do</p>
            <p className="lede mt-6 max-w-none">
              Your needs shape our services. From the first consultation to
              long-term management, we make the journey seamless — and open up
              investment routes that keep working long after you have the keys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four numbered chapters, alternating sides */}
      {servicesfull.map((service, index) => (
        <Chapter
          key={service.heading}
          index={index + 1}
          eyebrow={eyebrows[index]}
          title={service.heading.trim()}
          image={images[index]}
          imageAlt={service.heading.trim()}
          align={index % 2 === 0 ? "right" : "left"}
          tone={index % 2 === 0 ? "plain" : "paper"}
        >
          <p className="prose-quiet">{service.title}</p>
        </Chapter>
      ))}
    </>
  );
};

export default Ourservice;
