import Github from "../assets/github_link.svg";
import Visit from "../assets/visit_button.svg";
import "../styles/ProjectCard.css";

const ProjectCard = ({
  name,
  githubLink,
  siteLink,
  techStack,
  desc,
  cover,
}) => {
  return (
    <div className="project-card">
      <img src={cover} alt="" />
      <div className="details">
        <div className="header">
          <h3 className="project-name">{name}</h3>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <img src={Github} alt="" />
          </a>
          <a href={siteLink} target="_blank" rel="noreferrer">
            <img src={Visit} alt="" />
          </a>
        </div>
        <p className="tech-stack">
          <span>tech stack:</span>
          {techStack.map((tech, id) => (
            <span key={id} className="tech">
              {tech}
            </span>
          ))}
        </p>
        <p className="description">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
