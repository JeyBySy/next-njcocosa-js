"use client"
import React, { useEffect, useState } from 'react';
import { HomeMenus } from './HomeMenus';
import Image from 'next/image'
import { menus } from '../../utils/menus'
import Footer from '../Global/Footer/page';

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
        <div className='container w-[70%] m-auto align-center text-white ' >
            <p className='text-center text-green-50 font-medium mb-16  2xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[2rem] '>
                Hey there! I&apos;m <span className='text-green-500'>Niño Jherico Cocosa</span> Web  developer.
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
            <Footer />
        </div >
    );
};
