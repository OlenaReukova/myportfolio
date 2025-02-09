import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";

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
  margin: 0 auto;
  width: calc(88% - 5px);
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
    font-size: 2rem;
    font-weight: normal;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.875rem;
  margin: 30px 0;
  @media only screen and (max-width: 768px) {
    padding-bottom: 30px;
    font-size: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;

const Desc = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: normal;
  margin-top: 30px;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <Section id="who">
      <Container>
        <TitleWrapper>
          <Title>About Me</Title>
        </TitleWrapper>
        <ContentWrapper>
          <Left>
            <Desc>
              Hey there!
              <br />
              <br />
              Here, you’ll find projects I’ve worked on or continue to develop.
              <br />
              <br />I love collaborating with others to create meaningful
              digital experiences that are both functional and user-centred.
              <br />
              <br />
              Passionate about music and deeply connected to nature, always
              finding joy in both.🎶🌿
              <br />
              <br />
            </Desc>
          </Left>
          <Right>
            <SubTitle className="title">My Skills</SubTitle>
            <SkillCard />
          </Right>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default About;
