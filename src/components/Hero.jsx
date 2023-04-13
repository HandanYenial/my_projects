import React from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;

  @media only screen and (max-width:768px){
    height:200vh;
  }
`;

const Container = styled.div`
  height:100%;
  scroll-snap-align:center;
  width:1400px;
  display:flex;
  justify-content:space-between;

  @media only screem and (max-width:768px){
    width:100%;
    flex-direction:column;
    align-items:cebter;
    justify-content:center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.div`
  font-size:74px;

  @media only screen and (max-width:768px){
    text-align:center;
  }
`;

const WhatWeDo = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`;

const Subtitle = styled.h2`
  color:#D61C4E;
`;

const Desc= styled.p`
  font-size:24px;
  color:#9FB4FF;

  @media only screen and (max-width:768px){
    padding:20px;
    text-align:center;
  }
`;

const Button = styled.button`
  background-color:  #FFCB42;
  color: black;
  font-weight:500;
  width:100px;
  padding:10px;
  border:none;
  border-radius:5px;
  cursor:pointer;
`;

function Hero(){
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>
            Web Developer Portfolio
          </Title>
          <WhatWeDo>
           <Subtitle>What I do</Subtitle>
          </WhatWeDo>
          <Desc> Building a portfolio by a project at a time.</Desc>
          <Button> Learn More </Button>
        </Left>
        <Right>
          <Img src="./img/82448.jpg"/>
        </Right>
      </Container>

    </Section>
  )
}

export default Hero