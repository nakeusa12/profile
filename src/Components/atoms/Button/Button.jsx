import React from 'react'

const Button = ({ title, ...rest }) => {
    return (
        <button className="text-white bg-primary border-0 lg:py-3 py-4 lg:w-48 w-full focus:outline-none hover:bg-gray-800 rounded text-lg" {...rest}>
            {title}
        </button>
    )
}

export default Button;