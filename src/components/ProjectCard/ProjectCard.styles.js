import styled from 'styled-components';

export const CardContainer = styled.div`
  background: var(--card-bg);
  border-radius: var(--border-radius-card);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid var(--border);
  
  /* 1. Remove padding from the container so image touches edges */
  padding: 0; 
  overflow: hidden; 
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardImage = styled.img`
  /* 2. Force image to fill width and set fixed height */
  width: 100%;
  height: 200px; 
  object-fit: cover; 
  object-position: center;
  border-bottom: 1px solid var(--border);
  display: block; /* Removes tiny gap at bottom of image */
`;

/* 3. Wrapper for text to give it padding back */
export const CardContent = styled.div`
  padding: 1.5rem; 
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: var(--primary-text);
  font-size: 1.25rem;
  font-family: var(--font-heading);
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: var(--accent-color);
  }
`;

export const CardDescription = styled.div`
  color: var(--secondary-text);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1; 
`;

export const LanguagesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const LanguageTag = styled.li`
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--secondary-text);
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
`;