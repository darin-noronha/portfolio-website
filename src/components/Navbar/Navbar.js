import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavContainer, NavName, NavLinks, NavLink, MagicInk, PortalLink, RightSection } from './Navbar.styles';

// Removed the ThemeToggle import
// import ThemeToggle from '../ThemeToggle/ThemeToggle'; 

const NAV_CONFIG = {
  engineer: [
    { label: 'home', path: '/#home' },
    { label: 'projects', path: '/#projects' },
    { label: 'contact', path: '/#contact' }
  ],
  artist: [
    { label: 'art', path: '/art' },
    { label: 'works', path: '/art#works' },
    { label: 'bio', path: '/art#bio' }
  ]
};

const Navbar = () => {
  const [inkStyle, setInkStyle] = useState({});
  const location = useLocation();
  const isArtMode = location.pathname.startsWith('/art');
  const currentLinks = isArtMode ? NAV_CONFIG.artist : NAV_CONFIG.engineer;

  const handleMouseEnter = (e) => {
    setInkStyle({ left: e.currentTarget.offsetLeft, width: e.currentTarget.offsetWidth });
  };

  const handleMouseLeave = () => {
    setInkStyle({});
  };

  return (
    <NavContainer>
      <NavName to="/">darin</NavName>
      
      <NavLinks onMouseLeave={handleMouseLeave}>
        <MagicInk {...inkStyle} />
        {currentLinks.map(link => (
          <NavLink key={link.label} smooth to={link.path} onMouseEnter={handleMouseEnter}>
            {link.label}
          </NavLink>
        ))}
      </NavLinks>

      <RightSection>
        <PortalLink to={isArtMode ? '/' : '/art'}>
          {isArtMode ? 'dev ↗' : 'art ↗'}
        </PortalLink>
        {/* ThemeToggle component removed from here */}
      </RightSection>
    </NavContainer>
  );
};

export default Navbar;