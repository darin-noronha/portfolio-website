import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body[data-theme='light'] {
    --background: #F8F8F8;
    --primary-text: #1A1A1A;
    --secondary-text: #666666;
    --accent: #007BFF;
    --border: #EAEAEA;
    --card-bg: #FFFFFF;
  }

  body[data-theme='dark'] {
    --background: #121212;
    --primary-text: #EAEAEA;
    --secondary-text: #888888;
    --accent: #007BFF;
    --border: #333333;
    --card-bg: #1E1E1E;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
  font-family: 'EB Garamond', sans-serif;
  background-color: var(--background);
  color: var(--primary-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth; 
}

  a {
    color: var(--accent);
    text-decoration: none;
  }
`;

export default GlobalStyles;