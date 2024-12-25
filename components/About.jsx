import React from 'react'
import Image from 'next/image'
import Section from './Global/Section'

const About = () => {
    const titleStyle = "text-xl py-5 w-fit text-green-400 font-bold"
    return (
        <div className='bg-mine-950 relative'>
            <Section title={'about'}>
                <div className="h-fit py-5" id="about">
                    <section className='mt-16 py-5 text-justify'>
                        <p>
                            Hello! My name is Niño Jherico Cocosa, a Web developer based in Paharang, Batangas City, Philippines. My path in web development has been driven by a passion for solving problems. I love diving into challenges and finding creative solutions. I&apos;m all about keeping up with the latest in tech, and I&apos;m eager to keep learning and growing in this ever-changing field.
                        </p>
                    </section>

                    <section className='lg:grid lg:grid-cols-[1fr_1fr] flex flex-col gap-5'>
                        <section className='flex flex-col gap-2 '>
                            <p className={titleStyle}>Soft Skill</p>
                            <p className=' text-justify'>
                                Throughout my career, university studies, and personal projects, I have acquired a diverse set of skills in programming languages, development methodologies, frameworks, and platforms. These experiences have significantly enhanced my capabilities. Here is a list of the skills I have developed
                            </p>
                            <div className='pl-10 text-justify'>
                                <li className='list-disc'>I know how to communicate with others in a way that&apos;s easy to understand and respond to. I make sure to listen and show that I value their ideas, jokes, or concerns. This helps us work together better and solve problems as a team.</li>
                                <li className='list-disc'>As a software developer, I&apos;ve consistently demonstrated strong teamwork skills throughout my career. I actively engage with team members, share insights, and collaborate effectively to achieve project goals. My ability to communicate technical concepts clearly and work cohesively within a team environment has been instrumental in delivering successful projects.</li>
                                <li className='list-disc'>I&apos;m always hungry for new knowledge and experiences. Whether it&apos;s diving into a new programming language, exploring the latest web development trends, or tackling unfamiliar challenges, I approach every opportunity with enthusiasm and curiosity. My eagerness to learn not only keeps me adaptable in the ever-evolving field of web development but also fuels my passion for growth and improvement.</li>
                            </div>
                        </section>

                        <section>
                            <p className={titleStyle}>Tech Stacks</p>
                            <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-5  m-auto'>
                                <div className='p-2 w-full h-[150px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                    <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                    <div>nextjs</div>
                                </div>
                                <div className='p-2 w-full h-[150px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                    <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                    <div>nextjs</div>
                                </div>
                                <div className='p-2 w-full h-[150px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                    <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                    <div>nextjs</div>
                                </div>
                                <div className='p-2 w-full h-[150px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                    <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                    <div>nextjs</div>
                                </div>
                                <div className='p-2 w-full h-[150px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                    <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                    <div>nextjs</div>
                                </div>
                            </div>

                        </section>
                    </section>

                    <section>
                        <p className={titleStyle}>Experience</p>
                        <p className='pl-10'>
                            I have hands-on experience in developing web applications using various programming languages and frameworks. My expertise includes front-end and back-end development including server management, and ensuring scalability and performance optimization.
                        </p>
                    </section>

                    <section>
                        <p className={titleStyle}>Certifications/Badges</p>
                        lorem900
                    </section>

                </div>
            </Section>


        </div>
    )
}

export default About