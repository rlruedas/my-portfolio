import React from "react";
import Head from "next/head";
import About from "../components/about";
import Services from "../components/services";
import Projects from "../components/projects/projects";
import TechStack from "../components/techstack";
import Contact from "../components/contact/contact";
import Footer from "../components/footer";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full min-h-screen justify-center items-center">
      <Head>
        <link rel="icon" href="/logo-nobg.png" />
        <title>Reister Ruedas | Portfolio</title>
        <meta name="description" content="Website created by Me" />
      </Head>
      <Navbar />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
