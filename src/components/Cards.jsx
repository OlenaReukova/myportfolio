import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    font-weight: 200;
    padding-bottom: 5px;
  }
`;
const LinkWithBackground = styled.a`
  background-color: none;
  color: white;
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  :hover {
    color: blue;
  }
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
              Technologies: Figma, React.js, Recharts, Node.js, Express, React,
              PostgreSQL, Node.js database migration .
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
            <>
              This is an MVP of an e-commerce website. Users can navigate to the
              checkout page, add items to their cart, remove items from the
              cart, and log in for authentication.
              <br />
              <br />
              Technologies: React.js, Firebase, Material UI used for the design.
              Within the React.js framework, methods such as React props, State
              provider with Reducer, reading context API, and utilizing state
              hooks are employed for effective data management and enhanced user
              experience.
              <br />
              <br />
              Responsive web design
            </>
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
            <>
              This MVP application offers customers AI-powered tools for
              generating video and photo content. <br />
              <br />
              This project is the result of a collaborative effort by three team
              members, aiming to deliver the MVP app through the first
              experience of teamwork using Agile methodology. <br />
              <br />
              Technologies: Figma, JavaScript, HTML5, CSS3. <br />
              <br />
              <br />
              Responsive web design with a mobile-first approach.
            </>
          }
          websiteLink={'https://cyf-ofm-buddy-group-project.netlify.app/#'}
          githubLink={'https://github.com/momahboobian/Buddy-Groups-Challenge'}
        />
        <Card
          title={'Radio Player'}
          imgUrl={'/img/Radioapp.png'}
          subtitle={'Personal project'}
          text={
            <>
              The radio app features clickable music types, with a simple and
              user-friendly interface.
              <br />
              <br /> Technologies: React.js, Vite, the RadioBrowser API, and the
              React H5 Audio Player component.
              <br />
              <br />
              Responsive web design.
            </>
          }
          websiteLink={'https://radio-app-swart.vercel.app/'}
          githubLink={'https://github.com/OlenaReukova/radio-app'}
        />
        <Separator />
        <Card
          title={'Tv Show'}
          imgUrl={'/img/movie.jpg'}
          subtitle={'Personal project'}
          text={
            <>
              A dynamic TV show allows users to search for episodes by name or
              choose from a list. Simple for users to explore their favourite
              shows.
              <br />
              <br />
              Technologies: JavaScript and DOM.
              <br />
              <br />
              Responsive web design.
            </>
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
            <>
              A passenger counter allows user to count the number of people in
              the train. <br />
              <br />
              <br />
              Technologies: JavaScript.
              <br />
              <br />
              <br />
              Responsive web design.
            </>
          }
          websiteLink={'https://magical-malasada-c11910.netlify.app/'}
          githubLink={'https://github.com/OlenaReukova/a-passenger-counter-app'}
        />
      </CardContainer>
    </div>
  );
};
export default Cards;
