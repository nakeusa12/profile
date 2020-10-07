import React from 'react'

const TextArea = ({ ...rest }) => {
    return (
        <textarea className="w-full box-border rounded p-4 outline-none h-33 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base" {...rest} required>

        </textarea>
    )
}

export default TextArea