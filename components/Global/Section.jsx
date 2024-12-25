import React from 'react'

const Section = ({ children, title }) => {
    return (
        <>
            <div className='container w-full m-auto absolute z-0 inset-0'>
                <p className='absolute  left-0 top-0 text-[80px] font-black text-mine-400'>&lt;{title}&gt;</p>
            </div>
            <div className='container lg:w-[70%] m-auto relative z-10 pb-20 '>
                {children}
            </div>
            <div className='container w-full m-auto absolute z-0 inset-0'>
                <p className='absolute  right-0 bottom-0 text-[80px] font-black text-mine-400'>&lt;/{title}&gt;</p>
            </div>
        </>
    )
}

export default Section