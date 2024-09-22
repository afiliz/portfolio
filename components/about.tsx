"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section 
      className='mb-20 max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175
      }}
      id="about"
      ref={ref}
    >
      
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
      Hi there! My name is <span className='font-medium'>Adam</span>{" "}
      and I enjoy building tech that positively impacts{" "}
      the lives of those who interact with my work. I started my coding journey by creating a choose-your-own-adventure game in C++.
      I later discovered robotics and the coding aspects of it, and was{" "}
      <span className='underline'>hooked</span> to programming{" "} ever since. 
      Since then, I’ve graduated <span className='font-medium'>UC Santa Cruz</span> with a degree in <span className='font-medium'>Computer Science</span>, and worked as a professional software engineer for 2 years.
      </p>
      <p className='mb-3'>
      Recently I’ve had the opportunity to work at the Esports media
      company <span className='font-medium'>Panda Global</span>,
      as well as to develop the <span className='font-medium'>voice assistant Alexa</span> at <span className='font-medium'>Amazon Lab126</span>. 
      I enjoyed those roles thoroughly, as the work I did brought joy to many customers <span className='font-medium'>worldwide</span>. 
      I hope to continue improving customer experiences and
       growing as a software engineer in my next role.
      </p>
      <p className='mb-3'>
      I’m currently seeking <span className='font-medium'>full time and contract</span> software engineering positions based in the <span className='italic'>San Francisco Bay Area, New York City, Boston, and Los Angeles</span>. Feel free to <a href="#contact" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>message me and get in touch!</a>
      </p>
    </motion.section>
  )
}
