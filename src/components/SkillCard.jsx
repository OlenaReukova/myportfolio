import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faFigma,
  faNode,
} from '@fortawesome/free-brands-svg-icons';

const CardSet = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const CardContainer = styled.div`
  flex: 0 1 calc(50% - 20px);
  max-width: calc(50% - 20px);
  margin-bottom: 20px;
  /* border: 1px solid #ccc;
  box-shadow: rgba(10, 1, 51, 0.5) 5px 5px 5px 5px;
  border-radius: 5px; */
  padding: 20px;

  @media only screen and (max-width: 768px) {
    flex: 0 1 100%;
    max-width: 100%;
    padding: 0px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0px;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 18px;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: white;
`;

const Card = ({ title, skills }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            {typeof skill.icon === 'string' ? (
              <StyledImg src={skill.icon} alt={skill.description} />
            ) : (
              <FontAwesomeIcon
                icon={skill.icon}
                style={{ marginRight: '10px' }}
              />
            )}
            {skill.description}
          </SkillItem>
        ))}
      </SkillsList>
    </CardContainer>
  );
};

const frontendSkills = [
  { icon: faCss3Alt, description: 'CSS' },
  { icon: faHtml5, description: 'HTML' },
  { icon: faJs, description: 'JavaScript' },
  { icon: faFigma, description: 'Figma' },
];

const backendSkills = [
  { icon: faReact, description: 'React' },
  { icon: faNode, description: 'Node.js' },
  {
    icon: <img src='/public/img/postgresql.png' alt='PostgreSQL' />,
    description: 'PostgreSQL',
  },
  {
    icon: <img src='/public/img/express.png' alt='Express.js' />,
    description: 'Express.js',
  },
];

const SkillCard = () => {
  return (
    <CardSet>
      <Card title='Frontend Development' skills={frontendSkills} />
      <Card title='Backend Development' skills={backendSkills} />
    </CardSet>
  );
};

export default SkillCard;
