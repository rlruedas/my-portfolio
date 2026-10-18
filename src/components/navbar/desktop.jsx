import React from "react";

function Desktop() {
  const navLinks = [
    { label: "About", href: "#About" },
    { label: "Services", href: "#Services" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Contact" },
    { label: "Blog", href: "#Contact" },
  ];

  return (
    <nav className="flex items-center gap-6 text-sm font-medium font-poppins">
      {navLinks.map((link, idx) => (
        <React.Fragment key={link.label}>
          <a
            href={link.href}
            className="text-newbrown hover:text-newmaroon transition-colors duration-150"
          >
            {link.label}
          </a>
          {idx < navLinks.length - 1 && (
            <span className="text-newbeige select-none">|</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Desktop;
