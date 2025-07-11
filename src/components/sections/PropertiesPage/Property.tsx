import { Recommended } from "@/components/constants";
import Link from "next/link";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { TbRulerMeasure2 } from "react-icons/tb";
import Image from "next/image";

const Property = () => {
  return (
    <div className="w-full py-12 lg:px-[100px]">
      {/* <div className="grid grid-cols-1 place-content-center items-center px-[10px] lg:border-r-2 border-[#676767] my-6 lg:h-[80%] max-sm:shadow">
        <div className="w-full flex items-center justify-center flex-col space-y-[30px]">
          <h1 className="text-2xl font-sans font-bold">Filters</h1>

          <div className="border rounded w-[80%] border-primary h-[40px] p-2">
            <input
              type="text"
              placeholder="City/Locality Name"
              className="w-full h-full outline-none"
            />
          </div>
          <div className="border rounded w-[80%] border-primary h-[40px] p-2">
            <input
              type="text"
              placeholder="Property Type"
              className="w-full h-full outline-none"
            />
          </div>
          <div className="border rounded w-[80%] border-primary h-[40px] p-2">
            <input
              type="text"
              placeholder="Price Range"
              className="w-full h-full outline-none"
            />
          </div>
          <div className="border rounded w-[80%] border-primary h-[40px] p-2">
            <input
              type="text"
              placeholder="Min Bedrooms"
              className="w-full h-full outline-none"
            />
          </div>
          <div className="border rounded w-[80%] border-primary h-[40px] p-2">
            <input
              type="text"
              placeholder="Min Bathrooms"
              className="w-full h-full outline-none"
            />
          </div>
          <div className="border rounded w-[80%] border-primary h-[40px] p-2">
            <input
              type="text"
              placeholder="Min Bedrooms"
              className="w-full h-full outline-none"
            />
          </div>
          <div className="border rounded w-[80%] border-primary h-[40px] p-2">
            <input
              type="text"
              placeholder="Min Bedrooms"
              className="w-full h-full outline-none"
            />
          </div>
          <div className="bg-accent w-[100px] text-center h-[40px] p-2 text-white mb-6 rounded">
            {" "}
            Search
          </div>
        </div>
      </div> */}

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 px-[50px] gap-[30px] grid-cols-1  max-sm:py-12 items-center justify-center">
        {Recommended.map((id, item) => (
          <div
            key={item}
            className="grid grid-cols-subgrid w-[300px] rounded-[10px] overflow-hidden mb-6 "
          >
            {/* Image */}
            <div className="h-[250px] w-full overflow-hidden rounded-b-[10px]">
              <Image
                src={id.img}
                alt="/"
                className="w-full h-full object-cover scale-[1] hover:scale-[1.1] transition-all duration-500"
              />
            </div>

            <Link href={"/individualprop"}>
              {" "}
              <div className="w-full pt-4">
                <div className="flex items-start justify-between flex-col">
                  <div className="flex items-center justify-between  w-full">
                    <h1 className="text-sm text-[#373737] font-bold">
                      {id.title}
                    </h1>
                    <h1 className="text-lg font-bold">{id.price}</h1>
                  </div>
                  <h1 className="text-[#5c5c5c] font-sans text-sm flex items-center gap-[2px] pt-1 ">
                    <CiLocationOn /> <p>{id.location}</p>
                  </h1>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-[10px] text-[#545454]">
                      <h1 className="flex items-center gap-[2px] text-[13px]">
                        <GiBathtub /> <p>{id.bath}</p>
                      </h1>
                      <h1 className="flex items-center gap-[2px] text-[13px]">
                        <FaBed /> <p>{id.beds}</p>
                      </h1>
                      <h1 className="flex items-center gap-[2px] text-[13px]">
                        <TbRulerMeasure2 /> <p>{id.mesuare}</p>
                      </h1>
                    </div>
                    <div className="text-background bg-foreground rounded-[10px] p-2">
                      <BiSolidRightArrow />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;
