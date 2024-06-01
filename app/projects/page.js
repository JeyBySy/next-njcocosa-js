import ProjectLists from '@/components/Projects/ProjectList/page'
import React from 'react'
import LoadTitle from '@/components/Global/LoadTitle/page';
import { projects } from '../../utils/projects'

// async function getData() {
//     const res = await fetch('https://api.github.com/users/JeyBySy/repos', { cache: 'no-store' })
//     const projects = await res.json()
//     return projects
// }

export default async function Projects() {
    // const projects = await getData()
    return (
        <div className="container m-auto w-[95%]">
            <div className="flex justify-center mb-4">
                <span className="text-base text-center">
                    Here are some of the projects I created. They&apos;re nothing fancy, just some stuff I built to practice my development skills. Take a peek if you&apos;re interested.
                </span>
            </div>
            <ProjectLists projects={projects} />
        </div>
    )
}

