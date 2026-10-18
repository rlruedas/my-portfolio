import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import About from "../components/about";
import Services from "../components/services";
import Projects from "../components/projects/projects";
import Experience from "../components/experience";
import TechStack from "../components/techstack";
import Contact from "../components/contact/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-nobg.webp" />
        <title>Reister Ruedas | Mobile App Engineer</title>
        <meta
          name="description"
          content="Portfolio of Reister Ruedas - Mobile App Engineer specializing in iOS development, Swift, and modern mobile solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative min-h-screen bg-newwhite text-newbrown font-poppins selection:bg-newbeige selection:text-newmaroon">
        <Navbar />
        <main className="flex flex-col w-full">
          <About />
          <Services />
          <Projects />
          <Experience />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
