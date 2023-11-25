import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';

const Section = styled.div`
  /* height: 100vh; */
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Works = () => {
  return (
    <Section>
      <Container id='works'>
        {/* <Left> */}
        <Cards />
        {/* <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List> */}
        {/* </Left> */}
        {/* <Right></Right> */}
      </Container>
    </Section>
  );
};

export default Works;
