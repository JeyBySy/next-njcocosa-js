import React from 'react'
import Image from 'next/image'
import { technologies } from "../../util/TechStack";
import { Link } from "lucide-react"

const ProjectCard = ({ key, title, description, techStack, github_url, demo_url }) => {
    return (
        <div key={key} className='w-full p-4 bg-mine-700 shadow-md flex flex-col rounded'>
            <p className='text-2xl font-black italic'>
                {title}
            </p>
            <div className='text-sm text-mine-400 font-medium py-2 '>
                <p className='text-mine-100 text-sm bg-mine-500 p-2 rounded shadow-sm'> {/* min-h-[90px] */}
                    {description}
                </p>
            </div>
            {/* <div className='w-full flex items-center justify-center bg-mine-900 my-2'>
                <Image alt={'dsas'} src={"/img/screenshot.png"} width={1000} height={1000} className='w-[80%] h-[100%] m-auto' quality={100} />
            </div> */}
            <div className='py-1'>
                <div className='text-base text-mine-400 flex gap-1 items-center'>
                    <p className='text-sm'>Demo: </p>
                    {demo_url ? (
                        <span className='text-base text-mine-50'>
                            <a href={`https://${demo_url}`} target="_blank" rel="noopener noreferrer" className='flex flex-row underline gap-1'>
                                <p className='text-green-400'>
                                    {demo_url}
                                </p>
                                <sub>
                                    <Link width={15} height={15} />
                                </sub>
                            </a>
                        </span>
                    ) : <p className='text-sm font-bold text-red-400'>N/A</p>}
                </div>
            </div>
            <div className='py-1'>
                <div className='text-base text-mine-400 flex gap-1'>
                    <p className='text-sm'>Github: </p>
                    <div className='text-sm text-mine-50 flex gap-1 items-center'>
                        <a href={github_url} target="_blank" rel="noopener noreferrer" className='flex flex-row underline gap-1'>
                            <p className='text-green-400'>
                                {title}
                            </p>
                            <sub><Link width={15} height={15} /></sub>
                        </a>
                    </div>
                </div>
            </div>
            <div className='py-1'>
                <div className='text-base text-mine-400'>
                    TechStack:
                    <div className='text-base text-mine-50'>
                        {techStack && techStack.length > 0 ? (
                            <div className='flex flex-row flex-wrap gap-2'>
                                {techStack.map((tech, index) => {
                                    // Find the corresponding icon for the technology (case-insensitive comparison)
                                    const techInfo = technologies.find(t => t.lang.toLowerCase() === tech.toLowerCase());
                                    return techInfo ? (
                                        <div key={index} className='relative group'>
                                            <div className='flex items-center p-2 bg-mine-400 rounded shadow-md'>
                                                <Image
                                                    alt={tech}
                                                    src={techInfo.icon}
                                                    width={20}
                                                    height={20}
                                                />
                                                {/* <p className="text-mine-50">{tech}</p> */}
                                            </div>
                                            <span className='absolute top-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-2px] transition duration-200 text-xs sm:text-sm text-white bg-mine-600 rounded px-2 py-1 shadow-lg'>
                                                {tech}
                                            </span>
                                        </div>
                                    ) : (
                                        <p key={index} className="text-mine-50">{tech}</p>
                                    );
                                })}
                            </div>
                        ) : (
                            " No tech stack available"
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard