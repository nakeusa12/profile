import React from 'react'
import { Hero, Swipe, Service, Portfolio, Contact, Footer } from "../Components"

const Home = () => {
    return (
        <div className="max-width">
            <Hero />
            <Swipe />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
