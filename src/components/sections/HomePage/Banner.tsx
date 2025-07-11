import { achievementsList2 } from "@/components/constants";
import Copy from "@/hooks/Copy";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const Banner = () => {
  return (
    <div className="w-full flex gap-[20px] bg-[#fdf0d8] py-12 items-center justify-around px-[70px] my-12 all:flex-col md:flex-row">
      <div className="w-full  text-4xl font-sans font-black text-foreground max-sm:text-center">
        <Copy>
          <h1>
            Take A Look <br />
            At The Numbers
          </h1>
        </Copy>
      </div>
      <div className="grid md:grid-cols-4 max-sm:grid-cols-2 place-content-center items-center w-full my-[20px]  gap-x-[50px]">
        {achievementsList2.map((achievement, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-center my-4 gap-1"
            >
              <h2 className="text-3xl text-primary font-bold flex items-center gap-1">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className=" text-[#0f0f0f] text-3xl font-bold"
                />

                {achievement.postfix}
              </h2>
              <p className="text-[#151515] text-nowrap text-sm">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
