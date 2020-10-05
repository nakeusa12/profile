import React from 'react'
import LeftData from './LeftData'
import RightSkill from "./RightSkill"

const Profile = () => {
    return (
        <div className="cursor-move md:h-screen h-auto bg-gray-800" id="about">
            <div className="container mx-auto flex md:p-16 p-6 md:py-24 py-12 md:flex-row flex-col h-full">
                <LeftData />
                <RightSkill />
            </div>
        </div>
    )
}

export default Profile
