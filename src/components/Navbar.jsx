import React, { useState } from "react";
import { FaTimes, FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import Logo from "../assets/myLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300">
      <div>
        <img src={Logo} style={{ width: "60px" }} alt="Logo" />
      </div>

      {/* MENU */}
      <ul className="hidden md:flex">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* MOBILE ICON */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute h-screen w-full top-0 left-0 bg-[#0A192F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Skills</li>
        <li className="py-6 text-3xl">Projects</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="hidden lg:flex fixed  flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333] ">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} className="" />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600 ">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn
              <FaLinkedin size={30} className="" />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0] ">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email
              <HiOutlineMail size={30} className="" />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69] ">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume
              <BsFillPersonLinesFill size={30} className="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
