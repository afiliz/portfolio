"use client"
// make this its own file to make only project component a client component
// want to keep components server components whenever possible

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

type ProjectProps = typeof projectsData[number];

export default function Project({title, url, description, tags, imageUrl}: 
  ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  }); // 0 - bottom of the target 1 - top of the target (when animation starts), 1.33 - 33% of viewport 1 - top of target
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]); // goes from 0 to 1, but starts from 0.5 scale to 1
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]); // goes from 0 to 1, but starts from 0.5 scale to 1
  
  return (
    // could use article tag if taking section and could put it in a new context
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="group mb-14 sm:mb-8 last:mb-0"
    >
      <section
        className="relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:max-w-[47rem] sm:pr-8 max-h-[26rem] md:max-h-[23rem] rounded-lg hover:bg-gray-200 transition">
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'><a className="hover:underline" target="_blank">{title}</a></h3>
          <p className='mt-2 mb-2 leading-relaxed text-gray-700'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
            ))}
          </ul>
          <div className="flex">
            <a className='bg-white text-gray-700 mt-4 mb-4 p-4 w-48 flex items-center justify-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href={url} target="_blank">
            Link to Project
            <BsArrowRight className='opacity-70 transition' />
            </a>
          </div>
        </div>
        <Image src={imageUrl} alt={description} quality={95} className='absolute hidden sm:block bottom-0 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] 
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 
        
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 
        
        group-even:-left-40 '/>
      </section>
    </motion.div>
  );
} 