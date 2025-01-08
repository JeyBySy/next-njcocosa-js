import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, title, id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionNode = sectionRef.current; // Store the ref value in a variable

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set visibility to true when section is in viewport
                }
            },
            { threshold: 0.07 } // Trigger when 20% of the section is visible
        );

        if (sectionNode) {
            observer.observe(sectionNode);
        }

        // Cleanup function
        return () => {
            if (sectionNode) {
                observer.unobserve(sectionNode);
            }
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and moved down
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Fade in and move up
            transition={{ duration: 0.5 }}
            id={id} ref={sectionRef}>
            <div className='container w-full mx-auto mt-10 absolute z-0 inset-0 bg-mine-900'>
                <p className='absolute left-9 -top-8 text-[40px] font-black text-mine-100 capitalize italic z-20'>
                    &lt;{title}&gt;
                </p>
            </div>
            <div className='container lg:w-[70%] m-auto relative z-50 py-28'>
                {children}
            </div>
        </motion.div>
    );
};

export default Section;
