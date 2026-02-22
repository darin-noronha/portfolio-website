import styled from 'styled-components';

export const GridContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none; /* Ensures clicks pass through to your buttons/cards */
  background-color: var(--background);
`;

export const GridPattern = styled.div`
  width: 100%;
  height: 100%;
  
  /* The Dot Matrix Pattern using your accent color */
  background-image: radial-gradient(rgba(0, 255, 157, 0.15) 1px, transparent 1px);
  background-size: 30px 30px;
  
  /* The Magic Flashlight Effect */
  /* Falls back to the center of the screen if mouse hasn't moved yet */
  mask-image: radial-gradient(
    circle 400px at var(--mouse-x, 50vw) var(--mouse-y, 50vh),
    black 0%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    circle 400px at var(--mouse-x, 50vw) var(--mouse-y, 50vh),
    black 0%,
    transparent 100%
  );
`;