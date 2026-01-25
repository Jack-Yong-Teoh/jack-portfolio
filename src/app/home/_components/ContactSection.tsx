const ContactSection = () => {
  return (
    <section id="contact" className="home__section home__reveal">
      <div className="home__stagger-el">
        <h2 className="home__section-header">Let's Connect</h2>
      </div>
      <div className="home__stagger-el">
        <p className="home__hero-subtitle bottom">
          Feel free to reach out if you have a question, want to collaborate, or
          just want to connect, my inbox is always open.
        </p>
      </div>
      <div className="home__stagger-el">
        <div className="home__contact-links">
          <a
            href="mailto:yongjack010413@gmail.com"
            className="home__social-btn"
            title="Email"
          >
            <div className="home__social-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <span className="home__social-label">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jack-yong-teoh-6334bb243/"
            className="home__social-btn"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="home__social-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.391c.435-.671 1.213-1.627 2.945-1.627 2.151 0 3.763 1.405 3.763 4.429v5.576zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.959.77-1.703 1.957-1.703 1.187 0 1.915.744 1.929 1.703 0 .946-.742 1.704-1.971 1.704zm1.581 11.597H3.635V9.683h3.283v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </div>
            <span className="home__social-label">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Jack-Yong-Teoh"
            className="home__social-btn"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="home__social-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <span className="home__social-label">GitHub</span>
          </a>

          <a
            href="https://twitter.com/jackyongteoh"
            className="home__social-btn"
            title="X (Twitter)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="home__social-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.648l-5.195-6.791-5.946 6.791h-3.308l7.73-8.835L.424 2.25h6.837l4.713 6.231 5.684-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <span className="home__social-label">TWITTER</span>
          </a>

          <a
            href="https://www.instagram.com/jackyongt_/"
            className="home__social-btn"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="home__social-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </div>
            <span className="home__social-label">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
