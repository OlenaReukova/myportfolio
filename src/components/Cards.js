import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: 74px;
  display: flex;
  justify-content: center;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const Cards = () => {
  return (
    <div className='Cards'>
      <Title>Projects</Title>
      <CardContainer>
        <Card
          title={'Radio Player'}
          imgUrl={'/img/Radioapp.png'}
          text={
            'The radio app with clickable music types. This project was built with React.js, Vite, the RadioBrowser API, and the React H5 Audio Player component.'
          }
          websiteLink={'https://radio-app-swart.vercel.app/'}
          githubLink={'https://github.com/OlenaReukova/radio-app'}
        />
        <Separator />
        <Card
          title={'Triumph'}
          imgUrl={'/img/Triumphapp.png'}
          text={
            'E-commerce project built using React.js, Firebase for the login page, Material UI for design. Rect.js methods:React props,State provider and Reducer,read context API, state hooks.'
          }
          websiteLink={'https://ubiquitous-empanada-60d82a.netlify.app/'}
          githubLink={'https://github.com/OlenaReukova/eShop-react'}
        />
        <Separator />
        <Card
          title={'Artificial Intelligence'}
          imgUrl={'/img/AIapp.png'}
          text={
            'An application that provides customers with AI-powered tools for generating video and photo content. Built with JavaScript, HTML5, CSS3. Applied a mobile-first approach. This project is the result of a collaborative effort by three team members.'
          }
          websiteLink={'https://cyf-ofm-buddy-group-project.netlify.app/#'}
          githubLink={'https://github.com/momahboobian/Buddy-Groups-Challenge'}
        />
      </CardContainer>
    </div>
  );
};
export default Cards;
