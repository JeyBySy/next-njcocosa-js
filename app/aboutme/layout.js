import React from 'react'
import HomeBtn from '@/components/Global/HomeBtn/page'
import Footer from '@/components/Global/Footer/page'

const AboutMeLayout = ({ children }) => {
    return (
        <>
            <HomeBtn pageName={"About me"} />
            {children}
            <Footer />
        </>
    )
}

export default AboutMeLayout