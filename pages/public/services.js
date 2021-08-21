import React, { useState, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide';


export default function services() {
    const [madhovering, setMadHovering] = useState(false)
    const [wadhovering, setWadHovering] = useState(false)


    return (
        <div className="flex flex-row justify-start items-center  w-screen h-screen relative" >
            <Slide left collapse when={madhovering}>
                <div className="flex flex-col justify-center items-center bg-rebeccapurple w-.45 h-screen absolute top-0 left-0 " onMouseLeave={() => setMadHovering(false)} >
                    <p className="text-base lg:text-3xl font-bold text-white" >Mobile Application Development</p>
                </div>
            </Slide>
            <Slide right collapse when={wadhovering}>
                <div className="flex flex-col justify-center items-center bg-rebeccapurple w-.55 h-screen absolute top-0 right-0" onMouseLeave={() => setWadHovering(false)}>
                    <p className="text-base lg:text-3xl font-bold text-white" >Website Development</p>
                </div>
            </Slide>
            <div className="flex flex-col justify-center items-center w-.45  h-screen bg-darksalmon " onMouseEnter={() => {setMadHovering(true),setWadHovering(false) }}  >
                <i className="im im-mobile text-xl lg:text-9xl text-jet" />
            </div>
            <div className="flex flex-col justify-center items-center w-.45  h-screen bg-seashell " onMouseEnter={() => {setWadHovering(true),setMadHovering(false)}} >
                <i className="im im-code text-xl lg:text-9xl text-darksalmon" />
            </div>
            <p className="text-3xl lg:text-9xl absolute right-0 translate-x-10 lg:translate-x-72 origin-center transform rotate-90 text-copperRose " >My Services</p>

        </div>
    )
}
