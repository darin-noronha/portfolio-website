import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

// Styled Components for the App Layout
const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex-grow: 1;
  /* Add padding to the top to offset the 70px navbar */
  padding: 70px 4rem 2rem 4rem; 

  @media (max-width: 768px) {
    padding: 70px 1.5rem 1rem 1.5rem;
  }
`;

// This component contains your main page content.
// It can access the theme context because it's a child of <ThemeProvider>.
function AppContent() {
  const [modalContent, setModalContent] = useState(null);
  const { theme } = useContext(ThemeContext);

  // This effect runs whenever the theme changes, updating the data-theme attribute on the body.
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const modalData = {
    writing: {
      title: "My Writing",
      content: "This is where I showcase my articles, blog posts, and other written works. The goal is to demonstrate clarity of thought and effective communication, skills that are as crucial in engineering as they are in literature."
    },
    music: {
      title: "My Music",
      content: "Here you can find some of my musical compositions and performances. Music is a passion that balances the analytical nature of engineering. It's a space for creativity, expression, and exploring different kinds of structures and patterns."
    }
  };

  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Hero onInterestClick={openModal} />
        <ProjectsGrid />
        <Footer />
      </MainContent>
      {modalContent && (
        <Modal
          onClose={closeModal}
          title={modalData[modalContent].title}
          content={modalData[modalContent].content}
        />
      )}
    </AppContainer>
  );
}

// The main App component wraps everything in the ThemeProvider.
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;