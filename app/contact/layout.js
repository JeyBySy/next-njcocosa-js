import React from 'react'
import HomeBtn from '@/components/HomeBtn/page'

const ContactLayout = ({ children }) => {
    return (
        <>
            <HomeBtn />
            {children}
        </>
    )
}

export default ContactLayout