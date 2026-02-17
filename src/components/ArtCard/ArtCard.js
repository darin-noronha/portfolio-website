import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // 1. Import ReactDOM
import { AnimatePresence } from 'framer-motion';
import { 
  GalleryItem, 
  ImageContainer, 
  Artwork, 
  MuseumLabel, 
  ArtTitle, 
  ArtMeta,
  Overlay,
  FullScreenImage,
  FullScreenDesc,
  CloseButton,
  MinimizeLine 
} from './ArtCard.styles';

const ArtCard = ({ piece }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!piece) return null;
  
  const { title, image, description, year, medium } = piece;
  const layoutId = `art-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <>
      {/* 1. Thumbnail View (Stays inside the Grid) */}
      <GalleryItem
        whileHover={{ scale: 1.02 }} 
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={() => setIsOpen(true)}
      >
        <ImageContainer>
          <Artwork 
            src={image} 
            alt={`Artwork titled ${title}`} 
            layoutId={layoutId}
          />
        </ImageContainer>
        
        <MuseumLabel animate={{ opacity: isOpen ? 0 : 1 }}>
          <ArtTitle>{title}</ArtTitle>
          <ArtMeta>
            {medium && <span>{medium} • </span>}
            {year && <span>{year}</span>}
          </ArtMeta>
        </MuseumLabel>
      </GalleryItem>


      {/* 2. Full Screen Portal View (Teleported to document.body) */}
      {/* This ensures the 'mask' on the page doesn't cut off the popup */}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {isOpen && (
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)} 
            >
              <FullScreenImage 
                src={image} 
                alt={title}
                layoutId={layoutId}
              />
              
              <FullScreenDesc
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                {title} — {description}
              </FullScreenDesc>

              <CloseButton
                onClick={(e) => {
                   e.stopPropagation(); 
                   setIsOpen(false)
                }}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                 <MinimizeLine 
                   variants={{
                     hover: { y: -5 },
                     tap: { scale: 0.9 }
                   }}
                   transition={{ 
                     type: "tween", 
                     ease: "easeOut", 
                     duration: 0.15 
                   }}
                 />
              </CloseButton>
            </Overlay>
          )}
        </AnimatePresence>,
        document.body // <--- The destination of the portal
      )}
    </>
  );
};

export default ArtCard;