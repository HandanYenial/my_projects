import React from 'react';
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap:50px;  
`;

const Left = styled.div`
  flex:1;
  display:flex;
  aling-items:center;
  justify-content:flex-end;
  @media only screen and (max-width:768px){
    justify-content:center;
  }
  `;

const Title = styled.h1`
  font-weight:200px;  
`;

const Form = styled.form`
  width:500px;
  display:flex;
  flex-direction:column;
  gap:25px;
  
  @media only screen and (max-width:768px){
    width:300px;
  }
`;

const Input= styled.input`
  padding: 20px;
  background-color: purple;
  border: none;
  border-radius:5px;
`;

const TextArea = styled.textarea`
  padding:20px;
  border:none;
  border-radius:5px;
  background-color: pink;
`;

const Button = styled.button`
  background-color:blue;
  color:white;
  border:none;
  font-weight:bold;
  cursor:pointer;
  border-radius:5px;
  padding:20px; 
`;

const Right = styled.div`
  flex:1;

  @media only screen and (max-width:768px){
    display:none;
  }
`


function Contact() {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
          <Title>Contact Me!</Title>
          <Input placeholder="Name" name= "name"/>
          <Input placeholder="Email" name="email"/>
          <TextArea 
                   placeholder="Enter your message"
                   name="message"
                   
          />
          <Button type="submit">Send</Button>
          
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>

      </Container>
    </Section>
  )
}

export default Contact;