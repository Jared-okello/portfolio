function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-icon">
          <span role="img" aria-label="code">
            💻
          </span>
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-intro">
            I'm <span className="about-highlight">JARED OKELLO</span>, a highly motivated{" "}
            <span className="about-highlight">Computer Science Graduate</span> with a proven 
            track record in developing and deploying practical software solutions.
          </p>
          <p className="about-background">
            <strong>Expertise & Education:</strong> I graduated with honors in{" "}
            <span className="about-highlight">Computer Science</span> from{" "}
            <span className="about-highlight">Laikipia University</span> in{" "}
            <span className="about-highlight">2025</span>. My academic and professional journey 
            has equipped me with demonstrated expertise in{" "}
            <span className="about-highlight">software development</span>,{" "}
            <span className="about-highlight">data science</span>, and{" "}
            <span className="about-highlight">analytics</span>.
          </p>
          <p className="about-interests">
            <strong>Continuous Learning:</strong> I am currently advancing my skills through{" "}
            <span className="about-highlight">Cisco Networking and Cybersecurity</span> courses 
            to enhance my digital literacy and stay at the forefront of the evolving tech industry.
          </p>
          <p className="about-aspirations">
            <strong>Vision & Mission:</strong> I am eager to contribute my technical skills and 
            innovative problem-solving abilities with a passion for{" "}
            <span className="about-highlight">leveraging technology to enhance public service delivery</span> 
            and drive <span className="about-highlight">Kenya's digital transformation</span>. 
            My goal is to be at the forefront of creating impactful solutions that serve communities 
            and advance our nation's technological capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;