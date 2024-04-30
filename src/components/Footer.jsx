import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(
    to top,
    #051937,
    #0b1e47,
    #162356,
    #252765,
    #362a73
  );
  border-top: 2px solid white;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: auto;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  width: 96%;

  margin: 0 auto;
  padding: 1.5rem 0;
  @media only screen and (max-width: 768px) {
    padding: 0.6rem 0;
  }
`;

const Des = styled.p`
  font-size: 0.6rem;
  color: white;
`;

const Icons = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  padding: 0.6rem 0.4rem;
  margin-top: 20px;
  a:hover {
    transform: scale(1.5);
  }
`;

const Footer = () => {
  return (
    <Section>
      <Icons>
        <a href='https://www.linkedin.com/in/olenareukova/' target='__blank'>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              color: '#fcfcfd',
              cursor: 'pointer',
            }}
            size='2x'
          />
        </a>
        <a href='https://github.com/OlenaReukova' target='__blank'>
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              color: '#fcfcfd',
              cursor: 'pointer',
            }}
            size='2x'
          />
        </a>
      </Icons>
      <Container>
        <Des>© 2024 - present Olena Reukova. All rights reserved.</Des>
      </Container>
    </Section>
  );
};

export default Footer;
