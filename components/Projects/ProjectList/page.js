"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectLists = ({ projects }) => {
    // const [languages, setLanguages] = useState({});

    // useEffect(() => {
    //     const fetchLanguages = async () => {
    //         try {
    //             const responses = await Promise.all(
    //                 projects.map(project => fetch(project.languages_url))
    //             );
    //             const languageData = await Promise.all(
    //                 responses.map(response => response.json())
    //             );
    //             const languagesObject = Object.assign(
    //                 {},
    //                 ...languageData.map((data, index) => ({
    //                     [projects[index].id]: Object.keys(data)
    //                 }))
    //             );
    //             setLanguages(languagesObject);
    //         } catch (error) {
    //             console.error('Error fetching languages:', error);
    //         }
    //     };

    //     fetchLanguages();
    // }, [projects]);


    // Define variants for animation
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className='w-full flex flex-wrap gap-5 justify-center'>
            <AnimatePresence>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={cardVariants}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 relative"
                    >
                        <div className="w-full h-full min-h-40 shadow-sm shadow-[#9b9b9b] rounded border-l-[5px] border-green-400 bg-gradient-to-r from-green-900 to-green-950 cursor-pointer ">
                            <div className="px-6 py-4 relative z-1">
                                <div className="font-extrabold text-2xl mb-2 text-green-50">{project.name}</div>
                                <p className="text-green-200 text-sm">
                                    {project.description}
                                </p>
                            </div>
                            <div className='flex flex-wrap'>
                                <div className="flex-auto px-6 py-4 text-green-100 text-sm font-extrabold ">
                                    <span className='absolute bottom-0 my-3'>
                                        {project.language}
                                    </span>
                                </div>
                                {project.html_url && (
                                    <div className='flex-auto px-6 py-4 text-green-100 text-sm font-extrabold '>
                                        <span className='absolute right-2 bottom-0 my-3'>
                                            <a target='_blank' href={project.html_url}>

                                                <Image src={'/img/github.svg'} width={20} height={20} alt="Github" priority={false} draggable='false' />
                                            </a>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                    </motion.div>
                ))}
            </AnimatePresence>
        </section>
    );

};

export default ProjectLists;
