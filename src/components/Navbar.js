import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Deutsch from '../img/de.png';
import Englisch from '../img/en.png';
import { NavContext } from '../contexts/NavContext';

const menuVariants = {
    open: {
        display: 'block',
        y: 0,
        transition: {
            type: 'spring', 
            stiffness:100
        }
    },
    closed: {
        display: 'none',
        y: '-100vh',
        transition: {
            type: 'spring', 
            stiffness:100
        }
    }
}


const Navbar = () => {
    
    const { menuItemsDe, menuItemsEn, isGerman, toggleIsGerman } = useContext(NavContext); 
    const menuItems = isGerman ? menuItemsDe : menuItemsEn; 

    const [ isOpen, setIsOpen ] = useState(false);
    return(
        <div>
        <nav className="flex flex-wrap items-center border-b mx-4 lg:mx-24 md:mx-16 mt-4 p-4">
            <div className="flex justify-between container mx-auto">
                <div className="flex items-center">
                    <div
                        onClick={ () => setIsOpen(!isOpen) }
                        className="md:hidden text-white"
                    >
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </div>
                </div>
                <div className="flex w-auto justify-end">
                <ul className="hidden md:flex md:items-center">
                    {menuItems[0].map(menuItem => {
                      return(  
                            <motion.li
                                whileHover={{scale: 1.1,
                                            textShadow: "0px 0px 8px rgb(255,255,255)"}}
                                transition={{type: 'spring', stiffness:100}}
                                key={menuItem.id}
                            >           
                                <NavLink to={menuItem.to} className="text-xl text-white mx-4">{menuItem.item}</NavLink>
                            </motion.li>
                    )})}
                    <motion.li
                        whileHover={{scale: 1.1}}
                        transition={{type: 'spring', stiffness:100}}
                    >
                        {isGerman ? <img src={Deutsch} alt="deutsche Flagge" onClick={() => toggleIsGerman(!isGerman) } className="w-10 h-10 mx-4"/> : 
                            <img src={Englisch} alt="english flag" onClick={() => toggleIsGerman(!isGerman) } className="w-10 h-10 mx-2"/>}
                    </motion.li>
                </ul>
                <div className="md:hidden">
                    {isGerman ? <img src={Deutsch} alt="deutsche Flagge" onClick={() => toggleIsGerman(!isGerman) } className="w-8 h-8 mx-4"/> : 
                            <img src={Englisch} alt="english flag" onClick={() => toggleIsGerman(!isGerman) } className="w-8 h-8 mx-2"/>} 
                </div>
                </div>
            </div>
        </nav>
    <motion.div
        variants={menuVariants}
        initial="closed"
        animate={ isOpen ? "open" : "closed"}
        transition={{type: 'spring', stiffness:100}}
        className="md:hidden"
    >
        <ul className="text-center border-b mx-4">
                    {menuItems[0].map(menuItem => {
                      return(  
                            <motion.li
                                whileHover={{scale: 1.1,
                                            textShadow: "0px 0px 8px rgb(255,255,255)"}}
                                transition={{type: 'spring', stiffness:100}}
                                key={menuItem.id}
                            >           
                                <NavLink to={menuItem.to} onClick={ () => setIsOpen(!isOpen) } className="block text-xl text-white p-1">{menuItem.item}</NavLink>
                            </motion.li>
                    )})}
                </ul>
    </motion.div>
        </div>
    )
}


export default Navbar