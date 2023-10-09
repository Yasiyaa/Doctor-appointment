import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/watch?v=K4_J3ShsUOY&t=5492s",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/watch?v=K4_J3ShsUOY&t=5492s",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/watch?v=K4_J3ShsUOY&t=5492s",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/watch?v=K4_J3ShsUOY&t=5492s",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLink01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLink02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Doctor",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLink03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright <sup>©</sup> {year} developed by Yasith vidusara all
              right reserved.{" "}
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border
              border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor
              hover:border-non "
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

            {/*=======Quick Links========== */}
          <div>
            <h2
              className="text-[20px] leading-[30px] font-[700] mb-6
            text-headingColor"
            >
              Quick Links
            </h2>
            <ul>
              {quickLink01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400]
                  text-textColor">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

             {/*=======I want to  Links========== */}
          <div>
            <h2
              className="text-[20px] leading-[30px] font-[700] mb-6
            text-headingColor"
            >
              I want to:
            </h2>
            <ul>
              {quickLink02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400]
                  text-textColor">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

               {/*=======Support Links========== */}
          <div>
            <h2
              className="text-[20px] leading-[30px] font-[700] mb-6
            text-headingColor"
            >
              Support
            </h2>
            <ul>
              {quickLink03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400]
                  text-textColor">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
