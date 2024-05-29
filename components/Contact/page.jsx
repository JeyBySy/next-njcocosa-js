import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col items-start p-6 sm:p-10 lg:p-16 bg-white shadow-xl '>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-800 font-bold'>Ready to start a conversation?</h1>
            <h2 className='text-lg sm:text-xl lg:text-2xl leading-10 mb-6 text-center text-gray-600'>Get in touch with me through these contacts:</h2>
            <div className='mb-4 w-full '>
                <span className='font-bold text-gray-700'>Mail:</span> <a target='_blank' className='text-blue-500 hover:underline' href='mailto:njcocosa@gmail.com'>njcocosa@gmail.com</a>
            </div>
            <div className='mb-4 w-full'>
                <span className='font-bold text-gray-700'>LinkedIn:</span> <a target='_blank' className='text-blue-500 hover:underline' href='https://www.linkedin.com/in/jhericococosa/'>jhericococosa (Niño Jherico Cocosa)</a>
            </div>
            <div className='mb-4 w-full '>
                <span className='font-bold text-gray-700'>Github:</span> <a target='_blank' className='text-blue-500 hover:underline' href='https://github.com/JeyBySy'>JeyBySy (Niño Jherico Cocosa)</a>
            </div>
            <div className='mb-4 w-full '>
                <span className='font-bold text-gray-700'>Mobile:</span> +639611975517
            </div>
        </div>
    )
}

export default Contact
