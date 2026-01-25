import { Experience } from "@/types/home";
import { useTranslate } from "@tolgee/react";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  const { t } = useTranslate();

  return (
    <section id="experience" className="home__section home__reveal">
      <h2 className="home__section-header home__stagger-el">
        {t("navigation.experience")}
      </h2>
      <div className="home__list">
        {experiences.map((exp, index) => (
          <div key={index} className="home__list-item home__stagger-el">
            <div className="home__list-left">
              <div className="home__list-role">{t(exp.role)}</div>
              <div className="home__list-company">{exp.company}</div>
              <div className="home__list-date">{t(exp.period)}</div>
            </div>
            <div className="home__list-right">
              <p className="home__list-details">{t(exp.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
