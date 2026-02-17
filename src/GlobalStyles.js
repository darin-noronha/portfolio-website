import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* 1. THE FIX: This ensures padding doesn't make elements wider than 100% */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  :root {
    /* --- ENGINEER MODE (Terminal) --- */
    --font-heading: 'JetBrains Mono', monospace;
    --font-body: 'JetBrains Mono', monospace;
    --accent-color: #00ff9d; 
    --text-transform: lowercase;
    --background: #0a192f;
    --primary-text: #ccd6f6;
    --secondary-text: #8892b0;
    --border: #233554;
    --card-bg: #112240;
    --theme-transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    --border-radius-card: 12px;
  }

  body[data-mode="artist"] {
    /* --- ARTIST MODE (Original Branding) --- */
    --font-heading: 'Playfair Display', serif; 
    --font-body: 'Inter', -apple-system, sans-serif;
    --accent-color: #ff4d4d;
    --text-transform: none;
    --background: #ffffff; 
    --primary-text: #1a1a1a;
    --secondary-text: #636e72;
    --border: #dfe6e9;
    --card-bg: #f9f9f9;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--background);
    color: var(--primary-text);
    font-family: var(--font-body);
    text-transform: var(--text-transform);
    transition: var(--theme-transition);
    
    /* THE FIX: This kills the horizontal scrollbar globally */
    overflow-x: hidden; 
    width: 100%;
  }

  nav, div, section, article {
    transition: var(--theme-transition);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    transition: var(--theme-transition);
  }
`;

export default GlobalStyles;