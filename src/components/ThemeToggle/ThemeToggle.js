import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { SwitchButton, SwitchTrack, Thumb, Cloud, Star } from './ThemeToggle.styles';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <SwitchButton onClick={toggleTheme}>
      <SwitchTrack theme={theme}>
        {}
        <Star top="5px" left="5px" size="2px" theme={theme} />
        <Star top="12px" left="12px" size="1px" theme={theme} />
        <Star top="7px" left="18px" size="1px" theme={theme} />
        <Cloud theme={theme} />
      </SwitchTrack>
      <Thumb theme={theme} />
    </SwitchButton>
  );
};

export default ThemeToggle;