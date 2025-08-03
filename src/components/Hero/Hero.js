import React from 'react';

import { HeroContainer, HeroSubtitle, HeroBio, InterestLinks, InteractiveLink, HoverWord, PopupImage } from './Hero.styles';

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroSubtitle>bio</HeroSubtitle>
      <HeroBio>
        hi, i'm a junior at umich studying computer engineering and exploring the overlap of ai, hardware, and business.
        i'm from boise, idaho so i naturally love the <HoverWord>outdoors<PopupImage src="/idaho.jpg"/></HoverWord>. i also love:

      </HeroBio>
      <InterestLinks>
        {}
        <InteractiveLink 
          as="a" 
          href="https://substack.com/@darinnoronha?utm_campaign=profile&utm_medium=profile-page" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span>&rarr;</span> writing
        </InteractiveLink>

        <InteractiveLink 
          as="a" 
          href="https://open.spotify.com/playlist/12b6uOyoaApLxkcfQWDjhw?si=8e572f6d4e0a4b91" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span>&rarr;</span> music
        </InteractiveLink>

        {}
        <InteractiveLink to="/art">
          <span>&rarr;</span> art
        </InteractiveLink>
      </InterestLinks>
    </HeroContainer>
  );
};

export default Hero;