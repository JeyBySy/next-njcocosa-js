import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const HomeMenus = ({ name, icon, link, isLink }) => {
    const iconClass = `flex items-center cursor-pointer p-5 bg-[#2b2c30] rounded-3xl border-4 border-transparent hover:border-white hover:bg-[#696b70]`;

    return (
        <div className={`hover:scale-110 ease-out duration-300 hover:text-white hover:font-semibold`}>
            {isLink ? (
                <a target='_blank' href={link} draggable='false' >
                    <div className={iconClass} draggable='false'>
                        <Image src={icon} width={35} height={35} alt={name} priority={false} draggable='false' />
                    </div>
                    <div className={`text-center mt-1 rounded-xl tracking-wide`}>
                        <div className={`justify-evenly flex flex-wrap img`}>
                            {name}
                            <span>
                                <Image src={'/img/link.png'} width={15} height={0} alt='link' style={{ width: 'auto', height: 'auto' }} />
                            </span>
                        </div>
                    </div>
                </a>
            ) : (
                <Link href={link} draggable='false'>
                    <div className={iconClass} draggable='false' >
                        <Image src={icon} width={35} height={35} alt={name} draggable='false' />
                    </div>
                    <div className={`text-center mt-1 rounded-xl tracking-wide`}>
                        <div className={`justify-evenly flex flex-wrap`}>
                            {name}
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};
