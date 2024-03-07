
import HomeBtn from '@/components/HomeBtn/page'
import Nav from '@/components/Nav/page'
import ProjectLists from '@/components/ProjectList/page'

import React from 'react'

async function getData() {
    const res = await fetch('https://api.github.com/users/JeyBySy/repos')
    const projects = await res.json()
    return projects
}

export default async function Projects() {
    const projects = await getData()
    // console.log(projects);
    return (
        <>
            <HomeBtn />
            {/* <Nav /> */}
            {/* <ProjectLists projects={projects} /> */}
        </>
    )
}

