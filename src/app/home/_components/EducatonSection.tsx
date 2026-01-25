import { Education } from "@/types/home";
import { useTranslate } from "@tolgee/react";

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  const { t } = useTranslate();

  return (
    <section className="home__section home__reveal">
      <h2 className="home__section-header home__stagger-el">
        {t("navigation.education")}
      </h2>
      <div className="home__list">
        {education.map((edu, index) => (
          <div key={index} className="home__list-item home__stagger-el">
            <div className="home__list-left">
              <div className="home__list-role">{t(edu.degree)}</div>
              <div className="home__list-company">{edu.university}</div>
              <div className="home__list-date">{t(edu.period)}</div>
            </div>
            <div className="home__list-right">
              <p className="home__list-details">{t(edu.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
