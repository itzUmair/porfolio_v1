import { useEffect, useState } from "react";
import { Navbar, Footer, AllProjectsCard, Loader } from "./index";
import axios from "../api/axios";
import "../styles/AllProjects.css";
const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projects = await axios.get("getAllProjects");
        setAllProjects(projects.data);
        setContentLoaded(true);
      } catch (error) {
        setMessage("Something went wrong. Please refresh the page.");
      }
    };
    getProjects();
  }, []);
  return (
    <section className="all-projects-section">
      <Navbar />
      {message && <p>{message}</p>}
      {!contentLoaded && <Loader />}
      {contentLoaded && (
        <>
          <h2 className="page-title">All Projects</h2>
          <div className="projects-container">
            {allProjects.map((project) => (
              <AllProjectsCard
                key={project._id}
                name={project.name}
                githubLink={project.repository}
                siteLink={project.url}
                techStack={project.techStack}
                desc={project.description}
                cover={project.coverImageURL}
              />
            ))}
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default AllProjects;
