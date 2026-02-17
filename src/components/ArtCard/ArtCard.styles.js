import styled from 'styled-components';
import { motion } from 'framer-motion';

// 1. The thumbnail container on the grid
// We use styled(motion.article) to allow Framer Motion animations
export const GalleryItem = styled(motion.article)`
  display: flex;
  flex-direction: column;
  width: 100%; 
  max-width: 340px; 
  /* Clean slate: No borders, no background */
  background-color: transparent;
  padding: 0; 
  cursor: pointer;
  /* Ensure text color transitions smoothly on theme toggle */
  transition: color var(--theme-transition);
  /* Important so the expanding image doesn't get clipped initially */
  position: relative; 
  z-index: 1;
`;

// Wrapper for the thumbnail image
export const ImageContainer = styled(motion.div)`
  width: 100%;
  margin-bottom: 1.5rem;
  /* Ensures the image lift doesn't overlap text below it during hover */
  position: relative;
`;

export const Artwork = styled(motion.img)`
  width: 100%;
  height: auto;
  display: block;
  /* Optional: slight rounding for modern feel */
  border-radius: 4px;
`;

// The text container below the thumbnail
export const MuseumLabel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const ArtTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  color: var(--primary-text);
`;

export const ArtMeta = styled.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--caption-color);
  margin: 0;
  line-height: 1.6;
`;

/* --- FULL SCREEN OVERLAY STYLES --- */

// The dark backdrop
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Using theme var for background, usually dark in both modes for cinema view */
  background-color: var(--matting-bg); 
  z-index: 1000; /* Must sit on top of everything including navbar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const FullScreenImage = styled(motion.img)`
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

export const FullScreenDesc = styled(motion.p)`
  font-family: var(--font-heading);
  color: var(--primary-text);
  font-size: 1.1rem;
  text-align: center;
  max-width: 600px;
`;

// The Button Container
export const CloseButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  
  /* Increased click area without increasing visual size */
  padding: 1rem; 
  
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  color: var(--primary-text);
`;

// The "Flat Line" Icon itself
export const MinimizeLine = styled(motion.div)`
  width: 24px;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px; /* Softens the edges slightly */
  
  /* Start state for the line (centered) */
  display: block;
`;