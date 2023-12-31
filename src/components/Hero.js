import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faFigma,
  faNode,
} from '@fortawesome/free-brands-svg-icons';

const Section = styled.div`
  height: 100vh;
  margin-top: 10px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 96%;
  max-width: 1280px;
  margin: 0px auto;
  z-index: 1;
  height: 100vh;
  scroll-snap-align: center;
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

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 60px;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-weight: normal;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  @media only screen and (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
    max-width: 90%; /* Adjust maximum width for smaller screens */
    font-size: 24px; /* Adjust font size for smaller screens */
    text-align: center; /* Horizontally center the text */
    margin: 0 auto; /* Center the text within the container */
  }
`;

const Desc = styled.p`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 24px;
  color: white;

  @media only screen and (max-width: 768px) {
    /* padding: 20px; */
    text-align: center;
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 10px;
  padding-bottom: 10px;
`;

// const Button = styled.button`
//   background-color: #f45050;
//   color: white;
//   font-weight: 500;
//   width: 100px;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   @media only screen and (max-width: 768px) {
//     margin-bottom: 40px;
//   }
// `;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 600px;
  height: 600px;
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
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  /* a:hover {
    transform: scale(1.5);
  } */
`;
const Hero = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank').focus();
  };

  const handleIconClick = (url) => {
    openLinkInNewTab(url);
  };

  const handleTouchStart = (url) => {
    // Perform the same action as a click event when touched
    openLinkInNewTab(url);
  };
  return (
    <Section>
      <Container id='home'>
        <Left>
          <Title>Software Developer</Title>
          <WhatIDo>
            <Subtitle>
              Hi, I'm Olena, a passionate Software Developer having an
              experience of building Web application with
              JavaScript/Reactjs/Nodejs/PostgreSQL and some other libraries and
              frameworks.
            </Subtitle>
          </WhatIDo>
          <Desc>I enjoy creating delightful, human-centered apps.</Desc>
          <Icons>
            <div
              onClick={() =>
                handleIconClick('https://www.linkedin.com/in/olenareukova/')
              }
              onTouchStart={() =>
                handleTouchStart('https://www.linkedin.com/in/olenareukova/')
              }>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: '#fcfcfd', cursor: 'pointer' }}
                size='2x'
              />
            </div>
            <div
              onClick={() => handleIconClick('https://github.com/OlenaReukova')}
              onTouchStart={() =>
                handleTouchStart('https://github.com/OlenaReukova')
              }>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: '#fcfcfd', cursor: 'pointer' }}
                size='2x'
              />
            </div>
          </Icons>
          <TechContainer>
            <Desc>Tech Stack</Desc>
            <Icons>
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ color: '#ea3f06' }}
                size='3x'
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                style={{
                  color: '#095ef1',
                }}
                size='3x'
              />
              <FontAwesomeIcon
                icon={faSquareJs}
                style={{ color: '#eef207' }}
                size='3x'
              />
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: '#13beb3' }}
                size='3x'
              />
              <FontAwesomeIcon
                icon={faFigma}
                style={{ color: '#dd0ed6' }}
                size='3x'
              />
              <FontAwesomeIcon
                icon={faNode}
                style={{ color: '#07ed22' }}
                size='3x'
              />
            </Icons>
          </TechContainer>
          {/* <Button>Learn More </Button> */}
        </Left>
        <Right>
          <Img alt='' src='./img/photo.jpeg'></Img>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
