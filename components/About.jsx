import React from 'react'
import Image from 'next/image'
import Section from './Global/Section'
import { technologies } from "../util/TechStack"
import { experience } from "../util/Experience"

const About = () => {
    const titleStyle = "text-xl py-5 w-fit text-green-400 font-bold"
    return (
        <div className='bg-mine-950 relative'>
            <Section title={'about'}>
                <div className="h-fit py-5" id="about">
                    <section className='mt-16 py-5 text-justify'>
                        <p className='text-xl indent-8'>
                            Hello! My name is Niño Jherico Cocosa, a Web developer based in Paharang, Batangas City, Philippines. My path in web development has been driven by a passion for solving problems. I love diving into challenges and finding creative solutions. I&apos;m all about keeping up with the latest in tech, and I&apos;m eager to keep learning and growing in this ever-changing field.
                        </p>
                    </section>
                    <section>
                        <p className={titleStyle}>&lt;TechStacks&gt;</p>
                        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-3 w-full lg:w-[90%] m-auto'>
                            {technologies.filter(item => !item.hide).map((item, index) => (
                                <div key={index} className='p-2 w-full h-[230px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5 shadow-md'>
                                    <Image alt={item.lang} src={item.icon} width={0} height={0} className='w-[80px]' />
                                    <p className='text-lg font-black'>{item.lang}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <p className={titleStyle}>&lt;Experience&gt;</p>
                        <p className='indent-8'>
                            I have hands-on experience in developing web applications using various programming languages and frameworks. My expertise includes front-end and back-end development including server management.
                        </p>
                        <div className='flex flex-col w-full lg:w-[70%] m-auto gap-10 mt-5'>
                            {experience?.map((item, index) => (
                                <div key={index} className='grid grid-cols-[auto_1fr] gap-5 w-full '>
                                    <span className='border-r-2 border-green-600 px-5'>{item.year}</span>
                                    <div className='text-mine-300 px-5 text-justify flex flex-col gap-5 py-5'>
                                        <span className='text-2xl text-mine-100'>
                                            {item.position}
                                        </span>
                                        <span>
                                            {item.company}
                                        </span>
                                        <p className='text-base indent-6 '>
                                            {item.responsibilities}
                                        </p>
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
                                                                    width={0}
                                                                    height={0}
                                                                    className='w-[28px] h-[28px]'
                                                                    quality={100}
                                                                />
                                                            </div>
                                                        )}
                                                        {techInfo && (
                                                            <span className='absolute top-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-2px] transition duration-200 text-sm text-white bg-mine-700 rounded px-2 py-1 shadow-lg'>
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
                    <section>
                        <p className={titleStyle}>&lt;Certifications&gt;</p>
                        lorem900
                    </section>

                </div>
            </Section>


        </div>
    )
}

export default About