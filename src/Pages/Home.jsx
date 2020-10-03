import React from 'react'
import { About, Hero, Profile } from "../Components"

const Home = () => {
    return (
        <div className="max-width">
            <Hero />
            <About />
            <Profile />
        </div>
    )
}

export default Home
