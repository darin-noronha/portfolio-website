import React from 'react';
import { 
  HeroContainer, TerminalWindow, TerminalHeader, 
  CommandLine, PromptString, BlinkingCursor 
} from './Hero.styles';

const TypewriterLine = ({ text, delay, isCommand, prompt }) => {
  return (
    <CommandLine 
      $isCommand={isCommand}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.1 }}
    >
      {prompt && <PromptString>{prompt}</PromptString>}
      {text}
    </CommandLine>
  );
};

const Hero = () => {
  return (
    <HeroContainer id="home">
      <TerminalWindow
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TerminalHeader>
          <span /><span /><span />
        </TerminalHeader>

        <TypewriterLine 
          prompt="darin@umich-sys:~$" 
          text="cat bio.txt" 
          delay={0.2} 
          isCommand 
        />
        
        <CommandLine 
          $spacing 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
        >
          hi, i'm a junior at umich studying computer engineering and exploring the overlap of ai, hardware, and business. i'm from boise, idaho so i naturally love the outdoors.
        </CommandLine>

        <CommandLine
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8 }}
        >
          <PromptString>darin@umich-sys:~$</PromptString>
          <BlinkingCursor />
        </CommandLine>
      </TerminalWindow>
    </HeroContainer>
  );
};

export default Hero;