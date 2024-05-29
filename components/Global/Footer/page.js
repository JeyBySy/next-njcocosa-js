import React from 'react';

const Footer = () => {
    return (
        <footer className='flex justify-center p-4 bg-gray-900'>
            <p className='cursor-default text-white rounded-full p-2 border sm:text-[12px] md:text-base lg:text-lg xl:text-sm'>
                Made with ❤️ by <span className='text-green-300 font-bold'>Niño Jherico Cocosa</span> using <a className='text-blue-500 hover:underline' href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>
            </p>
        </footer>
    );
}

export default Footer;
