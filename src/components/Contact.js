import React, { useState, useContext } from 'react';
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
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ status,setStatus ] = useState('');

    const encode = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((k)=>{
          formData.append(k,data[k])
        });
        return formData
      }
    
    const handleSubmit = (e) => {
        const data = { "form-name" : "contact", name, email, subject, message };

        fetch("/", {
            method: "POST",
            body: encode(data)
        }).then(
            () => isGerman ? setStatus("Deine E-mail wurde erfolgreich versendet.") : setStatus("Your E-mail has been.")
        ).catch(
            error => isGerman ? setStatus("Sorry, ein Fehler ist aufgetreten.") : setStatus("Sorry, an error occured.")
        );
        e.preventDefault();
    }
    
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

            <form onSubmit={handleSubmit} className="">
                <div className="my-4">
                    <label htmlFor="name" className="block">{contactContent[0].name}</label>
                    <input id="name" type="text" value={name} onChange={ (e) => setName(e.target.value) } className="appearance-none w-full text-gray-700 border border-gray-500 rounded py-3 px-4" />
                </div>
                <div className="my-4">
                    <label htmlFor="email" className="block">{contactContent[0].email}</label>
                    <input id="email" type="email" value={email} onChange={ (e) => setEmail(e.target.value) } className="appearance-none w-full text-gray-700 border border-gray-500 rounded py-3 px-4" />
                </div>
                <div className="my-4">
                    <label htmlFor="betreff" className="block">{contactContent[0].betreff}</label>
                    <input id="betreff" type="text" value={subject} onChange={ (e) => setSubject(e.target.value) } className="appearance-none w-full text-gray-700 border border-gray-500 rounded py-3 px-4" />
                </div>
                <div className="my-4">
                    <label htmlFor="nachricht" className="block">{contactContent[0].message}</label>
                    <textarea id="nachricht" value={message} onChange={ (e) => setMessage(e.target.value) } className="appearance-none resize-none w-full   h-32 text-gray-700 border border-gray-500 rounded py-3 px-4"/>
                </div>
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover" 
                    className="font-bold py-2 px-4 border-2 rounded"
                >
                    {contactContent[0].send}
                </motion.button>
                </form>
                <h4 className="mt-4 text-lg">{status}</h4>
        </motion.div>
        
        </div>
    )
}


export default Contact