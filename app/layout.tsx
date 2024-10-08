import Header from "@/components/header";
import './globals.css'

import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Analytics } from '@vercel/analytics/react';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam Filiz | Personal Portfolio',
  description: 'Adam Filiz is a full stack developer with 2 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} container-snap bg-slate-50 text-gray-950 relative pt-28 sm:pt-36`}>
        {/* TODO: Add more color blobs */}
        {/* <div className="bg-[#fbfbe2] absolute top-[53rem] -z-10 right-[0rem] h-[32rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#fbd9d7] absolute top-[100rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
        <ActiveSectionContextProvider>
        
          <Header />
          {children}
            <Analytics />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
