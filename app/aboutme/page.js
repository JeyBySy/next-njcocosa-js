

import React from 'react'
import Image from 'next/image';
import LoadTitle from '@/components/Global/LoadTitle/page';

const aboutme = () => {
    return (
        <div className='container m-auto w-[95%]'>
            <div className='text-green-400 text-5xl font-bold  '>
                <LoadTitle title={"About me"} />
            </div>




            <section className="flex flex-wrap gap-2">
                <div className=' w-[300px] h-[300px] bg-slate-100   '>
                    asdasds
                </div>
                <div className="flex text-lg">
                    Hello! My name is Niño Jherico Cocosa, a software developer based in Paharang, Batangas City, Philippines. My path in software development has been driven by a passion of solving problems. I love diving into challenges and finding creative solutions. I&apos;m all about keeping up with the latest in tech, and I&apos;m eager to keep learning and growing in this ever-changing field.
                </div>
                <div className='flex'>
                    <p className='  text-2xl font-bold'>
                        Skills
                    </p>

                    <ul>
                        <li>dsadsadsd</li>
                        <li>dsadsadsd</li>
                        <li>dsadsadsd</li>
                        <li>dsadsadsd</li>
                        <li>dsadsadsd</li>
                        <li>dsadsadsd</li>
                        <li>dsadsadsd</li>
                        <li>dsadsadsd</li>
                        <li>dsadsadsd</li>
                        <li>dsadsadsd</li>
                    </ul>
                </div>
            </section>



        </div>

    )
}

export default aboutme