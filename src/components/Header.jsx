import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #282962;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  width: 96%;
  max-height: 60px;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
  animation: header 500ms ease-in-out;

  .bars {
    display: none;
  }
  @media (max-width: 640px) {
    justify-content: flex-end;
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 100;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? 'transparent' : '#fff')};
        transition: all 400ms ease-in-out;
        :before,
        :after {
          content: '';
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
        }

        :before {
          transform: ${(props) =>
            props.bar ? 'rotate(45deg)' : 'translateY(10px)'};
          transition: all 400ms ease-in-out;
        }

        :after {
          transform: ${(props) =>
            props.bar ? 'rotate(-45deg)' : 'translateY(-10px)'};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }
`;

// const Button = styled.button`
//   background-color: white;
//   color: #082162;
//   font-size: 1.2rem;
//   font-weight: 800;
//   width: 50px;
//   height: 50px;
//   border: none;
//   border-radius: 50%;
//   cursor: pointer;
//   :hover {
//     transform: scale(1.5);
//   }
// `;

const Button = styled.button`
  /* Base button styles */
  background-color: transparent;
  /* background: linear-gradient(
    91.1deg,
    rgb(57, 31, 105) -2.3%,
    rgb(115, 43, 155) 44.4%,
    rgb(231, 75, 184) 103.4%
  ); */
  margin-left: 15px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;

  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Hover effect */
  &:hover {
    --edge-light: hsla(0, 0%, 50%, 1);
    text-shadow: 0px 0px 10px var(--text-light);
    box-shadow: inset 0.4px 1px 4px var(--edge-light),
      2px 4px 8px hsla(0, 0%, 0%, 0.295);
    transform: scale(1.1);
  }

  /* Media query for smaller screens */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
// const Logo = styled.p`
//   font-size: 1.6rem;
//   cursor: pointer;
// `;
const Nav = styled.div`
  font-size: 1.2rem;
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      89.7deg,
      rgb(0, 32, 95) 2.8%,
      rgb(132, 53, 142) 97.8%
    );
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? '100vh' : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }
  span {
    margin-left: 1rem;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        color: linear-gradient(
          91.1deg,
          rgb(57, 31, 105) -2.3%,
          rgb(115, 43, 155) 44.4%,
          rgb(231, 75, 184) 103.4%
        );
        /* opacity: 0.7; */
      }
    }
  }
`;

const Header = () => {
  const [bar, setBar] = useState(false);

  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    if (window.innerWidth <= 640) {
      setBar(false);
    }
  };
  const downloadCV = () => {
    const cvURL =
      'https://drive.google.com/file/d/1bh-Fg0qaLkWqNH0lY4nSKelt8ouwYipz/view?usp=sharing';
    window.open(cvURL, '_blank');
  };
  // const handleLogoClick = () => {
  //   handleLinkClick('home');
  // };
  return (
    <Section>
      <Container bar={bar}>
        {/* <Logo onClick={handleLogoClick}>Olena Reukova</Logo> */}
        <Nav bar={bar}>
          <span>
            <a href='#home' onClick={() => handleLinkClick('home')}>
              Home
            </a>
          </span>
          <span>
            <a href='#who' onClick={() => handleLinkClick('who')}>
              About Me
            </a>
          </span>
          <span>
            <a href='#projects' onClick={() => handleLinkClick('works')}>
              Projects
            </a>
          </span>
          <span>
            <a href='#contact' onClick={() => handleLinkClick('contact')}>
              Contact
            </a>
          </span>
        </Nav>
        <Button onClick={downloadCV}> Download CV</Button>
        <div onClick={() => setBar(!bar)} className='bars'>
          <div className='bar'></div>
        </div>
      </Container>
    </Section>
  );
};

export default Header;
