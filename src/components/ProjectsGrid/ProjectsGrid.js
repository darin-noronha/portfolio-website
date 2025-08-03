import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectsSection, GridContainer, SectionTitle } from './ProjectsGrid.styles';

const projects = [
  {
    image: '/es.jpg',
    title: 'Motor Control System',
    description: 'A motor control system designed to manage the speed and direction of a DC motor using PWM signals via SPI. This project was used as a scable prototype for a clients seating application.',
    githubLink: 'https://github.com/darin-noronha/motor_application',
    languages: ['C']
  },
  {
    image: 'mark.png',
    title: 'Sequential Calculator (+-x/)',
    description: 'Designed and implemented a sequential calculator in Verilog using a Finite State Machine (FSM) to manage operations. The project is built with Register-Transfer Level (RTL) logic and performs multiplication, addition, subtraction, and division.',
    githubLink: 'https://github.com/darin-noronha/FPGA_Calculator',
    languages: ['Verilog, SystemVerilog']
  },
  {
    image: 'port.jpg',
    title: 'Portfolio Website',
    description: 'this website!',
    githubLink: 'https://github.com/darin-noronha/portfolio-website',
    languages: ['ReactJS, HTML, CSS']
  }
];

const ProjectsGrid = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>projects</SectionTitle>
      <GridContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </GridContainer>
    </ProjectsSection>
  );
};

export default ProjectsGrid;