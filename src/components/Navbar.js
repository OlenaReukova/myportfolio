import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  scroll-snap-align: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 20px;
  color: white;
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #001f3f;
    background-color: #fff;
    border-radius: 5px;
    padding: 0.2rem 0.2rem;
  }
`;

// const Links = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 50px;
// `;

// const List = styled.ul`
//   display: flex;
//   gap: 20px;
//   list-style: none;

//   @media only screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const ListItem = styled.li`
//   cursor: pointer;
// `;

// const Icon = styled.img`
//   width: 20px;
//   cursor: pointer;
// `;

// const Icons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const Button = styled.button`
//   width: 100px;
//   padding: 10px;
//   background-color: #f45050;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <nav>
          <NavLinks>
            <NavItem>
              <StyledLink to='/'>Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to='/who'>About Me</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to='/works'>Projects</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to='/contact'>Contact</StyledLink>
            </NavItem>
          </NavLinks>
        </nav>
      </Container>
    </Section>
  );
};

export default Navbar;
