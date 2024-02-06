import React from 'react'
import Link from 'next/link'

export const HeadingMenus = ({ name }) => {
    return (
        <div className={`flex items-center cursor-pointer p-5 border-4 rounded-xl`} >
            {name}
        </div >
    )
}
