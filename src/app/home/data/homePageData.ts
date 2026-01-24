import { Project, Experience } from "../../../types/home";

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
      "Developing web apps with Next.js (Frontend) and FastAPI (Backend). Optimized reliability by resolving 95% of critical bugs within 24 hours and reducing downtime by 20% via automated monitoring.",
  },
  {
    company: "ARB Berhad",
    role: "Software Engineer",
    period: "Jul 2023 — Aug 2024",
    description:
      "Led the revamp of legacy repositories, improving load times by 60%. [cite_start]Implemented reusable components using Vue.js and React while managing hot-fixes for production issues[cite: 22, 23, 24].",
  },
  {
    company: "Finexus Group",
    role: "Software Engineer Intern",
    period: "Nov 2022 — Jun 2023",
    description:
      "Developed a Web Software Development Kit (SDK) for E-Wallets using React, TypeScript, and GraphQL. [cite_start]Focused on API implementation and simplifying project structure",
  },
];

export const education: Experience[] = [
  {
    company: "Universiti Malaya",
    role: "Master of Software Engineering (Software Technology)",
    period: "Oct 2025 — Jul 2027",
    description:
      "Focusing on clean architecture, operational stability, and consistent engineering standards. Coursework includes Architecting Software Systems and Framework-Based Software Design",
  },
  {
    company: "Tunku Abdul Rahman University of Management & Technology",
    role: "Bachelor of Computer Science (Software Engineering)",
    period: "Jun 2020 — Jun 2023",
    description: "Graduated with a CGPA of 3.60/4.00.",
  },
];
