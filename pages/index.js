import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Projects from "./public/projects";
import Services from "../pages/public/services";
import Techstack from "../pages/public/techstack";
import BusinessCard from "../pages/public/businesscard";

export default function Home() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [burgerMenuClick, setBurgerMenuClick] = useState(false);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
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
      console.log(menu.classList);
      menu.style.transform = "translateX(0)";
      menu.style.opacity = "100%";
      disable();
    }
    if (toggle === "close") {
      menu.style.transform = "translateX(50em)";
      menu.style.opacity = "0%";
      enable();
    }
  }

  function disable() {
    // To get the scroll position of current webpage
    let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

    // if scroll happens, set it to the previous value
    window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    };
  }


  function enable() {
    window.onscroll = function () { };
  }

  function NormalMenu() {
    return (
      <div className="flex w-full justify-center">
        <ul
          className="flex flex-row self-center text-lg font-semibold text-newbrown mr-[5em] "
          id="header"
        >
          <a href="" className="pl-2 pr-2 mx-2  hover:text-newmaroon  ">
            About
          </a>
          <a href="#Services" className="pl-2 pr-2 mx-2 hover:text-newmaroon ">
            Services
          </a>
          <a href="#Projects" className="pl-2 pr-2 mx-2  hover:text-newmaroon">
            Projects
          </a>
          <a href="#Contact" className="pl-2 pr-2 mx-2 hover:text-newmaroon">
            Contact
          </a>
          <a href="" className="pl-2 pr-2 mx-2 hover:text-newmaroon ">
            Blog
          </a>
        </ul>
      </div>
    );
  }

  return (
    <div className="font-body">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Reister L. Ruedas</title>
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
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
        className="flex flex-row w-full h-max py-[1em] sticky top-0 text-grey z-20  bg-newbeige transition-all transform duration-500"
        id="header"
      >
        {width <= 1000 ? (
          <div className="flex w-full justify-end ">
            <button>
              <a className="mr-[3em]" onClick={() => toggleMenu("open")}>
                <i className="fa fa-bars "></i>
              </a>
            </button>
          </div>
        ) : (
          <NormalMenu />
        )}
      </section>

      <section
        className="fixed inset-4 transition-all transform origin-top-right duration-300 ease-in-out z-30 lg:hidden "
        id="burgernavigation"
        style={{ transform: "translateX(50em)" }}
      >
        <div className=" bg-newwhite w-full h-full rounded-md border border-newbrown">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>&nbsp;</div>
              <button className="">
                <span class="sr-only">Close menu</span>
                <a className="" onClick={() => toggleMenu("close")}>
                  <i className="fa fa-times "></i>
                </a>
              </button>
            </div>
            <div className="flex flex-col h-screen p-[10em] justify-between items-center text-newmaroon">
              <a
                href=""
                className="text-[30px]"
                onClick={() => toggleMenu("close")}
              >
                About
              </a>
              <a
                href="#Services"
                className="text-[30px]"
                onClick={() => toggleMenu("close")}
              >
                Services
              </a>
              <a
                href="#Projects"
                className="text-[30px]"
                onClick={() => toggleMenu("close")}
              >
                Projects
              </a>
              <a
                href="#Contact"
                className="text-[30px]"
                onClick={() => toggleMenu("close")}
              >
                Contact
              </a>
              <a
                href=""
                className="text-[30px]"
                onClick={() => toggleMenu("close")}
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="" id="mainBody">
        <main className=" font-body antialiased items-center block overflow-x-hidden">
          <section className="flex flex-row w-full h-screen items-center justify-center pb-10">
            <div className="flex flex-col w-.40 h-screen justify-center items-center ">
              <div>
                <Fade top cascade>
                  <p className="text-[35px] lg:p-2 text-newbrown ">
                    Hi!{" "}
                    <span className="text-lg lg:text-lg lg:p-2 text-grey">
                      I'm
                    </span>{" "}
                  </p>
                  <span className="lg:text-[80px] font-light text-newmaroon " id="name">
                    Reister
                  </span>
                  <span className="lg:text-9xl font-extrabold text-peach">
                    .{" "}
                  </span>
                  <span className="text-sm text-grey">
                    A Software Engineer{" "}
                  </span>
                </Fade>
              </div>
              <Fade left>
                <span className="text-justify text-xs lg:text-sm font-bold lg:self-end py-5 text-newmaroon lg:w-.50 transition-all duration-200">
                  <span className="lg:text-[] font-light text-newbeige">ABOUT</span>
                  &nbsp; I'm a Full-stack Engineer based in the Philippines.
                  Specializes in building web and mobile applications. Currently
                  improving my artistic and aesthetic skill to provide BEAUTIFUL
                  and FRIENDLY applications. I also do freelance, want to
                  collaborate?
                </span>
              </Fade>
            </div>
            <div className="flex w-.30 h-screen justify-center items-center">
              <img src="./profileImage.png" alt="Image was here"></img>
            </div>
          </section>

          <section
            className="flex flex-col w-screen h-screen item-center self-center my-20"
            id="Services"
          >
            <div className="flex flex-col  items-center justify-center relative ">
              <Services />
            </div>
          </section>

          <section
            className="flex flex-col w-full items-center justify-center my-20 text-black "
            id="Projects"
          >
            <Projects />
          </section>

          <section>
            <Techstack />
          </section>

          <section
            className="group flex flex-col lg:flex-row w-full md:h-screen items-center justify-center relative "
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
          <div className="flex justify-item-center items-center p-8">
            <a
              href="https://www.linkedin.com/in/reisterruedas/"
              className="fa fa-linkedin mr-5 hover:opacity-50 "
            ></a>
            <a
              href="https://www.facebook.com/reister.ruedas1/"
              className="fa fa-facebook mr-5 hover:opacity-50"
            ></a>
            <a
              href="https://www.instagram.com/rlruedas/"
              className="fa fa-instagram mr-5 hover:opacity-50"
            ></a>
            <a
              href="https://github.com/rlruedas"
              className="fa fa-github hover:opacity-50"
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
