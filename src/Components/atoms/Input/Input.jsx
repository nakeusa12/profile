import React from 'react'

const Input = ({ ...rest }) => {
    return (
        <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-4 mb-4z" {...rest} required />
    )
}

export default Input;