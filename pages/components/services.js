import React, { useState, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom'


export default function Services() {
    return (
        <div className="flex flex-col justify-center items-center  w-full h-full !overflow-x-clip" id="Services" >
            <div className="flex flex-row relative w-full h-full ">
                <div className="group flex flex-col justify-center items-center w-full relative " >
                    <Zoom>
                        <i className="im im-mobile text-[50px] transform duration-200 lg:text-9xl text-peach  group-hover:opacity-50" />
                    </Zoom>
                    <div className="flex flex-col justify-center items-center bg-newbrown w-full h-screen absolute transform -translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000" >
                        <p className="text-[.5em] sm:text-[1.3em] font-bold text-white" >Native Application Development</p>
                        <p className="text-[.3em] sm:text-[.9em] font-medium text-white py-10" >let's make it with a mobile application?</p>
                    </div>
                    <img src="./lookright.png" alt="Image was here" className=" absolute left-0 top-0 w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-0 duration-300 group-hover:opacity-100" ></img>

                </div>
                <div className="group flex flex-col justify-center items-center w-full h-screen relative z-10 " >
                    <Zoom>
                        <i className="im im-code text-[50px] lg:text-9xl text-pink transform duration-200 group-hover:opacity-50" />
                    </Zoom>
                    <div className="flex flex-col justify-center items-center bg-newbeige w-full h-full absolute transform translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000 " >
                        <p className="text-[.5em] sm:text-[1.3em] font-bold text-white" >Website Development</p>
                        <p className="text-[.3em] sm:text-[.9em] font-bold text-white py-10" >let's build it with a website?</p>
                    </div>
                    <img src="./lookleft.png" alt="Image was here" className=" absolute right-0 top-0 w-[10em] h-[10em] sm:w-[15em] sm:h-[15em] opacity-0 duration-300 group-hover:opacity-100 " ></img>
                </div>
            </div>
            
            <p className="text-[7em] whitespace-nowrap absolute right-0 hidden rotate-90 translate-x-[2.4em] transform  text-grey font-bold  sm:block " >My Services</p>

        </div>
    )
}
