import React from 'react'
import DataService from "./ApiService"
import CardService from "./CardService"

const Service = () => {
    return (
        <section id="service">
            <div className="container px-12 py-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h2 className="text-xl text-third font-primary font-bold mb-1">
                        My Services
                    </h2>
                    <h1 className="text-4xl font-primary text-primary font-bold mb-4">
                        Services Offers
                    </h1>
                </div>

                <div className="flex flex-wrap">
                    {DataService.map((data, index) => (
                        <CardService data={data} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service
