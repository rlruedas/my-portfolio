import React, { useState, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide';


export default function services() {
    return (
        <div className="flex flex-row justify-start items-center  w-screen h-screen relative" >
            <div className="group flex flex-col justify-center items-center w-.45  h-screen bg-darkliver" >
                <i className="im im-mobile text-xl lg:text-9xl text-white" />
                <div className="flex flex-col justify-center items-center bg-rebeccapurple w-.45 h-screen absolute transform -translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000" >
                    <p className="text-base lg:text-3xl font-bold text-white" >Mobile Application Development</p>
                </div>
            </div>
            <div className="group flex flex-col justify-center items-center w-.45 h-screen" >
                <i className="im im-code text-xl lg:text-9xl text-matteRed" />
                <div className="flex flex-col justify-center items-center bg-rebeccapurple w-.55 h-screen absolute top-0 right-0 transform translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000 " >
                    <p className="text-base lg:text-3xl font-bold text-white" >Website Development</p>
                </div>
            </div>
            <p className="text-3xl lg:text-9xl absolute right-0 translate-x-10 lg:translate-x-72 origin-center transform rotate-90 text-copperRose " >My Services</p>

        </div>
    )
}
