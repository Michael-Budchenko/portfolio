import React from "react";
import Project from "../components/project/Project";

import { projects } from "../components/helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((projects, id) => {
            return (
              <Project
                key={id}
                title={projects.title}
                img={projects.img}
                id={id}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
