"use client"
import React, { useState } from 'react';
import Experience from './Experience/page';
import Skills from './Skills/page';
import Certifications from './Certification/page';

const Tabs = () => {

    return (
        <>
            <Skills />
            <Experience />
            <Certifications />
        </>
    )
}

export default Tabs