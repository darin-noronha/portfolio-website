import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const location = useLocation();
  const isArtMode = location.pathname.startsWith('/art');
  const mode = isArtMode ? 'artist' : 'engineer';

  useEffect(() => {
    document.body.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, isArtMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);