import React, { useState } from "react";
import { FaTimes, FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

import Logo from "../assets/myLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[55px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300">
      <div>
        <a href="#">
          <img src={Logo} style={{ width: "55px" }} alt="Logo" />
        </a>
      </div>

      {/* MENU */}
      <ul className="hidden md:flex">
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <li>
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="hidden lg:flex fixed  flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333] ">
            <a
              href="https://github.com/LeonBuller"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Github <FaGithub size={30} className="" />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600 ">
            <a
              href="https://www.linkedin.com/in/leonbuller/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              LinkedIn
              <FaLinkedin size={30} className="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
