import React from 'react';
import './Home.module.css';
import { HomeMenus } from './HomeMenus';
import Image from 'next/image'
import { menus } from '../../utils/menus'

export const Homepage = () => {

    return (
        <div className='m-auto align-center text-white lg:w-[60%] md:w-[60%] sm:w-100' >
            {/* <Image className='rounded-full m-auto' src="/d_well_.JPG" width={50} height={50} alt="Picture of the author" /> */}
            <p className='text-center font-medium lg:text-[80px] sm:text-[100px] bg-clip-text '>
                Hey there! I&apos;m Niño Jherico Cocosa
            </p>
            <div className="flex justify-center gap-6 capitalize m-10  sm:flex-nowrap">
                {menus.map((menu, index) => {
                    const distanceFromMiddle = Math.abs(index - (menus.length - 1) / 2);
                    const rotationAngle = distanceFromMiddle === 0 ? 0 : (distanceFromMiddle * 4);
                    const translationFactor = distanceFromMiddle * 5;

                    return (
                        <div key={index} className='z-0 text-[#696b70]' style={{ transform: `translateY(${index === 0 || index === menus.length - 1 ? translationFactor + 10 : translationFactor}px) rotate(${index < (menus.length - 1) / 2 ? -rotationAngle : rotationAngle}deg)` }} >
                            <HomeMenus name={menu.name} icon={menu.icon} link={menu.link} isLink={menu.isLink} />
                        </div>
                    );
                })}
            </div>
            <p className='cursor-default text-white mx-auto w-fit rounded-full p-3 m-20  border'>
                Software developer
            </p>

        </div >
    );
};