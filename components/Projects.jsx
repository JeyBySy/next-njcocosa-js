import React from 'react'
import Section from './Global/Section'
import ProjectCard from './Global/ProjectCard'
import projectList from '../data/projects.json'

const Projects = () => {
    return (
        <div className='bg-mine-950 relative'>
            <Section title={'projects'} id="projects">
                <div className="h-fit">
                    <div className='grid grid-cols-1 2xl:grid-cols-3  gap-5 w-full h-fit px-4 sm:px-6'>
                        {projectList?.map((project, index) => (
                            <ProjectCard key={index} title={project.name} description={project.description} techStack={project.tech} github_url={project.github_url} demo_url={project.demo_url} />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Projects