import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import Image from "next/image";
import img6 from "@/components/assets/Images/img30.jpg";

const Hero = () => {
  return (
    <section className="w-full lg:h-[50vh] text-center place-content-center relative all:h-[30vh]">
      <div className="relative z-30 w-full flexcent flex-col ">
        {" "}
        <div className="w-full flex items-center justify-center pb-2">
          <Breadcrumbs />
        </div>
        <h1 className="font-sans text-4xl text-white font-bold ">Properties</h1>
      </div>

      <div className="absolute inset-0">
        <div className="h-full w-full">
          <Image src={img6} alt="" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="absolute bg-black/80 inset-0 w-full h-full"></div>
    </section>
  );
};

export default Hero;
