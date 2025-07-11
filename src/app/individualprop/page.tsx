"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import useLenis from "@/hooks/useLenis";
import { BsPlayCircle } from "react-icons/bs";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const PropertyPage = () => {
  useLenis();

  return (
    <div className="w-full py-10 ">
      <Header />
      {/* Top Section */}
      <section className="flex items-center justify-center gap-[20px] all:py-[100px] lg:py-0 lg:my-12 px-[70px] flex-col lg:flex-row">
        <div className="w-[1/2] rounded overflow-hidden">
          <Image
            src="/Images/img13.jpg"
            alt="Property Image"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="all:w-full lg:w-[70%] font-sans lg:p-8 lg:scale-[0.9]">
          <h2 className="text-xl font-bold">
            3 BedRoom Fully Detached Bungalow
          </h2>
          <p className="text-2xl font-bold py-1">17,000,000</p>
          <p className="text-sm text-gray-600">3 Bed • 2 Bath • 1200 sqft</p>

          <div className="text-gray-600 text-sm lg:w-[80%] pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            doloribus voluptates totam illum, fuga sunt quis exercitationem
            optio, eius facilis quod nostrum repellendus repudiandae, quae
            veniam harum suscipit autem dicta.
          </div>
          <ul className="list-disc list-inside my-4 space-y-1 text-gray-700 font-mono">
            <li>Spacious Living Room</li>
            <li>Modern Kitchen</li>
            <li>Balcony with a View</li>
          </ul>
          <button className="bg-secondary text-white px-4 py-2 mt-2 rounded-md">
            Contact An Agent
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section className="flex items-center justify-center gap-[20px] bg-accent2 p-8 max-sm:flex-col">
        <div className="w-full text-5xl font-sans font-bold h-full items-center justify-center flex ">
          Take A Tour
        </div>
        <div className="w-[1/2] rounded overflow-hidden relative">
          <Image
            src="/Images/img9.jpg"
            alt="Property Image"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="overlay bg-foreground opacity-50 z-10 flex items-center justify-center"></div>
          <div className="absolute inset-0 z-50 flex items-center text-5xl text-background justify-center">
            <BsPlayCircle />
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?..."
          className="w-full h-[300px] border rounded-md mb-12"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* Reviews */}
      <section className="space-y-6 max-sm:px-[50px]">
        <h3 className="text-xl font-semibold">Reviews</h3>
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
      <section className="space-y-4 p max-sm:px-[50px]">
        <h4 className="text-lg font-semibold">Leave a Comment</h4>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-md"
          />
          <textarea
            placeholder="Your Comment"
            className="w-full border px-4 py-2 rounded-md h-32"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Mini Footer */}
      <Footer />
    </div>
  );
};

export default PropertyPage;
