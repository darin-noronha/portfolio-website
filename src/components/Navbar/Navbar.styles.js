/* src/components/Navbar/Navbar.styles.js */
import styled, { keyframes } from 'styled-components'; // Removed 'css' import as we don't need it anymore
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

export const NavContainer = styled.nav`
  position: sticky; 
  top: 0;
  width: 100%; 
  z-index: 100;
  padding: 0 2rem; 
  
  /* 1. THE FIX: Animate properties directly based on the prop */
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* Matches your theme transition */
  
  /* Height morphs smoothly between 70px (Home) and 90px (Art) */
  height: ${props => props.$isArtMode ? '90px' : '70px'};
  
  /* Background fades smoothly between Solid (Home) and Transparent (Art) */
  background-color: ${props => props.$isArtMode ? 'transparent' : 'var(--background)'};
  
  /* Grid Layout Setup */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "left center right";
  align-items: center;

  /* 2. THE FIX: The Fog Curtain exists PERMANENTLY, we just fade it */
  &::before {
    content: '';
    position: absolute;
    top: 0; 
    left: 0; 
    right: 0;
    z-index: -1;
    
    /* Always tall enough for the art mode */
    height: calc(100% + 40px);
    
    /* The Gradient Logic */
    background: linear-gradient(
      to bottom, 
      var(--background) 0%, 
      var(--background) 40%, 
      rgba(0,0,0,0) 100%
    );
    
    mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    pointer-events: none;
    
    /* 3. THE MAGIC: Smoothly fade opacity instead of display:none */
    opacity: ${props => props.$isArtMode ? 1 : 0};
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* MOBILE LAYOUT */
  @media (max-width: 768px) {
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