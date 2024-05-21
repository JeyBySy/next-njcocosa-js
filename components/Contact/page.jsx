import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col '>
            <h1 className='text-2xl'>Ready to start a conversation?</h1>
            <h2 className='leading-10'>Get in touch with me through these contacts:</h2>
            <div >
                Mail: <a target='_blank' className='active' href='mailto:njcocosa@gmail.com'>njcocosa@gmail.com</a>
            </div>
            <div>
                LinkedIn:  <a target='_blank' className='active' href='https://www.linkedin.com/in/jhericococosa/'>jhericococosa (Niño Jherico Cocosa)</a>
            </div>
            <div>
                Github: <a target='_blank' className='active' href='https://github.com/JeyBySy'>JeyBySy (Niño Jherico Cocosa)</a>
            </div>


            <div>Mobile: +639611975517</div>
        </div>
    )
}

export default Contact