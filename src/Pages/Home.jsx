import React from 'react'
import { Hero, Swipe, Service, Portfolio } from "../Components"

const Home = () => {
    return (
        <div className="max-width">
            <Hero />
            <Swipe />
            <Service />
            <Portfolio />
        </div>
    )
}

export default Home
