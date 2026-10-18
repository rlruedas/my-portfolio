import React from "react";

function Menu({ isOpen, onClose }) {
  const navLinks = [
    { label: "About", href: "#About" },
    { label: "Services", href: "#Services" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Contact" },
    { label: "Blog", href: "#Contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 bg-newmaroon/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 text-2xl font-semibold font-poppins text-newwhite transition-transform duration-300 md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      id="Menu"
    >
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onClose}
          className="hover:text-newbeige transition-colors py-2 px-4"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default Menu;
