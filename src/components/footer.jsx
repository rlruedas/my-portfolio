import React from "react";

import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full min-h-[6rem] flex flex-col justify-center items-center font-poppins gap-5 text-newbeige p-[2em]">
      <div className="flex flex-row text-[2em] gap-10 ">
        <a href="https://www.linkedin.com/in/reisterruedas/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/rlruedas" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/rlruedas/" target="_blank">
          <FaInstagramSquare />
        </a>
      </div>
      <p>Reister L. Ruedas © 2025</p>
    </div>
  );
};

export default Footer;
