/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const ServicesSlider = ({
  children: Services,
  autoSlide = false,
  autoSlideInterval = 5000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? Services.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === Services.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className=" relative ">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {Services}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          className="text-[50px] p-5 max-sm:text-[#730e0e] max-[900px]:text-[#730e0e] "
          onClick={prev}
        >
          <RiArrowLeftWideLine />
        </button>
        <button
          className="text-[50px] p-5 max-sm:text-[#730e0e] max-[900px]:text-[#730e0e] "
          onClick={next}
        >
          <RiArrowRightWideLine />
        </button>
      </div>
    </div>
  );
};

export default ServicesSlider;
