import React from 'react'
import PasPhoto from "../../../Assets/Image/saiful.jpg"
import { Gap } from "../../index"
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const LeftData = () => {
    return (
        <div className="lg:w-1/4 md:w-1/2 w-full mb-4 md:mb-0">
            <div className="w-full h-64 heightin">
                <img className="object-cover object-center rounded w-full h-full" alt="Profile" src={PasPhoto} />
            </div>
            <div className="flex md:flex-col flex-row md:mt-0 mt-10">
                <Gap height="3rem" />
                <div className="md:w-full w-auto flex flex-row justify-center">
                    <a href="https://www.facebook.com/saifulnakeusa/" target="blank" className="mr-2">
                        <AiFillFacebook className="md:text-3xl text-4xl text-primary hover:text-gray-700" />
                    </a>
                    <a href="https://www.instagram.com/sfullnakeusa12/" target="blank" className="mr-2">
                        <AiFillInstagram className="md:text-3xl text-4xl text-primary hover:text-gray-700" />
                    </a>
                    <a href="https://github.com/nakeusa12" target="blank" className="mr-2">
                        <FaGithubSquare className="md:text-3xl text-4xl text-primary hover:text-gray-700" />
                    </a>
                    <a href="https://www.linkedin.com/in/saiful-nakeusa-99634b153/" target="blank">
                        <FaLinkedin className="md:text-3xl text-4xl text-primary hover:text-gray-700" />
                    </a>
                </div>
                <Gap height="3rem" />
                <div className="md:text-center w-full text-right">
                    <a className="px-6 hover:bg-gray-800 hover:text-second py-2 rounded border-solid border-2 border-primary" href="./cv-saifulnakeusa.pdf" download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default LeftData
