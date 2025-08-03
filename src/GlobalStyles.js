import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* Light theme using Vanilla Cream and Midnight Indigo */
  body[data-theme='light'] {
    --background: #F0E7D5; /* Vanilla Cream */
    --primary-text: #212842; /* Midnight Indigo */
    --secondary-text: #545869; 
    --accent: #212842; /* Midnight Indigo */
    --border: #e0dace; /* Darker version of Vanilla Cream */
    --card-bg: #FFFFFF;

    
    --font-heading: 'Lavishly Yours', cursive;
    --font-body: 'EB Garamond', sans-serif;

    --card-accent: #C0A080;

  }

  /* Dark theme using Midnight Indigo and Vanilla Cream */
  body[data-theme='dark'] {
    --background: #212842; /* Midnight Indigo */
    --primary-text: #F0E7D5; /* Vanilla Cream */
    --secondary-text: #b8b2a5; /* Muted version of Vanilla Cream */
    --accent: #F0E7D5; /* Vanilla Cream */
    --border: #3a4161; /* Lighter version of Midnight Indigo */
    --card-bg: #2c334f; /* Lighter version of Midnight Indigo */

    --font-heading: 'Lavishly Yours', cursive;
    --font-body: 'EB Garamond', sans-serif;

    --card-accent: #C0A080;

  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: var(--font-body);
    background-color: var(--background);
    color: var(--primary-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth; 
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }
`;

export default GlobalStyles;