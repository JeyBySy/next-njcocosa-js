"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectLists = ({ projects }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);

    const projectLanguages = [...new Set(projects.map(project => project.language).filter(Boolean))];

    useEffect(() => {
        if (selectedLanguage) {
            setFilteredProjects([]);
            const filtered = projects.filter(project => project.language && project.language.toLowerCase() === selectedLanguage.toLowerCase());
            setFilteredProjects(filtered);
        } else {
            setFilteredProjects(projects);
        }
    }, [selectedLanguage, projects]);

    const handleFilter = language => {
        setSelectedLanguage(language);
    };

    // Define variants for animation
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, },
    };

    return (
        <section className='w-full flex flex-wrap gap-2 justify-center'>
            <div className="flex space-x-4 w-full justify-center">
                <button className={`filter_btn ${selectedLanguage === '' ? 'active' : ''}`} onClick={() => handleFilter('')}>
                    All
                </button>
                {projectLanguages.map(language => (
                    <button key={language} className={`filter_btn ${selectedLanguage === language.toLowerCase() ? 'active' : ''}`} onClick={() => handleFilter(language.toLowerCase())}>
                        {language}
                    </button>
                ))}
            </div>
            <AnimatePresence>
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial="hidden"
                        animate="visible"
                        exit='hidden'
                        variants={cardVariants}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className=" w-full sm:w-100 md:w-1/3 lg:w-1/4 xl:w-1/4 relative"
                    >
                        <div className="w-full h-full min-h-40 shadow-sm shadow-[#9b9b9b]  border-l-[5px] border-green-400 bg-gradient-to-r from-green-800 to-green-900 cursor-pointer ">
                            <div className="px-6 py-4 relative z-1">
                                <div className="font-extrabold text-2xl mb-2 text-green-50 overflow-hidden text-ellipsis">{project.name}</div>
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
                                                <motion.div
                                                    whileHover={{
                                                        scale: 1.1,
                                                        transition: { duration: 0.3 },
                                                    }}>
                                                    <Image src={'/img/github.svg'} width={20} height={20} alt="Github" priority={false} draggable='false' />

                                                </motion.div>
                                            </a>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </section >

    );
};

export default ProjectLists;
