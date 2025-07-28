import styled from 'styled-components';

export const HeroContainer = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--border);
  scroll-margin-top: 70px; /* Add this line */
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary-text);
  margin-bottom: 0.5rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--accent);
  margin-bottom: 1.5rem;
`;

export const HeroBio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--secondary-text);
  max-width: 600px;
  margin-bottom: 2rem;
`;

export const InterestButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InterestButton = styled.button`
  font-family: 'EB Garamond', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background-color: var(--card-bg);
  color: var(--primary-text);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--primary-text);
    color: var(--card-bg);
    border-color: var(--primary-text);
  }
`;