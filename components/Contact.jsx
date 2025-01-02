import React from 'react'
import Section from './Global/Section';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <div className='bg-mine-950 relative'>
            <Section title={'contacts'} id="contact">
                <div className="h-fit">
                    <div className='flex flex-col items-start gap-2 p-10'>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-green-500 font-bold '>Ready to start a conversation?</h1>
                        <h2 className='text-lg sm:text-xl lg:text-2xl leading-10 text-center text-mine-300 italic'>Get in touch with me through these contacts:</h2>
                        <div className=''>
                            <span className='font-bold text-mine-300'>Mail:</span> <a target='_blank' className='text-blue-500 hover:underline' href='mailto:njcocosa@gmail.com'>njcocosa@gmail.com</a>
                        </div>
                        <div className=''>
                            <span className='font-bold text-mine-300'>LinkedIn:</span> <a target='_blank' className='text-blue-500 hover:underline' href='https://www.linkedin.com/in/jhericococosa/'>jhericococosa (Niño Jherico Cocosa)</a>
                        </div>
                        <div className='  '>
                            <span className='font-bold text-mine-300'>Github:</span> <a target='_blank' className='text-blue-500 hover:underline' href='https://github.com/JeyBySy'>JeyBySy (Niño Jherico Cocosa)</a>
                        </div>
                        <div className=' '>
                            <span className='font-bold text-mine-300'>Mobile:</span> +639611975517
                        </div>
                        <div className=''>
                            <div className="flex flex-row gap-2 border-green-400 items-center" >
                                <span className='font-bold text-mine-300'>Socials:</span>
                                <a href="https://www.facebook.com/njcocosa" target="_blank" rel="noopener noreferrer">
                                    <Facebook />
                                </a>
                                <a href="https://www.instagram.com/j_h_e_r_i_c_o/" target="_blank" rel="noopener noreferrer">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Contact

