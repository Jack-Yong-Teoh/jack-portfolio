import {
  Project,
  Experience,
  Education,
  TechStackItem,
} from "../../../types/home";

export const projects: Project[] = [
  {
    title: "AI Cache Saver",
    description: "project.project_1_description",
    link: "https://github.com/Jack-Yong-Teoh/ai-cache-saver",
  },
  {
    title: "MERN Task Manager",
    description: "project.project_2_description",
    link: "https://github.com/Jack-Yong-Teoh/mern-task-management-system",
  },
  {
    title: "FitBro V2: AI Diet System",
    description: "project.project_3_description",
    link: "https://github.com/Jack-Yong-Teoh/FitBro-V2-Image-recognition-diet-system",
  },
];

export const experiences: Experience[] = [
  {
    company: "Axflix Technologies",
    role: "experience.role_1",
    period: "experience.period_1",
    description: "experience.description_1",
  },
  {
    company: "ARB Berhad",
    role: "experience.role_2",
    period: "experience.period_2",
    description: "experience.description_2",
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
    university: "University of Malaya",
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
