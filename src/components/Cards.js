import React from 'react';
import styled from 'styled-components';
import Card from './Card';
// import Radioapp from '/public/img/Radioapp.png';
// import Triumphapp from '/public/img/Triumphapp.png';
// import AIapp from '/public/img/AIapp.png';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
  /* width: 100vw;
  height: 100vh; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* background: #1f2229; */
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
        {/* <Card
          title={'CYF Progress Tracker'}
          imgUrl={'/img/PTapp.png'}
          websiteLink={'https://starter-kit-j8jj.onrender.com/'}
          githubLink={'https://github.com/BoshraM/ldn9-Ctrl-Shift-Learn'}
        />
        <Separator /> */}
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
