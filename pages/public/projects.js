import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


export default function projects() {

    const projectsArray = [
        {
            projectImg: "/logo.png",
            projectName: "Lorem Ipsum",
            projectDesc: "BlaBlaBla"
        },
        {
            projectImg: "/logo.png",
            projectName: "Lorem Ipsum",
            projectDesc: "BlaBlaBla"
        },
        {
            projectImg: "/logo.png",
            projectName: "Lorem Ipsum",
            projectDesc: "BlaBlaBla"
        },
        {
            projectImg: "/logo.png",
            projectName: "Lorem Ipsum",
            projectDesc: "BlaBlaBla"
        },
        {
            projectImg: "/logo.png",
            projectName: "Lorem Ipsum",
            projectDesc: "BlaBlaBla"
        },
        {
            projectImg: "/logo.png",
            projectName: "Lorem Ipsum",
            projectDesc: "BlaBlaBla"
        },
    ]

    return (
        <div className="flex flex-col w-full relative items-center rounded-md " >
            <div className="flex flex-col relative justify-center items-center">
                <Zoom>
                    <p className="text-2xl lg:text-5xl font-semibold py-10 text-grey" >My Works</p>
                </Zoom>
                <img src='./work.png' alt="Image was here" className="  absolute -right-40 -top-10 transform rotate-12" width="160px" height="160px"></img>
            </div>

            {/* <h1 className="text-grey text-5xl justify-self-center" >In Development</h1> */}
            <div className="grid lg:grid-cols-3 lg:grid-rows-4 gap-8 l w-.70 justify-center items-center " >

                <div className="flex flex-col w-full h-96 justify-end items-center border-2 border-solid border-peach group hover:bg-seashell hover:border-0" >
                    <div className="flex flex-1 w-full relative p-6 justify-end">
                        <a className="text-peach">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 128 128"
                            >
                                <path
                                    fill="#FFAC41"
                                    d="M124 1c-.766 0-1.535.297-2.117.879l-60 60a2.994 2.994 0 000 4.238A2.937 2.937 0 0064 67c.77 0 1.54-.29 2.121-.883l60-60a3.001 3.001 0 000-4.238A3.01 3.01 0 00124 1zM34 11c-12.68 0-23 10.32-23 23v60c0 12.68 10.32 23 23 23h60c12.68 0 23-10.32 23-23V44c0-1.66-1.34-3-3-3s-3 1.34-3 3v50c0 9.371-7.629 17-17 17H34c-9.371 0-17-7.629-17-17V34c0-9.371 7.629-17 17-17h50c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0 0"
                                ></path>
                            </svg>
                        </a>

                    </div>
                    <div className="flex flex-1 flex-col w-full justify-center " >
                        <p className="text-4xl text-peach font-bold tracking-tighter p-8 group-hover:text-black">Makaturismo</p>
                        <p className="text-base text-peach tracking-widest p-8 group-hover:text-black">RN &nbsp; JS  &nbsp; Git &nbsp; Play Store </p>
                    </div>
                </div>
                <div className="flex flex-col w-full h-96 justify-end items-center border-2 border-solid border-peach group hover:bg-seashell hover:border-0" >
                    <div className="flex flex-1 w-full relative p-6 justify-end">
                        <a className="text-peach">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 128 128"
                            >
                                <path
                                    fill="#FFAC41"
                                    d="M124 1c-.766 0-1.535.297-2.117.879l-60 60a2.994 2.994 0 000 4.238A2.937 2.937 0 0064 67c.77 0 1.54-.29 2.121-.883l60-60a3.001 3.001 0 000-4.238A3.01 3.01 0 00124 1zM34 11c-12.68 0-23 10.32-23 23v60c0 12.68 10.32 23 23 23h60c12.68 0 23-10.32 23-23V44c0-1.66-1.34-3-3-3s-3 1.34-3 3v50c0 9.371-7.629 17-17 17H34c-9.371 0-17-7.629-17-17V34c0-9.371 7.629-17 17-17h50c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0 0"
                                ></path>
                            </svg>
                        </a>

                    </div>
                    <div className="flex flex-1 flex-col w-full justify-center " >
                        <p className="text-4xl text-peach font-bold tracking-tighter p-8 group-hover:text-black">Coming Soon</p>
                        <p className="text-base text-peach tracking-widest p-8 group-hover:text-black"></p>
                    </div>
                </div>
                <div className="flex flex-col w-full h-96 justify-end items-center border-2 border-solid border-peach group hover:bg-seashell hover:border-0" >
                    <div className="flex flex-1 w-full relative p-6 justify-end">
                        <a className="text-peach">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 128 128"
                            >
                                <path
                                    fill="#FFAC41"
                                    d="M124 1c-.766 0-1.535.297-2.117.879l-60 60a2.994 2.994 0 000 4.238A2.937 2.937 0 0064 67c.77 0 1.54-.29 2.121-.883l60-60a3.001 3.001 0 000-4.238A3.01 3.01 0 00124 1zM34 11c-12.68 0-23 10.32-23 23v60c0 12.68 10.32 23 23 23h60c12.68 0 23-10.32 23-23V44c0-1.66-1.34-3-3-3s-3 1.34-3 3v50c0 9.371-7.629 17-17 17H34c-9.371 0-17-7.629-17-17V34c0-9.371 7.629-17 17-17h50c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0 0"
                                ></path>
                            </svg>
                        </a>

                    </div>
                    <div className="flex flex-1 flex-col w-full justify-center " >
                        <p className="text-4xl text-peach font-bold tracking-tighter p-8 group-hover:text-black">Coming Soon</p>
                        <p className="text-base text-peach tracking-widest p-8 group-hover:text-black"></p>
                    </div>
                </div>
                
                



                {/* {projectsArray.map(info =>
            <div key={info.id} className="bg-matteYellow h-80 rounded-lg" >
              <img src={info.projectImg} alt={"Image"} className="rounded-lg h-12" ></img>
              <p className="text-base">{info.projectName}</p>
              <p className="text-base">{info.projectDesc}</p>
            </div>
          )} */}
            </div>
        </div>
    )
}
