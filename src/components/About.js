import React, { useContext } from 'react';
import { NavContext } from '../contexts/NavContext';
import { motion } from 'framer-motion';
import Portrait from '../img/portrait.jpg';

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
            <div className="xl:flex xl:flex-row xl:flex-shrink xl:items-start">
                <img src={Portrait} alt="portrait" className="xl:w-1/2 object-contain mx-auto p-2 border rounded-sm" />
                <p className="text-white text-justify mt-6 xl:mt-0 xl:ml-8">
                    {aboutContent[0].text1}
                    <br></br>
                    <br></br>
                    {aboutContent[0].text2}
                </p>
             </div>
        </motion.div>
        </div>
    )
}


export default About