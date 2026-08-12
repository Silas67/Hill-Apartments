"use client";
import Header from "@/components/sections/Header";
import useLenis from "@/hooks/useLenis";
import Hero from "@/components/sections/HomePage/Hero";
import About from "@/components/sections/HomePage/About";
import Properties from "@/components/sections/HomePage/Properties";
import Services from "@/components/sections/HomePage/Services";
import Recommend from "@/components/sections/HomePage/Recommended";
// import Banner from "@/components/sections/HomePage/Banner";
import WhyUs from "@/components/sections/HomePage/WhyUs";
import Testimonials from "@/components/sections/HomePage/Testimonials";
import Blog from "@/components/sections/HomePage/Blog";
import Footer from "@/components/sections/Footer";

export default function Home() {
  useLenis();

  return (
    <main className="lg:w-full sm:w-[100vw] overflow-hidden relative ">
      <Header />

      <Hero />

      <About />

      <Properties />

      <Recommend />

      <Services />

      {/* <section>
        <Banner />
      </section> */}

      <WhyUs />

      <Testimonials />

      <Blog />

      <Footer />
    </main>
  );
}
