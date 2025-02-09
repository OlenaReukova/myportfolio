import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: calc(33.33% - 20px);
  max-width: 600px;
  margin: 20px auto;
  background: transparent;
  color: white;
  text-align: center;
  justify-content: space-around;
  justify-content: space-between;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(249, 248, 248, 0.1);
  }
  */ @media (max-width: 768px) {
    width: calc(88% - 5px);
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: calc(50% - 20px);
  }
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.$background});
  width: 100%;
  vertical-align: middle;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 15rem;
`;

const CardTextWrapper = styled.div`
  padding: 20px 0;
`;

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 30px;
  text-align: left;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CardTextBody = styled.p`
  text-align: left;
  color: white;
  font-size: 18px;
  margin: 10px 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardSubtitle = styled.p`
  padding: 10px 0;
  text-align: left;
  color: white;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardStatWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  gap: 50px;
  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 10px;
  }
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  padding: 10px 20px;

  border: 0.5px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  :hover {
    background-color: #32327a;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Card = ({ title, imgUrl, text, subtitle, websiteLink, githubLink }) => {
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <CardWrapper>
      <CardImage $background={imgUrl} />
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardTextBody>{text}</CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        <CardStats>
          <LinkButton onClick={() => handleButtonClick(websiteLink)}>
            View Demo
          </LinkButton>
        </CardStats>
        <CardStats>
          <LinkButton onClick={() => handleButtonClick(githubLink)}>
            View GitHub
          </LinkButton>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  );
};

export default Card;
