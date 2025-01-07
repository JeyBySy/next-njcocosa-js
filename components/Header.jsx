import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="container relative m-auto px-4 mt-4 sm:px-6 lg:px-8 bg-mine-800">
            {/* Background Layer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1, delay: 0 }}
                className="flex items-center justify-center inset-0 w-full h-full z-0">
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10rem] sm:text-[20rem] lg:text-[25rem] font-black text-mine-600 tracking-tighter border-[5px] border-double opacity-20 p-2">
                    NJVC
                </p>
                <motion.div
                    initial={{ left: "50%", width: "0%" }}
                    animate={{ left: "0%", width: "10%" }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 0.2,
                    }}
                    className="absolute h-full bottom-0 bg-green-700"
                ></motion.div>
                <motion.div
                    initial={{ right: "50%", width: "0%" }}
                    animate={{ right: "0%", width: "10%" }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 0.2,
                    }}
                    className="absolute h-full bottom-0 bg-green-700"
                ></motion.div>
            </motion.div>

            {/* Foreground Layer */}
            <div className="relative z-0 flex flex-col-reverse lg:flex-row items-center lg:items-start h-[750px]">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="w-full lg:w-[70%] flex flex-col justify-end  lg:px-4 pb-6 lg:py-6 lg:h-full">
                    <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-start flex flex-col bg-mine-900 p-5 shadow-md rounded">
                        <span className="text-[1rem] sm:text-[1.2rem] text-green-50 font-black">
                            Hello, I&apos;m
                        </span>
                        <span className="text-[2rem] lg:text-[4.3rem] text-green-400 font-black tracking-tighter drop-shadow-2xl">
                            Niño Jherico Cocosa
                        </span>
                        <div className='grid lg:grid-cols-[1fr_1fr] '>
                            <div className="flex items-center justify-start ">
                                <p className='text-[1.2rem] text-green-50'>Web Developer</p>
                            </div>
                            <div className="flex flex-row gap-2 px-2 border-green-400 items-center justify-end lg:hidden" >
                                <a href="https://github.com/JeyBySy" target="_blank" rel="noopener noreferrer">
                                    <Image alt="github" src="/img/github.svg" width={30} height={30} className="w-[24px] sm:w-[25px]" />
                                </a>
                                <a href="https://www.linkedin.com/in/jhericococosa/" target="_blank" rel="noopener noreferrer">
                                    <Image alt="linkedin" src="/img/linkedin.svg" width={30} height={30} className="w-[24px] sm:w-[25px]" />
                                </a>
                                <a href="https://www.facebook.com/njcocosa" target="_blank" rel="noopener noreferrer">
                                    <Image alt="facebook" src="/img/fb.svg" width={30} height={30} className="w-[24px] sm:w-[25px]" />
                                </a>
                                {/* <Image alt="thread" src="/img/thread.svg" width={30} height={30} className="w-[24px] sm:w-[25px]" /> */}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="w-full lg:w-1/2 relative flex justify-center items-center"
                >
                    <Image
                        alt="Jherico"
                        src="/img/jherico.png"
                        width={1000}
                        height={1000}
                        priority
                        quality={100}
                        className="w-[80%] sm:w-[300px] lg:w-[400px] xl:w-[500px] object-contain grayscale-[80%] brightness-110  "
                    />
                </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="hidden absolute top-4 right-4 sm:right-8 z-10 bg-mine-900 py-5 px-2 rounded shadow-lg lg:block ">
                <div className="flex flex-row lg:flex-col gap-2 ">
                    <a href="https://github.com/JeyBySy" target="_blank" rel="noopener noreferrer" className='p-2'>
                        <Image alt="github" src="/img/github.svg" width={30} height={30} className="w-[24px] sm:w-[30px]" />
                    </a>
                    <a href="https://www.linkedin.com/in/jhericococosa/" target="_blank" rel="noopener noreferrer" className='p-2'>
                        <Image alt="linkedin" src="/img/linkedin.svg" width={30} height={30} className="w-[24px] sm:w-[30px]" />
                    </a>
                    <a href="https://www.facebook.com/njcocosa" target="_blank" rel="noopener noreferrer" className='p-2'>
                        <Image alt="facebook" src="/img/fb.svg" width={30} height={30} className="w-[24px] sm:w-[30px]" />
                    </a>
                    {/* <Image alt="thread" src="/img/thread.svg" width={30} height={30} className="w-[24px] sm:w-[30px]" /> */}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Header;
