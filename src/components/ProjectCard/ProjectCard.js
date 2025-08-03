import React from 'react';
import { 
  CardContainer, 
  CardImage, 
  CardContent, 
  CardTitle, 
  CardDescription, 
  LanguagesContainer, 
  LanguageTag,
  CardLink 
} from './ProjectCard.styles';

const ProjectCard = ({ image, title, description, githubLink, languages = [] }) => {
  return (
    <CardContainer href={githubLink} target="_blank" rel="noopener noreferrer">
      <CardImage src={image} alt={`${title} screenshot`} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <LanguagesContainer>
          {languages.map((lang, index) => (
            <LanguageTag key={index}>{lang}</LanguageTag>
          ))}
        </LanguagesContainer>
        {}
        <CardLink>View on GitHub →</CardLink>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;