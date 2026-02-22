import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

export const NavContainer = styled.nav`
  position: sticky; 
  top: 0;
  width: 100%; 
  z-index: 100;
  padding: 0 2rem; 
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  height: 70px; 
  
  /* Background logic */
  background-color: ${props => props.$isArtMode ? 'transparent' : 'var(--background)'};
  
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "left center right";
  align-items: center;

  /* Fog Curtain */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    z-index: -1;
    height: ${props => props.$isArtMode ? '110px' : '100%'};
    background: linear-gradient(to bottom, var(--background) 0%, var(--background) 40%, rgba(0,0,0,0) 100%);
    mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    pointer-events: none;
    opacity: ${props => props.$isArtMode ? 1 : 0};
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 768px) {
    height: auto; 
    padding: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right" "center center";
    row-gap: 1rem;
  }
`;

export const RightSection = styled.div`
  grid-area: right;
  display: flex;
  align-items: center;
  
  /* Pushes the container to the far right of its grid track */
  justify-self: end;
  
  /* Desktop margin: Provides a healthy buffer from the edge */
  margin-right: 4rem; 

  @media (max-width: 768px) {
    /* THE FIX: Changed from 0 to 2rem. 
       This ensures the absolute-positioned arrow never gets cut off 
       by the edge of the mobile screen when it expands. */
    margin-right: 2rem; 
  }
`;
/* --- THE FIX START --- */

export const NavArrow = styled.span`
  color: var(--primary-text);
  opacity: 0;
  width: 0;
  overflow: hidden;
  transition: all 0.35s ease;
  display: inline-block;
  white-space: nowrap;

  /* CASE 1: Right Arrow (Art ->)
     We absolutely position it so it doesn't push the text.
  */
  ${props => props.$direction === 'right' && css`
    position: absolute;
    left: 100%;       /* Start exactly at the right edge of the text */
    top: 50%;         /* Center vertically */
    transform: translateY(-50%); /* Correct vertical alignment */
    padding-left: 6px; /* Visual gap */
  `}

  /* CASE 2: Left Arrow (<- Dev)
     We keep this in flow. Since the container is right-aligned,
     growing to the left naturally pushes outwards without moving the text.
  */
  ${props => props.$direction === 'left' && css`
    margin-right: 0; /* Will grow on hover */
  `}
`;

export const SwitchButton = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  position: relative; /* Anchor for the absolute arrow */
  
  color: var(--secondary-text);
  font-family: monospace;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--primary-text);
    
    ${NavArrow} {
      opacity: 1;
      width: 20px; /* Expands the arrow */
      
      ${props => props.$direction === 'left' && css`
         margin-right: 0.5rem; /* Add gap only when expanded */
      `}
    }
  }
`;

/* --- THE FIX END --- */

/* Standard Nav Components */
export const NavLinks = styled.div`
  grid-area: center;
  display: flex;
  background-color: transparent; 
  border-radius: 30px;
  padding: 4px;
  position: relative;
  justify-self: center;
  @media (max-width: 768px) { width: 100%; justify-content: space-between; max-width: 300px; }
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

export const MagicInk = styled.div`
  position: absolute;
  top: 4px; 
  height: calc(100% - 8px);
  
  /* THE COLOR FIX: Darker grey in Art Mode to be visible against white */
  background-color: ${props => props.$isArtMode ? 'rgba(0, 0, 0, 0.08)' : 'var(--card-bg)'};
  
  border-radius: 40px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  
  /* Positioning props */
  left: ${props => props.left || 0}px;
  width: ${props => props.width || 0}px;
  
  /* Removed the conflicting opacity rule. 
     Opacity is now handled strictly by the inline style prop from Navbar.js 
  */
  
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
  &:hover { color: var(--primary-text); }
  @media (max-width: 768px) { padding: 0.5rem 1rem; font-size: 0.8rem; }
`;