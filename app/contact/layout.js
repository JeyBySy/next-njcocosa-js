import React from 'react'
import HomeBtn from '@/components/Global/HomeBtn/page'

const ContactLayout = ({ children }) => {
    return (
        <>
            <HomeBtn />
            {children}
        </>
    )
}

export default ContactLayout