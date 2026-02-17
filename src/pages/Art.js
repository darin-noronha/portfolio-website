import React from 'react';
import styled from 'styled-components';
import ArtGallery from '../components/ArtGallery/ArtGallery';

/* src/pages/Art.js */

const PageContainer = styled.div`
  min-height: 100vh;
  
  /* Now just enough space for the text to sit nicely under the navbar */
  padding: 2rem 1rem 2rem 1rem; 
  
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;


  mask-image: linear-gradient(to bottom, transparent 0%, black 40px, black 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 40px, black 100%);
`;

// Removed the Title component entirely

const Intro = styled.p`
  color: var(--secondary-text);
  max-width: 600px;
  /* 3. Tighter margins to sit nicely under the navbar area */
  margin: 0 auto 1.5rem auto; 
  font-family: var(--font-body);
  line-height: 1.6;
  font-size: 0.95rem; /* Slightly refined size */
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
    <PageContainer>
      {/* Title removed, Intro is now the first element */}
      <Intro>
        a collection of studies, sketches, and finished works. 
        exploring the analog side of creation.
      </Intro>
      
      <ArtGallery pieces={artPieces} />
    </PageContainer>
  );
};

export default Art;