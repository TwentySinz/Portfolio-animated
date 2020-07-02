import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { NavContext } from '../contexts/NavContext';
import LetterA from '../img/A.jpg';
import LetterB from '../img/B.jpg';
import LetterE from '../img/E.jpg';
import LetterI from '../img/I.jpg';
import LetterN from '../img/N.jpg';
import LetterO from '../img/O.jpg';
import LetterR from '../img/R.jpg';
import LetterS from '../img/S.jpg';
import LetterT from '../img/T.jpg';
import SpaceDe from '../img/SPACE.jpg';
import SpaceEn from '../img/SPACEEN.jpg';

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
        opacity: 1,
        boxShadow: "0px 0px 12px rgb(255, 200, 255)"
    },
    transition: {
        delay: 1.5,
        duration: 1.5
    }
}

const Home = () => {
    const { isGerman } = useContext(NavContext);
    return(
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col flex-wrap items-center justify-center lg:overflow-hidden min-h-screen2 mx-auto p-6"
        >
            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                
                <div className="flex flex-row flex-shrink justify-center my-4">
                <motion.div
                    variants={nameVariants}
                    className="block rounded m-1"><img src={LetterT} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterO} alt="letter" className="rounded"/>
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterB} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterI} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterA} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterS} alt="letter" className="rounded" />
                </motion.div>
                </div>

                <div className="flex flex-row flex-shrink justify-center my-4">
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1 md:ml-10"><img src={LetterS} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterT} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterE} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterI} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterN} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block  rounded m-1"><img src={LetterE} alt="letter" className="rounded" />
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    className="block rounded m-1"><img src={LetterR} alt="letter" className="rounded" />
                </motion.div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-center my-4">
                <motion.div
                    variants={nameVariants2} 
                    className="block  rounded">
                        { isGerman ? <img src={SpaceDe} alt="letter" className="rounded" /> : <img src={SpaceEn} alt="letter" className="rounded" /> }
                </motion.div>
            </div>
            
        </motion.div>
    )
}


export default Home