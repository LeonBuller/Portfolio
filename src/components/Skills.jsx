import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import ReactN from "../assets/reactn.png";
import Jest from "../assets/jest.png";

const Skills = () => {
  return (
    <div name="skills" className=" bg-[#0a192f] text-gray-300 py-10">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full sm:h-screen h-[80%]">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ff66c4] ">
            Skills
          </p>
          <p className="py-4 font-medium">
            These are the technologies I've worked with
          </p>
        </div>

        {/* ICON CONTAINER */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] ">
            <img
              className="w-20 mx-auto mt-1"
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-1 py-3">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] ">
            <img
              className="w-20 mx-auto mt-1"
              src={FireBase}
              alt="Firebase icon"
            />
            <p className="my-1 py-3">Firebase</p>
          </div>

          <div className="shadow-md shadow-[#040c16] ">
            <img className="w-20 mx-auto mt-1" src={Mongo} alt="MongoDB icon" />
            <p className="my-1 py-3">MongoDB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] ">
            <img
              className="w-20 mx-auto mt-1"
              src={Tailwind}
              alt="Tailwind CSS icon"
            />
            <p className="my-1 py-3">Tailwind CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] ">
            <img
              className="w-20 mx-auto mt-1"
              src={JavaScript}
              alt="Javascript icon"
            />
            <p className="my-1 py-3">Javascript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] ">
            <img className="w-20 mx-auto mt-1" src={HTML} alt="HTML icon" />
            <p className="my-1 py-3">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] ">
            <img className="w-20 mx-auto mt-1" src={CSS} alt="CSS icon" />
            <p className="my-1 py-3">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] ">
            <img className="w-20 mx-auto mt-1" src={GitHub} alt="Github icon" />
            <p className="my-1 py-3">Github</p>
          </div>

          <div className="shadow-md shadow-[#040c16] ">
            <img className="w-20 mx-auto mt-1" src={Node} alt="NodeJS icon" />
            <p className="my-1 py-3">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] ">
            <img
              className="w-20 mx-auto mt-1"
              src={ReactN}
              alt="React Native"
            />
            <p className=" py-3">React Native</p>
          </div>
          <div className="shadow-md shadow-[#040c16] ">
            <img className="w-20 mx-auto mt-1" src={Jest} alt="Jest icon" />
            <p className="my-1 py-3">Jest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
