import React from "react";
import styled from "styled-components";
import Card from "./Card";
import "./Cards.css";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 768px) {
    padding-bottom: 5px;
    padding-left: 24px;
    font-weight: normal;
    font-size: 2rem;
  }
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const Cards = () => {
  return (
    <div className="Cards">
      <Title>Projects</Title>
      <CardContainer>
        <Card
          title={"Kindly"}
          imgUrl={"/img/kindly.png"}
          subtitle={"Open Source Team project"}
          text={
            <>
              Kindly is a free web app built as an open-source project for
              Trafalgar Girls, a charitable organisation dedicated to helping
              refugees in the UK.
              <br />
              <br />
              The project is currently in the UI/UX design phase, with ongoing
              efforts to refine user flows and visual elements. <br />
              <br />
              <strong>Technologies:</strong> Next.js, TypeScript, Tailwind CSS,
              Supabase, Cypress, Storybook. <br />
              <br />
              <br />
              Responsive web design with a mobile-first approach.
            </>
          }
          websiteLink={"https://cool-creponne-3e1272.netlify.app/"}
          githubLink={"https://github.com/enBloc-org/kindly"}
        />
        <Separator />
        <Card
          title={"The Big Alliance Donation"}
          imgUrl={"/img/bigalliance.png"}
          subtitle={"Team project"}
          text={
            <>
              This project was built during the Fitch Hackathon for Big
              Alliance, September 2024, London.
              <br />
              <br />
              The Big Alliance Donation Website helps users donate to various
              charity campaigns. It supports both individual and company
              donations, and administrators can manage campaigns and view
              reports.
              <br />
              <br />
              <strong>Technologies:</strong> Next.js, TypeScript, Tailwind CSS,
              Prisma, Clerk, PayPal, shadcn/ui, AG Grid Integrated Charts.
              <br />
              <br /> Responsive web design
            </>
          }
          websiteLink={"https://bigalliance.vercel.app/"}
          githubLink={"https://github.com/OlenaReukova/codeathon-team1"}
        />
        <Separator />
        <Card
          title={"Triumph"}
          imgUrl={"/img/Triumphapp2.png"}
          subtitle={"Personal project"}
          text={
            <>
              This is an MVP of an e-commerce website. Users can navigate to the
              checkout page, add items to their cart, remove items from the
              cart, and log in for authentication.
              <br />
              <br />
              <strong> Technologies:</strong> React.js, Firebase, Material UI
              used for the design. Within the React.js framework, methods such
              as React props, State provider with Reducer, reading context API,
              and utilizing state hooks are employed for effective data
              management and enhanced user experience.
              <br />
              <br />
              Responsive web design
            </>
          }
          websiteLink={"https://ubiquitous-empanada-60d82a.netlify.app/"}
          githubLink={"https://github.com/OlenaReukova/eShop-react"}
        />
        <Separator />
        <Card
          title={"Radio Player"}
          imgUrl={"/img/Radioapp.png"}
          subtitle={"Personal project"}
          text={
            <>
              The radio app features clickable music types, with a simple and
              user-friendly interface.
              <br />
              <br /> <strong>Technologies:</strong> React.js, Vite, the
              RadioBrowser API, and the React H5 Audio Player component.
              <br />
              <br />
              Responsive web design.
            </>
          }
          websiteLink={"https://radio-app-client.vercel.app"}
          githubLink={"https://github.com/OlenaReukova/radio-app"}
        />

        <Separator />
        <Card
          title={"Tv Show"}
          imgUrl={"/img/movie.jpg"}
          subtitle={"Personal project"}
          text={
            <>
              A dynamic TV show allows users to search for episodes by name or
              choose from a list. Simple for users to explore their favourite
              shows.
              <br />
              <br />
              <strong>Technologies:</strong> JavaScript and DOM.
              <br />
              <br />
              Responsive web design.
            </>
          }
          websiteLink={"https://cyf-olenareukova-tv.netlify.app/"}
          githubLink={"https://github.com/OlenaReukova/tv-show-dom-project"}
        />
        <Separator />
        <Card
          title={"A passenger counter"}
          imgUrl={"/img/counter.png"}
          subtitle={"Personal project"}
          text={
            <>
              A passenger counter allows user to count the number of people in
              the train. <br />
              <br />
              <br />
              <strong>Technologies:</strong> JavaScript.
              <br />
              <br />
              Responsive web design.
            </>
          }
          websiteLink={"https://magical-malasada-c11910.netlify.app/"}
          githubLink={"https://github.com/OlenaReukova/a-passenger-counter-app"}
        />
      </CardContainer>
    </div>
  );
};
export default Cards;
