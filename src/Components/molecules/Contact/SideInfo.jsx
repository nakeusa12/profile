import React from 'react'
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const SideInfo = () => {
    return (
        <div className="lg:w-5/12 bg-white h-full grid grid-rows-3 grid-flow-col gap-4 mt-8">
            <div className="w-full bg-gray-100 rounded py-6 px-6 lg:ml-6 flex hover:shadow-lg">
                <FiPhone className="w-10 h-10 text-xs text-primary" />
                <span className="absolute lg:ml-16 ml-20 mt-1 text-xl font-second select-none">(+62) 852 6151 6545</span>
            </div>
            <div className="w-full bg-gray-100 rounded py-6 px-6 lg:ml-6 flex hover:shadow-lg">
                <HiOutlineLocationMarker className="w-10 h-10 text-primary" />
                <span className="absolute lg:ml-16 ml-20 mt-1 text-xl font-second select-none">Banda Aceh, Indonesia</span>
            </div>
            <div className="w-full overflow-hidden bg-gray-100 rounded py-6 px-6 lg:ml-6 flex hover:shadow-lg">
                <HiOutlineMail className="w-10 h-10 text-sm text-primary" />
                <span className="absolute lg:ml-16 ml-20 mt-1 text-xl font-second select-none">Sfulnakeusa@gmail.com</span>
            </div>
        </div>
    )
}

export default SideInfo
