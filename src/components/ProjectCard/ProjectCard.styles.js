import styled from 'styled-components';
import { motion } from 'framer-motion';

// We change this to motion.a to make the entire card a clickable link
export const CardContainer = styled(motion.a)`
  background-color: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none; /* Prevents underline on the whole card */
  color: inherit; /* Keeps your text colors intact */
  transition: transform 0.2s ease, border-color 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
  }
`;

export const CardHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: var(--secondary-text);
`;

export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: var(--accent-color);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-color);
`;

export const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--primary-text);
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const ProjectDesc = styled.p`
  color: var(--secondary-text);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

export const TechStack = styled.div`
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: #e5c07b; 
  margin-bottom: 1.5rem;
`;

// Changed from styled.a to styled.div since the parent is now the link
export const ProjectLink = styled.div`
  color: var(--accent-color);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;