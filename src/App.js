import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import styled from 'styled-components';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background: linear-gradient(
    89.7deg,
    rgb(0, 32, 95) 2.8%,
    rgb(132, 53, 142) 97.8%
  );
`;

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
