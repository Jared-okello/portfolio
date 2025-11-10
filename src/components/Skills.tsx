import { useState } from "react";

type SkillCategory = {
  category: string;
  skills: Skill[];
};

type Skill = {
  name: string;
  level: string;
};

const skillCategories: SkillCategory[] = [
  {
    category: "Programming & Databases",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Django", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "Pandas", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate" },
    ]
  },
  {
    category: "Networking & Cybersecurity",
    skills: [
      { name: "LAN/WAN Configuration", level: "Intermediate" },
      { name: "Routing & Switching", level: "Intermediate" },
      { name: "IP Addressing", level: "Advanced" },
      { name: "Cisco Packet Tracer", level: "Intermediate" },
      { name: "Network Security", level: "Intermediate" },
      { name: "Firewall Configuration", level: "Basic" },
    ]
  },
  {
    category: "Software Development & DevOps",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Eclipse", level: "Intermediate" },
      { name: "Docker (Basics)", level: "Basic" },
      { name: "Render", level: "Intermediate" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
      { name: "Agile Methodology", level: "Intermediate" },
    ]
  },
  {
    category: "Systems Support",
    skills: [
      { name: "Hardware Troubleshooting", level: "Advanced" },
      { name: "Software Troubleshooting", level: "Advanced" },
      { name: "Windows OS Support", level: "Advanced" },
      { name: "macOS Support", level: "Intermediate" },
      { name: "User Account Administration", level: "Intermediate" },
      { name: "System Maintenance", level: "Intermediate" },
      { name: "Technical Support", level: "Advanced" },
    ]
  },
  {
    category: "Data Analysis & AI/ML",
    skills: [
      { name: "Data Visualization", level: "Intermediate" },
      { name: "Machine Learning", level: "Intermediate" },
      { name: "Data Processing", level: "Intermediate" },
      { name: "Statistical Analysis", level: "Intermediate" },
      { name: "Matplotlib", level: "Intermediate" },
      { name: "NLTK", level: "Intermediate" },
    ]
  }
];

function Skills() {
  const [skills] = useState<SkillCategory[]>(skillCategories);

  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-categories">
        {skills.map((category) => (
          <div key={category.category} className="skill-category">
            <h3 className="skill-category-title">{category.category}</h3>
            <ul className="skills-list">
              {category.skills.map((skill) => (
                <li key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;