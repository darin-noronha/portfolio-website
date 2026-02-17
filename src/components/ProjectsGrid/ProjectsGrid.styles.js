import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  /* Desktop: 300px cards */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto;    
  padding: 2rem 1rem; 

  /* Mobile: 1 column */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Force single column */
    gap: 1.5rem;
    padding: 2rem 1rem;
  }
`;