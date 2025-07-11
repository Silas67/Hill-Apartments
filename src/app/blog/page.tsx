"use client";
import { blogs } from "@/components/constants";
import Header from "@/components/sections/Header";
import useLenis from "@/hooks/useLenis";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import img2 from "@/components/assets/Images/img30.jpg";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import Banner from "@/components/sections/ServicesPage/cta";
import Footer from "@/components/sections/Footer";

const Blog = () => {
  useLenis();
  return (
    <main className="lg:w-full overflow-hidden relative sm">
      <Header />

      {/* Hero */}
      <section className="w-full h-[50vh] text-center place-content-center relative max-sm:h-[30vh]">
        <div className="relative z-30 w-full flexcent flex-col h-full">
          {" "}
          <div className="w-full flex items-center justify-center pb-2">
            <Breadcrumbs />
          </div>
          <h1 className="font-sans text-4xl text-white font-bold ">Blog</h1>
        </div>

        <div className="absolute inset-0">
          <Image src={img2} alt="/" className="object-cover w-full h-full" />
        </div>

        <div className="absolute bg-black/80 inset-0 w-full h-full"></div>
      </section>

      {/* Blogs */}
      <section className="py-12 w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-[300px] rounded-[10px] overflow-hidden bg-white shadow-md transition-transform duration-300 group scale-[0.95]"
            >
              {/* Image */}
              <div className="h-[250px] w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt="blog image"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <Link href={"/"}>
                <div className="p-4 space-y-2">
                  <h1 className="text-xl font-bold">{blog.title}</h1>
                  <div className="text-[#5c5c5c] text-sm flex items-start gap-1">
                    <CiLocationOn className="mt-[2px]" />
                    <p className="line-clamp-2">{blog.excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section>
        <Banner />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Blog;
