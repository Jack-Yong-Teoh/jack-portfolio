"use client";

import { useEffect } from "react";
import { projects, experiences, education } from "./_data/homePageData";
import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HomeSection";
import ProjectSection from "./_components/ProjectSection";
import ExperienceSection from "./_components/ExperienceSection";
import EducationSection from "./_components/EducatonSection";
import NavigationBar from "./_components/NavigationBar";
import FooterSection from "./_components/Footer";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home__reveal--visible");
          } else {
            entry.target.classList.remove("home__reveal--visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    const hiddenSections = document.querySelectorAll(".home__reveal");
    hiddenSections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <div className="home__bg-glow" />
      <NavigationBar />

      <main className="home__main">
        <HeroSection />
        <ProjectSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <EducationSection education={education} />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Home;
