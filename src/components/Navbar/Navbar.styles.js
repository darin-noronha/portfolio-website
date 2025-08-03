import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
  justify-content: space-between;
  z-index: 100;
  gap: 1rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const NavName = styled(Link)`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 500;
  color: var(--primary-text);
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 1.25rem; 
  }
`;



export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--border);
  border-radius: 30px;
  padding: 1.5px;
  position: relative;
  
`;

export const MagicInk = styled.div`
  position: absolute;
  top: 4px;
  height: calc(100% - 8px);
  background-color: var(--card-bg);
  border-radius: 40px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  left: ${props => props.left || 0}px;
  width: ${props => props.width || 0}px;
  opacity: ${props => (props.width ? 1 : 0)};
`;

export const NavLink = styled(HashLink)`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--secondary-text);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  position: relative;
  z-index: 2;
  transition: color 0.4s ease;

  &:hover {
    color: var(--primary-text);
  }

`;
