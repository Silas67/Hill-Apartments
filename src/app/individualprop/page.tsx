"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Static imports rather than "/Images/..." strings: these go through the
// build-time optimizer and are served as sized WebP/AVIF, which raw public/
// paths bypass entirely.
import propertyImg from "@/components/assets/Images/img13.jpg";
import tourImg from "@/components/assets/Images/img9.jpg";
import { FaStar } from "react-icons/fa";
import useLenis from "@/hooks/useLenis";
import { BsPlayCircle } from "react-icons/bs";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

// Hardcoded while there is a single demo listing — see the note on the map
// section. Moving to per-property pages replaces this with real listing data.
const location = "Wuse 2, Abuja, Nigeria";

const PropertyPage = () => {
  useLenis();

  return (
    <main className="w-full">
      <Header />
      {/* Top Section */}
      <section className="shell pt-[clamp(7rem,14vw,11rem)] pb-[clamp(3rem,6vw,5rem)] flex flex-col lg:flex-row gap-[clamp(2rem,5vw,4rem)] items-start">
        <div className="lg:w-1/2 w-full relative aspect-[4/3] overflow-hidden">
          <Image
            src={propertyImg}
            alt="3 bedroom fully detached bungalow, front elevation"
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 600px"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
            For Sale
          </p>
          <h1 className="display-lg text-ink mt-4 max-w-[16ch]">
            3 Bedroom Fully Detached Bungalow
          </h1>
          <p className="display-md text-ink mt-6">₦17,000,000</p>
          <div className="flex items-center gap-6 mt-6 pt-5 border-t border-line text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">
            <span>3 Beds</span>
            <span>2 Baths</span>
            <span>120 sqm</span>
          </div>

          <p className="prose-quiet mt-8">
            A well-finished family bungalow on a quiet residential street, set
            within a gated estate with 24-hour security and steady power. The
            property sits on a fully fenced plot with parking for two cars, and
            is a short drive from schools, shops and the main expressway.
          </p>
          <ul className="mt-8 border-t border-line">
            {["Spacious Living Room", "Modern Kitchen", "Balcony with a View"].map(
              (feature) => (
                <li
                  key={feature}
                  className="py-4 border-b border-line text-sm text-ink"
                >
                  {feature}
                </li>
              )
            )}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center mt-10 border border-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-background transition-colors duration-500"
          >
            Contact An Agent
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-paper">
        <div className="shell section flex flex-col lg:flex-row gap-[clamp(2rem,5vw,4rem)] items-center">
        <div className="lg:w-1/2 w-full">
          <p className="eyebrow">Video</p>
          <h2 className="display-lg text-ink mt-6">Take a tour</h2>
        </div>
        <div className="lg:w-1/2 w-full relative aspect-[4/3] overflow-hidden group cursor-pointer">
          <Image
            src={tourImg}
            alt="Interior view from the property video tour"
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 600px"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 bg-black/30 transition-colors duration-500 group-hover:bg-black/40" />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-5xl text-white">
            <BsPlayCircle />
          </div>
        </div>
        </div>
      </section>

      {/* Map — swap `location` for the property's address once listings are
          driven by real data rather than hardcoded here. */}
      <section>
        <iframe
          title={`Map showing ${location}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            location
          )}&z=14&output=embed`}
          className="w-full h-[380px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Reviews */}
      <section className="shell section-tight">
        <p className="eyebrow">Reviews</p>
        {[1, 2].map((_, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div>
              <p className="font-medium">User {i + 1}</p>
              <div className="flex text-yellow-400 mb-1">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <p className="text-gray-600">This property is amazing!</p>
            </div>
          </div>
        ))}
      </section>

      {/* Comment Form */}
      <section className="shell section-tight">
        <p className="eyebrow">Leave a Comment</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Your Comment"
            className="w-full bg-transparent border-0 border-b border-line py-3 h-28 resize-none text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="inline-flex items-center border border-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-background transition-colors duration-500"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Mini Footer */}
      <Footer />
    </main>
  );
};

export default PropertyPage;
