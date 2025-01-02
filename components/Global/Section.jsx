import React from 'react'

const Section = ({ children, title, id }) => {
    return (
        <div id={id}>
            <div className='container w-full mx-auto mt-10 absolute z-0 inset-0 bg-mine-900'>
                <p className='absolute left-9 -top-9 text-[50px] font-black text-mine-100 capitalize italic z-20'>&lt;{title}&gt;</p>
            </div>
            <div className='container lg:w-[70%] m-auto relative z-0 py-28 '>
                {children}
            </div>
        </div>
    )
}

export default Section