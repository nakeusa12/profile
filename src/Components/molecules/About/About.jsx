import React from 'react'
import { ReactComponent as AboutSvg } from '../../../Assets/Icons/aboutSvg.svg'
import { ReactComponent as Arrow } from '../../../Assets/Icons/arrow.svg'
import { Gap } from "../../index"
import TitleAbout from './TitleAbout'

const About = () => {
    return (
        <div className="cursor-move lg:h-screen h-auto" id="about">
            <div className="container mx-auto flex md:py-24 py-12 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <AboutSvg className="w-full object-cover object-center rounded" />
                </div>
                <div className="xl:flex-grow md:w-1/2 lg:pl-24 md:pl-16 lg:mt-0 mt-6 flex flex-col md:items-start md:text-left items-center text-center">
                    <TitleAbout />
                    <Gap height="2rem" />
                    <div className="flex animate-bounce">
                        <Arrow className="absolute mt-2" />
                        <div className="ml-10 text-xl font-semibold">Swipe</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
