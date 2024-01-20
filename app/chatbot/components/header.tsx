"use client";

import Image from 'next/image'

export default function Header() {
  return (
    <section className="flex w-full h-40 bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-center sm:rounded-t-2xl">
      <div className='flex items-center flex-col'>
        {/* <Image>

        </Image> */}
        <h2 className='mt-4'>Chatbot</h2>
      </div>
    </section>
  )
}