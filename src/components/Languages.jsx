import React from 'react'
import { DiJavascript } from 'react-icons/di';
import { FaPython } from 'react-icons/fa';
import { SiC, SiCplusplus } from 'react-icons/si'; 

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
const Languages = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center items-center justify-center gap-4  text-4xl'>Languages</h1>    
        <div className='flex flex-wrap item-center justify-center gap-4'>
        <motion.div variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiJavascript className='text-7xl' style={{ color: '#F7DF1E' }} /> {/* JavaScript yellow color */}
        </motion.div>
        <motion.div   variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPython className='text-7xl' style={{ color: '#3776AB' }} /> {/* Python blue color */}
        </motion.div>
          <motion.div  variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
 className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiC className='text-7xl' style={{ color: '#A8B9CC' }} /> {/* C original color */}
        </motion.div>
        <motion.div variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
 className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCplusplus className='text-7xl' style={{ color: '#00599C' }} /> {/* C++ original color */}
        </motion.div>
            
        </div>  
    </div>
  )
}

export default Languages
