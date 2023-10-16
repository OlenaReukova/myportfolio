import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 800px;
  margin: 20px auto;
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

const CardImage = styled.div`
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  height: 410px;
`;

const CardTextWrapper = styled.div`
  padding: 20px;
`;

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 1.5rem;
`;

const CardTextBody = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 300;
`;

const CardStatWrapper = styled.div`
  background: #5930e5;
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
  color: #fff;
  text-decoration: none;
`;

const Card = ({ title, imgUrl, text, websiteLink, githubLink }) => {
  return (
    <CardWrapper>
      <CardImage background={imgUrl} />
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>{text}</CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        <CardStats>
          <LinkText href={websiteLink} target='_blank'>
            website
          </LinkText>
        </CardStats>
        <CardStats>
          <LinkText href={githubLink} target='_blank'>
            github
          </LinkText>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  );
};

export default Card;
