import Header from "@/components/header";
import { Inter } from 'next/font/google'

import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body className={`${inter.className} bg-slate-50 text-gray-950 relative pt-8 sm:pt-8`}>
      <main className="flex flex-col items-center px-4">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </body>
  )
}
