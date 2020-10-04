import React from 'react'

const DataService = [
    {
        title: 'Web Development',
        desc:
            'Build high-quality websites that have attractive and fluid functions and fast rendering.',
    },
    {
        title: 'UI UX Design',
        desc:
            'Creating attractive Website and Mobile Designs and an excellent user experience.',
    },
    {
        title: 'Responsive Website',
        desc:
            'Developing responsive websites can be accessed on computers, tablets and mobile',
    },
    {
        title: 'Progressive Web Apps',
        desc:
            'Making the Website accessible without an internet connection and responsive',
    },
]

const Service = () => {
    return (
        <section id="service">
            <div className="container px-12 py-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h2 className="text-xl text-third font-sans font-bold mb-1">
                        My Services
                    </h2>
                    <h1 className="text-4xl font-sans text-primary font-bold mb-4">
                        Services Offers
                    </h1>
                </div>

                <div className="flex flex-wrap">
                    {DataService.map((data, index) => (
                        <div className="p-4 lg:w-1/4 md:w-1/2 w-full" key={index}>
                            <div className="h-full bg-gray-100 hover:bg-second rounded shadow-md hover:shadow-lg lg:px-6 px-10 lg:pt-10 pt-12">
                                <div className="w-full">
                                    <img
                                        className="w-full h-full text-center object-cover object-center"
                                        src="https://placeimg.com/640/480/any"
                                        alt={data.title}
                                    />
                                </div>
                                <div className="lg:py-8 py-10">
                                    <h1 className="font-second lg:text-lg text-3xl text-center font-medium text-primary mb-3">
                                        {data.title}
                                    </h1>
                                    <p className="leading-relaxed md:text-base text-lg text-center">{data.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service
