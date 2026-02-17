import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';
import { Overlay, PaletteContainer, SearchInput, ResultItem, Kbd } from './CommandPalette.styles';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { isArtMode } = useMode();
  const navigate = useNavigate();

  const commands = !isArtMode ? [
    { id: 'home', label: 'cd ~/home', action: () => navigate('/') },
    { id: 'projects', label: 'ls ./projects', action: () => navigate('/#projects') },
    { id: 'art', label: 'sudo mv --persona artist', action: () => navigate('/art') },
  ] : [
    { id: 'gallery', label: 'view gallery', action: () => navigate('/art#works') },
    { id: 'dev', label: 'return to dev world', action: () => navigate('/') },
  ];

  const togglePalette = useCallback((e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', togglePalette);
    return () => window.removeEventListener('keydown', togglePalette);
  }, [togglePalette]);

  if (!isOpen) return null;

  const filtered = commands.filter(c => c.label.includes(search.toLowerCase()));

  return createPortal(
    <Overlay onClick={() => setIsOpen(false)}>
      <PaletteContainer onClick={e => e.stopPropagation()} isEngineer={!isArtMode}>
        <SearchInput 
          autoFocus 
          placeholder={!isArtMode ? "root@darin: ~$" : "Search..."}
          onChange={e => setSearch(e.target.value)}
        />
        {filtered.map(cmd => (
          <ResultItem key={cmd.id} onClick={() => { cmd.action(); setIsOpen(false); }}>
            {cmd.label} <Kbd>Enter</Kbd>
          </ResultItem>
        ))}
      </PaletteContainer>
    </Overlay>,
    document.body
  );
};

export default CommandPalette;