import React from 'react';
import { FooterContainer, FooterText, SocialLinks, SocialIcon } from './Footer.styles';
// We need the same icon components used in the navbar
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../Navbar/Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      
      {/* Add the SocialLinks component here */}
      <SocialLinks>
        <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer"><GitHubIcon /></SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></SocialIcon>
        <SocialIcon href="mailto:dnoronha@umich.edu"><EmailIcon /></SocialIcon>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;