import React, { useState, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide';


export default function services() {
    return (
        <div className="flex flex-row justify-start items-center  w-screen h-screen relative " >
            <div className="flex flex-row relative w-screen h-screen">
                <div className="group flex flex-col justify-center items-center w-full h-screen relative" >
                    <Zoom>
                        <i className="im im-mobile text-xl lg:text-9xl text-peach  group-hover:opacity-50" />
                    </Zoom>
                    <div className="flex flex-col justify-center items-center bg-pink w-full h-screen absolute transform -translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000" >
                        <p className="text-base lg:text-3xl font-bold text-white" >Native Application Development</p>
                    </div>
                    <img src="./lookright.png" alt="Image was here" className=" absolute left-0 top-0 w-52 h-52 opacity-0 duration-300 group-hover:opacity-100" ></img>

                </div>
                <div className="group flex flex-col justify-center items-center w-full h-screen relative" >
                    <Zoom>
                        <i className="im im-code text-xl lg:text-9xl text-pink group-hover:opacity-50" />
                    </Zoom>
                    <div className="flex flex-col justify-center items-center bg-peach w-full h-screen absolute transform translate-x-full duration-1000 group-hover:ease-in-out group-hover:translate-x-0 group-hover:duration-1000 " >
                        <p className="text-base lg:text-3xl font-bold text-white" >Website Development</p>
                    </div>
                    <img src="./lookleft.png" alt="Image was here" className=" absolute right-0 lg:right-32 top-0 w-52 h-52 opacity-0 duration-300 group-hover:opacity-100" ></img>
                </div>
            </div>
            
            <p className="text-3xl lg:text-9xl absolute right-0 translate-x-10 hidden lg:block lg:translate-x-72 origin-center transform rotate-90 text-grey " >My Services</p>

        </div>
    )
}
