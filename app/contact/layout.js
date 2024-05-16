import React from 'react'
import HomeBtn from '@/components/Global/HomeBtn/page'
import Footer from '@/components/Global/Footer/page'

const ContactLayout = ({ children }) => {
    return (
        <>
            <HomeBtn pageName={"Contact"} />
            {children}
            <Footer />
        </>
    )
}

export default ContactLayout