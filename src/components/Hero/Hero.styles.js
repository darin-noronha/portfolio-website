import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const HeroContainer = styled.section`
  min-height: 50vh;
  padding-top: 2rem;
  padding-bottom: 4rem;
  scroll-margin-top: 70px;
  max-width: 700px; 
  margin: 0 auto;  
`;

// The Terminal Window
export const TerminalWindow = styled(motion.div)`
  background-color: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-card);
  padding: 1.5rem;
  font-family: var(--font-body);
  box-shadow: 0 10px 30px -15px rgba(0,0,0,0.5);
  overflow: hidden;
`;

export const TerminalHeader = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);

  /* macOS style window buttons */
  span {
    width: 12px; height: 12px;
    border-radius: 50%;
    &:nth-child(1) { background-color: #ff5f56; } /* Close */
    &:nth-child(2) { background-color: #ffbd2e; } /* Minimize */
    &:nth-child(3) { background-color: #27c93f; } /* Maximize */
  }
`;

export const CommandLine = styled(motion.div)`
  color: ${props => props.$isCommand ? 'var(--accent-color)' : 'var(--secondary-text)'};
  margin-bottom: ${props => props.$spacing ? '1.5rem' : '0.5rem'};
  font-size: 0.95rem;
  line-height: 1.6;
  display: flex;
  flex-wrap: wrap;
`;

export const PromptString = styled.span`
  color: #c678dd; /* Tech purple for the user/sys prompt */
  margin-right: 10px;
`;

export const BlinkingCursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 15px;
  background-color: var(--accent-color);
  margin-left: 4px;
  vertical-align: middle;
  animation: ${blink} 1s step-end infinite;
`;