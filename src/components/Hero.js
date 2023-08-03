import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Hero = () => {
  return (
    <Section>
      <p>Hero</p>
    </Section>
  );
};

export default Hero;
