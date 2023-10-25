"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";

export default function absolute() {
  return (
    <motion.section className='mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor sit amet. Senectus et netus et malesuada fames ac turpis. Quisque sagittis purus sit amet volutpat consequat mauris. Felis eget nunc lobortis mattis aliquam faucibus purus in. Quam viverra orci sagittis eu volutpat. Nibh tortor id aliquet lectus proin nibh nisl. Libero enim sed faucibus turpis in. Molestie nunc non blandit massa enim nec. Quisque non tellus orci ac. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Massa sapien faucibus et molestie. A iaculis at erat pellentesque. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.
      </p>
      <p>
      Sed nisi lacus sed viverra tellus. Platea dictumst quisque sagittis purus sit amet volutpat. Convallis aenean et tortor at risus. Sit amet nisl purus in mollis nunc sed id. Adipiscing tristique risus nec feugiat in. Nunc lobortis mattis aliquam faucibus purus in massa. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Libero nunc consequat interdum varius sit amet. Nunc sed id semper risus. Tincidunt vitae semper quis lectus nulla at volutpat diam. Sit amet massa vitae tortor condimentum lacinia quis vel. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Turpis tincidunt id aliquet risus feugiat in. Nulla facilisi nullam vehicula ipsum a arcu. Habitant morbi tristique senectus et.
      </p>
    </motion.section>
  )
}
