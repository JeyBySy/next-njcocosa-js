import React from 'react';
import './Heading.module.css';
import { HeadingMenus } from './HeadingMenus';
import Image from 'next/image'

export const Heading = () => {
    const menus = [
        {
            name: 'Resume',
            icon: "/file.svg",
        },
        {
            name: 'About Me',
            icon: "/person.svg",
        },
        {
            name: 'projects',
            icon: "/folder.svg",
        },
        {
            name: 'Reach out',
            icon: "/email.svg",
        },
        {
            name: 'LinkedIn',
            icon: "/linkedin.svg",
        },
    ]

    return (
        <div className='fixed m-auto align-center text-white lg:w-[60%] md:w-[60%] sm:w-100 '>
            <Image className='rounded-full m-auto' src="/d_well_.JPG" width={50} height={50} alt="Picture of the author" />
            <p className='text-center font-medium lg:text-[80px] sm:text-[100px] bg-clip-text  bg-gradient-to-r from-[#02886f] to-[#9BECE1]'>
                I&apos;m Niño Jherico Cocosa
            </p>
            <div className="flex justify-center gap-6 capitalize m-10">
                {menus.map((menu, index) => {
                    const distanceFromMiddle = Math.abs(index - (menus.length - 1) / 2);
                    const rotationAngle = distanceFromMiddle === 0 ? 0 : (distanceFromMiddle * 4);
                    const translationFactor = distanceFromMiddle * 5;

                    return (
                        <div key={index} style={{ transform: `translateY(${index === 0 || index === menus.length - 1 ? translationFactor + 10 : translationFactor}px) rotate(${index < (menus.length - 1) / 2 ? -rotationAngle : rotationAngle}deg)` }} className='z-0'>
                            <HeadingMenus name={menu.name} icon={menu.icon} />
                        </div>
                    );
                })}
            </div>
            <p className='cursor-default text-white mx-auto w-fit rounded-full p-3 m-20  border'>
                Software developer
            </p>
        </div>
    );
};
