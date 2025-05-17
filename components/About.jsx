"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Section from './Global/Section';
import { Building2 } from 'lucide-react';
import { technologies } from "../util/TechStack";
import { experience } from "../util/Experience";
import { certificates } from "../util/Certificates";
import { motion } from "framer-motion";

const About = () => {
    const titleStyle = "text-2xl py-5 w-fit text-green-400 font-bold text-center lg:text-start w-full";
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openFullScreen = (image) => {
        setSelectedImage(image);
        setIsFullScreen(true);
    };

    const closeFullScreen = () => {
        setSelectedImage(null);
        setIsFullScreen(false);
    };
    useEffect(() => {
        if (isFullScreen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = ""; // Reset overflow
        }

        // Cleanup function to reset overflow when component unmounts or popup closes
        return () => {
            document.body.style.overflow = "";
        };
    }, [isFullScreen]);
    return (
        <div className='bg-mine-950 relative'>
            <Section title={'about'} id="about">
                <div className="h-fit">
                    {/* Introduction */}
                    <section className='text-justify px-4 sm:px-6 flex flex-col gap-2'>
                        <div className={`text-base text-mine-300`}>
                            Hello! My name is <span className='text-green-400'>Niño Jherico Cocosa,</span> a Web developer based in Paharang, Batangas City, Philippines. My path in web development has been driven by a passion for solving problems. I love diving into challenges and finding creative solutions. I&apos;m all about keeping up with the latest in tech, and I&apos;m eager to keep learning and growing in this ever-changing field.
                        </div>
                        <pre className="tracking leading-[2] font-mono bg-slate-800 w-full p-4 rounded flex flex-col overflow-x-auto whitespace-pre-wrap">
                            <span>const <span className="text-green-200">NiñoJhericoVillenaCocosa</span> = &#123;</span>
                            <p><span className="lg:ml-5 text-green-500">Degree</span>&#58;&quot;Bachelor&apos;s Degree in Information Technology&quot;,</p>
                            <p><span className="lg:ml-5 text-green-500">School</span>&#58;&quot;Batangas State University - The National Engineering University&quot;,</p>
                            <p><span className="lg:ml-5 text-green-500">Address</span>&#58;&quot;Paharang, Batangas City, Batangas, PH&quot;,</p>
                            <p><span className="lg:ml-5 text-green-500">Nationality</span>&#58;&quot;Filipino&quot;,</p>
                            <p><span className="lg:ml-5 text-green-500">Email</span>&#58;&quot;njcocosa@gmail.com&quot;,</p>
                            <p><span className="lg:ml-5 text-green-500">YearsOfExperience</span>&#58;&quot;2&quot;</p>
                            &#125;
                        </pre>
                    </section>
                    {/* Tech Stacks */}
                    <section>
                        <p className={titleStyle}>&lt;TechStacks&gt;</p>
                        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-[90%] lg:w-[90%] m-auto'>
                            {technologies.filter(item => !item.hide).map((item, index) => (
                                <div key={index} className='py-5 w-full bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5 shadow-md'>
                                    <Image alt={item.lang} src={item.icon} width={900} height={900} className='w-[50px] sm:w-[80px]' />
                                    <p className='text-sm sm:text-base font-medium'>{item.lang}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className='mt-8'>
                        <p className={titleStyle}>&lt;Experience&gt;</p>
                        <p className='px-4 sm:px-6 text-mine-300'>
                            I have hands-on experience in developing web applications using various programming languages and frameworks. My expertise includes front-end and back-end development including server management.
                        </p>
                        <div className='flex flex-col w-full lg:w-[70%] m-auto gap-10 mt-5 px-4 sm:px-6'>
                            {experience?.map((item, index) => (
                                <div key={index} className='grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr] gap-5 w-full '>
                                    <span className='border-r-4 border-green-600 px-2 sm:px-5'>{item.year}</span>
                                    <div className='text-mine-300 px-2 sm:px-5 text-justify flex flex-col  py-5'>
                                        <span className='text-lg sm:text-3xl text-mine-100 font-semibold'>
                                            {item.position}
                                        </span>
                                        <span className='text-mine-300 flex gap-2 items-center'>
                                            <Building2 width={15} height={15} /> {item.company}
                                        </span>
                                        <div className="text-sm sm:text-base indent-6 py-5 space-y-5">
                                            {item.responsibilities.map((resp, idx) => (
                                                <p key={idx}>{resp}</p>
                                            ))}
                                        </div>

                                        <div className='flex gap-2 flex-wrap'>
                                            {item.techStacks.map((tech, techIndex) => {
                                                const techInfo = technologies.find(t => t.lang === tech);
                                                return (
                                                    <div key={techIndex} className='relative group'>
                                                        {techInfo && (
                                                            <div className='p-3 bg-mine-300 rounded shadow-md cursor-pointer'>
                                                                <Image
                                                                    src={techInfo.icon}
                                                                    alt={techInfo.lang}
                                                                    width={900}
                                                                    height={900}
                                                                    className='w-[24px] sm:w-[28px] h-[24px] sm:h-[28px]'
                                                                />
                                                            </div>
                                                        )}
                                                        {techInfo && (
                                                            <span className='absolute top-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-2px] transition duration-200 text-xs sm:text-sm text-white bg-mine-700 rounded px-2 py-1 shadow-lg'>
                                                                {tech}
                                                            </span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certifications */}
                    <section className='mt-8'>
                        <p className={titleStyle}>&lt;Certifications&gt;</p>
                        <div className='grid grid-cols-1 2xl:grid-cols-2  gap-5 w-full h-fit px-4 sm:px-6'>
                            {certificates?.map((item, index) => (
                                <div key={index} className='p-2 grid grid-cols-[1fr_auto] bg-mine-700 rounded shadow-md lg:min-h-[200px]'>
                                    <div className='w-full text-sm sm:text-lg flex flex-col p-4 gap-3 relative'>
                                        <span className='text-xl sm:text-3xl text-mine-50'>{item.name}</span>
                                        <span className='text-sm sm:text-lg text-mine-200'>{item.description}</span>
                                        <span className='lg:absolute bottom-0 mb-4 text-xs sm:text-sm text-mine-300'>{item.year}</span>
                                    </div>
                                    <div className='w-full flex items-center justify-center'>
                                        <Image alt={item.name} src={item.icon} width={1000} height={1000} className='max-w-[150px] sm:max-w-[200px]' quality={100} onClick={() => openFullScreen(item.icon)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </Section>
            {isFullScreen && selectedImage && (
                <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]  px-1' onClick={closeFullScreen} >
                    <div className='relative' onClick={(e) => e.stopPropagation()} >
                        <Image
                            alt='Full Screen'
                            src={selectedImage}
                            width={700}
                            height={700}
                            className='max-w-full max-h-full object-contain'
                            quality={100}
                        />
                        <button
                            className='absolute top-5 right-5 bg-white text-black px-4 py-2 rounded shadow-md hover:bg-gray-200'
                            onClick={closeFullScreen}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
