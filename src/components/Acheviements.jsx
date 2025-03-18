import React from 'react';
import { ACHEVIEMENTS } from '../constants'; 
import { motion } from 'framer-motion';

const Acheviements = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Achievements</h1>
      <motion.ul   whileInView={{opacity:1 , x:0}}
          animate={{ opacity:0 , x:-100}}
          transition={{duration:0.5 }} className='list-disc list-inside text-neutral-400 text-center'>
        {ACHEVIEMENTS.map((achievement, index) => (
          <li key={index} className='mb-2'>
            {achievement}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Acheviements;
