import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #282962;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  width: 96%;
  max-height: 60px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  position: relative;
  animation: header 500ms ease-in-out;

  @media (max-width: 640px) {
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  background-color: transparent;
  margin-left: 15px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    --edge-light: hsla(0, 0%, 50%, 1);
    text-shadow: 0px 0px 10px var(--text-light);
    box-shadow: inset 0.4px 1px 4px var(--edge-light),
      2px 4px 8px hsla(0, 0%, 0%, 0.295);
    transform: scale(1.1);
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
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
    height: 0;
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }

  &.open {
    height: 100vh;
  }

  span {
    margin-left: 1rem;

    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;

      :before {
        content: "";
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
    }
  }
`;

const Bars = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 9999;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;

    .bar {
      position: absolute;
      width: 30px;
      height: 3px;
      background-color: white;
      transition: all 400ms ease-in-out;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: white;
        transition: transform 400ms ease-in-out;
      }

      &::before {
        transform: translateY(-10px);
      }

      &::after {
        transform: translateY(10px);
      }
    }

    &.open .bar {
      background-color: transparent;

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }
`;

const Header = () => {
  const [bar, setBar] = useState(false);

  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (window.innerWidth <= 640) {
      setBar(false);
    }
  };

  return (
    <Section>
      <Container>
        <Nav className={bar ? "open" : ""}>
          <span>
            <a href="#home" onClick={() => handleLinkClick("home")}>
              Home
            </a>
          </span>
          <span>
            <a href="#who" onClick={() => handleLinkClick("who")}>
              About Me
            </a>
          </span>
          <span>
            <a href="#projects" onClick={() => handleLinkClick("works")}>
              Projects
            </a>
          </span>
          <span>
            <a href="#contact" onClick={() => handleLinkClick("contact")}>
              Contact
            </a>
          </span>
        </Nav>
        <Button>Download CV</Button>
        <Bars className={bar ? "open" : ""} onClick={() => setBar(!bar)}>
          <div className="bar"></div>
        </Bars>
      </Container>
    </Section>
  );
};

export default Header;
