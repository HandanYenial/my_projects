import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";

//We can our style component as following instead of creating ancss file, adding 
//div a classname.
const Container = styled.div`
  height: 100vh;
  background-color:#711A75;

`;

function App() {
  return (
    <Container>
      {/* Adding sections */}
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
     
    </Container>
  );
}

export default App;
