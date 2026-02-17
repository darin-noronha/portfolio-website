import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

// 1. Animation for the "Micro-transition"
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background); /* Matches theme (dark/light) */
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1); /* Smooth 'pop' */
  padding: 2rem;
`;

const FullScreenImage = styled.img`
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); /* Deep shadow for depth */
  border-radius: 4px;
`;

const Caption = styled.p`
  margin-top: 1.5rem;
  color: var(--primary-text);
  font-family: var(--font-body);
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--primary-text);
  padding: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 32px;
    height: 32px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;

const ArtModal = ({ piece, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!piece) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <FullScreenImage src={piece.image} alt={piece.title} />
        <Caption>
          <strong>{piece.title}</strong> — {piece.description}
        </Caption>
      </div>

      <CloseButton onClick={onClose} aria-label="Minimize View">
        {/* The "Inverted" Collapse Icon (Arrows pointing IN) */}
        <svg viewBox="0 0 24 24">
          <polyline points="4 14 10 14 10 20"></polyline>
          <polyline points="20 10 14 10 14 4"></polyline>
        </svg>
      </CloseButton>
    </Overlay>,
    document.body
  );
};

export default ArtModal;