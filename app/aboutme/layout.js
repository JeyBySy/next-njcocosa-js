import React from 'react'
import HomeBtn from '@/components/Global/HomeBtn/page'
import Footer from '@/components/Global/Footer/page'

const AboutMeLayout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <HomeBtn pageName={"About me"} />
            <div className='flex-grow'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default AboutMeLayout