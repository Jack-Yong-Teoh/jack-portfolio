"use client";

import React, { useEffect } from "react";

// --- Types ---
interface Project {
  title: string;
  description: string;
  link: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

// --- Data ---
const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A high-performance analytics dashboard built with Next.js and GraphQL. Visualizing sales data with Recharts.",
    link: "#",
  },
  {
    title: "AI Image Generator",
    description:
      "Full-stack application utilizing OpenAI API to generate images based on text prompts. Built with Node.js and React.",
    link: "#",
  },
  {
    title: "Portfolio v1",
    description:
      "My previous portfolio built with vanilla JavaScript and SCSS. A testament to how far I've come.",
    link: "#",
  },
];

const experiences: Experience[] = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Engineer",
    period: "2021 — Present",
    description:
      "Leading the frontend team in migrating a legacy monolithic architecture to a micro-frontend ecosystem using React and Webpack Module Federation.",
  },
  {
    company: "Creative Agency",
    role: "Web Developer",
    period: "2019 — 2021",
    description:
      "Developed award-winning marketing websites for Fortune 500 clients. Specialized in GSAP animations and WebGL interactions.",
  },
];

export default function Home() {
  // --- Scroll Logic ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home__reveal--visible");
          } else {
            // Optional: Remove this else block if you want animations to only happen once
            entry.target.classList.remove("home__reveal--visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger slightly earlier
        rootMargin: "0px 0px -100px 0px",
      },
    );

    const hiddenSections = document.querySelectorAll(".home__reveal");
    hiddenSections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* 0. Ambient Background Glow */}
      <div className="home__bg-glow" />

      {/* 1. Top Navigation */}
      <nav className="home__nav">
        <ul className="home__nav-list">
          <li>
            <a href="#hero" className="home__nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="home__nav-link">
              Work
            </a>
          </li>
          <li>
            <a href="#experience" className="home__nav-link">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="home__nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main className="home__main">
        {/* 2. Hero Section */}
        <section id="hero" className="home__hero home__reveal">
          <div className="home__hero-content">
            {/* Added stagger-el classes for sequential animation */}
            <div className="home__stagger-el">
              <span className="home__hero-overline">Welcome</span>
            </div>
            <div className="home__stagger-el">
              <h1 className="home__hero-title">
                Designing the future,
                <br />
                one pixel at a time.
              </h1>
            </div>
            <div className="home__stagger-el">
              <p className="home__hero-subtitle">
                I'm a Full Stack Developer passionate about building accessible,
                pixel-perfect, and performant web experiences.
              </p>
            </div>
          </div>

          <div className="home__hero-avatar-container home__stagger-el">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEhWeugnbQQ8g/profile-displayphoto-crop_800_800/B56ZutrK3sIMAM-/0/1768145334570?e=1770854400&v=beta&t=Vt7ocu_92MwHVfxzL4jFiDZcaQ7HKxr0h9zouMflKR4"
              alt="Profile Picture"
              className="home__hero-avatar"
            />
          </div>
        </section>

        {/* 3. GitHub Projects Section */}
        <section id="projects" className="home__section home__reveal">
          <h2 className="home__section-header home__stagger-el">
            Selected Work
          </h2>
          <div className="home__grid">
            {projects.map((project, index) => (
              <article key={index} className="home__card home__stagger-el">
                <h3 className="home__card-title">{project.title}</h3>
                <p className="home__card-desc">{project.description}</p>
                <a href={project.link} className="home__card-link">
                  View Project <span style={{ marginLeft: "6px" }}>&rarr;</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Experience Section */}
        <section id="experience" className="home__section home__reveal">
          <h2 className="home__section-header home__stagger-el">Experience</h2>
          <div className="home__list">
            {experiences.map((exp, index) => (
              <div key={index} className="home__list-item home__stagger-el">
                <div className="home__list-left">
                  <div className="home__list-role">{exp.role}</div>
                  <div className="home__list-company">{exp.company}</div>
                  <div className="home__list-date">{exp.period}</div>
                </div>
                <div className="home__list-right">
                  <p className="home__list-details">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Education Section */}
        <section className="home__section home__reveal">
          <h2 className="home__section-header home__stagger-el">Education</h2>
          <div className="home__list">
            <div className="home__list-item home__stagger-el">
              <div className="home__list-left">
                <div className="home__list-role">Bachelor of Science</div>
                <div className="home__list-company">Computer Science</div>
                <div className="home__list-date">2015 — 2019</div>
              </div>
              <div className="home__list-right">
                <p className="home__list-details">
                  University of Technology. Graduated with Honors. Focus on
                  Software Architecture and Algorithms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section id="contact" className="home__section home__reveal">
          <div className="home__stagger-el">
            <h2 className="home__section-header">Let's Connect</h2>
          </div>
          <div className="home__stagger-el">
            <p className="home__hero-subtitle" style={{ marginBottom: "40px" }}>
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, my inbox is always open.
            </p>
          </div>
          <div className="home__stagger-el">
            <a
              href="mailto:email@example.com"
              className="home__card-link"
              style={{ fontSize: "18px" }}
            >
              Say Hello &rarr;
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
