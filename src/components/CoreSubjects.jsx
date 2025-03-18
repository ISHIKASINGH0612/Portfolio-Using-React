import React from 'react';
import { CORE_SUBJECTS } from '../constants'; 
import { motion } from 'framer-motion';

const CoreSubjects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Core Subjects</h1>
      <motion.ul  whileInView={{opacity:1 , x:0}}
          animate={{ opacity:0 , x:-100}}
          transition={{duration:0.5 }} className='list-disc list-inside text-neutral-400 text-center'>
        {CORE_SUBJECTS.map((subject, index) => (
          <li key={index} className='mb-2'>
            {subject}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CoreSubjects;
