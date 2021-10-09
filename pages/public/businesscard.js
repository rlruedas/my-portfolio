import React, { useEffect, useState } from 'react'
import Flip from 'react-reveal/Flip'


function businesscard() {
    const [flipCard, setFlipCard] = useState(true);

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col relative w-.70 max-w-2xl  m-10">
            <div>
                <img src="./hmu.png" alt="Image was here" className="absolute -top-64 right-0 w-64 h-64 z-0 opacity-0 hidden transform translate-y-72 duration-150 lg:flex group-hover:opacity-100 group-hover:translate-y-0"></img>
            </div>
            {
                flipCard ?
                    <div className="flex flex-col flex-grow-0 lg:flex-col z-10 justify-center items-center self-center p-2 w-full max-w-2xl h-.80 md:h-96  rounded-2xl bg-peach text-black">
                        <div className="flex flex-row justify-around w-full items-center " >
                            <img src="/logo-nobg.png" alt={"Image"} className="hidden lg:flex rounded-lg w-64 h-64 " ></img>
                            <div className="w-px md:h-64 bg-black hidden lg:flex" ></div>
                            <div className="flex flex-col " >
                                <div className="pb-1" >
                                    <p className="pb-1"><i className="fa fa-map-marker" ></i></p>
                                    <p>Antipolo City, Rizal, 1870</p>
                                </div>
                                <div className="pb-1" >
                                    <p className="pb-1"><i className="fa fa-envelope"></i></p>
                                    <p className="">reister.ruedas@gmail.com</p>
                                    <p>rlruedas@student.apc.edu.ph</p>
                                </div>
                                <div className="" >
                                    <p className="pb-1"><i className="fa fa-phone"></i></p>
                                    <p>+639493241618</p>
                                </div>
                                <div className="" >
                                    <p className="pb-1"><i className="fa fa-file-text"></i></p>
                                    <a href="./Resume-Reister-Ruedas.pdf" className="rounded-md bg-transparent placeholder-gray-700 self-end hover:opacity-50" download >Download Resume</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <button className="rounded-3xl h-10 w-10 border-solid border-black border placeholder-gray-700 self-end mr-10 fa fa-angle-right text-black" onClick={() => setFlipCard(false)} />
                        </div>
                    </div>
                    :

                    <div className="flex flex-col flex-grow-0 lg:flex-col z-10 justify-center items-center self-center p-2 w-full max-w-2xl h-.80 md:h-96  rounded-2xl bg-peach text-black">
                        <div className="flex flex-col" >
                            <div className="flex flex-row justify-between items-start">
                                <input className="rounded-md w-.45 py-2 px-2 bg-seashell placeholder-black " type="text" placeholder="Name" />
                                <input className="rounded-md w-.45 py-2 px-2 bg-seashell placeholder-black " type="email" placeholder="Email" />
                            </div>
                            <div className="flex flex-col justify-center items-center relative ">
                                <input className="rounded-md  w-full px-2 py-2 m-1 bg-seashell placeholder-black " type="text" value="Subject" />
                                <textarea className="rounded-md w-full m-1 py-7 px-2 bg-seashell  placeholder-black  text-justify " type="text" placeholder="Message" />
                                <input className="rounded-md p-1 bg-seashell placeholder-black self-end" type="submit" value="Send Message" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <button className="rounded-3xl h-10 w-10 border-solid border-black border placeholder-gray-700 self-end mr-10 fa fa-angle-right text-black" onClick={() => setFlipCard(true)} />
                        </div>

                    </div>
            }

        </div>




    )
}

export default businesscard
