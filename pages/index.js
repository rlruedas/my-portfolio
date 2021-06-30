import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {

  return (
    <div class={"min-h-screen flex flex-col font-body content-center antialiased items-center h-screen"}   >
      <Head>
        <title>Reister L. Ruedas</title>
        <meta name="description" content="Website created by Me" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Sora&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <main class={"flex-1 flex flex-col w-3/4 justify-center z-50"} >
        <section class="flex absolute h-28 top-0 bottom-0 right-56 items-center">
          <ul class="flex text-lg" id="header" >
            <a href="#About" class="pl-2 pr-2 mx-4 rounded-md">About</a>
            <a href="#Projects" class="pl-2 pr-2 mx-4 rounded-md ">Projects</a>
            <a href="#Contact" class="pl-2 pr-2 mx-4 rounded-md">Contact</a>
            <a href="Blog" class="pl-2 pr-2 mx-4 rounded-md">Blog</a>
          </ul>
        </section>

        <section class="flex flex-col items-center content-center justify-center pb-10 w-full h-screen " >
          <p class="text-center font-thin text-4xl text-white text-opacity-30 pb-10 " >HELLO! I'M</p>
          <p class="text-center font-bold text-7xl" id="name" >Reister L. Ruedas</p>
        </section>

        <section class="flex w-full h-screen items-center" id="About">
          <div class="grid grid-cols-2 gap-5 ">
            <p class="text-9xl font-semibold text-opacity-10 text-white " >ABOUT</p>
            <div class="row-span-3 justify-self-center " >
              <img src="/profileImage.jpg" alt={"Image"} class="rounded-lg" ></img>
            </div>
            <p class="text-justify text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div class="flex" >
              <a href="https://www.linkedin.com/in/reisterruedas/" class="fa fa-linkedin mr-5"></a>
              <a href="https://www.facebook.com/reister.ruedas1/" class="fa fa-facebook mr-5"></a>
              <a href="https://www.instagram.com/rlruedas/" class="fa fa-instagram mr-5"></a>
              <a href="https://github.com/rlruedas" class="fa fa-github"></a>
            </div>
          </div>
        </section>

        <section class="flex flex-col w-full h-screen items-center" id="Projects">
          <div class="grid grid-cols-2 ">
            <p class="text-5xl text-white font-semibold col-span-2  " >My Works</p>
            <div class="bg-green-500" >

            </div>
            <div class="bg-green-500" >

            </div>
            <div class="bg-green-500" >

            </div>
          </div>
        </section>

        <section class="flex flex-col w-full h-screen items-center" >
          <div class="grid grid-cols-2 ">
            <p class="text-5xl text-white font-semibold col-span-2  " >What I can provide you</p>
            <div class="" >

            </div>
            <div class="" >

            </div>
            <div class="" >

            </div>
          </div>
        </section>
        <section class="flex flex-col w-full h-1/4 items-start" id="Contact" >
          <div class="text-7xl text-white font-semibold pb-6" >
            <p>Contact</p>
          </div>
          <div class="text-base pb-4" >
            <p class="text-3xl pb-1">My Emails</p>
            <p>reister.ruedas@gmail.com</p>
            <p>rlruedas@student.apc.edu.ph</p>
          </div>
          <div class="text-base" >
            <p class="text-3xl pb-1">Contact Number</p>
            <p>+639493241618</p>
          </div>
        </section>

      </main>
      <footer class="flex- 1 flex w-full flex-col items-center border-t border-solid border-black pb-5">
        <div class="flex justify-item-center items-center p-8" >
          <a href="https://www.linkedin.com/in/reisterruedas/" class="fa fa-linkedin mr-5 hover:opacity-50"></a>
          <a href="https://www.facebook.com/reister.ruedas1/" class="fa fa-facebook mr-5 hover:opacity-50"></a>
          <a href="https://www.instagram.com/rlruedas/" class="fa fa-instagram mr-5 hover:opacity-50"></a>
          <a href="https://github.com/rlruedas" class="fa fa-github"></a>
        </div>
        <div class="text-center text-lg font-light">
          <p>Reister L. Ruedas © 2021 All rights reserved   </p>
        </div>
      </footer>
    </div >
  )
}
