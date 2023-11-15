import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
//import Scene from "./Scene";

const Desc = styled.div`
  width: 350px;
  height: 300px;
  padding: 20px;
  background-color:#C0DBEA;
  color:#900C3F;
  border-radius: 10px;
  position: absolute;
  font-size:x-large;
  top: 80px;
  right: 300px;

  @media only screen and (max-width: 768px) {
    top: 50;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;


const Events = () => {
  return (
    <>
    
      <Desc>
      Events is designed to access and event information in a specific area. Users can signup, login,search for the events in their area, add their favorite event to their personalized page and leave a comment about it. This app is built with Python, Flask, TicketmasterAPI, Bootstrap, Jinja2,HTML,CSS, and PostgreSQL.
      </Desc>
     
    </>
  );
};

export default Events;