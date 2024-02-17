import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 65px;
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 96%;
  max-width: 1280px;
  margin: 0px auto;
  z-index: 1;
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  padding-top: 10px;
  padding-bottom: 40px;
  width: 100%;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    font-weight: 200;
    padding-bottom: 30px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 2;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Desc = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: normal;
  margin-top: 30px;
`;

const Af = styled.p`
  display: flex;
  justify-content: end;
  font-size: 1rem;
  font-weight: normal;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  font-style: italic;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <Section id='who'>
      <Title>About Me</Title>
      <Container>
        <Left>
          <Img alt='' src='./img/aboutme.jpg'></Img>
        </Left>
        <Right>
          <Af>
            "Everything you can imagine is real.” <br></br>-Pablo Picasso
          </Af>
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
          <SkillCard />
        </Right>
      </Container>
    </Section>
  );
};

export default About;
