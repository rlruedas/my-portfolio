import React, { useCallback } from "react";
import Head from "next/head";
import About from "../components/about";
import Services from "../components/services";
import Projects from "../components/projects/projects";
import TechStack from "../components/techstack";
import Contact from "../components/contact/contact";
import Footer from "../components/footer";
import Navbar from "../components/navbar/navbar";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <>
      <Particles
        options={{
          preset: "stars",
          background: {
            color: {
              value: "#8E3200",
            },
          },
        }}
        init={particlesInit}
      />
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
    </>
  );
}
