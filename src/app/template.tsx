'use client'

import React from "react";
import { animate, motion } from 'framer-motion';


export const Template = ({ children }: { children: React.ReactNode }) => {



    return <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ease: 'easeOut' , duration: 0.75}}>{children}</motion.div>;
};


export default Template;