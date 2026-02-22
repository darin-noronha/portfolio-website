import React, { useEffect, useRef } from 'react';
import { GridContainer, GridPattern } from './GridBackground.styles';

const GridBackground = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (gridRef.current) {
        // Directly update CSS variables for maximum performance
        gridRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        gridRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <GridContainer>
      <GridPattern ref={gridRef} />
    </GridContainer>
  );
};

export default GridBackground;