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

const linkVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 2px rgb(255, 255, 255)",
        boxShadow: "0px 0px 4px rgb(255, 255, 255)",
        transition: {
            duration: 0.3,
        }
    }
}

const Projects = () => {
    const { projectsDe, projectsEn, isGerman } = useContext(NavContext);
    const projectsContent = isGerman ? projectsDe : projectsEn; 
    const { headline, projekte } = projectsContent[0];
    return(
        <div className="lg:overflow-hidden">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:w-1/2 mx-auto min-h-screen2 mt-4 p-4"
        >
            <h2 className="text-3xl text-white">{headline}</h2>
            {projekte.map( projekt => {
                return(
                <div key={projekt.id} className="text-white border-t p-2 my-8">
                    <h5 className="text-xl py-2 mx-4 md:mx-0">{projekt.headline}</h5>
                    <p className="text-justify py-2 mx-4 md:mx-0">{projekt.text}</p> 
                    <motion.span 
                        variants={linkVariants}
                        whileHover="hover"
                        className="inline-block rounded-full border-2 border-white px-3 py-1 text-sm font-semibold mr-2 ml-4 md:ml-0 mb-2 md:mb-0"
                    >
                        <a href={projekt.linkHomepage} target="_blank" rel="noopener noreferrer">Homepage</a>
                    </motion.span>
                    <motion.span
                        variants={linkVariants}
                        whileHover="hover" 
                        className="inline-block border-2 border-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 md:mb-0"
                    >
                        Github
                    </motion.span>
                </div>  
                )
            })}
             
        </motion.div>
        </div>
    )
}


export default Projects