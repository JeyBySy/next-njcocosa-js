"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navBtnStyles = 'px-5 py-3';

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className='w-full min-h-[60px] shadow-md py-4 bg-mine-900'>
            <div className='flex items-center justify-between px-5 md:px-10'>
                {/* Logo Section */}
                <div className='text-lg font-bold'>NJVC</div>

                {/* Desktop Links */}
                <div className='hidden md:flex justify-center text-center text-sm gap-10'>
                    <Link href="#about">
                        <button className={navBtnStyles}>About</button>
                    </Link>
                    <Link href="#projects">
                        <button className={navBtnStyles}>Projects</button>
                    </Link>
                    <Link href="#contact">
                        <button className={navBtnStyles}>Contact</button>
                    </Link>
                </div>

                {/* Resume Button */}
                <div className='hidden md:flex justify-end'>
                    <button
                        onClick={() => window.open('/files/Cocosa_Niño_Jherico_resume.pdf', '_blank')}
                        className='bg-white text-gray-700 px-4 py-2 rounded-full text-xs flex gap-2 items-center'>
                        Resume <Download width={15} height={15} />
                    </button>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu} aria-label='Toggle menu'>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden bg-mine-800 flex flex-col items-center gap-4 py-4'>
                    <Link href="#about" onClick={toggleMenu}>
                        <button className={navBtnStyles}>About</button>
                    </Link>
                    <Link href="#projects" onClick={toggleMenu}>
                        <button className={navBtnStyles}>Projects</button>
                    </Link>
                    <Link href="#contact" onClick={toggleMenu}>
                        <button className={navBtnStyles}>Contact</button>
                    </Link>
                    <button
                        onClick={() => window.open('/files/Cocosa_Niño_Jherico_resume.pdf', '_blank')}
                        className='bg-white text-gray-700 px-4 py-2 rounded-full text-xs flex gap-2 items-center'>
                        Resume <Download width={15} height={15} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
