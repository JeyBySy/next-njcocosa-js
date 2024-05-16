import React from 'react';
import TechSkill from './TechSkills';
import SoftSkills from './SoftSkills';

const Skills = () => {
    return (
        <section className='tab '>
            <div className='tab_title text-2xl font-bold '>
                Skills
            </div>
            <div className='tab_description text-lg leading-relaxed'>
                Throughout my career, university studies, and personal projects, I have acquired a diverse set of skills in programming languages, development methodologies, frameworks, and platforms. These experiences have significantly enhanced my capabilities. Here is a list of the skills I have developed:
            </div>
            <div id='skills' className='flex flex-col lg:flex-row mt-2 gap-5 text-justify text-lg relative p-4'>
                <div className='lg:flex-1'>
                    <div className='font-extrabold italic text-[25px] mb-2 text-green-600 overflow-hidden text-ellipsis'>
                        Soft skills
                    </div>
                    <div className=''>
                        <SoftSkills />
                    </div>
                </div>
                <div className='lg:flex-1'>
                    <div className='font-extrabold italic text-[25px] mb-2 text-green-600 overflow-hidden text-ellipsis'>
                        Technical skills
                    </div>
                    <div className='text-muted font-extrabold text-wrap flex flex-wrap gap-3 justify-start'>
                        <TechSkill />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
