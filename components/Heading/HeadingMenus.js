"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Heading.module.css'

export const HeadingMenus = ({ name, icon, link }) => {
    return (
        <div className='hover:scale-110 ease-out duration-300 hover:text-white hover:font-semibold'>
            <Link href={link}>
                <div className={`flex items-center cursor-pointer p-5 bg-[#2b2c30] rounded-3xl border-4 border-transparent hover:border-white hover:bg-[#696b70] `} >
                    <Image src={icon} width={35} height={35} alt={name} />
                </div>
                <p className='text-center mt-1 rounded-xl tracking-wide '>{name}</p>
            </Link>
        </div>
    )
}
