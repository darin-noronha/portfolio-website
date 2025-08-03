import React, { useState, useRef } from 'react';
// We no longer need NavRight from styles
import { NavContainer, NavName, NavLinks, NavLink, MagicInk } from './Navbar.styles';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const [inkStyle, setInkStyle] = useState({});
  const linksContainerRef = useRef(null);

  const handleMouseEnter = (e) => {
    const linkElement = e.currentTarget;
    const { offsetLeft, offsetWidth } = linkElement;
    setInkStyle({ left: offsetLeft, width: offsetWidth });
  };

  const handleMouseLeave = () => {
    setInkStyle({});
  };

  return (
    <NavContainer>
      <NavName to="/">darin</NavName>

      <NavLinks ref={linksContainerRef} onMouseLeave={handleMouseLeave}>
        <MagicInk {...inkStyle} />
        <NavLink smooth to="/#home" onMouseEnter={handleMouseEnter}>home</NavLink>
        <NavLink smooth to="/#projects" onMouseEnter={handleMouseEnter}>projects</NavLink>
        <NavLink smooth to="/#contact" onMouseEnter={handleMouseEnter}>contact</NavLink>
      </NavLinks>

      <ThemeToggle />
    </NavContainer>
  );
};

export default Navbar;