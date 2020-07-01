import React, { useContext } from 'react';
import { NavContext } from '../contexts/NavContext';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: '0vw',
        transition: {
            ease: 'easeInOut'
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const About = () => {
    const { aboutDe, aboutEn, isGerman } = useContext(NavContext);
    const aboutContent = isGerman ? aboutDe : aboutEn;
    //console.log(aboutContent);
    return(
        <div className="lg:overflow-hidden">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:w-1/2 min-h-screen2 mx-auto p-4"
        >
            <h2 className="text-3xl text-white my-4">{aboutContent[0].headline}</h2>
            <p className="text-white">{aboutContent[0].text}</p>
        </motion.div>
        </div>
    )
}


export default About