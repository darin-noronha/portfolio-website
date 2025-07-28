import React from 'react';
// Remove 'NavLogo' from this import
import { NavContainer, NavRight, NavLinks, NavLink } from './Navbar.styles';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <NavContainer>
      {/* The NavLogo component is now completely removed from here */}
      <NavRight>
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <ThemeToggle />
        </NavLinks>
      </NavRight>
    </NavContainer>
  );
};

export default Navbar;