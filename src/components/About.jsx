import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div name="about" className="w-full h-full sm:h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-6 px-8 flex flex-col justify-center h-full  ">
        <p className="text-[#ff66c4] text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Leon Buller
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#ccd6f6] py-4 max-w-[800px] text-xl">
          A Computer Science undergraduate with a 3.3 GPA at a top university
          with a passion to build scalable web applications and working across
          the full stack.
          <br />
          <br />I can handle tasks by myself independently as well as working
          with a team. I'm responsible, eager to learn, have a sharp eye for
          details, and I'd always be happy to contribute my knowledge.
        </p>

        <div className="mt-1 ">
          <span className="w-[100px] py-1 px-2 rounded-2xl border text-sm font-medium text-gray-100 bg-[#ff66c4] border-[#ff66c4] ">
            Fun Fact
          </span>
        </div>
        <p className="text-[#ccd6f6] py-4  max-w-[800px] text-xl">
          At the age of 19, launched an eCommerce business that generated 4
          figures a month by implementing keyword research, on-page SEO, and PPC
          marketing strategies.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-[#ccd6f6] group border-2 px-3 border-[#ccd6f6] py-2 my-2 flex items-center hover:bg-[#ff66c4] hover:border-[#ff66c4] hover:text-white">
              View Work
              <span className="group-hover:rotate-90 duration-200">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
