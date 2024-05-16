import React from 'react'
import HomeBtn from '@/components/Global/HomeBtn/page'
import Footer from '@/components/Global/Footer/page'

const ProjectsLayout = ({ children }) => {
    return (
        <>
            <HomeBtn pageName={"Projects"} />
            {children}
            <Footer />
        </>
    )
}

export default ProjectsLayout