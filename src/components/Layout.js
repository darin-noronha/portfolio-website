import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

const MainContent = styled.main`
  flex-grow: 1; 
  
  padding: 70px 4rem 2rem 4rem; 
  @media (max-width: 768px) {
    padding: 70px 1.5rem 1rem 1.5rem;
  }
`;

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
        <Outlet /> 
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;