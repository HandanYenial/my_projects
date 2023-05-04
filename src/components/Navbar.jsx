import React from 'react';
import styled from "styled-components";

const Section = styled.div`
   display:flex;
   justify-content:center;

   @media only screen and (max-width: 768px) {
    width: 100%;
   }
  
`;

const Container = styled.div`
  width:1400px:
  display:flex;
  justify-content: space-between;
  color:white;
  align-items:left;
  padding:20px 0px;
  font-weight:bold;
  font-size:x-large;

  @media only screen and (max-width:768px){
    width:100%;
    padding:10px;
  }

`;

const Logo = styled.img`
  height: 70px;
`;

const Links = styled.div`
  display:flex;
  align-items:center;
  gap:50px;
  list-style:none;
`;

const List = styled.ul`
  display:flex;
  gap:20px;
  list-style:none;

  @media only screen and (max-width:768){
    display:none;
  }
`;

const ListItem = styled.li`
  cursor:pointer;
`;


function Navbar(){
  return (
    <Section>
      <Container>
         <Links>
          <Logo src="./img/gears_web.gif"/>
         <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Projects</ListItem>
          <ListItem>Contact</ListItem>
         </List>
         </Links>    
      </Container>
    </Section>
  );
};

export default Navbar;