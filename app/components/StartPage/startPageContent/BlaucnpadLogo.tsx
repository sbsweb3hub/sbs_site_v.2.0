"use client"
import React from "react";
import {motion, useAnimation} from "framer-motion"
import { Waypoint } from "react-waypoint";
import { Gemunu_Libre } from 'next/font/google'

const gemunuLibre = Gemunu_Libre({subsets: ['latin']})

const BlaunchpadLogo = () => {
    
  

    return (
            <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{opacity: 1, transition: { duration: 2 }} } 
            transition={{ type: 'spring', stiffness: 120, damping: 20 }} 
            className={gemunuLibre.className}
            style={{
                fontSize: '128px',
                color: '#D6DA1D',
                fontWeight: '400',
                marginTop: '284px',
                marginBottom: '20px'
            }}
            >
            Blaunchpad
            </motion.div>
    )

    }

export default BlaunchpadLogo