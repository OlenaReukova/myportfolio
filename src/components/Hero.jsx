import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 96%;
  max-width: 1280px;
  margin: 0px auto;
  z-index: 1;
  height: 100vh;
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: auto;
  @media only screen and (max-width: 320px) {
    font-size: 20px;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 200;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 60px;
  font-weight: 800;
`;

const Desc = styled.p`
  color: white;
  font-weight: normal;
  font-size: 1.2rem;
  margin: 40px 0px;
  width: 50%;
  padding-left: 0.4rem;
  padding-top: 0.4rem;
  border-left: 1px solid white;

  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: white;
  color: #082162;
  font-size: 1.2rem;
  font-weight: 800;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 5px 5px 5px 5px rgba(10, 1, 51, 0.5);
  :hover {
    transform: scale(1.5);
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const Right = styled.div`
  flex: 2;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  padding: 0.6rem 0.4rem;
  a:hover {
    transform: scale(1.5);
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Hero = () => {
  const downloadCV = () => {
    const cvURL =
      'https://drive.google.com/file/d/16Ux47obBOXzVUB_FclEGW39kTiQN2hLD/view?usp=sharing';
    window.open(cvURL, '_blank');
  };
  return (
    <Section>
      <Container id='home'>
        <Left>
          <Title>SOFTWARE DEVELOPER</Title>
          <Subtitle>OLENA REUKOVA</Subtitle>
          <Desc>
            Hi, I'm a Full-Stack Web Developer, currently based in London.
            <br></br>
            <br></br>
          </Desc>
          <Icons>
            <a
              href='https://www.linkedin.com/in/olenareukova/'
              target='__blank'>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  color: '#fcfcfd',
                  cursor: 'pointer',
                  boxShadow: '0px 5px 5px 0px rgba(10, 1, 51, 0.5)',
                }}
                size='3x'
              />
            </a>
            <a href='https://github.com/OlenaReukova' target='__blank'>
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  color: '#fcfcfd',
                  cursor: 'pointer',
                  boxShadow: '0px 5px 5px 0px rgba(10, 1, 51, 0.5)',
                }}
                size='3x'
              />
            </a>
            <Button onClick={downloadCV}> CV</Button>
          </Icons>
        </Left>
        <Right>
          <Img alt='' src='./img/photo.jpeg'></Img>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;