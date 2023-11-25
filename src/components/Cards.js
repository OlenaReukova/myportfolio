import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
  overflow: hidden; */
  /* @media (min-width: 340px) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 90%;
  } */

  /* @media (min-width: 576px) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 90%;
  } */
  /* @media (min-width: 768) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 90%;
  } */
`;

const Title = styled.h1`
  font-size: 74px;
  display: flex;
  justify-content: center;
`;
const LinkWithBackground = styled.a`
  background-color: white;
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
          title={'Trainee Progress Tracker'}
          imgUrl={'/img/tracker.png'}
          subtitle={'Team project'}
          text={
            <>
              A full-stack project that consists of two Dashboards. In the{' '}
              <LinkWithBackground
                href='https://starter-kit-j8jj.onrender.com/'
                target='_blank'
                rel='noopener noreferrer'>
                Trainee Dashboard
              </LinkWithBackground>{' '}
              trainees should log in with their GitHub usernames to check their
              progress on the milestone goals. In the{' '}
              <LinkWithBackground
                href='https://starter-kit-j8jj.onrender.com/admin/cohorts/59'
                target='_blank'
                rel='noopener noreferrer'>
                Manager Dashboard
              </LinkWithBackground>{' '}
              , product managers can manage cohorts and add trainees. <br />
              <br />
              Front end was build with Figma, React.js, Recharts charting
              library. <br />
              <br />
              Back end was built with Node.js, Express server, React.js, React
              router, PostgreSQL and Node.js database migration.
              <br />
              <br /> Responsive web design
            </>
          }
          websiteLink={'https://starter-kit-j8jj.onrender.com/'}
          githubLink={'https://github.com/BoshraM/ldn9-Ctrl-Shift-Learn'}
        />
        <Separator />
        <Card
          title={'Triumph'}
          imgUrl={'/img/Triumphapp.png'}
          subtitle={'Personal project'}
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
          subtitle={'Team project'}
          text={
            'An MVP application that provides customers with AI-powered tools for generating video and photo content. Front end was built with JavaScript, HTML5, CSS3. Applied a mobile-first approach. This project is the result of a collaborative effort by three team members.'
          }
          websiteLink={'https://cyf-ofm-buddy-group-project.netlify.app/#'}
          githubLink={'https://github.com/momahboobian/Buddy-Groups-Challenge'}
        />
        <Card
          title={'Radio Player'}
          imgUrl={'/img/Radioapp.png'}
          subtitle={'Personal project'}
          text={
            'The radio app with clickable music types. This project was built with React.js, Vite, the RadioBrowser API, and the React H5 Audio Player component.'
          }
          websiteLink={'https://radio-app-swart.vercel.app/'}
          githubLink={'https://github.com/OlenaReukova/radio-app'}
        />
        <Separator />
        <Card
          title={'Tv Show'}
          imgUrl={'/img/movie.png'}
          subtitle={'Personal project'}
          text={
            'A dynamic TV show project using vanilla JavaScript and DOM, making it simple for users to explore their favourite shows.'
          }
          websiteLink={'https://cyf-olenareukova-tv.netlify.app/'}
          githubLink={'https://github.com/OlenaReukova/tv-show-dom-project'}
        />
        <Separator />
        <Card
          title={'A passenger counter'}
          imgUrl={'/img/counter.png'}
          subtitle={'Personal project'}
          text={
            'A passenger counter allows user to count the number of people in the train. This application was built with JavaScript'
          }
          websiteLink={'https://magical-malasada-c11910.netlify.app/'}
          githubLink={'https://github.com/OlenaReukova/a-passenger-counter-app'}
        />
      </CardContainer>
    </div>
  );
};
export default Cards;
