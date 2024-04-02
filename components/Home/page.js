"use client"
import React, { useEffect, useState } from 'react';
import './Home.module.css';
import { HomeMenus } from './HomeMenus';
import Image from 'next/image'
import { menus } from '../../utils/menus'

export const Homepage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1020);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const calculateTransformStyle = (index) => {
        if (isMobile) {
            return {};
        } else {
            const distanceFromMiddle = Math.abs(index - (menus.length - 1) / 2);
            const rotationAngle = distanceFromMiddle === 0 ? 0 : (distanceFromMiddle * 4);
            const translationFactor = distanceFromMiddle * 5;
            return {
                transform: `translateY(${index === 0 || index === menus.length - 1 ? translationFactor + 10 : translationFactor}px) rotate(${index < (menus.length - 1) / 2 ? -rotationAngle : rotationAngle}deg)`
            };
        }
    };

    return (
        <div className='container w-[90%] m-auto align-center text-white ' >
            {/* <Image className='w-100 z-0' src="/img/bg.jpg" alt="Jherico Cocosa" layout='fill' objectFit='cover' quality={100} /> */}
            <p className='text-center font-medium mb-16  2xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[2rem] '>
                Hey there! I&apos;m <span className='highlight'>Niño Jherico Cocosa</span>, aspiring Software developer.
            </p>
            <div className="flex justify-center gap-7 capitalize m-auto flex-wrap sm:w-[100%]">
                {menus.map((menu, index) => {
                    return (
                        <div key={index} className='z-0 text-[#696b70]' style={calculateTransformStyle(index)} >
                            <HomeMenus name={menu.name} icon={menu.icon} link={menu.link} isLink={menu.isLink} />
                        </div>
                    );
                })}
            </div>
            <p className='cursor-default text-white mx-auto w-fit rounded-full p-3 m-20  border text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                Software developer
            </p>
        </div >
    );
};
