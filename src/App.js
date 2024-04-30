import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styled from 'styled-components';
import Footer from './components/Footer';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  color: white;
`;

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
