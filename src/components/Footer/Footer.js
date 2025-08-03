import React from 'react';
import { FooterContainer, FooterText, SocialLinks, SocialIcon } from './Footer.styles';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../Navbar/Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    // Add the id here
    <FooterContainer id="contact">
      <FooterText>some more links</FooterText>
      <SocialLinks>
        <SocialIcon href="https://github.com/darin-noronha" target="_blank" rel="noopener noreferrer"><GitHubIcon /></SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/darin-noronha/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></SocialIcon>
        <SocialIcon href="mailto:dnoronha@umich.edu"><EmailIcon /></SocialIcon>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;