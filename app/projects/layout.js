import React from 'react'
import HomeBtn from '@/components/HomeBtn/page'

const ProjectsLayout = ({ children }) => {
    return (
        <>
            <HomeBtn />
            {children}

        </>
    )
}

export default ProjectsLayout