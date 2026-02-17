import React from 'react';
import { 
  CardContainer, 
  CardTitle, 
  CardDescription, 
  LanguagesContainer, 
  LanguageTag, 
  CardContent, 
  CardLink,
  CardImage // <--- Make sure this is imported
} from './ProjectCard.styles';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  // 1. Destructure the 'image' property
  const { title, description, tech, link, image } = project;

  return (
    <CardContainer>
      <CardLink href={link} target="_blank" rel="noopener noreferrer">
        
        {/* 2. THE FIX: Render image if it exists, otherwise render Folder Icon */}
        {image ? (
          <CardImage src={image} alt={title} />
        ) : (
          <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--accent-color)' }}>
            <div className="folder-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="external-link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </header>
        )}

        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <LanguagesContainer>
            {tech && tech.map((item, index) => (
              <LanguageTag key={index}>{item}</LanguageTag>
            ))}
          </LanguagesContainer>
        </CardContent>
      </CardLink>
    </CardContainer>
  );
};

export default ProjectCard;