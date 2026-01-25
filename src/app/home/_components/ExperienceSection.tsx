import { Experience } from "@/types/home";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
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
  );
};

export default ExperienceSection;
