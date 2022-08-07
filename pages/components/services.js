import React, { useState, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide';


export default function Services() {
    return (
        <div className="flex flex-col justify-center items-center  w-screen  relative " id="Services" >
            <div className="flex flex-row relative w-screen ">
                <div className="group flex flex-col justify-center items-center w-full relative" >
                    <Zoom>
                        <i className="im im-mobile text-[50px] lg:text-9xl text-peach  group-hover:opacity-50" />
                    </Zoom>
                    <div className="flex flex-col justify-center items-center bg-newbrown w-full h-screen absolute transform -translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000" >
                        <p className="text-base lg:text-3xl font-bold text-white" >Native Application Development</p>
                        <p className="text-xs lg:text-base font-bold text-white py-10" >let's make it with a mobile application?</p>
                    </div>
                    <img src="./lookright.png" alt="Image was here" className=" absolute left-0 top-0 w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-0 duration-300 group-hover:opacity-100" ></img>

                </div>
                <div className="group flex flex-col justify-center items-center w-full h-screen relative" >
                    <Zoom>
                        <i className="im im-code text-[50px] lg:text-9xl text-pink group-hover:opacity-50" />
                    </Zoom>
                    <div className="flex flex-col justify-center items-center bg-newbeige w-full h-full absolute transform translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000 " >
                        <p className="text-base lg:text-3xl font-bold text-white" >Website Development</p>
                        <p className="text-xs lg:text-base font-bold text-white py-10" >let's build it with a website?</p>
                    </div>
                    <img src="./lookleft.png" alt="Image was here" className=" absolute right-0 top-0 w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-0 duration-300 group-hover:opacity-100 z-10" ></img>
                </div>
            </div>
            
            <p className="text-[7em] whitespace-nowrap absolute right-0 hidden rotate-90 translate-x-[2.4em] transform  text-grey font-bold z-0 sm:block " >My Services</p>

        </div>
    )
}
