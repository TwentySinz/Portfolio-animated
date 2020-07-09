import React, { useContext } from 'react';
import { NavContext } from '../contexts/NavContext';
import { motion } from 'framer-motion';
import Portrait from '../img/bild2.jpg';

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
            className="md:w-1/2 lg:w-1/3 min-h-screen2 mx-auto p-4"
        >
            <h2 className="text-3xl text-white my-4">{aboutContent[0].headline}</h2>
            <p className="text-white text-justify">
                <img src={Portrait} alt="portrait" className="w-40 float-right ml-6 p-2 border rounded-sm" />
                {aboutContent[0].text1}  
                {aboutContent[0].text2}
             </p>
        </motion.div>
        </div>
    )
}


export default About