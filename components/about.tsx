"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section 
      className='mb-20 sm:max-w-[45rem] max-w-[26rem] text-left sm:text-left leading-8 sm:mb-28 scroll-mt-28'
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
      Hello there! My name is <span className='font-medium'>Adam</span>, I'm a full stack software engineer from the <span className='font-medium'>San Francisco Bay Area</span>.
      I'm currently working as a Backend Engineer at <span className='font-medium'>Apple</span>, where I work the tech behind on-device evaluations that help improve the quality of <span className='font-medium'>Apple Intelligence</span>.
      </p>
      <p className='mb-3'>
      I specialize in building software that makes an impact by building user-centered frontend interfaces following <span className='font-medium'>UI/UX</span> best practices, <span className='font-medium'>automation</span> tools that streamline operations, and interactive applications that solve real business problems. 
      {/* With experience spanning from developing Amazon Alexa to building out dashboards powering live esports broadcasts, I bring a unique perspective that combines technical depth with real-world problem solving. */}
      </p>
      <p className='mb-3'>
      While I'm proud to have worked at Apple on my current contract, it is coming to a close soon. I’m currently seeking <span className='font-medium'>full time and contract</span> software engineering positions based in the <span className='italic'>San Francisco Bay Area, New York City, Boston, and San Diego</span>. Feel free to <a href="mailto:filizadam@gmail.com" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>message me and get in touch!</a>
      </p>
    </motion.section>
  )
}
