"use client"
import React from 'react'
import { motion } from 'framer-motion';

const LoadTitle = ({ title }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            {title}
        </motion.span>
    )
}

export default LoadTitle