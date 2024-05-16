import React from 'react'
import experienceData from './experience.json';

const Experience = () => {
    return (
        <section className='tab'>
            <div className='tab_title'>
                Experience
            </div>
            <div className='tab_description leading-relaxed'>
                I have hands-on experience in developing web applications using various programming languages and frameworks. My expertise includes front-end and back-end development including server management, and ensuring scalability and performance optimization.
            </div>
            <div id='experience' className="grid gap-5 text-justify p-4">
                {experienceData.map((exp, index) => (
                    <div key={index}>
                        <div className='italic text-[20px] text-green-600 font-bold'>
                            {exp.company} - <span>{exp.position}</span>
                        </div>
                        <div className='text-base text-[#ffff]'>
                            {exp.date}
                        </div>
                        <div className='mt-4 text-muted'>
                            {exp.responsibilities}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience