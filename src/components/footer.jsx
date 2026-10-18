import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/reisterruedas/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      href: "https://github.com/rlruedas",
      icon: <FaGithub />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rlruedas/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <footer className="w-full py-10 border-t border-newbeige/40 bg-newwhite/80 font-poppins text-newbrown">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-sm font-semibold text-newmaroon">
            Reister L. Ruedas
          </p>
          <p className="text-xs text-newbrown/80 mt-0.5">
            Software Engineer • iOS Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-xl text-newbrown">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="hover:text-newmaroon transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-newbrown/80">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
