import React from 'react';
import { 
  CardContainer, CardHeader, StatusDot, CardBody, 
  ProjectTitle, ProjectDesc, TechStack, ProjectLink 
} from './ProjectCard.styles';

const ProjectCard = ({ project }) => {
  return (
    // The entire card now handles the link routing
    <CardContainer href={project.link} target="_blank" rel="noopener noreferrer">
      <CardHeader>
        <span>~/projects/{project.title.toLowerCase().replace(/\s+/g, '_')}</span>
        <StatusDot title="Status: Online" />
      </CardHeader>
      
      <CardBody>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDesc>{project.description}</ProjectDesc>
        
        {/* Simplified text per your request */}
        <TechStack>
          language: {JSON.stringify(project.tech)}
        </TechStack>

        <ProjectLink>
          code <span>→</span>
        </ProjectLink>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;