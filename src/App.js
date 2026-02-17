import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { ModeProvider } from './context/ModeContext';
import GlobalStyles from './GlobalStyles';
import CommandPalette from './components/CommandPalette/CommandPalette';
import Layout from './components/Layout';
import Home from './pages/Home';
import Art from './pages/Art';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ModeProvider>
          <GlobalStyles />
          <CommandPalette />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/art" element={<Art />} />
            </Route>
          </Routes>
        </ModeProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;