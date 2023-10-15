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
  height: 410px; /* Adjust the height to your preference */
`;

const CardTextWrapper = styled.div`
  padding: 20px;
`;

// const CardTextDate = styled.span`
//   color: rgb(255, 7, 110);
//   font-size: 13px;
// `;

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 1.5rem;
  /* background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; */
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
