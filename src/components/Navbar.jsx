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
  align-items:center;
  padding:10px;
  margin:10px;
  font-size:larger;
`;


function Navbar(){
  return (
   
    <Section>
      <Container>
         <Links>
         
         <List>
          
          <ListItem> <Logo src="./img/javascript-logo.png"/></ListItem>
          <ListItem> <Logo src="./img/python-language-logo.png"/></ListItem>
          <ListItem> <Logo src="./img/react.png"/></ListItem>
          <ListItem> <Logo src="./img/html.png"/></ListItem>
          <ListItem> <Logo src="./img/css-logo.png"/></ListItem>
          <ListItem> Web Development - Software Engineering</ListItem>
         </List>
         {/* <a href="https://iconscout.com/3ds/python-language-logo" target="_blank">Free Python Language Logo 3D Icon</a> by <a href="https://iconscout.com/contributors/fahrulsaputra7">Fahrul Saputra</a> on <a href="https://iconscout.com">IconScout</a> */}
         </Links>    
      </Container>
    </Section>
  
  );
};

export default Navbar;