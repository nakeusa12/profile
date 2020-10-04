import React from 'react'

const RightSkill = () => {
    return (
        <div className="xl:flex-grow md:w-3/4 flex flex-col md:items-start md:text-left items-center text-center my-0 bg-gray-500 md:ml-10 ml-0">

            <div className="md:my-0 my-4">
                <h1 className="text-4xl font-sans text-primary font-bold">
                    My <span className="text-third">Skills</span>
                </h1>
            </div>
            <div className="mt-4 flex lg:flex-row items-center md:items-start flex-col w-full">
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
    )
}

export default RightSkill
