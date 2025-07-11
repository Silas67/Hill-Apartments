"use client";
import Header from "@/components/sections/Header";

import useLenis from "@/hooks/useLenis";
import React from "react";
import Footer from "@/components/sections/Footer";
import Property from "@/components/sections/PropertiesPage/Property";
import Hero from "@/components/sections/PropertiesPage/Hero";

const Properties = () => {
  useLenis();

  return (
    <main className="lg:w-full sm:w-[100vw] overflow-hidden relative ">
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <Property />
      </section>
      <Footer />
    </main>
  );
};

export default Properties;
