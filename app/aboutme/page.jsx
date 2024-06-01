import React from 'react';
import Image from 'next/image'
import LoadTitle from '@/components/Global/LoadTitle/page';
import Tabs from '@/components/Aboutme/Tabs/page';
import PersonalInfo from '@/components/Aboutme/PersonalInfo/page';

const AboutMe = () => {

    return (
        <div className='container mx-auto xl:w-[60%] w-[90%]'>
            <div className="flex flex-wrap gap-5">
                <div className='w-full sm:w-[390px] sm:m-auto h-[460px] bg-slate-100 relative overflow-hidden flex-none sm:flex-2'>
                    <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src="/img/d_well.jpeg"
                            alt="Niño Jherico Cocosa"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                        />
                    </div>
                </div>
                <div className='flex-1'>
                    <PersonalInfo />
                </div>
            </div>
            <Tabs />
        </div>

    );
}

export default AboutMe;
