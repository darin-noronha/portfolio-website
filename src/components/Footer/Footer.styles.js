import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;    /* Center items horizontally */
  gap: 1rem;              /* Add space between text and icons */
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: var(--secondary-text);
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SocialIcon = styled.a`
  color: var(--secondary-text);
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    color: var(--primary-text);
    transform: translateY(-3px);
  }
`;