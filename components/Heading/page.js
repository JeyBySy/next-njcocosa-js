import React from 'react';
import styles from './Heading.module.css';
import { HeadingMenus } from './HeadingMenus';
import Image from 'next/image'

export const Heading = () => {
    const menus = [
        {
            name: 'projects',
            icon: "/img/file.png",
        },
        {
            name: 'About Me',
            icon: "/img/profile.png",
        },
        {
            name: 'Resume',
            icon: "/img/settings.png",
        },
        {
            name: 'LinkedIn',
            icon: "/img/settings.png",
        },
    ]

    return (
        <div className='fixed m-auto align-center text-white lg:w-[50%] md:w-[60%] sm:w-100 '>
            <Image src="/d_well_.JPG" width={100} height={100} alt="Picture of the author" />
            <p className='text-center font-black lg:text-[90px] sm:text-[100px] bg-clip-text text-transparent bg-gradient-to-r from-[#02886f] to-[#9BECE1]'>
                {/* Hello! I&apos;m  <br />*/}

                Niño Jherico Cocosa
            </p>
            <div className="flex justify-center gap-2 capitalize my-10">
                {menus.map((menu, index) => (
                    <HeadingMenus key={index} name={menu.name} />
                ))}

            </div>
            <p className=' text-white m-auto w-fit rounded-full px-3 py-1  border'>
                Software developer
            </p>
        </div>
    );
};
