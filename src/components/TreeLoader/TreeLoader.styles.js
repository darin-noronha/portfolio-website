import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoaderOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
`;

export const TreeSVG = styled(motion.svg)`
  width: 200px; /* Slightly larger to appreciate the details */
  height: 200px;
  overflow: visible;
  color: var(--primary-text);
  /* Optional: adds a slight glow/shadow for depth */
  filter: drop-shadow(0px 4px 10px rgba(0,0,0,0.1)); 
`;