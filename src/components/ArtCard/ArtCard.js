import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  GalleryItem, 
  ImageContainer, 
  Artwork, 
  MuseumLabel, 
  ArtTitle, 
  ArtMeta,
  Overlay,
  FullScreenImage,
  FullScreenTextContainer, // New
  FullScreenTitle,         // New
  FullScreenMeta,          // New
  CloseButton,
  MinimizeLine 
} from './ArtCard.styles';

// --- Typewriter Helper Component ---
const TypewriterText = ({ text, delay = 0, as = "div", className }) => {
  // Variants for the container (orchestrates the timing)
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay, // Wait for image expansion
        staggerChildren: 0.04, // Typing speed (lower = faster)
      },
    },
  };

  // Variants for each letter
  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.01 } // Instant appearance per letter
    },
  };

  return (
    <motion.span
      as={as}
      className={className}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      aria-label={text} // Screen reader reads the whole string
    >
      {text.split("").map((char, index) => (
        <motion.span 
            key={`${char}-${index}`} 
            variants={letterVariants} 
            aria-hidden="true" // Hide split chars from screen reader
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const ArtCard = ({ piece }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!piece) return null;
  
  const { title, image, medium } = piece;
  const layoutId = `art-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <>
      {/* 1. Thumbnail View */}
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
            {medium && <span>{medium}</span>}
          </ArtMeta>
        </MuseumLabel>
      </GalleryItem>


      {/* 2. Full Screen Portal View */}
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
                // Optional: Adjust expansion physics
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              <FullScreenTextContainer>
                {/* Delay Calculation: 
                   Image spring takes ~0.4s to settle. 
                   We start typing at 0.5s to be safe.
                */}
                
                {/* 1. The Title */}
                <FullScreenTitle as="h2">
                  <TypewriterText text={title} delay={0.5} />
                </FullScreenTitle>

                {/* 2. The Medium (and Year) */}
                <FullScreenMeta>
                  <TypewriterText text={medium} delay={0.5 + (title.length * 0.04)} />
                </FullScreenMeta>
              </FullScreenTextContainer>

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
                 />
              </CloseButton>
            </Overlay>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ArtCard;