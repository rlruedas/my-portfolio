import React, { useEffect, useState } from "react";
import Menu from "../menu";
import Desktop from "./desktop";
import Mobile from "./mobile";
import Slide from "react-reveal/Slide";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuButton, setMenuButton] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScroll) {
        document
          .querySelector(".nav-bar")
          .classList.replace("top-0", "-top-[5em]");
      } else {
        document
          .querySelector(".nav-bar")
          .classList.replace("-top-[5em]", "top-0");
      }

      lastScroll = scrollTop;
    });

    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleMenuState = () => {
    setMenuButton(!menuButton);

    if (menuButton) {
      document
        ?.querySelector("#Menu")
        ?.classList.replace("translate-x-full", "translate-x-0");
    } else {
      document
        ?.querySelector("#Menu")
        ?.classList.replace("translate-x-0", "translate-x-full");
    }
  };

  return (
    <>
      <Slide top cascade>
        <div className="fixed top-0 left-0 flex flex-row justify-between items-center w-full min-h-[5em] z-50 backdrop-blur-3xl font-poppins text-newbeige nav-bar transition-all duration-500 !overflow-x-hidden">
          <div className="relative w-[40vw] h-full flex justify-center items-center">
            <a href="/" className="text-[15px]">
              .rlruedas
            </a>
          </div>
          {windowWidth < 769 ? (
            <Mobile state={handleMenuState} buttonState={menuButton} />
          ) : (
            <Desktop />
          )}
        </div>
      </Slide>
      <Menu state={handleMenuState} />
    </>
  );
}

export default Navbar;
