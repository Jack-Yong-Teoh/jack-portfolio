import { Education } from "@/types/home";

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="home__section home__reveal">
      <h2 className="home__section-header home__stagger-el">Education</h2>
      <div className="home__list">
        {education.map((edu, index) => (
          <div key={index} className="home__list-item home__stagger-el">
            <div className="home__list-left">
              <div className="home__list-role">{edu.degree}</div>
              <div className="home__list-company">{edu.university}</div>
              <div className="home__list-date">{edu.period}</div>
            </div>
            <div className="home__list-right">
              <p className="home__list-details">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
