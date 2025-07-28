import React from 'react';
import { CardContainer, CardImage, CardContent, CardTitle, CardDescription, CardLink } from './ProjectCard.styles';

const ProjectCard = ({ image, title, description, githubLink }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={`${title} screenshot`} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLink href={githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub &rarr;
        </CardLink>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;