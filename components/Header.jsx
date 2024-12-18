import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <div className='container m-auto relative'>
                <div className='w-full h-[90vh] 2xl:h-[880px] flex items-center '>
                    <p className='text-[2rem] border-l-[2px] flex flex-col p-5 rounded-xl'>
                        Hello, I&apos;m
                        <span className='text-[2.5em] text-green-500 font-black'>Nino Jherico Cocosa</span>
                        <span className='text-[1rem]'>
                            console.log("<span className='text-green-500'>Web Developer</span>")
                        </span>
                    </p>
                </div>
                <div className='absolute bottom-[2rem] right-[1rem] flex flex-col gap-8 border-r-2 p-5 rounded-full shadow-md border-green-800'>
                    <a href="https://github.com/JeyBySy" target='_blank'>
                        <Image alt='github' src={'/img/github.svg'} width={18} height={18} className='w-[35px]' />
                    </a>
                    <a href="https://www.linkedin.com/in/jhericococosa/" target='_blank'>
                        <Image alt='linkdin' src={'/img/linkedin.svg'} width={18} height={18} className='w-[35px]' />
                    </a>
                    <a href="https://www.facebook.com/njcocosa" target='_blank'>
                        <Image alt='linkdin' src={'/img/fb.svg'} width={18} height={18} className='w-[35px]' />
                    </a>
                    <Image alt='thread' src={'/img/thread.svg'} width={18} height={18} className='w-[35px] ' />
                </div>
            </div >
        </div>
    )
}

export default Header