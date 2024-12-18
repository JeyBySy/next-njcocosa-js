import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';

const Navbar = () => {
    const navBtnStyles = 'px-5 py-3'
    return (
        <div className=' w-full min-h-[60px] grid grid-cols-[1fr_1fr_1fr] items-center place-items-center shadow-md py-4'>
            <div className='w-full ml-5'>Logo</div>
            <div className='w-full flex justify-center text-center text-sm gap-10'>
                <Link href={"#about"}>
                    <button className={navBtnStyles}>About</button>
                </Link>
                <Link href={"#projects"}>
                    <button className={navBtnStyles}>Projects</button>
                </Link>
                <Link href={"#contact"}>
                    <button className={navBtnStyles}>Contact</button>
                </Link>
            </div>
            <div className='w-full flex justify-end mr-5'>
                <button className='bg-white text-gray-700 px-4 py-2 rounded-full text-xs font-black flex gap-2 items-center'>
                    Resume<Download width={15} height={15} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;


