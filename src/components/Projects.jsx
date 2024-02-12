import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

const Section = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  padding-top: 65px;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
  }
`;

const Projects = () => {
  return (
    <Section>
      <Container id='projects'>
        <Cards />
      </Container>
    </Section>
  );
};

export default Projects;
