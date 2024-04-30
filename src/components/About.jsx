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
  max-width: 1280px;
  width: 96%;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 72px;
  padding-top: 10px;
  padding-bottom: 40px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding-bottom: 30px;
    padding-left: 18px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    gap: 10rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 96%;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  padding-left: 20px; /* Adjust as needed for spacing */
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
  font-size: 1rem;
  font-weight: normal;
  color: white;
  padding: 10px 30px;
  font-style: italic;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: transparent; /* Transparent background */
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Hover effect */
  &:hover {
    --edge-light: hsla(0, 0%, 50%, 1);
    text-shadow: 0px 0px 10px var(--text-light);
    box-shadow: inset 0.4px 1px 4px var(--edge-light),
      2px 4px 8px hsla(0, 0%, 0%, 0.295);
    transform: scale(1.1);
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const About = () => {
  return (
    <Section id='who'>
      <Container>
        <TitleWrapper>
          <Title>About Me</Title>
        </TitleWrapper>
        <ContentWrapper>
          <Left>
            <Img alt='' src='./img/about1.png'></Img>
          </Left>
          <Right>
            <Af>
              "Everything you can imagine is real.” <br />
              -Pablo Picasso
            </Af>
            <Desc>
              As a dedicated Software Developer, I possess a wide range of
              skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js,
              PostgreSQL, and various other libraries and frameworks. I
              completed an intensive 800-hour full-stack web development course.
              Enthusiastic learner building user-friendly websites with a focus
              on functionality and design. Excited to collaborate and contribute
              to web applications using my growing skillset in development tools
              and techniques. My M.Sc. in Electrical Engineering brings a
              problem-solving approach to web dev.
              <br />
              <br />
              <span style={{ fontSize: '16px' }}>
                Behind the scenes:
                <br />
                <br />
                Dog walker by day, music lover by night, nature enthusiast
                always.
              </span>
              <br />
              <br />
            </Desc>
            <SkillCard />
            <Button>Download CV</Button>
          </Right>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default About;
