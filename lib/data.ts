import React from "react";
import { FaReact, FaPython, FaAmazon } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
// including as const tells the ts compiler to keep the object format exactly the same between objects (two string objects, name and hash, and make them readonly)

export const experiencesData = [
  {
    title: "Full Stack Software Engineer ",
    location: "Remote",
    description:
      "Developed data visualization overlays for live tournaments of 30,000+ viewers. Built React-based dashboard used to control what is displayed on livestreams in real time.",
    icon: React.createElement(FaReact),
    date: "Jun '22 - Jan '23",
  },
  {
    title: "Software Development Engineer",
    location: "Remote/Sunnyvale, CA",
    description:
      "Enhanced service for Amazon Alexa designed to promote customer engagement. Led engineering effort to expand service to 2 new markets, improved and maintained the service's backend API and CMS.",
    icon: React.createElement(FaAmazon),
    date: "Sep '20 - Oct '21",
  },
  {
    title: "Graduated UC Santa Cruz",
    location: "Santa Cruz, CA",
    description:
      "I graduated UC Santa Cruz with honors, with a BS in Computer Science, and a minor in Bioinformatics.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun '20",
  },
  {
    title: "Software Development Intern",
    location: "Sunnyvale, CA",
    description:
      "Created a Python utility that automatically handles firmware updates for company's existing and new network hardware products.",
    icon: React.createElement(FaPython),
    date: "Jun '19 - Aug '19",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "Java",
  "React",
  "TypeScript",
  "HTML",
  "CSS",
  "Next.js",
  "Node.js",
  "WebSocket",
  "AWS",
  "Tailwind CSS",
  "Framer Motion",
  "three.js",
  "Figma",
  "Git"
] as const;