import React from 'react';
import { GridContainer } from './ProjectsGrid.styles';
import ProjectCard from '../ProjectCard/ProjectCard';

// Add " = []" after projects to prevent the crash
const ProjectsGrid = ({ projects = [] }) => {
  if (!projects.length) return <p>No projects yet.</p>;

  return (
    <GridContainer id="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </GridContainer>
  );
};

export default ProjectsGrid;