import Github from "../assets/github_link.svg";
import Visit from "../assets/visit_button.svg";
import "../styles/AllProjectsCard.css";

const AllProjectsCard = ({
  name,
  githubLink,
  siteLink,
  techStack,
  desc,
  cover,
}) => {
  return (
    <div className="all-projects-card">
      <img src={cover} alt="" loading="lazy" />
      <div className="details">
        <h3 className="project-name">{name}</h3>
        <p className="tech-stack">
          <span>tech stack:</span>
          {techStack.map((tech, id) => (
            <span key={id} className="tech">
              {tech}
            </span>
          ))}
        </p>
        <p className="description">{desc}</p>
        <div className="action-btn-container">
          <a href={githubLink} target="_blank" rel="noreferrer" title="Github">
            Repository
          </a>
          <a href={siteLink} target="_blank" rel="noreferrer" title="Site">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsCard;
