import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 60vh;
  padding: 4rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Content = styled.p`
  color: var(--secondary-text);
  max-width: 600px;
  margin: 0 auto;
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