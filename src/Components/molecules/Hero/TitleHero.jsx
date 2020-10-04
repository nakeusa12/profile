import React from 'react'

const TitleHero = () => {
    return (
        <div className=" w-full flex flex-col">
            <h5 className="text-primary lg:text-2xl md:text-xl font-medium uppercase font-second" >
                Hello !
            </h5>
            <h1
                className="lg:text-6xl md:text-5xl block font-primary font-bold md:text-third leading-12 text-white"
            >
                <span className="text-primary">I'm</span> Saiful<br />
                Nakeusa
            </h1>
            <p className="lg:text-xl md:text-base font-second mt-4 font-medium">
                A Freelance Frontend Developer <br /> 3+years Experience
            </p>
        </div>
    )
}

export default TitleHero
