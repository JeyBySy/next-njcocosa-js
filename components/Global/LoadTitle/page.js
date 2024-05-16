"use client"
import React from 'react'
import { motion } from 'framer-motion';

const LoadTitle = ({ title }) => {
    return (
        <div className='text-green-400 paging font-bold mt-5'>
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                style={{ position: 'relative', display: 'inline-block' }}
            >
                {title}
            </motion.span>
        </div>
    )
}

export default LoadTitle