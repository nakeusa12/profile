import React from 'react'

const Profile = () => {
    return (
        <div className="cursor-move lg:h-screen h-auto " id="about">
            <div className="container mx-auto flex md:p-12 p-6 md:flex-row flex-col h-full">
                <div className="lg:w-1/4 md:w-1/2 w-full mb-8 md:mb-0">
                    <div className="w-full h-64 heightin">
                        <img className="object-cover object-center rounded w-full h-full" alt="hero" src="https://images.pexels.com/photos/5255999/pexels-photo-5255999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                    <div className="my-10 text-center">
                        <a className="px-6 hover:bg-gray-800 hover:text-second py-2 rounded border-solid border-2 border-primary" href="./cv-saifulnakeusa.pdf" download>Download CV</a>
                    </div>
                </div>
                <div className="xl:flex-grow md:w-3/4 flex flex-col md:items-start md:text-left items-center text-center lg:my-0 my-6">
                    <div className="md:ml-10 ml-0">
                        <h1 className="text-4xl font-sans text-primary font-bold">
                            My <span className="text-third">Skills</span>
                        </h1>
                    </div>
                    <div className="md:ml-8 ml-0 mt-4 flex lg:flex-row items-center md:items-start flex-col w-full">
                        <div className="lg:w-1/2 w-full p-2">
                            <h1 className="text-xl font-bold">Development</h1>
                            <div className="flex w-full md:flex-wrap justify-center md:justify-start mt-6">
                                <p className="mr-6 text-lg mb-2">HTML</p>
                                <p className="mr-6 text-lg mb-2">CSS</p>
                                <p className="mr-6 text-lg mb-2">JavaScript</p>
                                <p className="mr-6 text-lg mb-2">React</p>
                                <p className="mr-6 text-lg mb-2">Svelte</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-2">
                            <h1 className="text-xl font-bold">Design</h1>
                            <div className="flex lg:flex-col flex-row md:justify-start justify-center mt-6">
                                <p className="text-lg ml-0">Figma</p>
                                <p className="text-lg lg:mt-3 mt-0 lg:ml-0 ml-4">Adobe Xd</p>
                                <p className="text-lg lg:mt-3 mt-0 lg:ml-0 ml-4">Photoshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
