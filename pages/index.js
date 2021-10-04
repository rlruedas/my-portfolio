import { useEffect, useState } from 'react'
import Head from 'next/head'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Tada from 'react-reveal/Tada';
import Projects from '../pages/public/projects'
import Services from '../pages/public/services'

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
    if (width >= 1280) {
      document.getElementById("myLinks").className = "hidden";
    }

    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  function burgerMenu() {
    var x = document.getElementById("myLinks").className;
    console.log(x)
    if (x === "block") {
      document.getElementById("myLinks").className = "hidden";
    } else {
      document.getElementById("myLinks").className = "block";
    }
  }

  function onBurgerMenuClick() {
    document.getElementById("myLinks").className = "hidden";
  }

  function BusinessCard() {
    return (
      <Flip right>
        <div className="flex flex-col lg:flex-col  justify-center items-center self-center p-2 shadow-xl w-.70 lg:w-.50 lg:h-96 rounded-2xl bg-periwinkle text-black ml-10">
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
                <a href="" className="rounded-md bg-transparent placeholder-gray-700 self-end hover:opacity-50" download >Download Resume</a>
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
        <div className="flex flex-col lg:flex-col  justify-center items-center self-center shadow-xl  w-.70 lg:w-.50 lg:h-96 rounded-2xl bg-periwinkle text-black  ml-10">
          <div className={"flex flex-col"} >
            <form className="flex flex-row">
              <input className="rounded-md w-full h-10 bg-seashell placeholder-black mr-4 pl-4" type="text" placeholder="Name" />
              <input className="rounded-md w-full h-10 bg-seashell placeholder-black mb-1 pl-4" type="email" placeholder="Email" />
            </form>
            <form className="flex flex-col">
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
      <ul className="flex flex-row text-lg" id="header">
        <a href="#About" className="pl-2 pr-2 mx-2 hover:text-white hover:border-b ">About</a>
        <a href="#Projects" className="pl-2 pr-2 mx-2  hover:text-white hover:border-b">Projects</a>
        <a href="#Contact" className="pl-2 pr-2 mx-2 hover:text-white hover:border-b">Contact</a>
        <a href="" className="pl-2 pr-2 mx-2 hover:text-white hover:border-b">Blog</a>
      </ul>
    )
  }


  return (
    <div className={"flex flex-1 flex-col font-body content-center antialiased items-center overflow-hidden"}   >
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

      <main className={"flex flex-col z-50 bg-matteOrange"} >

        <section className="flex flex-row w-full h-14 justify-around items-center absolute top-0 text-jet z-50 ">
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
        <section className="hidden" id="myLinks">
          <div className="flex flex-row justify-center bg-white w-screen h-screen absolute top-10 z-50" >
            <ul className="flex flex-col text-lg sm bg-matteOrange w-screen h-screen justify-center items-center" id="header">
              <a href="#About" className="pl-2 pr-2 mx-2 w-screen text-center text-7xl  hover:text-white" onClick={() => onBurgerMenuClick()} >About</a>
              <a href="#Projects" className="pl-2 pr-2 mx-2 w-screen text-center text-7xl hover:text-white" onClick={() => onBurgerMenuClick()}>Projects</a>
              <a href="#Contact" className="pl-2 pr-2 mx-2 w-screen text-center text-7xl hover:text-white" onClick={() => onBurgerMenuClick()}>Contact</a>
              <a href="" className="pl-2 pr-2 mx-2 rounded-md w-screen text-center text-7xl hover:text-white" onClick={() => onBurgerMenuClick()}>Blog</a>
            </ul>
          </div>

        </section>

        <section className="flex flex-col w-full items-center justify-center self-center pb-10 h-screen text-jet" >
         
          <h1 className="group flex flex-col text-center " >
            <h4 className="block text-center font-thin text-2xl lg:text-4xl pb-10 group-hover:hidden ">Hello! I'm</h4>
            <Tada>
              <p className="hidden text-7xl group-hover:flex">
                A Software Engineer
              </p>
            </Tada>
            <Tada>
              <p className="flex text-7xl group-hover:hidden" >
                Reister L. Ruedas
              </p>
            </Tada>
          </h1>
        </section>

        <section className="flex flex-initial w-3/4 h-screen items-center self-center text-darkliver" id="About" >
          <div className="flex flex-initial  flex-col lg:grid lg:grid-cols-2 lg:gap-5">
            <Fade left cascade>
              <p className="text-7xl text-left font-semibold  text-opacity-10" >ABOUT ME</p>
            </Fade>
            <Fade right>
              <div className="hidden lg:flex row-span-3 justify-self-center " id="img-container"   >
                <img src="/profileImage.jpg" alt={"Image"} className="rounded-md " ></img>
              </div>
            </Fade>
            <Fade left >

              <p className="text-justify flex flex-initial">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="flex" >
                <a href="https://www.linkedin.com/in/reisterruedas/" className="fa fa-linkedin mr-5 hover:opacity-50"></a>
                <a href="https://www.facebook.com/reister.ruedas1/" className="fa fa-facebook mr-5 hover:opacity-50"></a>
                <a href="https://www.instagram.com/rlruedas/" className="fa fa-instagram mr-5 hover:opacity-50"></a>
                <a href="https://github.com/rlruedas" className="fa fa-github hover:opacity-50"></a>
              </div>
            </Fade>
          </div>
        </section>

        <section className="flex flex-col w-screen h-screen item-center self-center my-20" >
          <div className="flex flex-col  items-center justify-center relative ">
            <Services />
          </div>
        </section>

        <section className="flex flex-col w-full h-full items-center justify-center self-center text-black " id="Projects">
          <Projects />
        </section>

        <section className="flex flex-col lg:flex-row w-.90 h-screen items-center self-center justify-center  " id="Contact" >
          <div className="flex flex-col">
            <div className="text-4xl lg:text-7xl font-semibold pb-6 text-darkliver  " >
              <Zoom cascade>
                <p>CONTACT ME</p>
              </Zoom>
            </div>

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
