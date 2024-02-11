import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  height: 100vh;
  row-gap: 40px;
`;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  gap: 2rem;
  width: 96%;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  margin: auto;
  border-radius: 20px;
  transition: all ease 0.2s;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const Desc = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: normal;
`;

const Af = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  font-style: italic;
`;

const About = () => {
  return (
    <Section id='who'>
      <Title>About Me</Title>
      <Container>
        <Left>
          <Img alt='' src='./img/about.png'></Img>
        </Left>
        <Right>
          <WhatIDo></WhatIDo>
          <Desc>
            As a dedicated Software Developer, I possess a wide range of skills
            in HTML, CSS, JavaScript, React.js, Node.js, Express.js, PostgreSQL,
            and various other libraries and frameworks. <br></br>
            <br></br>I excel at designing and maintaining responsive websites
            that offer a seamless user experience. My expertise lies in crafting
            dynamic and engaging interfaces by creating elegant and functional
            digital solutions and utilizing development tools and techniques. I
            am also a team player who thrives in collaborating with
            cross-functional teams to develop outstanding web applications.
          </Desc>
          <Af>
            "Everything you can imagine is real.” <br></br>-Pablo Picasso
          </Af>
          <SkillCard />
        </Right>
      </Container>
    </Section>
  );
};

export default About;
