import React from 'react'
import { Hero, Swipe, Service, Portfolio, Contact } from "../Components"

const Home = () => {
    return (
        <div className="max-width">
            <Hero />
            <Swipe />
            <Service />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home
