import React, { useState } from "react";
import Menu from "./menu";
import Desktop from "./desktop";
import Mobile from "./mobile";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F5DC]/90 backdrop-blur-md border-b border-newbeige/40 font-poppins transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#About"
            className="text-xl font-bold tracking-tight text-newmaroon hover:opacity-80 transition-opacity"
          >
            rlruedas<span className="text-newbrown">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Desktop />
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <Mobile isOpen={mobileMenuOpen} onToggle={toggleMenu} />
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <Menu isOpen={mobileMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default Navbar;
