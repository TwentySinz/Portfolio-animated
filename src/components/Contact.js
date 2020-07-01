import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { NavContext } from '../contexts/NavContext';

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

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 2px rgb(255, 255, 255)",
        boxShadow: "0px 0px 4px rgb(255, 255, 255)",
        transition: {
            duration: 0.3,
        }
    }
}

const Contact = () => {
    const { contactDe, contactEn, isGerman } = useContext(NavContext);
    const contactContent = isGerman ? contactDe : contactEn;
    return(
        <div className="lg:overflow-hidden">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:w-1/2 min-h-screen2 mx-auto p-4 text-white"
        >
            <h2 className="text-3xl ">{contactContent[0].headline}</h2>

            <form className="">
                <div className="my-4">
                    <label htmlFor="name" className="block">{contactContent[0].name}</label>
                    <input id="name" type="text" className="appearance-none w-full text-gray-700 border border-gray-500 rounded py-3 px-4" />
                </div>
                <div className="my-4">
                    <label htmlFor="email" className="block">{contactContent[0].email}</label>
                    <input id="email" type="text" className="appearance-none w-full text-gray-700 border border-gray-500 rounded py-3 px-4" />
                </div>
                <div className="my-4">
                    <label htmlFor="betreff" className="block">{contactContent[0].betreff}</label>
                    <input id="betreff" type="text" className="appearance-none w-full text-gray-700 border border-gray-500 rounded py-3 px-4" />
                </div>
                <div className="my-4">
                    <label htmlFor="nachricht" className="block">{contactContent[0].message}</label>
                    <textarea id="nachricht" className="appearance-none resize-none w-full   h-32 text-gray-700 border border-gray-500 rounded py-3 px-4"/>
                </div>
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover" 
                    className="font-bold py-2 px-4 border-2 rounded"
                >
                    {contactContent[0].send}
                </motion.button>
                </form>
        </motion.div>
        </div>
    )
}


export default Contact