import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-text);
`;

export const CloseButton = styled.button`
  font-size: 2rem;
  font-weight: 300;
  color: var(--secondary-text);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  line-height: 1;

  &:hover {
    color: var(--primary-text);
  }
`;

export const ModalContent = styled.div`
  padding: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--secondary-text);
`;