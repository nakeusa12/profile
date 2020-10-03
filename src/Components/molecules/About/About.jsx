import React from 'react'
import { ReactComponent as AboutSvg } from '../../../Assets/Image/aboutSvg.svg'
import { ReactComponent as Arrow } from '../../../Assets/Image/arrow.svg'
import { Gap } from "../../index"
import TitleAbout from './TitleAbout'

const About = () => {
    return (
        <div className="cursor-move lg:h-screen h-auto" id="about">
            <div class="container mx-auto flex lg:px-5 px-12 py-24 lg:flex-row flex-col items-center">
                <div className="xl:max-w-lg xl:w-full lg:w-1/2 w-5/6 mb-10 md:mb-0">
                    <AboutSvg className="w-full object-cover object-center rounded" />
                </div>
                <div className="xl:flex-grow lg:w-1/2 xl:pl-24 lg:pl-16 lg:mt-0 mt-6 flex flex-col lg:items-start lg:text-left items-center text-center">
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
