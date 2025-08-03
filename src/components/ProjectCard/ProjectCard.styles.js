import styled from 'styled-components';

export const CardContainer = styled.a`
  background-color: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 320px;
  text-decoration: none;
  
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03); /* Increase size by 3% */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); 
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--border);
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700; 
  color: var(--primary-text);
  margin-bottom: 0.75rem;
  font-family: 'EB Garamond', serif;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--secondary-text);
  flex-grow: 1;
  margin-bottom: 1.5rem;
  font-family: 'EB Garamond', serif; 
`;

export const LanguagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const LanguageTag = styled.span`
  background-color: var(--border);
  color: var(--secondary-text);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-family: 'EB Garamond', serif;
`;

export const CardLink = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  align-self: flex-start;
  font-family: 'EB Garamond', serif; 

  ${CardContainer}:hover & {
    text-decoration: underline;
  }
`;