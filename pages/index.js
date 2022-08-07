import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Projects from "./components/projects";
import Services from "./components/services";
import Techstack from "./components/techstack";
import BusinessCard from "./components/businesscard";

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
  const [height, setHeight] = useState(window.innerHeight);
  const [burgerMenuClick, setBurgerMenuClick] = useState(false);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const handleOnClick = (elem) => {
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

    if (width >= 1000) {
      document.getElementById("burgernavigation").style.transform =
        "translateX(50em)";
      document.getElementById("burgernavigation").style.opacity = "0%";
      document.getElementById("mainBody").classList.remove("fixed");
    }

    var lastScroll = 0;

    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScroll) {
        document.getElementById("header").style.top = "-5em";
      } else {
        document.getElementById("header").style.top = "0";
      }

      lastScroll = scrollTop;
    });

    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  function toggleMenu(toggle) {
    var menu = document.getElementById("burgernavigation");

    if (toggle === "open") {
      menu.style.transform = "translateX(0)";
      menu.style.opacity = "100%";
      document.body.style.setProperty("overflow", "clip", "important");
    }
    if (toggle === "close") {
      menu.style.transform = "translateX(50em)";
      menu.style.opacity = "0%";
      document.body.style.setProperty("overflow", "auto", "important");
    }
  }

  return (
    <div className="font-poppins bg-gradient-to-bl from-[#fae5cb] via-[#D7A86E] to-[#A64B2A]">
      <Head>
        <link rel="icon" href="/logo-nobg.png" />
        <title>Reister Ruedas</title>
        <meta name="description" content="Website created by Me" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <Script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></Script>
      </Head>

      <section
        className="flex flex-row w-full h-[5em] sticky top-0 text-grey z-20 bg-gradient-to-bl from-[#fae5cb] via-[#D7A86E] to-[#A64B2A]   transition-all transform duration-500 "
        id="header"
      >
        {width <= 1000 ? (
          <div className="flex w-full justify-center items-center ">
            <div className="flex justify-end items-center w-[80vw]">
              <button onClick={() => toggleMenu("open")}>
                <i className="fa fa-bars "></i>
              </button>
            </div>
          </div>
        ) : (
          <NormalMenu handleClick={handleOnClick} />
        )}
      </section>

      <section
        className="fixed inset-4 transition-all transform origin-top-right duration-300 ease-in-out z-30 lg:hidden "
        id="burgernavigation"
        style={{ transform: "translateX(50em)" }}
      >
        <div className="relative bg-newwhite w-full h-full  border border-newbrown">
          <div className="relative flex flex-col h-full">
            <div className="flex flex-1 relative items-end justify-end pr-[30px]">
              <button>
                <span className="sr-only">Close menu</span>
                <a className="">
                  <svg
                    className="w-6 h-6"
                    fillRule="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => toggleMenu("close")}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <div className="flex flex-[10] flex-col relative justify-evenly items-center text-newmaroon">
              <button
                className="text-[30px] hover:text-newbeige"
                onClick={() => {
                  toggleMenu("close");
                  handleOnClick("About");
                }}
              >
                About
              </button>
              <button
                className="text-[30px]  hover:text-newbeige"
                onClick={() => {
                  toggleMenu("close");
                  handleOnClick("Services");
                }}
              >
                Services
              </button>
              <button
                className="text-[30px]  hover:text-newbeige"
                onClick={() => {
                  toggleMenu("close");
                  handleOnClick("Projects");
                }}
              >
                Projects
              </button>
              <button
                className="text-[30px] hover:text-newbeige"
                onClick={() => {
                  toggleMenu("close");
                  handleOnClick("Contact");
                }}
              >
                Contact
              </button>
              <a
                href=""
                className="text-[30px]  hover:text-newbeige"
                onClick={() => toggleMenu("close")}
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col overflow-hidden" id="mainBody">
        <main className="flex flex-col w-[100vw] h-fit font-body antialiased items-center gap-[10em] ">
          <section
            className="flex flex-row w-full h-[70vh] items-center justify-center"
            id="About"
          >
            <div className="flex flex-col w-.40 justify-center items-center ">
              <Fade top cascade>
                <span className="leading-[1em] text-[20px] lg:text-[50px] text-newbeige text-left transition-all duration-500">
                  <br />{" "}
                  <span className="text-[15px] lg:text-[40px] text-black">
                    I'm
                  </span>{" "}
                  <span className="leading-[1em] text-[40px] lg:text-[120px] text-newmaroon transition-all duration-500 ">
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

          <Services />
          <Projects />
          <Techstack />

          <section
            className="group flex flex-col lg:flex-row w-full h-fit items-center justify-center relative transform duration-200"
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
        </main>
        <footer className="flex- 1 flex w-full flex-col items-center pb-5 text-black bg-newbeige">
          <div className="flex justify-item-center items-center p-8 gap-10">
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
      </section>
    </div>
  );
}
