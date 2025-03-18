import React from 'react';
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Contact</h1>
      <div className='flex flex-col items-center'>
        <p className='mb-4 text-neutral-400'>Address: {CONTACT.address}</p>
        <p className='mb-4 text-neutral-400'>Phone: {CONTACT.phoneNo}</p>
        <p className='mb-4 text-neutral-400'>Email: <a href={`mailto:${CONTACT.email}`} className='text-cyan-400'>{CONTACT.email}</a></p>
      </div>
    </div>
  );
};

export default Contact;
