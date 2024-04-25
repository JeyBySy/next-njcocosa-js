import React from 'react'
import HomeBtn from '@/components/Global/HomeBtn/page'

const AboutMeLayout = ({ children }) => {
    return (
        <>
            <HomeBtn />
            {children}
        </>
    )
}

export default AboutMeLayout