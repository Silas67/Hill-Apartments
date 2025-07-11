import { servicesfull } from "@/components/constants";
import Copy from "@/hooks/Copy";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import img1 from "@/components/assets/Images/img30.jpg";
import img2 from "@/components/assets/Images/img26.jpg";
import img3 from "@/components/assets/Images/img20.jpg";
import img4 from "@/components/assets/Images/img21.jpg";

const Ourservice = () => {
  return (
    <section
      className="w-full flex justify-start items-center p-8 lg:px-[70px] all:px-[30px] gap-[50px] all:flex-col scale-[1]
      "
    >
      <div className="lg:w-full flex flex-col gap-[80px] all:w-full pt-6 ">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          className="w-full space-y-[10px] flexcent flex-col text-center"
        >
          {" "}
          <h1 className="font-sans text-4xl text-primary ">
            Our Services
          </h1>{" "}
          <p className=" text-sm font-extralight text-foreground lg:w-[90%]">
            Step into a world where your needs shape our services. Offering
            bespoke consultations, innovative design & automation, meticulous
            construction, and strategic project management, we make your journey
            seamless. Plus, unlock smart investment avenues for unparalleled
            ROI. With Mshel Homes, it&apos;s more than a home it&apos;s a
            lifetime investment.
          </p>
        </motion.div>

        <div className="hidden md:flex items-center flex-col gap-[30px]">
          <div className="flex justify-around items-center w-full gap-[10px]">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="flex items-end justify-center flex-1/2 w-full flex-col text-right gap-[10px]"
            >
              <h1 className="font-bold">Home Buying Consultation & Support</h1>
              <p>
                At HillsApartments, we understand that purchasing a
                home—especially your first—is a life-changing decision. Our team
                provides personalized consultation, neighborhood guidance,
                property tours, and seamless negotiation support to help
                first-time buyers and growing families find their perfect home
                with confidence and peace of mind.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="flex-1/2 scale-[0.9]"
            >
              <Image
                src={img1}
                alt="/"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
          <div className="flex justify-around items-center w-full gap-[10px] flex-row-reverse">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="flex items-start justify-center flex-1/2 w-full flex-col text-left gap-[10px]"
            >
              <h1 className="font-bold">Property Sales & Marketing </h1>
              <p>
                Looking to sell your property? HillsApartments combines market
                intelligence, professional staging advice, and digital marketing
                strategies to attract the right buyers. We make the selling
                process efficient, profitable, and hassle-free—so you get the
                best value for your property without stress.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="flex-1/2 scale-[0.9]"
            >
              <Image
                src={img2}
                alt="/"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
          <div className="flex justify-around items-center w-full gap-[10px] ">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="flex items-end justify-center flex-1/2 w-full flex-col text-right gap-[10px]"
            >
              <h1 className="font-bold">Investment & Portfolio Management</h1>
              <p>
                HillsApartments offers strategic investment services for
                seasoned investors and aspiring landlords. From identifying
                high-yield opportunities to managing multi-unit portfolios, we
                help you build long-term wealth through smart, data-driven
                decisions in the ever-evolving real estate market.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="flex-1/2 scale-[0.9]"
            >
              <Image
                src={img3}
                alt="/"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
          <div className="flex justify-around items-center w-full gap-[10px] flex-row-reverse">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="flex items-start justify-center flex-1/2 w-full flex-col text-left gap-[10px]"
            >
              <h1 className="font-bold">Property Management Services</h1>
              <p>
                Our full-service property management takes the hassle out of
                ownership. We handle tenant screening, rent collection,
                maintenance, and inspections—ensuring your investment is
                well-maintained and continuously profitable, so you can focus on
                your next opportunity.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="flex-1/2 scale-[0.9]"
            >
              <Image
                src={img4}
                alt="/"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>

        <div className="md:hidden max-mobile:grid max-mobile:grid-cols-1 gap-[50px] items-center place-content-center space-y-[10px] pt-[100px]">
          {servicesfull.map((id, item) => (
            <div
              key={item}
              className="w-[300px] rounded-[10px] overflow-hidden lg:p-4 relative grid grid-cols-subgrid text-center"
            >
              <Copy>
                {" "}
                <div className="text-primary py-2 text-xl font-sans font-bold text-center">
                  {id.heading}
                </div>
              </Copy>
              <Copy>
                <p className="text-[12px] ">{id.title}</p>
              </Copy>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourservice;
