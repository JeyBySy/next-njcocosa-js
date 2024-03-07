import React from 'react'
import { menus } from '../../utils/menus'
import Image from 'next/image'

const Nav = () => {
    return (
        <div className='capitalize text-white drop-shadow-sm bg-slate-500 p-4 flex justify-end gap-3 content-between rounded-full lg:w-6/12 lg:mx-auto lg:my-3 '>
            {menus.map((menu, index) => {
                return (
                    <div key={index} className=''>
                        {menu.name}
                    </div>
                );
            })}
        </div>
    )
}

export default Nav