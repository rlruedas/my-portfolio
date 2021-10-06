import { useEffect, useState } from 'react'
import Head from 'next/head'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Projects from '../pages/public/projects'
import Services from '../pages/public/services'
import Techstack from '../pages/public/techstack'
import BusinessCard from '../pages/public/businesscard'

export default function Home() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [burgerMenuClick, setBurgerMenuClick] = useState(false);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("load", updateDimensions);

    if (width >= 1280) {
      document.getElementById("myLinks").className = "hidden";
    }

    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  function burgerMenu() {
    var x = document.getElementById("myLinks").className;
    var main = document.getElementById("mainBody").classList;

    if (x === "block") {
      console.log("dito pumasok")
      document.getElementById("myLinks").className = "hidden";
      document.getElementById("mainBody").classList.remove("fixed");
    } else {
      document.getElementById("myLinks").className = "block";
      document.getElementById("mainBody").classList.add("fixed");
    }




  }

  function onBurgerMenuClick() {
    document.getElementById("myLinks").className = "hidden";
    document.getElementById("mainBody").classList.remove("fixed");
  }


  function NormalMenu() {
    return (
      <ul className="flex flex-row text-lg font-semibold text-grey" id="header">
        <a href="#Services" className="pl-2 pr-2 mx-2 hover:text-white hover:border-b ">Services</a>
        <a href="#Projects" className="pl-2 pr-2 mx-2  hover:text-white hover:border-b">Projects</a>
        <a href="#Contact" className="pl-2 pr-2 mx-2 hover:text-white hover:border-b">Contact</a>
        <a href="" className="pl-2 pr-2 mx-2 hover:text-white hover:border-b">Blog</a>
      </ul>
    )
  }


  return (
    <div className="flex flex-1 flex-col font-body content-center antialiased items-center overflow-hidden" id="mainBody" >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Reister L. Ruedas</title>
        <meta name="description" content="Website created by Me" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
        <link href="https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <main className="flex flex-col bg-black relative m-0 p-0">


        <section className="flex flex-row w-full py-10 absolute justify-around items-center  top-0 text-grey z-20 ">
          <a href="">
            <p className="text-2xl" >RR</p>
          </a>
          {
            width <= 1280 ?
              <button className="" >
                <a className="rounded-md block" onClick={() => burgerMenu()} >
                  <i className="fa fa-bars "></i>
                </a>
              </button> : <NormalMenu />
          }

        </section>
        <section className="hidden" id="myLinks" >
          <div className="flex flex-col justify-center bg-white w-screen h-screen fixed  z-50 " >
            <button className="absolute top-10 right-10" onClick={() => burgerMenu()}  >
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" /></svg>
            </button>


            <ul className="flex flex-col text-lg sm  w-screen h-screen justify-center items-center" id="header">
              <a href="#Services" className="pl-2 pr-2 mx-2 w-screen text-center text-7xl  hover:text-grey" onClick={() => onBurgerMenuClick()} >Services</a>
              <a href="#Projects" className="pl-2 pr-2 mx-2 w-screen text-center text-7xl hover:text-grey" onClick={() => onBurgerMenuClick()}>Projects</a>
              <a href="#Contact" className="pl-2 pr-2 mx-2 w-screen text-center text-7xl hover:text-grey" onClick={() => onBurgerMenuClick()}>Contact</a>
              <a href="" className="pl-2 pr-2 mx-2 rounded-md w-screen text-center text-7xl hover:text-grey" onClick={() => onBurgerMenuClick()}>Blog</a>
            </ul>
          </div>

        </section>

        <section className="flex flex-row w-full h-screen items-center justify-center pb-10" >
          <div className="flex flex-col w-.40 h-screen justify-center items-center ">
            <div>
              <Fade top cascade>
                <p className="lg:text-lg lg:p-2 text-grey ">Hello! I'm</p>
                <span className="lg:text-9xl font-light  " id="name" >reister</span><span className="lg:text-9xl font-extrabold text-peach">. </span><span className="text-sm text-grey" >A Software Engineer </span>
              </Fade>
            </div>
            <Fade left >
              <span className="text-justify text-xs lg:text-sm font-bold self-end py-5 text-grey w-.50"><span className="lg:text-xs font-light text-pink" >ABOUT</span>&nbsp; I'm a Full-stack Engineer based in the Philippines. Specializes in building web and mobile applications.
                Currently improving my artistic and aesthetic skill to provide BEAUTIFUL and FRIENDLY applications. I also do freelance, want to collaborate?</span>
            </Fade>
          </div>
          <div className="flex w-.30 h-screen justify-center items-center">
            <img src="./profileImage.png" alt="Image was here"  ></img>



          </div>
        </section>



        <section className="flex flex-col w-screen h-screen item-center self-center my-20" id="Services">
          <div className="flex flex-col  items-center justify-center relative ">
            <Services />
          </div>
        </section>

        <section className="flex flex-col w-full h-full items-center justify-center self-center my-20 text-black " id="Projects">
          <Projects />
        </section>

        <section>
          <Techstack />
        </section>

        <section className="group flex flex-col lg:flex-row w-full md:h-screen items-center justify-center relative " id="Contact" >
          <div className="flex flex-col justify-center items-center relative">
            <div className="text-4xl lg:text-7xl font-semibold text-grey" >
              <Zoom cascade>
                <p>Get in touch!</p>
              </Zoom>
            </div>
            <p className="text-grey pb-2">here's my business card. </p>
          </div>

          <BusinessCard />
        </section>

      </main>
      <footer className="flex- 1 flex w-full flex-col items-center self-center border-t border-solid border-black pb-5 text-white">
        <div className="flex justify-item-center items-center p-8" >
          <a href="https://www.linkedin.com/in/reisterruedas/" className="fa fa-linkedin mr-5 hover:opacity-50 "></a>
          <a href="https://www.facebook.com/reister.ruedas1/" className="fa fa-facebook mr-5 hover:opacity-50"></a>
          <a href="https://www.instagram.com/rlruedas/" className="fa fa-instagram mr-5 hover:opacity-50"></a>
          <a href="https://github.com/rlruedas" className="fa fa-github hover:opacity-50"></a>
        </div>
        <div className="text-center text-lg font-light">
          <p>Reister L. Ruedas © 2021 All rights reserved   </p>
        </div>
      </footer>

    </div >
  )
}
