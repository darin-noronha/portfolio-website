import styled from 'styled-components';

// Add this new style block for the section tag
export const ProjectsSection = styled.section`
  scroll-margin-top: 70px; /* This must match your navbar's height */
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: var(--primary-text);
  padding-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: flex;         /* Use Flexbox instead of Grid */
  flex-wrap: wrap;       /* Allow cards to wrap to the next line */
  justify-content: center; /* Center the cards horizontally */
  gap: 2rem;
  padding-bottom: 4rem;
`;