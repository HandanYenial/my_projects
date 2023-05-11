import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Scene from "./Scene";

const Desc = styled.div`
  width: 300px;
  height: 200px;
  padding: 20px;
  background-color:#C7F5FE;
  color:#A31ACB;
  border-radius: 10px;
  position: absolute;
  font-size:large;
  top: 30px;
  right: 500px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Events = () => {
  return (
    <>
      <Canvas>

      <Stage environment="city" intensity={0.6}>
       
       {/* "Themis' Scales of Justice" (https://skfb.ly/ozINO) by Incg5764 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */}
        <Scene/>
       </Stage>
         {/* Added the 3D model as Scene but it seems only a black shadow--needs light--I can use Stage for that */}
         <OrbitControls enableZoom={false}/>
     
      </Canvas>
      <Desc>
      Events is designed to access and event information in a specific area. Users can signup, login,search for the events in their area, add their favorite event to their personalized page and leave a comment about it. This app is built with Python, Flask, TicketmasterAPI, Bootstrap, Jinja2,HTML,CSS, and PostgreSQL.
      </Desc>
    </>
  );
};

export default Events;