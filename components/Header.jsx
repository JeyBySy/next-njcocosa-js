import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className="container relative m-auto px-4 sm:px-6 lg:px-8">
            {/* Background Layer */}
            <div className="absolute inset-0 w-full h-full z-0">
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10rem] sm:text-[20rem] lg:text-[25rem] font-black text-mine-100 tracking-tighter border-[5px] border-double opacity-20">
                    NJVC
                </p>
                <div className="absolute w-[50px] sm:w-[150px] h-full bottom-0 left-0 font-black bg-green-700"></div>
            </div>

            {/* Foreground Layer */}
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-start">
                {/* Text Section */}
                <div className="w-full lg:w-[60%] flex flex-col justify-center h-[70vh] lg:h-[80vh] px-4 sm:px-10  py-6">
                    <p className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-start flex flex-col gap-2 bg-mine-900 p-5 shadow-md rounded">
                        <span className="text-[1rem] sm:text-[1.2rem] text-green-50 font-black">
                            Hello, I&apos;m
                        </span>
                        <span className="text-[2rem] sm:text-[3rem] lg:text-[4rem] text-green-400 font-black tracking-tight drop-shadow-xl">
                            Nino Jherico Cocosa
                        </span>
                        <span className="text-[1rem] sm:text-[1.2rem]">
                            console.log(&quot;<span className="text-green-500">Web Developer</span>&quot;)
                        </span>
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative flex justify-center items-end lg:items-center">
                    {/* <Image
                        alt="Jherico"
                        src="/img/jherico.png"
                        width={500}
                        height={600}
                        priority
                        quality={100}
                        className="w-[200px] sm:w-[300px] lg:w-[400px] xl:w-[500px] object-contain grayscale-[80%] brightness-110"
                    /> */}
                </div>
            </div>

            {/* Social Links */}
            <div className="absolute bottom-4 right-4 sm:right-8 z-10 bg-mine-900 py-4 px-6 rounded-lg">
                <div className="flex flex-row lg:flex-col gap-4 border-l-[3px] px-2 border-green-400">
                    <a href="https://github.com/JeyBySy" target="_blank" rel="noopener noreferrer">
                        <Image alt="github" src="/img/github.svg" width={30} height={30} className="w-[24px] sm:w-[30px]" />
                    </a>
                    <a href="https://www.linkedin.com/in/jhericococosa/" target="_blank" rel="noopener noreferrer">
                        <Image alt="linkedin" src="/img/linkedin.svg" width={30} height={30} className="w-[24px] sm:w-[30px]" />
                    </a>
                    <a href="https://www.facebook.com/njcocosa" target="_blank" rel="noopener noreferrer">
                        <Image alt="facebook" src="/img/fb.svg" width={30} height={30} className="w-[24px] sm:w-[30px]" />
                    </a>
                    <Image alt="thread" src="/img/thread.svg" width={30} height={30} className="w-[24px] sm:w-[30px]" />
                </div>
            </div>
        </div>
    );
};

export default Header;
