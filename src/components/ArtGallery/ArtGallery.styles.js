import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GalleryGrid = styled(motion.div)`
  display: grid;
  gap: 3rem 2rem; /* 3rem vertical gap, 2rem horizontal gap */
  justify-items: center; /* Centers the cards inside their grid cells */
  width: 100%;
  margin-top: 2rem;
  padding: 3rem;
  
  /* Default to 1 column for mobile screens */
  grid-template-columns: 1fr;
  
  /* Force exactly 2 columns on tablets and desktop */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridItem = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;