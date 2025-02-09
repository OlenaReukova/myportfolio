import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Hero.css";

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
  margin: 60px auto;
  z-index: 1;
  min-height: calc(100vh - 120px);
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: start;
    gap: 5rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 80%;
    text-align: center;
    flex: 0;
    padding-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 0;
    line-height: 50px;
  }
`;

const Subtitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 1.75rem;
    text-align: center;
    font-weight: normal;
    margin: 0;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 80%;
    text-align: center;
    margin: 40px 0;
    display: block;
  }
`;

const Card = styled(motion.div)`
  color: white;
  font-size: 1.2rem;
  overflow: hidden;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

const CardTitle = styled(motion.h3)`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 40px;
  white-space: nowrap;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    font-weight: normal;
    margin-bottom: 0;
  }
`;

const DiscussionList = styled.ul`
  list-style: none;
  padding: 0;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

const DiscussionItem = styled.li`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      text-align: left;
      font-weight: normal;
    }
    &:hover {
      color: #00bcd4;
    }
  }
`;

const Hero = () => {
  return (
    <Section id="home">
      <Container>
        <Left>
          <Title className="title">SOFTWARE DEVELOPER</Title>
          <Subtitle>Olena Reukova</Subtitle>
        </Left>

        <Right>
          <Card
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <CardTitle>🔥 What I’m Up To</CardTitle>
            <DiscussionList>
              <DiscussionItem>
                <a
                  href="https://github.com/OlenaReukova"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contributing to Open Source – Check out my GitHub for my
                  latest projects <FontAwesomeIcon icon={faGithub} />.
                </a>
              </DiscussionItem>
              <DiscussionItem>
                <a
                  href="https://www.linkedin.com/in/olenareukova/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sharing insights & connecting with devs - find me on LinkedIn{" "}
                  <FontAwesomeIcon icon={faLinkedin} />.
                </a>
              </DiscussionItem>
              <DiscussionItem>
                <a
                  href="https://www.meetup.com/london-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Engaging in Tech Communities - You might spot me at ReactJS,
                  London.JS, and JavaScript London{" "}
                  <FontAwesomeIcon icon={faExternalLinkAlt} />.
                </a>
              </DiscussionItem>
            </DiscussionList>
          </Card>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
