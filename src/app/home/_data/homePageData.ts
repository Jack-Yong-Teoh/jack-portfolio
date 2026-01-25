import {
  Project,
  Experience,
  Education,
  TechStackItem,
} from "../../../types/home";

export const projects: Project[] = [
  {
    title: "AI Cache Saver",
    description:
      "A performance optimization tool designed to cache AI model responses, significantly reducing API latency and operational costs for repetitive queries.",
    link: "https://github.com/Jack-Yong-Teoh/ai-cache-saver",
  },
  {
    title: "MERN Task Manager",
    description:
      "A comprehensive task management platform built with MongoDB, Express, React, and Node.js. Features secure authentication, state management, and full CRUD capabilities.",
    link: "https://github.com/Jack-Yong-Teoh/mern-task-management-system",
  },
  {
    title: "FitBro V2: AI Diet System",
    description:
      "An intelligent diet tracking application utilizing image recognition algorithms to analyze food photos and automatically estimate calorie and macronutrient content.",
    link: "https://github.com/Jack-Yong-Teoh/FitBro-V2-Image-recognition-diet-system",
  },
];

export const experiences: Experience[] = [
  {
    company: "Axflix Technologies",
    role: "Fullstack Software Engineer",
    period: "Aug 2024 — Present",
    description:
      "Developed and maintained full-stack applications using Next.js, TypeScript, FastAPI, and PostgreSQL, contributing to systems including crypto payments, SMS, streaming, and internal platforms. Collaborated in Agile workflows while improving system reliability, testing standards, and SEO/localization efficiency.",
  },
  {
    company: "ARB Berhad",
    role: "Software Engineer",
    period: "Jul 2023 — Aug 2024",
    description:
      "Led the revamp of legacy repositories, improving load times by 60%. Implemented reusable components using Vue.js and React while managing hot-fixes for production issues.",
  },
  {
    company: "Finexus Group",
    role: "Software Engineer Intern",
    period: "Nov 2022 — Jun 2023",
    description:
      "Developed a Web Software Development Kit (SDK) for E-Wallets using React, TypeScript, and GraphQL. Focused on API implementation and simplifying project structure",
  },
];

export const education: Education[] = [
  {
    university: "Universiti Malaya",
    degree: "Master of Software Engineering (Software Technology)",
    period: "Oct 2025 — Jul 2027",
    description:
      "Focusing on clean architecture, operational stability, and consistent engineering standards. Coursework includes Architecting Software Systems and Framework-Based Software Design",
  },
  {
    university: "Tunku Abdul Rahman University of Management & Technology",
    degree: "Bachelor of Computer Science (Software Engineering)",
    period: "Jun 2020 — Jun 2023",
    description:
      "Graduated with a CGPA of 3.60 / 4.00. President's List & Dean's List honoree. Relevant coursework: Software Project Management, Systems Analysis and Design, Web Programming, Database Management",
  },
];

export const techStack: TechStackItem[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];
