import React from 'react'
import LeftData from './LeftData'
import RightSkill from "./RightSkill"

const Profile = () => {
    return (
        <div className="cursor-move lg:h-screen h-auto bg-gray-800" id="about">
            <div className="container mx-auto flex md:p-16 p-6 md:pt-16 pt-12 md:flex-row flex-col h-full">
                <LeftData />
                <RightSkill />
            </div>
        </div>
    )
}

export default Profile
