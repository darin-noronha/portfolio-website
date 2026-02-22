import React from 'react';
import ArtCard from '../ArtCard/ArtCard';
import { GalleryGrid, GridItem } from './ArtGallery.styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, 
      staggerChildren: 0.15 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 250, damping: 25 } 
  }
};

const ArtGallery = ({ pieces }) => {
  if (!pieces || pieces.length === 0) return null;

  return (
    <GalleryGrid
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {pieces.map((piece, index) => (
        <GridItem key={index} variants={itemVariants}>
          <ArtCard piece={piece} />
        </GridItem>
      ))}
    </GalleryGrid>
  );
};

export default ArtGallery;