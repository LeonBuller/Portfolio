import React from "react";
import { data } from "../data/data.js";

const Projects = () => {
  const project = data;

  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-[#ff66c4]"
          >
            Projects
          </p>
          <p className="pt-6 pb-2 font-medium">My Recent Projects</p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* CARD ITEM */}
          {project.map((item, index) => (
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="mx-auto shadow-lg shadow-[#040c16] flex rounded-md justify-center items-center container group content-div first-img "
            >
              {/* HOVER EFFECT */}

              <div className="opacity-0 group-hover:opacity-100 justify-center items-center px-2">
                <span className="text-lg font-bold text-gray-300 ">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.live}>
                    <button className="text-gray-700 text-lg font-bold px-4 py-3 bg-white rounded-lg mr-2">
                      Demo
                    </button>
                  </a>
                  <a href={item.github}>
                    <button className="text-gray-700 text-lg font-bold px-4 py-3 bg-white rounded-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
