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

const Footer = () => {
  return <div>Footer</div>;
};

export default Footer;
