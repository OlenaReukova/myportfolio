import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 96%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }

  height: 100vh;
  scroll-snap-align: center;

  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// const Title = styled.h1`
//   font-size: 74px;
//   @media only screen and (max-width: 768px) {
//     font-size: 40px;
//     text-align: center;
//   }
// `;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    width: 80%;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  margin: auto;
`;

const Subtitle = styled.h2`
  color: white;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

// const Button = styled.button`
//   background-color: #f45050;
//   color: white;
//   font-weight: 500;
//   width: 120px;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

const About = () => {
  return (
    <Section>
      <Container id='who'>
        <Left>
          <Img alt='' src='./img/about.png'></Img>
        </Left>
        <Right>
          {/* <Title>“Everything you can imagine is real.” ― Pablo Picasso</Title> */}
          <WhatIDo>
            {/* <Line src='./img/line.png' /> */}
            <Subtitle>About me</Subtitle>
          </WhatIDo>
          <Desc>
            As a dedicated Full Stack Developer, I possess a wide range of
            skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and
            PostgreSQL. <br></br>
            <br></br>I excel at designing and maintaining responsive websites
            that offer a seamless user experience. My expertise lies in crafting
            dynamic and engaging interfaces by writing clean code and utilizing
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams to develop
            outstanding web applications.
          </Desc>
          {/* <Button>See my projects </Button> */}
        </Right>
      </Container>
    </Section>
  );
};

export default About;
