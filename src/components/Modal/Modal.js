import React from 'react';
import { ModalOverlay, ModalContainer, ModalHeader, ModalTitle, CloseButton, ModalContent } from './Modal.styles';

const Modal = ({ onClose, title, content }) => {
  // Close modal on Escape key press
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>
          <p>{content}</p>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;