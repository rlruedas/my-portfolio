import { useEffect, useState } from 'react'
import Head from 'next/head'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Projects from '../pages/public/projects'
import Services from '../pages/public/services'
import Techstack from '../pages/public/techstack'

export default function Home() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [burgerMenuClick, setBurgerMenuClick] = useState(false);
  const [flipCard, setFlipCard] = useState(false);

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

  function BusinessCard() {
    return (
      <Flip right>
        <div className="flex flex-col lg:flex-col  justify-center items-center self-center p-2 shadow-xl w-.70 lg:w-.50 lg:h-96 rounded-2xl bg-peach text-black lg:m-10">
          <div className="flex flex-row justify-around w-full items-center" >
            <img src="/logo-nobg.png" alt={"Image"} className="hidden lg:flex rounded-lg w-64 h-64 " ></img>
            <div className="w-px h-64 bg-black hidden lg:flex" ></div>
            <div className="flex flex-col " >
              <div className="pb-1" >
                <p className="pb-1"><i className="fa fa-map-marker" ></i></p>
                <p>Antipolo City, Rizal, 1870</p>
              </div>
              <div className="pb-1" >
                <p className="pb-1"><i className="fa fa-envelope"></i></p>
                <p className="">reister.ruedas@gmail.com</p>
                <p>rlruedas@student.apc.edu.ph</p>
              </div>
              <div className="" >
                <p className="pb-1"><i className="fa fa-phone"></i></p>
                <p>+639493241618</p>
              </div>
              <div className="" >
                <p className="pb-1"><i className="fa fa-file-text"></i></p>
                <a href="./Resume-Reister-Ruedas.pdf" className="rounded-md bg-transparent placeholder-gray-700 self-end hover:opacity-50" download >Download Resume</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <button className="rounded-3xl h-10 w-10 border-solid border-black border placeholder-gray-700 self-end mr-10 fa fa-angle-right text-black" onClick={() => setFlipCard(true)} />
          </div>
        </div>
      </Flip>
    )
  }

  function BusinessCardFlip() {
    return (
      <Flip right>
        <div className="flex flex-col lg:flex-col  justify-center items-center self-center shadow-xl  w-.70 lg:w-.50 lg:h-96 rounded-2xl bg-peach text-black relative lg:m-10">
          <div className="flex flex-col relative" >
            <form className="flex flex-row w-full relative">
              <input className="rounded-md w-full h-10 bg-seashell placeholder-black mr-4 pl-4" type="text" placeholder="Name" />
              <input className="rounded-md w-full h-10 bg-seashell placeholder-black mb-1 pl-4" type="email" placeholder="Email" />
            </form>
            <form className="flex flex-col w-full relative">
              <input className="rounded-md h-10 bg-seashell placeholder-black  mb-1 pl-4" type="text" placeholder="Subject" />
              <textarea className="rounded-md h-36 bg-seashell  placeholder-black  mb-1 p-4 text-justify " type="text" placeholder="Message" />
              <input className="rounded-md h-10 w-2/4 bg-seashell placeholder-black self-end" type="submit" value="Send Message" />
            </form>
          </div>
          <div className="flex flex-col w-full">
            <button className="rounded-3xl h-10 w-10 border-solid border-black border placeholder-gray-700 self-end mr-10 fa fa-angle-right text-black" onClick={() => setFlipCard(false)} />
          </div>
        </div>
      </Flip>
    )
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

      <main className={"flex flex-col bg-black relative "} >

        <section className="flex flex-row w-full h-14 absolute justify-around items-center  top-0 text-grey z-20 ">
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
              <span className="text-right text-xs lg:text-lg font-bold self-end py-5 text-grey"><span className="lg:text-xs font-light text-pink" >ABOUT</span>&nbsp; &nbsp; I'm a Full-stack Engineer based in the Philippines. Specializes in building web and mobile applications.
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

        <section className="group flex flex-col lg:flex-row w-.90 h-screen items-center self-center justify-center relative " id="Contact" >
          <div className="flex flex-col justify-center items-center relative ">
            <div className="text-4xl lg:text-7xl font-semibold text-grey  " >
              <Zoom cascade>
                <p>Get in touch!</p>
              </Zoom>
            </div>
            <p className="text-grey pb-2">here's my business card. </p>
          </div>
          <div>
            <img src="./hmu.png" alt="Image was here" className="absolute right-48 -top-10 w-64 h-64 opacity-0 transform translate-y-72 hidden lg:block duration-200 group-hover:opacity-100 group-hover:translate-y-0"></img>
          </div>
          {
            flipCard ? <BusinessCardFlip /> : <BusinessCard />
          }
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
