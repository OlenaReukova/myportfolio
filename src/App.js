import './App.css';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contacts from './components/Contacts';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </Container>
  );
}

export default App;
