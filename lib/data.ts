import React from "react";
import { FaAmazon } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiFoodpanda } from "react-icons/si";
import { TbNetwork } from "react-icons/tb";
import exo from "@/public/exo.png";
import spotifam from "@/public/spotifam.png";

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
    company: "Panda Global",
    companyLink: "https://panda.gg",
    location: "Remote",
    description:
      "Developed data visualization overlays for live tournaments of 30,000+ viewers. Built React-based dashboard used to control what is displayed on livestreams in real time.",
    icon: React.createElement(SiFoodpanda),
    date: "Jun '22 - Jan '23",
  },
  {
    title: "Software Development Engineer",
    company: "Amazon Lab126",
    companyLink: "https://www.amazon.jobs/en/teams/lab126",
    location: "Remote/Sunnyvale, CA",
    description:
      "Worked on service for Amazon Alexa designed to promote customer engagement on 100+ million devices. Led engineering effort to expand service to 2 new markets, maintained and introduced new features for the service's backend API and CMS.",
    icon: React.createElement(FaAmazon),
    date: "Sep '20 - Oct '21",
  },
  {
    title: "Graduated UC Santa Cruz",
    company: "",
    companyLink: "https://www.ucsc.edu/",
    location: "Santa Cruz, CA",
    description:
      "Graduated UC Santa Cruz with honors, with a BS in Computer Science, and a minor in Bioinformatics.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun '20",
  },
  {
    title: "Software Development Intern",
    company: "Riverbed Technology",
    companyLink: "https://www.riverbed.com/",
    location: "Sunnyvale, CA",
    description:
      "Created a Python utility that automatically handles firmware updates for company's existing and new network hardware products.",
    icon: React.createElement(TbNetwork),
    date: "Jun '19 - Aug '19",
  },
] as const;

export const projectsData = [
  {
    title: "Exo: NASA Exoplanet Visualization",
    url: "https://afiliz.github.io/exo/exo.html",
    description:
      "3D data visualization web app that visualizes all of the exoplanets discovered by NASA. Allows users to compare the differences in data between groups of exoplanets in a 3D environment.",
    tags: ["Javascript", "three.js", "WebGL", "HTML/CSS", "NASA Exoplanet API"],
    imageUrl: exo,
  },
  {
    title: "Spotifam",
    url: "https://github.com/Spotifam",
    description:
      "Web app that enables users to create a collaborative playlist together to listen to. Developed as part of team of 6. Worked on UI with React and developed the app's 3D three.js visualization that runs while music plays.",
    tags: ["React", "Javascript", "three.js"],
    imageUrl: spotifam,
  }
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
  "Spring",
  "AWS",
  "EC2",
  "DynamoDB",
  "S3",
  "Tailwind CSS",
  "Framer Motion",
  "three.js",
  "Figma",
  "Git",
  "npm"

] as const;