import Header from "@/components/header";
import './globals.css'

import ActiveSectionContextProvider from "@/context/active-section-context";
import { Analytics } from '@vercel/analytics/react';

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
      
      {/* TODO: Add more color blobs */}
      {/* <div className="bg-[#fbfbe2] absolute top-[53rem] -z-10 right-[0rem] h-[32rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#fbd9d7] absolute top-[100rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
      
      <ActiveSectionContextProvider>
      
        
        {children}
          <Analytics />
      </ActiveSectionContextProvider>
    </html>
  )
}
