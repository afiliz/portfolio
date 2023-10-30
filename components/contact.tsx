"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    }
  },
}

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section 
      id="contact"
      ref={ref}
      className='mb-14 sm:mb-28'
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <div className='flex flex-col justify-center items-center max-w-[47rem] px-10 py-10 border rounded-xl border-black/5 bg-gray-100'>
        <p className='text-center'>I'm currently seeking full time and long-term contract software engineering positions. Let's get in touch!</p>
        <a href="mailto:filizadam@gmail.com" className="text-2xl px-5 py-3 mt-8 font-semibold bg-gradient-to-r bg-clip-text text-transparent from-blue-400 via-red-400 to-yellow-300 animate-text focus:scale-110 active:scale-105 hover:scale-110 transition border-2 border-black/10 rounded-xl">Message Me</a>
      </div>
    </motion.section>
  )
}
