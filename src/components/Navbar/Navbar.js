import React, { useState } from 'react';
import { useMode } from '../../context/ModeContext';
import { 
  NavContainer, 
  NavName, 
  NavLinks, 
  NavLink, 
  MagicInk, 
  RightSection,
  SwitchButton, 
  NavArrow 
} from './Navbar.styles';

const NAV_CONFIG = {
  engineer: [
    { label: 'home', path: '/#home' },
    { label: 'projects', path: '/#projects' },
    { label: 'contact', path: '/#contact' }
  ],
  artist: [
    { label: 'gallery', path: '/art' },
    { label: 'works', path: '/art#works' },
    { label: 'statement', path: '/art#bio' }
  ]
};

const Navbar = () => {
  const { isArtMode } = useMode();
  const [inkStyle, setInkStyle] = useState({ opacity: 0 });

  const currentLinks = isArtMode ? NAV_CONFIG.artist : NAV_CONFIG.engineer;

  const handleMouseEnter = (e) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    setInkStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
  };

  const handleMouseLeave = () => {
    // This sets opacity to 0, which gets passed to the style prop below
    setInkStyle(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <NavContainer $isArtMode={isArtMode}>
      <NavName to="/">darin</NavName>
      
      <NavLinks onMouseLeave={handleMouseLeave}>
        {/* We pass specific props + style object for opacity + isArtMode */}
        <MagicInk 
            left={inkStyle.left} 
            width={inkStyle.width} 
            style={{ opacity: inkStyle.opacity }}
            $isArtMode={isArtMode}
        />
        {currentLinks.map(link => (
          <NavLink 
            key={link.label} 
            smooth 
            to={link.path} 
            onMouseEnter={handleMouseEnter}
          >
            {link.label}
          </NavLink>
        ))}
      </NavLinks>

      <RightSection>
        {isArtMode ? (
          <SwitchButton to="/" $direction="left">
            <NavArrow $direction="left">←</NavArrow>
            dev
          </SwitchButton>
        ) : (
          <SwitchButton to="/art" $direction="right">
            art
            <NavArrow $direction="right">→</NavArrow>
          </SwitchButton>
        )}
      </RightSection>
    </NavContainer>
  );
};

export default Navbar;