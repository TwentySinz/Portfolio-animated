import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        x: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.1,
            when: "beforeChildren",
            staggerChildren: 0.5
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const nameVariants={
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: '0vw'
    },
    transition: {
        type: 'spring',
        mass: 0.4,
        damping: 8,
    }
}

const nameVariants2 = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    transition: {
        delay: 1.5,
        duration: 1.5
    }
}

const Home = () => {
    return(
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col flex-wrap items-center justify-center lg:overflow-hidden min-h-screen2 mx-auto p-6"
        >
            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                <div className="flex flex-row flex-wrap justify-center">
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">T
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">O
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">B
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">I
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">A
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">S
                </motion.div>
                </div>
                <div className="flex flex-row flex-wrap justify-center">
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1 md:ml-10">S
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">T
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">E
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">I
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">N
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">E
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block text-6xl text-white p-1">R
                </motion.div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-center">
                <motion.div
                    variants={nameVariants2} 
                    className="text-4xl md:text-6xl text-white">WEBENTWICKLER
                </motion.div>
            </div>
            
        </motion.div>
    )
}


export default Home