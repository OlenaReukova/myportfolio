import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import backgroundImage from '../image/bkg_projects2.png';

const Section = styled.div`
  /* background-image: url(${backgroundImage}); */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #1f265c;
`;

const Container = styled.div`
  padding-top: 65px;
  max-width: 1280px;
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

const Projects = () => {
  return (
    <Section id='projects'>
      <Container>
        <Cards />
      </Container>
    </Section>
  );
};

export default Projects;
