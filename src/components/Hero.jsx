import earthImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Explore Our Solar<br />System Through Data</h1>
        <p>
          Understand the planets not just by name, but by measurable facts. From
          size and mass to gravity and density, this page breaks down the solar
          system in a clear, data-driven way.
        </p>
        <div className="hero-buttons">
          <a href="www.tsacademyonline.com" className="btn-primary">Explore the Data</a>
          <a href="#contact-section" className="btn-outline">Contact Us</a>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={earthImg}
          alt="Earth Globe"
        />
      </div>
    </section>
  );
};

export default Hero;
