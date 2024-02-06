import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const HeadingMenus = ({ name, icon }) => {
    return (
        <div className='hover:scale-110 ease-out duration-300'>
            <div className={`flex items-center cursor-pointer p-5 bg-[#2b2c30] rounded-2xl border-4 border-transparent hover:border-white hover:bg-[#696b70] `} >
                <Image src={icon} width={50} height={50} alt={name} />
            </div>
            <p className='text-center mt-2'>{name}</p>
        </div>


    )
}
