import profileImg from "../assets/profile.jpg";

type HeroProps = {
  onSectionChange: (section: string) => void;
};

function Hero({ onSectionChange }: HeroProps) {
  return (
    <section className="hero-section">
      <img src={profileImg} alt="Jared Okello" className="hero-photo" />
      <h1 className="intro-name">Hello, I'm Jared Okello</h1>
      <p className="hero-tagline">
        <strong className="intro-a">Full Stack Developer</strong> specializing in modern web technologies and passionate about building innovative solutions.
      </p>
      <div className="hero-actions">
        <button
          className="hero-btn"
          onClick={() => onSectionChange("projects")}
        >
          View My Work
        </button>
        <button className="hero-btn" onClick={() => onSectionChange("contact")}>
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default Hero;