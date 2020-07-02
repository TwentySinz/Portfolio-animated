import React from 'react';
import { motion } from 'framer-motion';
import Letter from '../img/T.jpg';

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
        x: '0vw',
        boxShadow: "0px 0px 12px rgb(255, 200, 255)"
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
                <div className="flex flex-row flex-wrap justify-center mb-4 md:mb-0">
                <motion.div
                    variants={nameVariants}
                    className="block rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded"/>
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                </div>
                <div className="flex flex-row flex-wrap justify-center mb-4 md:mb-0">
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1 md:ml-10"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={Letter} alt="letter" className="rounded" />
                </motion.div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-center">
                <motion.div
                    variants={nameVariants2} 
                    className="text-4xl md:">WEBENTWICKLER
                </motion.div>
            </div>
            
        </motion.div>
    )
}


export default Home