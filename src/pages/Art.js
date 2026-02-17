import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // 1. Import motion
import ArtGallery from '../components/ArtGallery/ArtGallery';

// 2. Convert to styled(motion.div) to enable animations
const PageContainer = styled(motion.div)`
  min-height: 100vh;
  /* Keep the reduced padding so text sits high */
  padding: 3rem 1rem 2rem 1rem; 
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Intro = styled.p`
  color: var(--secondary-text);
  max-width: 600px;
  margin: 0 auto 1.5rem auto; 
  font-family: var(--font-body);
  line-height: 1.6;
  font-size: 0.95rem; 
`;

const Art = () => {
  const artPieces = [
    {
      title: "Entropy in Blue", 
      image: "/guash1.jpeg", 
      description: "An exploration of chaotic systems using oil on canvas.",
      medium: "Oil on Canvas",
      year: "2024"
    },
    {
      title: "Structure V",
      image: "/aura.jpeg",
      description: "Geometric studies inspired by brutalist architecture.",
      medium: "Charcoal",
      year: "2023"
    }
  ];

  return (
    <PageContainer
      /* 3. THE FIX: Sync animation with Navbar */
      initial={{ opacity: 0, y: 20 }} // Starts slightly lower and invisible
      animate={{ opacity: 1, y: 0 }}  // Fades in and slides up
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.5, // Matches Navbar duration exactly
        ease: [0.4, 0, 0.2, 1] // Matches Navbar physics exactly
      }}
    >
      <Intro>
        a collection of studies, sketches, and finished works. 
        exploring the analog side of creation.
      </Intro>
      
      <ArtGallery pieces={artPieces} />
    </PageContainer>
  );
};

export default Art;