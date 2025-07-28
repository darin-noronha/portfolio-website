import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { ToggleButton } from './ThemeToggle.styles';
import { SunIcon, MoonIcon } from './Icons'; // Import your new icons

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </ToggleButton>
  );
};

export default ThemeToggle;