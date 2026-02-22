import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'; 
import ArtGallery from '../components/ArtGallery/ArtGallery';
import TreeLoader from '../components/TreeLoader/TreeLoader';

const PageContainer = styled(motion.div)`
  min-height: 100vh;
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
  // State to control the loading screen visibility
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.5 seconds gives the tree enough time to draw before fading away
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  const artPieces = [
    {
      title: "monster portrait", 
      image: "/guash1.jpeg", 
      description: "gouache on wood panel",
      medium: "gouache on wood panel"
    },
    {
      title: "title",
      image: "/acrylic_canvas1.jpeg",
      description: "acrylic on canvas",
      medium: "acrylic on canvas"
    },
    {
      title: "king of the world",
      image: "/aura.jpeg",
      description: "acrylic on paper",
      medium: "acrylic on paper"
    },
    {
      title: "blue face",
      image: "/blue_face.jpeg",
      description: "acrylic on paper",
      medium: "acrylic on paper"
    }
  ];

  return (
    <>
      {/* 1. The Full-Screen Loader Overlay */}
      <AnimatePresence>
        {isLoading && <TreeLoader key="tree-loader" />}
      </AnimatePresence>

      {/* 2. The Actual Page Content (loads instantly underneath the overlay) */}
      <PageContainer
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}  
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.4, 0, 0.2, 1] 
        }}
      >
        <Intro>
          a collection of pieces from my fall '25 painting class
        </Intro>
        
        <ArtGallery pieces={artPieces} />
      </PageContainer>
    </>
  );
};

export default Art;