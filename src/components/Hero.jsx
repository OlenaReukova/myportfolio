import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    min-height: 100v;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 96%;
  max-width: 1280px;
  margin: 60px auto;
  z-index: 1;
  min-height: calc(100vh - 120px);
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: start;
    padding-top: 65px;
    gap: 0rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 65px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 80%;
    text-align: center;
    flex: 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
    padding-left: 20px;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;
// const Paragraph = styled.p`
//   font-size: 30px;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   font-weight: 400;

//   @media only screen and (max-width: 768px) {
//     font-size: 40px;
//     text-align: center;
//   }
// `;
const Right = styled.div`
  flex: 2;
  position: relative;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    position: unset;
    margin: 50px auto;
  }
`;

const Icons = styled.div`
  display: flex;
  font-size: 20px;
  gap: 1.4rem;
  align-items: center;
  margin-top: 100px;
  padding: 0.6rem 0.4rem;
  a:hover {
    transform: scale(1.5);
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    display: none;
  }
`;

const Button = styled.button`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    background: linear-gradient(
      91.1deg,
      rgb(57, 31, 105) -2.3%,
      rgb(115, 43, 155) 44.4%,
      rgb(231, 75, 184) 103.4%
    );

    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-top: 20px;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      --edge-light: hsla(0, 0%, 50%, 1);
      text-shadow: 0px 0px 10px var(--text-light);
      box-shadow: inset 0.4px 1px 4px var(--edge-light),
        2px 4px 8px hsla(0, 0%, 0%, 0.295);
      transform: scale(1.1);
    }
  }
`;

const Hero = () => {
  const downloadCV = () => {
    const cvURL =
      'https://drive.google.com/file/d/1z-UrgqmPLqD1sqB_S6BqRzi4cAsTIf99/view?usp=sharing';
    window.open(cvURL, '_blank');
  };
  return (
    <Section id='home'>
      <Container>
        <Left>
          <Title className='title'>OLENA REUKOVA</Title>
          <Subtitle>SOFTWARE DEVELOPER </Subtitle>
          <Icons>
            <p>Social Links:</p>
            <a
              href='https://www.linkedin.com/in/olenareukova/'
              target='__blank'>
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
        </Left>
        <Right>
          <Img alt='' src='./img/photo2.png'></Img>
          <Button onClick={downloadCV}> Download CV</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
