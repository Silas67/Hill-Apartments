"use client";
import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/PropertiesPage/Hero";
import Property from "@/components/sections/PropertiesPage/Property";
import useLenis from "@/hooks/useLenis";
import type { PropertyItem } from "@/lib/data/properties";

// The old page.tsx, moved here unchanged so Header/Hero/Footer keep running
// as client components. Only the data now arrives as a prop.
const PropertiesClient = ({ items }: { items: PropertyItem[] }) => {
  useLenis();

  return (
    <main className="lg:w-full sm:w-[100vw] overflow-hidden relative ">
      <Header />
      <Hero />
      <Property items={items} />
      <Footer />
    </main>
  );
};

export default PropertiesClient;
