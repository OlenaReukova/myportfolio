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
  flex: 2;
  position: relative;
  padding-left: 20px;
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

const About = () => {
  return (
    <Section id="who">
      <Container>
        <TitleWrapper>
          <Title>About Me</Title>
        </TitleWrapper>
        <ContentWrapper>
          <Left>
            <Img alt="" src="./img/about1.png"></Img>
          </Left>
          <Right>
            <Af>
              "Everything you can imagine is real.” <br />
              -Pablo Picasso
            </Af>
            <Desc>
              Hi, I’m a full-stack developer passionate about creating intuitive
              and functional web applications. With hands-on experience in both
              frontend and backend development, including technologies like
              HTML, CSS, JavaScript, React.js, Nextjs, Tailwind CSS, TypeScript,
              Node.js, Express.js, and PostgreSQL.
              <br />
              <br />
              I love turning ideas into user-friendly digital experiences and am
              eager to collaborate and grow with every new project!
              <br />
              <br />
              In addition to my personal development, I care deeply about the
              society I live in. That’s why I collaborated with a volunteer
              organization, Trafalgar Girls, and the core development team as a
              Full Stack Developer to build an application called
              <strong>
                {" "}
                <a
                  href="https://cool-creponne-3e1272.netlify.app/"
                  target="__blank"
                  style={{
                    color: "#fcfcfd",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Kindly
                </a>
              </strong>
              . We are working on an application that helps people exchange
              items, providing support to those in difficult circumstances.
              <br />
              <br />
              <span style={{ fontSize: "16px" }}>
                Behind the scenes:
                <br />
                <br />
                Passionate about music and deeply connected to nature, always
                finding joy in both.
              </span>
              <br />
              <br />
            </Desc>
            <SkillCard />
          </Right>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default About;
