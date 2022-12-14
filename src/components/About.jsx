import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ff66c4] text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Leon Buller
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#ccd6f6] py-4 max-w-[800px] text-xl">
          I'm Computer Science undergraduate with a3.3 GPA at a top University
          with passion to build scalable web applications and wrking across the
          full stack.
          <br />
          <br />I can handle tasks by myself independently as well as working
          with a team. I'm responsible, eager to learn, have a sharp eye for
          details, and I'd always be happy to contribute my knowledge.
        </p>
        <div className="mt-1">
          <span className="w-[100px] py-1 px-2 rounded-2xl border text-sm font-medium text-white  bg-[#ff66c4] border-[#ff66c4]">
            Fun Fact
          </span>
        </div>
        <p className="text-[#ccd6f6] py-4 max-w-[800px] text-xl">
          At the age of 19, launched an eCommerce bussiness that generated 4
          figures a month by implementing keyword research, on-page SEO and PPC
          marketing strategies
        </p>
        <div>
          <button className="text-[#ccd6f6] group border-2 px-4 border-[#ccd6f6] py-2 my-2 flex items-center hover:bg-[#ff66c4] hover:border-[#ff66c4] hover:text-white">
            View Work
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
