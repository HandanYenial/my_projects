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
  color:#FEB139;
  align-items:center;
  padding:20px 0px;

  @media only screen and (max-width:768px){
    width:100%;
    padding:10px;
  }

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

const ListItem=styled.li`
cursor:pointer;
`;

const Icons = styled.div`
  display:flex;
  align-items:center;
  gap:20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor:pointer;
`;


function Navbar(){
  return (
    <Section>
      <Container>
         <Links>
        
         <List>
          <ListItem>Home</ListItem>
          <ListItem>Studio</ListItem>
          <ListItem>Works</ListItem>
          <ListItem>Contact</ListItem>
         </List>
         <Icon src="https://www.citypng.com/public/uploads/small/11640084033twctsqgxpse8mhanxhflsktftbe6gyx5pyvtwzwel8y4ry6baob0mv2aqitjx7mipotjroaf4rwparnxi6s5aczjkt5kzq1lhh0h.png"/>

         </Links>    
      </Container>
    </Section>
  );
};

export default Navbar;