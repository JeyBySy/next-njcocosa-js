import React from 'react'
import HomeBtn from '@/components/Global/HomeBtn/page'

const ProjectsLayout = ({ children }) => {
    return (
        <>
            <HomeBtn />
            {children}

        </>
    )
}

export default ProjectsLayout