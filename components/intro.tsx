"use client";

import Image from 'next/image'
import profile from "@/public/professional_profile.jpg";
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    // section tags are better to make everything related to each other (semantically)
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
         <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
         >
          <Image
            alt='Adam Filiz portrait'
            width= '384'
            height='384'
            quality='95'
            priority={true}
            src={profile}
            className='h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
         </motion.div>
          <motion.span
          className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      >
        Hello there, <span className="font-bold"> I'm Adam.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I develop <span className="italic">exceptional and impactful</span> <span className="font-bold">sites & apps</span>. 
        {/* My focus is{" "}
        <span className="underline">React, (Next.js)</span>. */}
      </motion.h1>

      <motion.div className='flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="mailto:filizadam@gmail.com" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me
        <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a className='group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10' href="/Adam_Filiz_Resume.pdf" download>Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' /></a>

        <div className='flex flex-row gap-3'>
          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href="https://linkedin.com/in/adam-filiz" target="_blank">
            <BsLinkedin />
          </a>

          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href="https://github.com/afiliz" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
        
      </motion.div>
    </section>
  )
}
