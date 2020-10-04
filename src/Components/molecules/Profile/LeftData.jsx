import React from 'react'
import PasPhoto from "../../../Assets/Image/saiful.jpg"

const LeftData = () => {
    return (
        <div className="lg:w-1/4 md:w-1/2 w-full mb-4 md:mb-0 bg-gray-500">
            <div className="w-full h-64 heightin">
                <img className="object-cover object-center rounded w-full h-full" alt="Profile" src={PasPhoto} />
            </div>
            <div className="my-10 text-center">
                <a className="px-6 hover:bg-gray-800 hover:text-second py-2 rounded border-solid border-2 border-primary" href="./cv-saifulnakeusa.pdf" download>Download CV</a>
            </div>
        </div>
    )
}

export default LeftData
