import { ProjectCard } from "./index.js";
import "../styles/Projects.css";
import { useEffect, useState } from "react";
import axios from "../api/axios.js";

const Projects = ({ projectsRef }) => {
  const [topProjects, setTopProjects] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const getProjects = async () => {
      try {
        const projects = await axios.get("getTopProjects");
        setTopProjects(projects.data);
      } catch (error) {
        setMessage("Something went wrong. Please reload the site");
      }
    };
    getProjects();
  }, []);
  return (
    <section ref={projectsRef} className="projects-section">
      <h2 className="page-title">Projects</h2>
      {topProjects.map((project) => (
        <ProjectCard
          key={project._id}
          name={project.name}
          githubLink={project.repository}
          siteLink={project.url}
          techStack={project.techStack}
          desc={project.description}
          cover={project.coverImageURL}
        />
      ))}
      <button className="cta-button" onClick={() => window.open("/projects")}>
        More Projects
      </button>
    </section>
  );
};

export default Projects;
