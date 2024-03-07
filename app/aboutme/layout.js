import React from 'react'
import HomeBtn from '@/components/HomeBtn/page'

const AboutMeLayout = ({ children }) => {
    return (
        <>
            <HomeBtn />
            {children}
        </>
    )
}

export default AboutMeLayout