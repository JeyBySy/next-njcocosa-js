import React from 'react'
import HomeBtn from '@/components/Global/HomeBtn/page'
import Footer from '@/components/Global/Footer/page'

const ProjectsLayout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <HomeBtn pageName={"Projects"} />
            <div className='flex-grow'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsLayout