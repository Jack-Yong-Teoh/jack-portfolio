import { Project } from "../../../types/home";
import { useTranslate } from "@tolgee/react";

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const { t } = useTranslate();

  const handleRedirect = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section id="projects" className="home__section home__reveal">
      <h2 className="home__section-header home__stagger-el">
        {t("project.related_project")}
      </h2>

      <div className="home__grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="home__card home__stagger-el"
            role="link"
            tabIndex={0}
            onClick={() => handleRedirect(project.link)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleRedirect(project.link);
              }
            }}
          >
            <h3 className="home__card-title">{project.title}</h3>
            <p className="home__card-desc">{t(`${project.description}`)}</p>

            <div className="home__card-link">
              {t("project.view_project")}{" "}
              <span style={{ marginLeft: "6px" }}>&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
