import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const HeroContainer = styled.section`
  /* Keep these properties */
  min-height: 50vh;
  padding-top: 0rem;
  padding-bottom: 6rem;
  scroll-margin-top: 70px;

  max-width: 600px; 
  margin-left: auto;   
  margin-right: auto;  
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary-text);
  margin-bottom: 0.5rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--accent);
  margin-bottom: 1.5rem;
  text-align: left; 
`;

export const HeroBio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--secondary-text);
  max-width: 600px;
  margin-bottom: 2rem;
`;

export const InterestLinks = styled.div`

  flex-direction: column; 
  display: flex;
  gap: 1rem;
`;

export const InteractiveLink = styled(Link)`
  color: var(--primary-text);
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  position: relative;
  transition: color 0.3s ease;
  width: fit-content;

  /* arrow element */
  span {
    color: var(--primary-text);
    opacity: 0;
    width: 0;
    overflow: hidden; /* Prevents the arrow from being visible when width is 0 */
    transition: all 0.35s ease;
  }

  &:hover {
    color: var(--primary-text);
    span {
      opacity: 1;
      width: 20px;
      margin-right: 0.1rem; 
    }
  }
`;

export const PopupImage = styled.img`
  position: absolute;
  width: 120px;  
  height: 100px; 
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);

  bottom: 120%; 
  left: 50%;

  opacity: 0;
  transform: translateX(-50%) scale(0.9);
  transition: all 0.3s ease-in-out;
  pointer-events: none;
`;

export const HoverWord = styled.span`
  position: relative; 
  display: inline-block;
  color: var(--primary-text);
  cursor: pointer;

 
  &:hover ${PopupImage} {
    opacity: 1;
    transform: translateX(-50%) scale(1); 
    pointer-events: all;
  }
`;