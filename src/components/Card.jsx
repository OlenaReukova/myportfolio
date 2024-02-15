import React from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: calc(33.33% - 20px);
  max-width: 600px;
  margin: 20px auto;
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  justify-content: space-around;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: calc(95% - 5px);
  }
  /* @media (max-width: 1200px) {
    width: calc(80% - 20px);
  } */
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.$background});
  width: 100%;
  vertical-align: middle;
  border-radius: 15px;
  background-size: contain;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 15rem;
`;

const CardTextWrapper = styled.div`
  padding: 20px;
`;

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 1.2rem;
`;

const CardTextBody = styled.p`
  text-align: left;
  color: #fff;
  font-weight: 300;
`;

const CardSubtitle = styled.p`
  padding: 10px 0;
  text-align: left;
  color: #fff;
  font-size: 0.8rem;
`;

const CardStatWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
`;

const LinkText = styled.a`
  background-color: none;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 26px;
  :hover {
    color: blue;
  }
`;
const IconB = styled(BsGithub)`
  color: white;
  margin-right: 5px;
  :hover {
    color: blue;
  }
`;
const IconG = styled(FaGlobe)`
  color: white;
  margin-right: 5px;
  :hover {
    color: blue;
  }
`;

const Card = ({ title, imgUrl, text, subtitle, websiteLink, githubLink }) => {
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
          <LinkText href={websiteLink} target='_blank'>
            <IconG />
          </LinkText>
        </CardStats>
        <CardStats>
          <LinkText href={githubLink} target='_blank'>
            <IconB />
          </LinkText>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  );
};

export default Card;
