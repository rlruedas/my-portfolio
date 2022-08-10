import { useEffect, useState } from "react";
import Head from "next/head";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Projects from "./components/projects";
import Services from "./components/services";
import Techstack from "./components/techstack";
import BusinessCard from "./components/businesscard";
import ModalMenu from "./components/modalmenu";
import Document from "./_document";

function NormalMenu({ handleClick }) {
  return (
    <div className="flex w-[100vw] justify-center items-center">
      <ul
        className="flex flex-row text-[15px] w-[70vw] justify-end items-center gap-6  text-newbrown"
        id="header"
      >
        <button
          onClick={() => handleClick("About")}
          className=" hover:text-newmaroon "
        >
          About
        </button>
        <button
          onClick={() => handleClick("Services")}
          className=" hover:text-newmaroon "
        >
          Services
        </button>
        <button
          onClick={() => handleClick("Projects")}
          className=" hover:text-newmaroon"
        >
          Projects
        </button>
        <button
          onClick={() => handleClick("Contact")}
          className=" hover:text-newmaroon"
        >
          Contact
        </button>
        <a href="" className=" hover:text-newmaroon ">
          Blog
        </a>
      </ul>
    </div>
  );
}

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const handleOnClickLink = (elem) => {
    if (elem === "Services") {
      document.getElementById(`${elem}`).scrollIntoView({ behavior: "smooth" });
    } else if (elem === "Projects") {
      document.getElementById(`${elem}`).scrollIntoView({ behavior: "smooth" });
    } else if (elem === "Contact") {
      document.getElementById(`${elem}`).scrollIntoView({ behavior: "smooth" });
    } else
      document.getElementById(`${elem}`).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("load", updateDimensions);

    var lastScroll = 0;

    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScroll) {
        document.getElementById("Navbar").style.top = "-5em";
      } else {
        document.getElementById("Navbar").style.top = "0";
      }

      lastScroll = scrollTop;
    });

    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  function toggleMenu(toggle) {
    var menu = document.querySelector("#burgernavigation");

    if (toggle === "open") {
      menu.classList.replace("translate-x-full", "translate-x-0");
      document.body.style.setProperty("overflow", "hidden", "important");
    }
    if (toggle === "close") {
      menu.classList.replace("translate-x-0", "translate-x-full");
      document.body.style.setProperty("overflow", "auto", "important");
    }
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/logo-nobg.png" />
        <title>Reister Ruedas</title>
        <meta name="description" content="Website created by Me" />
      </Head>
      <div className="flex flex-col relative w-full h-fit font-poppins justify-center items-center bg-gradient-to-l from-[#fae5cb] via-[#D7A86E] to-[#A64B2A] !overflow-x-clip z-0">
        <section
          className="flex flex-col w-full h-[5em] sticky font-poppins top-0 justify-center items-center bg-gradient-to-tl from-[#fae5cb] via-[#D7A86E] to-[#A64B2A]  z-50  transition-all transform duration-500 "
          id={"Navbar"}
        >
          {width <= 1000 ? (
            <>
              <div className="flex flex-col w-full justify-center items-center ">
                <div className="flex justify-end items-center w-[80vw]">
                  <button onClick={() => toggleMenu("open")}>
                    <i className="fa fa-bars "></i>
                  </button>
                </div>
              </div>
              <ModalMenu
                toggleMenu={toggleMenu}
                handleClick={handleOnClickLink}
              />
            </>
          ) : (
            <NormalMenu handleClick={handleOnClickLink} />
          )}
        </section>
        <section
          className="flex flex-col relative w-full h-screen justify-center items-center  !overflow-x-clip"
          id="main-body"
        >
          <section
            className="flex flex-row  justify-center items-center"
            id="About"
          >
            <div className="flex flex-col w-.40 justify-center items-center ">
              <Fade top cascade>
                <span className="leading-[1em] whitespace-nowrap text-[20px] lg:text-[50px] text-newbeige text-left transition-all duration-500">
                  <br />{" "}
                  <span className="text-[15px] lg:text-[40px] text-black">
                    I'm
                  </span>{" "}
                  <span className="leading-[1em] text-[40px] font-black lg:text-[120px] text-newmaroon transition-all duration-500 ">
                    Reister
                  </span>{" "}
                  <span className="text-[60px] font-extrabold text-black">
                    .
                  </span>{" "}
                  <br />{" "}
                </span>
              </Fade>
              <Fade left>
                <span className="text-justify text-xs lg:text-sm font-bold lg:self-end text-newmaroon lg:w-.50 transition-all duration-200">
                  <span className="lg:text-[24px] font-light text-black">
                    ABOUT
                  </span>
                  &nbsp; I'm a Full-stack Engineer based in the Philippines.
                  Specializes in building USER-FRIENDLY and INTERACTIVE web and
                  mobile applications. I also do freelance, want to collaborate?
                </span>
              </Fade>
            </div>
            <div className="flex w-.30  justify-center items-center">
              <img src="./profileImage.png" alt="Image was here"></img>
            </div>
          </section>
        </section>

        <Services />
        <Projects />
        <Techstack />

        <section
          className="group flex flex-col lg:flex-row w-screen h-fit mt-[20em] items-center justify-center relative transform duration-200 !overflow-x-clip "
          id="Contact"
        >
          <div className="flex flex-col justify-center items-center relative">
            <div className="text-4xl duration-500 xl:text-7xl  font-semibold text-grey">
              <Zoom cascade>
                <p>Get in touch!</p>
              </Zoom>
            </div>
            <p className="text-grey pb-2">here's my business card. </p>
          </div>

          <BusinessCard />
        </section>
        <footer className="flex- 1 flex w-screen flex-col h-fit gap-2 items-center justify-center py-5 text-black bg-newbeige !overflow-x-clip">
          <div className="flex flex-row justify-center w-screen  items-center gap-10 ">
            <a
              href="https://www.linkedin.com/in/reisterruedas/"
              className="fa fa-linkedin hover:opacity-50 text-[25px]"
            ></a>
            <a
              href="https://www.facebook.com/reister.ruedas1/"
              className="fa fa-facebook hover:opacity-50 text-[25px]"
            ></a>
            <a
              href="https://www.instagram.com/rlruedas/"
              className="fa fa-instagram hover:opacity-50 text-[25px]"
            ></a>
            <a
              href="https://github.com/rlruedas"
              className="fa fa-github hover:opacity-50 text-[25px]"
            ></a>
          </div>
          <div className="text-center text-lg font-light">
            <p>Reister L. Ruedas © 2021 All rights reserved </p>
          </div>
        </footer>
      </div>
    </>
  );
}
