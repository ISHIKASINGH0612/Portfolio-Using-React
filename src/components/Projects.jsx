

import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
      <motion.div  whileInView={{opacity:1 , x:0}}
      initial={{opacity:0 , x:100}}
      transition={{duration:0.5}}
       className='flex flex-col items-center'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='w-full max-w-xl mb-8'>
            <h2 className='mb-2 text-xl font-semibold'>{project.title}</h2>
            <p className='mb-2 text-neutral-500 italic'>{project.timeSpan}</p>
            <p className='mb-4 text-neutral-400 whitespace-pre-line'>{project.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
