import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="container relative m-auto">
            {/* Background Layer */}
            <div className=" absolute m-auto w-full h-full z-0">
                <p className="absolute top-44 -right-14 transform -translate-y-1/2 text-[860px] font-black text-mine-400 tracking-tighter border-[5px] border-double">
                    &or;
                </p>
                <div className="absolute w-[200px] h-full bottom-0 left-0 font-black bg-mine-400 tracking-tighter"></div>
            </div>


            {/* Foreground Layer */}
            <div className="container m-auto relative z-10">
                <div className="pl-10 w-full h-[80vh] 2xl:h-[880px] flex items-center z-10 relative">
                    <p className="text-[2rem] text-start flex flex-col p-5 w-full bg-mine-900">
                        <span className="text-[1em] text-green-50 font-black">Hello, I&apos;m</span>
                        <span className="text-[2.5em] text-green-400 font-black tracking-tight w-full drop-shadow-xl">
                            Nino Jherico Cocosa
                        </span>
                        <span className="text-[1rem]">
                            console.log(&quot;<span className="text-green-500">Web Developer</span>&quot;)
                        </span>
                    </p>
                    {/* Uncomment this if the image is needed */}
                    <div className="absolute w-full bottom-0 right-16 flex justify-end ">
                        {/* <Image
                            alt="Jherico"
                            src="/img/jherico.png"
                            width={500}
                            height={600}
                            priority
                            // style={{
                            //     objectFit: "contain",
                            //     filter: "grayscale(80%) brightness(1.2)", // Make the image black and white
                            // }}
                            quality={100} // Set quality to maximum
                        /> */}
                    </div>
                </div>

                {/* Social Links */}
                <div className="absolute bottom-[2rem] -right-10  z-10 bg-mine-900 py-4 px-6">
                    <div className='flex flex-col gap-5 border-l-[3px] px-2  border-green-400'>
                        <a href="https://github.com/JeyBySy" target="_blank">
                            <Image alt="github" src="/img/github.svg" width={0} height={0} className="w-[30px]" />
                        </a>
                        <a href="https://www.linkedin.com/in/jhericococosa/" target="_blank">
                            <Image alt="linkedin" src="/img/linkedin.svg" width={0} height={0} className="w-[30px]" />
                        </a>
                        <a href="https://www.facebook.com/njcocosa" target="_blank">
                            <Image alt="facebook" src="/img/fb.svg" width={0} height={0} className="w-[30px]" />
                        </a>
                        <Image alt="thread" src="/img/thread.svg" width={0} height={0} className="w-[30px]" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header