import React from 'react'

const Section = ({ children, title, id }) => {
    return (
        <div id={id}>
            <div className='container w-full m-auto absolute z-0 inset-0'>
                <p className='absolute left-0 top-0 text-[50px] font-black text-mine-400 capitalize'>&lt;{title}&gt;</p>
            </div>
            <div className='container lg:w-[70%] m-auto relative z-10 pb-28'>
                {children}
            </div>
            <div className='container w-full m-auto absolute z-0 inset-0'>
                <p className='absolute right-0 bottom-0 text-[50px] font-black text-mine-400 capitalize'>&lt;/{title}&gt;</p>
            </div>
        </div>
    )
}

export default Section