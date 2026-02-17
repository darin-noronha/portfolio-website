import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 60vh;
  padding: 4rem 0;
  text-align: center;
  width: 100%; /* standard width */
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: var(--font-heading);
  color: var(--primary-text);
`;

const Content = styled.p`
  color: var(--secondary-text);
  margin: 0 auto;
  font-family: var(--font-body);
  line-height: 1.6;
  padding: 0 1rem;
`;

const Art = () => {
  return (
    <PageContainer>
      <Title>art</Title>
      <Content>i'm taking a painting class this semester. check in later to view my progress!</Content>
    </PageContainer>
  );
};

export default Art;