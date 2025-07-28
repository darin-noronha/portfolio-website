import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 320px; /* Add a fixed width for consistency */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
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
  font-weight: 500;
  color: var(--primary-text);
  margin-bottom: 0.75rem;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--secondary-text);
  flex-grow: 1;
  margin-bottom: 1.5rem;
`;

export const CardLink = styled.a`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;