import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Image from 'next/image'


export default function projects() {
    const [projectCount, setCount] = useState(0);

    const projectsDetails = [
        {},
        {
            projectName: "MAKATurismo",
            projectDesc: "Explore and Discover more about Makati. This is a tourism mobile application dedicated for you! Have fun around Makati ",
            projectImg: "./device-wireframe.png",
            projectAvailable: "Not yet available"
        },
        {
            projectName: "Coming Soon",
            projectDesc: "Coming Soon",
            projectImg: "Coming Soon",
            projectAvailable: "Coming Soon"
        },
    ]

    function ShowModal() {

        return (
            <Zoom>
                <div className="flex flex-col w-full h-full fixed top-0 left-0 z-30 justify-center items-center bg-newbeige">
                    <button className="absolute top-10 right-10" onClick={() => showProject()} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" /></svg>
                    </button>
                    <div className="flex flex-row relative w-.60 h-.70 ">
                        <div className="flex flex-col flex-1 h-full justify-center items-start ">
                            <p className="text-xl lg:text-6xl" >{projectsDetails[projectCount].projectName}</p>
                            <p className="text-sm lg:text-lg py-10" >{projectsDetails[projectCount].projectDesc}</p>
                            <p className="text-sm lg:text-lg" >{projectsDetails[projectCount].projectAvailable}</p>
                        </div>
                        <div className="hidden flex-1 justify-center items-center lg:flex">
                            <img src={projectsDetails[projectCount].projectImg} alt="Image was here" ></img>
                        </div>
                    </div>

                </div>
            </Zoom>

        )
    }


    function showProject() {
        var x = document.getElementById("project-details").classList;
        console.log(x)

        if (x.contains("hidden")) {
            document.getElementById("project-details").classList.add("block");
            document.getElementById("project-details").classList.remove("hidden");


        } else {
            document.getElementById("project-details").classList.remove("block");
            document.getElementById("project-details").classList.add("hidden");
        }
    }

    return (
        <div className="flex flex-col w-full relative justify-center items-center " >
            <div className="flex flex-col relative justify-center items-center">
                <Zoom>
                    <p className="text-2xl lg:text-5xl font-semibold py-10 text-grey" >My Projects</p>
                </Zoom>
                <img src='./work.png' alt="Image was here" className="  absolute -right-28 lg:-right-40 lg:-top-3 transform rotate-12" width="160px" height="160px"></img>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:auto-r gap-8 l w-.70 justify-center items-center pt-10" >

                <div className="flex flex-col w-full h-96 justify-end items-center border-2 border-solid border-newmaroon group hover:bg-seashell hover:border-0 relative" >
                    <div className="flex flex-1 w-full relative p-6 justify-end">
                    </div>
                    <div className="transform duration-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-28 group-hover:animate-pulse" onClick={() => { showProject(), setCount(1) }}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                    </div>
                    <div className="flex flex-1 flex-col w-full justify-center " >
                        <p className="text-4xl text-peach font-bold tracking-tighter p-8 group-hover:text-black">MAKATurismo</p>
                        <p className="text-base text-peach tracking-widest p-8 group-hover:text-black">RN &nbsp; JS  &nbsp; Git &nbsp; Play Store </p>
                    </div>
                </div>

                <div className="flex flex-col w-full h-96 justify-end items-center border-2 border-solid border-newmaroon group hover:bg-seashell hover:border-0" >
                    <div className="flex flex-1 w-full relative p-6 justify-end">
                        <a className="text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
                                <path
                                    fill="#000000"
                                    d="M124 1c-.766 0-1.535.297-2.117.879l-60 60a2.994 2.994 0 000 4.238A2.937 2.937 0 0064 67c.77 0 1.54-.29 2.121-.883l60-60a3.001 3.001 0 000-4.238A3.01 3.01 0 00124 1zM34 11c-12.68 0-23 10.32-23 23v60c0 12.68 10.32 23 23 23h60c12.68 0 23-10.32 23-23V44c0-1.66-1.34-3-3-3s-3 1.34-3 3v50c0 9.371-7.629 17-17 17H34c-9.371 0-17-7.629-17-17V34c0-9.371 7.629-17 17-17h50c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0 0"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className="transform duration-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-28 group-hover:animate-pulse">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                    </div>
                    <div className="flex flex-1 flex-col w-full justify-center " >
                        <p className="text-4xl text-peach font-bold tracking-tighter p-8 group-hover:text-black">Coming Soon</p>
                        <p className="text-base text-peach tracking-widest p-8 group-hover:text-black">&nbsp;</p>
                    </div>
                </div>

                <div className="flex flex-col w-full h-96 justify-end items-center border-2 border-solid border-newmaroon group hover:bg-seashell hover:border-0" >
                    <div className="flex flex-1 w-full relative p-6 justify-end">
                        <a className="text-peach">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
                                <path
                                    fill="#000000"
                                    d="M124 1c-.766 0-1.535.297-2.117.879l-60 60a2.994 2.994 0 000 4.238A2.937 2.937 0 0064 67c.77 0 1.54-.29 2.121-.883l60-60a3.001 3.001 0 000-4.238A3.01 3.01 0 00124 1zM34 11c-12.68 0-23 10.32-23 23v60c0 12.68 10.32 23 23 23h60c12.68 0 23-10.32 23-23V44c0-1.66-1.34-3-3-3s-3 1.34-3 3v50c0 9.371-7.629 17-17 17H34c-9.371 0-17-7.629-17-17V34c0-9.371 7.629-17 17-17h50c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0 0"
                                ></path>
                            </svg>
                        </a>

                    </div>
                    <a className="transform duration-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-28 group-hover:animate-pulse">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                    </a>
                    <div className="flex flex-1 flex-col w-full justify-center " >
                        <p className="text-4xl text-peach font-bold tracking-tighter p-8 group-hover:text-black">Coming Soon</p>
                        <p className="text-base text-peach tracking-widest p-8 group-hover:text-black">&nbsp;</p>
                    </div>
                </div>
            </div>
            <div className="hidden" id="project-details" >
                <ShowModal />
            </div>

        </div>
    )
}
