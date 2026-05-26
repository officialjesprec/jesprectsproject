
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-about">
        <h3>About</h3>
        <p>Jesutobiloba, Erijesu and co</p>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>
          &copy;2026 Design by{" "}
          <a href="https://amakandukwu.com/" target="_blank" rel="noreferrer">
            Amaka
          </a>{" "}
          &amp;{" "}
          <a
            href="https://www.linkedin.com/in/ifeomaokocha"
            target="_blank"
            rel="noreferrer"
          >
            Ifeoma A
          </a>
          .
          <br />
          Built by{" "}
          <a
            href="https://github.com/Erijesu0/Group-15-Capstone-project-phoenix.git"
            target="_blank"
            rel="noreferrer"
          >
            Phoenix Cohort: Group 15
          </a>
          . All rights reserved
        </p>

        <a
          href="https://tsacademyonline.com/"
          target="_blank"
          rel="noreferrer"
          className="footer-ts-link"
        >
          TSAcademy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
