import IMAGES from "@/assets";
import { techStack } from "../_data/homePageData";
import { useTranslate } from "@tolgee/react";

const HeroSection = () => {
  const { t } = useTranslate();

  return (
    <section id="hero" className="home__hero home__reveal">
      <div className="home__hero-top">
        <div className="home__hero-content">
          <div className="home__stagger-el">
            <span className="home__hero-overline">
              {t("hero.introduction")}
            </span>
          </div>
          <div className="home__stagger-el">
            <h1 className="home__hero-title">
              {t("hero.headline_1")}
              <br />
              {t("hero.headline_2")}
            </h1>
          </div>
          <div className="home__stagger-el">
            <p className="home__hero-subtitle">{t("hero.subtitle")}</p>
          </div>
        </div>

        <div
          className="home__hero-avatar-container home__stagger-el"
          role="button"
          tabIndex={0}
          aria-label="Toggle profile image"
        >
          <div className={`home__hero-avatar-flip is-real`}>
            <div className="home__hero-avatar-face home__hero-avatar-face--real">
              <img
                src={IMAGES.profile_image}
                alt="Real profile picture"
                className="home__hero-avatar-img"
              />
            </div>
            <div className="home__hero-avatar-face home__hero-avatar-face--cartoon">
              <img
                src={IMAGES.cartoon_profile_image}
                alt="Cartoon profile picture"
                className="home__hero-avatar-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home__tech-stack home__stagger-el">
        <div className="home__tech-grid">
          {techStack.map((tech) => (
            <div key={tech.name} className="home__tech-item" title={tech.name}>
              <img src={tech.icon} alt={tech.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
