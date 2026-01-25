const NavigationBar = () => {
  return (
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
  );
};

export default NavigationBar;
