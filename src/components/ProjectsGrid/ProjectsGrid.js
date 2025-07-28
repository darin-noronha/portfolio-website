import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsSection, GridContainer, SectionTitle } from './ProjectsGrid.styles';

// Replace with your actual project data
const projects = [
  {
    image: '/es.jpg',
    title: '',
    description: 'A web-based data visualization tool built with D3.js and React, designed to render large datasets in real-time.',
    githubLink: 'https://github.com/your-username/project-alpha'
  },
  {
    image: 'mark.png',
    title: 'Sequential Calculator (+-x/)',
    description: 'A concurrent file server implemented in C++ that handles multiple client connections using thread pools.',
    githubLink: 'https://github.com/your-username/project-beta'
  },
  {
    image: '/images/project3.png',
    title: 'Project Gamma',
    description: 'An embedded system firmware for a custom IoT device, focusing on low-power operation and BLE communication.',
    githubLink: 'https://github.com/your-username/project-gamma'
  }
];

const ProjectsGrid = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </GridContainer>
    </ProjectsSection>
  );
};

export default ProjectsGrid;