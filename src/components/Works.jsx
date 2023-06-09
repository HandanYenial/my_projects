import React, { useState } from 'react';
import styled from "styled-components";

import GlobalLegal from "./GlobalLegal";
import Events from "./Events";


//instead of creating 5 <ListIem>s, I can create an array of the data
//and use it with map.

const data= [
  "Events",
  "Global&Legal"
  
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display:flex;
  justify-content:center;
  position:relative;
  color:black;
  font-size:14px;
  font-weight:300;
`;

const Container = styled.div`
width:1400px;
display:flex;
justify-content:space-between;

@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #FCC8F8;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;


function Works() {
  const [work,setWork] = useState("Events");

  return (
    <Section>
      <Container>
         <Left>
         <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
         </Left>
         <Right>
         {work === "Events" ? (
            <Events/>
          ) : work === "Global&Legal" ? (
            <GlobalLegal/>
          ) : (
            <SocialMedia/>
          )}
         </Right>

         
      </Container>
     
    </Section>
    
  );
}

export default Works;