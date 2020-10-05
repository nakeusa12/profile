import React, { useState } from 'react'
import Modal from "./Modal"

const CardPortfolio = ({ project }) => {

    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => setIsShowing(!isShowing)

    return (
        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
            <div className="flex relative fullin ">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded" src={project.image} />
                <div className="px-8 py-10 relative z-10 w-full rounded bg-gray-900 opacity-0 hover:opacity-75 transition delay-100 duration-300 ease-in shadow-md flex items-center justify-center flex-col cursor-pointer" onClick={toggle} >
                    <h1 className="tracking-widest text-2xl font-second font-bold text-second opacity-100">{project.name}</h1>
                </div>
            </div>
            <Modal isShowing={isShowing} hide={toggle} projectModal={project} />
        </div>
    )
}

export default CardPortfolio