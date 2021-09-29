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
        <div className="flex flex-col w-.80 items-center bg-persiangreen rounded-md shadow-2xl" >
            <Zoom>
                <p className="text-2xl lg:text-5xl font-semibold my-10 text-rebeccapurple " >My Works</p>
            </Zoom>
            <h1 className="text-black text-5xl justify-self-center" >In Development</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full justify-center items-end px-9 pb-9" >

                {/* <Fade left>
                    <div className="bg-dessertsand h-96 rounded-lg sm:col-start-2 sm:col-span-3 shadow-xl" >
                        <img alt={"Image"} className="rounded-lg h-12" ></img>
                        <p className="text-base">John Doe</p>
                        <p className="text-base">Juan Dela Cruz</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="bg-dessertsand h-96 rounded-lg sm:col-start-1 sm:col-span-2 shadow-xl" >
                        <img alt={"Image"} className="rounded-lg h-12" ></img>
                        <p className="text-base">John Doe</p>
                        <p className="text-base">Juan Dela Cruz</p>
                    </div>
                </Fade>
                <Fade left>
                    <div className="bg-dessertsand h-96 rounded-lg sm:col-start-2 sm:col-span-3 shadow-xl" >
                        <img alt={"Image"} className="rounded-lg h-12" ></img>
                        <p className="text-base">John Doe</p>
                        <p className="text-base">Juan Dela Cruz</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="bg-dessertsand h-96 rounded-lg sm:col-start-1 sm:col-span-2 shadow-xl" >
                        <img alt={"Image"} className="rounded-lg h-12" ></img>
                        <p className="text-base">John Doe</p>
                        <p className="text-base">Juan Dela Cruz</p>
                    </div>
                </Fade> */}
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
