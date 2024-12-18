import React from 'react'
import Image from 'next/image'

const About = () => {
    const titleStyle = "text-2xl py-5 w-fit text-green-400 font-bold"
    return (
        <div className='bg-mine-950 '>
            <div className='container m-auto relative'>
                <div className="min-h-[90vh] py-5" id="about">
                    <h1 className='text-[3rem] font-black text-green-400'>About</h1>
                    <section className='pl-10 py-5 text-justify'>
                        <p>
                            Hello! My name is Niño Jherico Cocosa, a Web developer based in Paharang, Batangas City, Philippines. My path in web development has been driven by a passion for solving problems. I love diving into challenges and finding creative solutions. I&apos;m all about keeping up with the latest in tech, and I&apos;m eager to keep learning and growing in this ever-changing field.
                        </p>
                    </section>

                    <section>
                        <p className={titleStyle}>Tech Stacks</p>
                        <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-5 2xl:w-[80%] m-auto'>
                            <div className='p-2 w-full h-[200px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                <div>nextjs</div>
                            </div>
                            <div className='p-2 w-full h-[200px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                <div>nextjs</div>
                            </div>
                            <div className='p-2 w-full h-[200px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                <div>nextjs</div>
                            </div>
                            <div className='p-2 w-full h-[200px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                <div>nextjs</div>
                            </div>
                            <div className='p-2 w-full h-[200px] bg-mine-700 rounded-lg flex flex-col items-center justify-center gap-5'>
                                <Image alt='github' src={'/icons/nextjs-original.svg'} width={0} height={0} className='w-[70px]' />
                                <div>nextjs</div>
                            </div>
                        </div>

                    </section>

                    <section>
                        <p className={titleStyle}>Experience</p>
                        <p className='pl-10'>
                            I have hands-on experience in developing web applications using various programming languages and frameworks. My expertise includes front-end and back-end development including server management, and ensuring scalability and performance optimization.
                        </p>
                    </section>

                    <section>
                        <p className={titleStyle}>Certifications/Badges</p>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default About