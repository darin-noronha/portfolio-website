import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

export const NavContainer = styled.nav`
  position: sticky; 
  top: 0;
  width: 100%; 
  background-color: var(--background);
  z-index: 100;
  transition: var(--theme-transition);
  
  /* Ensure no border exists */
  border: none;
  box-shadow: none;
  
  /* DESKTOP LAYOUT */
  /* ... existing layout code ... */
  height: 70px;
  padding: 0 2rem; 
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "left center right";
  align-items: center;

  /* MOBILE LAYOUT */
  @media (max-width: 768px) {
    /* ... existing mobile code ... */
    height: auto;
    padding: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "left right"
      "center center";
    row-gap: 1rem;
  }
`;

/* ... NavName ... */

export const NavLinks = styled.div`
  grid-area: center;
  display: flex;
  
  /* CHANGED: Set to transparent if you want to remove the 'pill' background */
  /* If you want the grey pill back, use: var(--border) */
  background-color: transparent; 
  
  border-radius: 30px;
  padding: 4px;
  position: relative;
  justify-self: center;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    max-width: 300px;
  }
`;

export const NavName = styled(Link)`
  grid-area: left;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--primary-text);
  font-weight: 700;
  justify-self: start;
`;



export const RightSection = styled.div`
  grid-area: right;
  display: flex;
  align-items: center;
  justify-self: end;
  
  /* Desktop margin */
  margin-right: 4rem; 

  /* Mobile: Remove margin so it fits */
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const MagicInk = styled.div`
  position: absolute;
  top: 4px; 
  height: calc(100% - 8px);
  background-color: var(--card-bg);
  border-radius: 40px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  left: ${props => props.left || 0}px;
  width: ${props => props.width || 0}px;
  opacity: ${props => props.width ? 1 : 0};
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const NavLink = styled(HashLink)`
  padding: 0.5rem 1.2rem;
  color: var(--secondary-text);
  text-decoration: none;
  z-index: 2;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  transition: color 0.2s ease;
  animation: ${fadeIn} 0.5s ease;

  &:hover { 
    color: var(--primary-text); 
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

export const PortalLink = styled(Link)`
  margin-right: 0;
  font-family: monospace;
  font-size: 0.85rem;
  text-decoration: none;
  color: var(--secondary-text);
  opacity: 0.7;
  transition: all 0.2s ease;
  
  &:hover { 
    opacity: 1; 
    color: var(--accent-color); 
    transform: translateY(-1px);
  }
`;