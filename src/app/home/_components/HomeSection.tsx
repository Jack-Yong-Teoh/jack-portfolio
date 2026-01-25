import { techStack } from "../_data/homePageData";

const HeroSection = () => {
  return (
    <section id="hero" className="home__hero home__reveal">
      <div className="home__hero-top">
        <div className="home__hero-content">
          <div className="home__stagger-el">
            <span className="home__hero-overline">Hi, I am Teoh Jack Yong</span>
          </div>
          <div className="home__stagger-el">
            <h1 className="home__hero-title">
              Building my future,
              <br />
              one step at a time
            </h1>
          </div>
          <div className="home__stagger-el">
            <p className="home__hero-subtitle">
              I'm a Full-Stack Engineer focused on building scalable, reliable,
              and well-structured web applications.
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
