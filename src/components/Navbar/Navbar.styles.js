import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 4rem;
  background-color: var(--background);
  
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Change to flex-end */
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;


// A new container to group links on the right
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem; /* Space between "Home" and "Projects" */

  @media (max-width: 768px) {
    display: none; /* Hide text links on smaller screens */
  }
`;

export const NavLink = styled.a`
  font-size: 1rem;
  color: var(--secondary-text);
  padding: 0.5rem 0;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--primary-text);
  }
`;

