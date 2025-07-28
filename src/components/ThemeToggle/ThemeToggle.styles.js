import styled from 'styled-components';

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Add this to make the SVG icons use the text color */
  color: var(--primary-text); 
`;