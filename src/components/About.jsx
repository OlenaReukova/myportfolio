import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 65px;
  background: #1f265c;
`;

const Container = styled.div`
  display: flex;
  gap: 10rem;
  width: 96%;
  max-width: 1280px;
  margin: 0px auto;
  z-index: 1;
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    /* align-items: center; */
    height: auto;
    gap: 0;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    gap: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  padding-top: 10px;
  padding-bottom: 40px;
  width: 90%;
  text-align: left;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    padding-bottom: 30px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    width: 85%;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 2;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 80%;
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
  padding: 10px 30px;
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
          <Img alt='' src='./img/about1.png'></Img>
        </Left>
        <Right>
          <Af>
            "Everything you can imagine is real.” <br></br>-Pablo Picasso
          </Af>
          <Desc>
            As a dedicated Software Developer, I possess a wide range of skills
            in HTML, CSS, JavaScript, React.js, Node.js, Express.js, PostgreSQL,
            and various other libraries and frameworks. I completed an intensive
            800-hour full-stack web development course. Enthusiastic learner
            building user-friendly websites with a focus on functionality and
            design. Excited to collaborate and contribute to web applications
            using my growing skillset in development tools and techniques. My
            M.Sc. in Electrical Engineering brings a problem-solving approach to
            web dev.<br></br>
            <br></br>
            <span style={{ fontSize: '16px' }}>
              Behind the scenes:<br></br>
              <br></br>
              Dog walker by day, music lover by night, nature enthusiast always.
            </span>
            <br></br>
            <br></br>
          </Desc>
          <SkillCard />
        </Right>
      </Container>
    </Section>
  );
};

export default About;
