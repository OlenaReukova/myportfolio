import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faFigma,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Scroller = styled.div`
  display: flex;
  gap: 15px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 100px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-right: 10px;
  color: ${(props) => props.color || "white"};
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const frontendSkills = [
  { icon: faCss3Alt, description: "CSS", color: "#264de4" },
  { icon: faHtml5, description: "HTML", color: "#e34c26" },
  { icon: faJs, description: "JavaScript", color: "#f7df1e" },
  { icon: faFigma, description: "Figma", color: "#ff7262" },
  { icon: faReact, description: "React", color: "#61DBFB" },
  { icon: "/img/nextjsicon.svg", description: "Next.js" },
  { icon: "/img/typescript.svg", description: "Typescript" },
  { icon: "/img/tailwind.svg", description: "Tailwind CSS" },
];

const backendSkills = [
  { icon: faNode, description: "Node.js", color: "#68a063" },
  { icon: "/img/postgresql.svg", description: "PostgreSQL" },
  { icon: "/img/supabase.svg", description: "Supabase" },
  { icon: "/img/prisma.svg", description: "Prisma" },
  { icon: "/img/postman.svg", description: "Postman" },
  { icon: "/img/docker.svg", description: "Docker" },
];

const allSkills = [...frontendSkills, ...backendSkills];

const SkillMarquee = () => {
  return (
    <MarqueeContainer>
      <motion.div
        style={{ display: "flex" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        <Scroller>
          {[...allSkills, ...allSkills].map((skill, index) => (
            <Card key={index}>
              {typeof skill.icon === "string" ? (
                <StyledImg src={skill.icon} alt={skill.description} />
              ) : (
                <Icon icon={skill.icon} color={skill.color} />
              )}
              {skill.description}
            </Card>
          ))}
        </Scroller>
      </motion.div>
    </MarqueeContainer>
  );
};

export default SkillMarquee;
