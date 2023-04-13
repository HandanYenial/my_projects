import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";

//We can our style component as following instead of creating ancss file, adding 
//div a classname.
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/pawell.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`;
// scroll-snap-type: y mandatory;so scrolling will work in any occassion.
// scrollbar-width:none; will delete the scroll bar between pages. but it will work for only firefox, so 
// I'll add webkit to be sure it works for chrome too.

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
