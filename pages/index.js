import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'


export default function Home() {

  useEffect(() => {
    namePop();

  }, [])

  useEffect(() => {
    animateElement();
    window.addEventListener('scroll', revealElements);


  });

  function responsiveMenu() {
    var x = document.getElementById("header");
    if (x.className === "hidden text-lg lg:flex") {
      x.className = "text-lg flex flex-col items-start lg:flex lg:flex-row lg:items-center";
    } else {
      x.className = "hidden text-lg lg:flex";
    }
  }

  function namePop() {
    var x = document.getElementById("name");
    x.className = "transform-gpu translate-x-0  duration-1000 ease-in opacity-100 text-center font-bold text-4xl lg:text-7xl";
  }

  function revealElements() {
    var reveal = document.querySelectorAll("div.reveal");


    for (var i = 0; i < reveal.length; i++) {

      var windowHeight = window.innerHeight;
      var revealTop = reveal[i].getBoundingClientRect().top;
      var revealPoint = 20;

      if (revealTop < windowHeight - revealPoint) {
        reveal[i].classList.remove('translate-y-40', 'opacity-0');
        reveal[i].classList.add('translate-y-0', 'opacity-100');
      } else {
        reveal[i].classList.remove('translate-y-0', 'opacity-100');
        reveal[i].classList.add('translate-y-40', 'opacity-0');
      }
    }
  }

  function animateElement(pageX, pageY) {

    let xAxis = (window.innderWidth / 2 - pageX) / 10;
    let yAxis = (window.innerHeight / 2 - pageY) / 10;

    document.getElementById("img-container").style.transform = `{rotateY(${xAxis}deg) rotateX(${yAxis}deg)}`;

  }


  return (
    <div className={"min-h-screen flex flex-col font-body content-center antialiased items-center"}   >
      <Head>
        <title>Reister L. Ruedas</title>
        <meta name="description" content="Website created by Me" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Sora&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      </Head>

      <main className={"grid grid-cols-1 w-3/4 lg:w-3/4  justify-center z-50 "} >
        <section className="flex absolute top-10 right-0 lg:right-36 items-start ">
          <ul className="hidden text-lg lg:flex" id="header" >
            <a href="#About" className="pl-2 pr-2 mx-2 rounded-md">About</a>
            <a href="#Projects" className="pl-2 pr-2 mx-2 rounded-md">Projects</a>
            <a href="#Contact" className="pl-2 pr-2 mx-2 rounded-md">Contact</a>
            <a href="Blog" className="pl-2 pr-2 mx-2 rounded-md">Blog</a>
          </ul>
          <button className="" >
            <a className="pl-2 pr-2 mx-2 rounded-md block lg:hidden" onClick={() => responsiveMenu()}>
              <i className="fa fa-bars "></i>
            </a>
          </button>
        </section>

        <section className="flex flex-col items-center content-center justify-center pb-10 w-full h-screen" >
          <h4 className="text-center font-thin text-2xl lg:text-4xl text-white text-opacity-30 pb-10 " id="name-1" >HELLO! I'M</h4>
          <h1 className="transform-gpu translate-x-8 opacity-0 text-center font-bold text-4xl lg:text-7xl " id="name" >Reister L. Ruedas</h1>
        </section>

        <section className="flex w-full h-screen items-center" id="About" >
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 duration-1000 ease-in transform translate-y-40 opacity-0 reveal" onMouseMove={e => animateElement(e.pageX, e.pageY)}>
            <p className="text-7xl text-center font-semibold text-opacity-10 text-white xl:text-left xl:text-9xl  " >ABOUT</p>
            <div className="hidden lg:flex row-span-3 justify-self-center " id="img-container"   >
              <img src="/profileImage.jpg" alt={"Image"} className="rounded-lg " ></img>
            </div>
            <p className="text-justify text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="flex" >
              <a href="https://www.linkedin.com/in/reisterruedas/" className="fa fa-linkedin mr-5 hover:opacity-50"></a>
              <a href="https://www.facebook.com/reister.ruedas1/" className="fa fa-facebook mr-5 hover:opacity-50"></a>
              <a href="https://www.instagram.com/rlruedas/" className="fa fa-instagram mr-5 hover:opacity-50"></a>
              <a href="https://github.com/rlruedas" className="fa fa-github hover:opacity-50"></a>
            </div>
          </div>
        </section>

        <section className="flex flex-col w-full h-screen items-center" id="Projects">
          <div className="grid grid-cols-2  duration-1000 ease-in transform translate-y-40 opacity-0 reveal">
            <p className="text-2xl lg:text-5xl text-white font-semibold col-span-2  " >My Works</p>
            <div className="bg-green-500" >

            </div>
            <div className="bg-green-500" >

            </div>
            <div className="bg-green-500" >

            </div>
          </div>
        </section>

        <section className="flex flex-col w-full h-screen items-center" >
          <div className="grid grid-cols-2  duration-1000 ease-in transform translate-y-40 opacity-0 reveal ">
            <p className="text-2xl lg:text-5xl text-white font-semibold col-span-2  " >What I can provide you</p>
            <div className="" >

            </div>
            <div className="" >

            </div>
            <div className="" >

            </div>
          </div>
        </section>
        <section className="flex flex-col w-full h-screen items-start justify-center duration-1000" id="Contact" >
          <div className="duration-1000 ease-in transform translate-y-40 opacity-0 reveal">
            <div className="text-4xl lg:text-7xl text-white font-semibold pb-6  " >
              <p>Contact Me</p>
            </div>
            <div className="text-base pb-4" >
              <p className="text-3xl pb-1">My Emails</p>
              <p>reister.ruedas@gmail.com</p>
              <p>rlruedas@student.apc.edu.ph</p>
            </div>
            <div className="text-base" >
              <p className="text-3xl pb-1">Contact Number</p>
              <p>+639493241618</p>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex- 1 flex w-full flex-col items-center border-t border-solid border-black pb-5">
        <div className="flex justify-item-center items-center p-8" >
          <a href="https://www.linkedin.com/in/reisterruedas/" className="fa fa-linkedin mr-5 hover:opacity-50"></a>
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
