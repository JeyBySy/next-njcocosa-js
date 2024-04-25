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
        <div className='container m-auto w-[90%]'>
            <div className='text-green-400 text-5xl font-bold '>
                <LoadTitle title={"Projects"} />
            </div>
            <ProjectLists projects={projects} />

        </div>
    )
}

