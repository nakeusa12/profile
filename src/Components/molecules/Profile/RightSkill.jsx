import React from 'react'
import { dataDesign, dataDevelop } from "./ApiProfile"

const RightSkill = () => {
    return (
        <div className="xl:flex-grow md:w-3/4 flex flex-col md:items-start md:text-left items-center text-center my-0 md:ml-10 ml-0">

            <div className="md:my-0 my-4">
                <h1 className="text-4xl font-sans text-primary font-bold">
                    My <span className="text-third">Skills</span>
                </h1>
            </div>
            <div className="mt-4 flex lg:flex-row items-center md:items-start flex-col w-full">
                <div className="lg:w-1/2 w-full p-2">
                    <h1 className="text-xl font-bold">Development</h1>
                    <div className="flex w-full flex-wrap justify-center md:justify-start mt-6">
                        {dataDevelop.map((develop, index) => (
                            <p key={index} className="mr-4 text-lg mb-2 p-3 rounded border font-primary  bg-gray-100 hover:bg-white hover:shadow">{develop.title}</p>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 w-full p-2 md:mt-0 mt-6">
                    <h1 className="text-xl font-bold">Design</h1>
                    <div className="flex flex-row md:justify-start justify-center mt-6">
                        {dataDesign.map((design, index) => (
                            <p key={index} className="mr-4 text-lg mb-2 p-3 rounded border font-primary  bg-gray-100 hover:bg-white hover:shadow">{design.title}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSkill
