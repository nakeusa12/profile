import React from 'react'
import { ReactComponent as HeroSvg } from '../../../Assets/Icons/heroSvg.svg'
import TitleHero from './TitleHero'

const Hero = () => {
    return (
        <div className="flex md:flex-row flex-col md:h-screen h-full background-blue" id="home">
            <div className="lg:w-1/2 md:ml-20 h-full flex flex-col md:text-left text-center justify-center md:py-0 py-48">
                <TitleHero />
            </div>

            <div className="lg:w-1/2 bg-hero flex justify-center items-center" style={{ width: 'auto' }}>
                <HeroSvg className="md:mr-20 hidden md:block" />
            </div>
        </div>
    )
}

export default Hero
