import React from 'react';
import { GrGithub } from 'react-icons/gr';
import { VscCode } from 'react-icons/vsc';

import { motion } from 'framer-motion';



const iconVariant=(duration)=>(
  {
    initial:{y:-10},
    animate:{
      y:[10 ,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
      }
    },
  }
)

const Tools = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Tools and Platform</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'> 
        <motion.div    variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
          <GrGithub className='text-7xl' style={{ color: '#ffffff' }} /> 
        </motion.div>
        <motion.div   variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
          <VscCode className='text-7xl' style={{ color: '#007ACC' }} /> 
        </motion.div>
      </div>  
    </div>
  );
}

export default Tools;
