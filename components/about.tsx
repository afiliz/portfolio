"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

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
      Hi there! My name is Adam and I enjoy building tech that positively impacts the lives of those who interact with my work. My interest with coding started with video games back in middle school, and I started my coding career by creating a choose-your-own adventure game in C++. I later discovered robotics and the coding aspects of it, and was hooked to programming ever since.
      </p>
      <p className='mb-3'>
      Recently I’ve had the opportunity to work at the Esports media company Panda Global, as well as to develop the voice assistant Amazon Alexa. I enjoyed those roles thoroughly, as the work I did brought joy to many customers worldwide. I hope to continue positively impacting customer experiences and growing as a software engineer in my next role.
      </p>
      <p className='mb-3'>
      I’m currently seeking full time and contract software engineering positions based in the San Francisco Bay Area, New York City, Boston, and Los Angeles. Feel free to <a href="#contact" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>message me and get in touch!</a>
      </p>
    </motion.section>
  )
}
