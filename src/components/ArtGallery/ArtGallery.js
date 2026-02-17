import React from 'react';
import styled from 'styled-components';
import ArtCard from '../ArtCard/ArtCard';

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  /* 1. Massive gap for "breathing room" */
  gap: 6rem; 
  padding: 4rem 0;
  width: 100%;
  
  /* 2. Wide container, so the 'cells' are big */
  max-width: 1200px; 
  margin: 0 auto;
  
  /* 3. Center the cards horizontally within their grid cells */
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ArtGallery = ({ pieces = [] }) => {
  if (!pieces.length) return <p>No artwork on display.</p>;

  return (
    <GalleryGrid>
      {pieces.map((piece, index) => (
        <ArtCard key={index} piece={piece} />
      ))}
    </GalleryGrid>
  );
};

export default ArtGallery;