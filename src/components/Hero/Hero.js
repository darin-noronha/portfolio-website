import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, HeroBio, InterestButtons, InterestButton } from './Hero.styles';

const Hero = ({ onInterestClick }) => {
  return (
    <HeroContainer id="home">
      <HeroTitle>darin noronha</HeroTitle>
      <HeroSubtitle>ce @ umich</HeroSubtitle>
      <HeroBio>
        exploring the intersection of tech and art
      </HeroBio>
      <InterestButtons>
        <InterestButton onClick={() => onInterestClick('writing')}>Writing</InterestButton>
        <InterestButton onClick={() => onInterestClick('music')}>Music</InterestButton>
      </InterestButtons>
    </HeroContainer>
  );
};

export default Hero;