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
`;

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

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
              <Link to='/' style={linkStyle}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/who' style={linkStyle}>
                About Me
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/works' style={linkStyle}>
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contact' style={linkStyle}>
                Contact
              </Link>
            </NavItem>
          </NavLinks>
        </nav>
        {/* <Icons>
          <Icon src='./img/search.png'></Icon>
          <Button>Hire Now</Button>
        </Icons> */}
      </Container>
    </Section>
  );
};

export default Navbar;
