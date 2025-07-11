"use client";
import Header from "@/components/sections/Header";
import React from "react";
import useLenis from "@/hooks/useLenis";
import Footer from "@/components/sections/Footer";
import Banner from "@/components/sections/ServicesPage/cta";
import Ourservice from "@/components/sections/ServicesPage/Ourservice";
import Hero from "@/components/sections/ServicesPage/Hero";

const Services = () => {
  useLenis();

  return (
    <main className="lg:w-full sm:w-[100vw] overflow-hidden relative ">
      <Header />

      <section>
        <Hero />
      </section>

      <section>
        <Ourservice />
      </section>

      <section>
        <Banner />
      </section>

      <Footer />
    </main>
  );
};

export default Services;
