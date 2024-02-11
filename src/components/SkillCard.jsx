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

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  box-shadow: rgba(10, 1, 51, 0.5) 5px 5px 5px 5px;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
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
    icon: '/img/postgresql.png',
    description: 'PostgreSQL',
  },
  {
    icon: '/img/express.png',
    description: 'Express.js',
  },
];

const SkillCard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Card title='Frontend Development' skills={frontendSkills} />
      <Card title='Backend Development' skills={backendSkills} />
    </div>
  );
};

export default SkillCard;
