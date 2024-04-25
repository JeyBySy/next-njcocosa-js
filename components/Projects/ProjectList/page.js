"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

    return (
        <section className='w-full flex flex-wrap gap-10'>
            {projects.map(project => (
                <div key={project.id} className="flex-shrink-0 w-full min-h-full md:w-1/2 lg:w-1/3 xl:w-1/4 ">
                    <div className="min-w-0 rounded overflow-hidden shadow-lg bg-green-950">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.name}</div>
                            <p className="text-gray-700 text-base">
                                {project.description}
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            {project.language}
                            {/* {languages[project.id] && languages[project.id].map((language, index) => (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                    {language}
                                </span>
                            ))} */}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectLists;
