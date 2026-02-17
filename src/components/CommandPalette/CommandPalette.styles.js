import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding-top: 15vh;
`;

export const PaletteContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--card-bg);
  border: 1px solid var(--accent-color);
  border-radius: ${props => props.isEngineer ? '0px' : '12px'};
  font-family: var(--font-body);
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.15);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border);
  color: var(--primary-text);
  outline: none;
`;

export const ResultItem = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover { background: var(--border); color: var(--accent-color); }
`;

export const Kbd = styled.kbd`
  font-size: 0.65rem;
  opacity: 0.5;
  background: var(--background);
  padding: 2px 4px;
`;