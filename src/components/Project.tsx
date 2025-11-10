import { useState } from "react";
import mineralDetectionImage from '/assets/mineral-detection-screenshot.png';


type Project = {
  name: string;
  description: string;
  technologies: string[];
  objectives: string[];
  achievements: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
};

const initialProjects: Project[] = [
  {
    name: "AI-Powered Mineral Deposit Detection System",
    description: "Final year project utilizing machine learning to identify potential mineral deposits with high accuracy for geological survey applications.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    objectives: [
      "Develop an accurate ML model for mineral deposit prediction",
      "Process and analyze geological survey data",
      "Create a user-friendly interface for geologists"
    ],
    achievements: [
      "Achieved 85% prediction accuracy using ensemble methods",
      "Successfully processed complex geological datasets",
      "Reduced manual survey time by 60% through automation"
    ],
    liveLink: "insert link here if available",
    githubLink: "https://github.com/Jared-okello/mineral-deposit-prediction",
   image: mineralDetectionImage,
  },
  {
    name: "Automated Employee Leave Management System",
    description: "A comprehensive web application for streamlining employee leave requests, approvals, and tracking in organizations.",
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "Render", "JavaScript"],
    objectives: [
      "Automate leave application and approval workflow",
      "Provide real-time leave balance tracking",
      "Generate comprehensive leave reports for HR"
    ],
    achievements: [
      "Reduced leave processing time by 75%",
      "Implemented role-based access control for managers and HR",
      "Deployed successfully on Render with PostgreSQL database"
    ],
    liveLink: "https://jared-leave-system.onrender.com",
    githubLink: "https://github.com/Jared-okello/leave-management-system",
    image: "/assets/leave-management-screenshot.png",
  },
  {
    name: "Laikipia University Student Portal Prototype",
    description: "A modern student portal prototype featuring course registration, grade viewing, and academic resources.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
    objectives: [
      "Create an intuitive interface for student academic management",
      "Implement secure authentication and authorization",
      "Provide real-time academic information access"
    ],
    achievements: [
      "Designed user-friendly dashboard for students and faculty",
      "Implemented RESTful API for academic data management",
      "Created responsive design accessible on all devices"
    ],
    githubLink: "https://github.com/Jared-okello/student-portal",
    image: "/assets/student-portal-screenshot.png",
  },
  {
    name: "Automated Healthcare FAQ Chatbot",
    description: "An intelligent chatbot designed to answer common healthcare questions and provide medical information.",
    technologies: ["Python", "NLTK", "TensorFlow", "Flask", "React", "SQLite"],
    objectives: [
      "Develop NLP capabilities for understanding medical queries",
      "Provide accurate healthcare information and resources",
      "Reduce burden on healthcare professionals for common inquiries"
    ],
    achievements: [
      "Implemented natural language processing for query understanding",
      "Trained model on medical dataset with 90% intent recognition accuracy",
      "Integrated with healthcare knowledge base for reliable information"
    ],
    githubLink: "https://github.com/Jared-okello/healthcare-chatbot",
    image: "/assets/healthcare-chatbot-screenshot.png",
  },
  {
    name: "Agri-Solutions Platform (Team Project)",
    description: "A comprehensive agricultural solution platform connecting farmers with markets, resources, and modern farming techniques.",
    technologies: ["Django", "PostgreSQL", "React", "Redis", "Docker", "AWS"],
    objectives: [
      "Create a marketplace for agricultural products",
      "Provide farming best practices and educational resources",
      "Connect farmers with buyers and suppliers"
    ],
    achievements: [
      "Developed full-stack platform with team collaboration",
      "Implemented real-time chat feature for farmer-buyer communication",
      "Integrated payment gateway for seamless transactions"
    ],
    githubLink: "https://github.com/Jared-okello/agri-solutions",
    image: "/assets/agri-solutions-screenshot.png",
  },
  {
    name: "Portfolio Website",
    description: "Professional portfolio website showcasing projects, skills, and achievements with modern design principles.",
    technologies: ["React", "TypeScript", "CSS3", "Framer Motion", "Vite"],
    objectives: [
      "Create an engaging and professional online presence",
      "Showcase technical projects and capabilities",
      "Implement responsive design for all devices"
    ],
    achievements: [
      "Developed with modern React best practices and TypeScript",
      "Implemented smooth animations and transitions",
      "Optimized for performance and SEO"
    ],
    liveLink: "https://jaredokello.dev",
    githubLink: "https://github.com/Jared-okello/portfolio",
    image: "/assets/portfolio-screenshot.png",
  },
];

function Project() {
  const [projects] = useState<Project[]>(initialProjects);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            )}
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-details">
              <div className="project-objectives">
                <strong>Objectives:</strong>
                <ul>
                  {project.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-achievements">
                <strong>Achievements:</strong>
                <ul>
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span className="project-tech-item" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;