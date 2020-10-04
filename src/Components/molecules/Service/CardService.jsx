import React from 'react'

const CardService = ({ data: { image, title, desc } }) => {
    return (
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 hover:bg-second rounded shadow-md hover:shadow-lg lg:px-6 px-10 lg:pt-10 pt-12">
                <div className="w-full">
                    <img
                        className="w-full h-full text-center object-cover object-center"
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="lg:py-8 py-10">
                    <h1 className="font-second lg:text-lg text-3xl text-center font-medium text-primary mb-3">
                        {title}
                    </h1>
                    <p className="leading-relaxed md:text-base text-lg text-center">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CardService
