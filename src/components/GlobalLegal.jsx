import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
//import Lion from "./Lion";

import styled from "styled-components";

const Desc = styled.div`
  width: 300px;
  height: 150px;
  padding: 20px;
  background-color: #FCC8F8;
  color:#4D089A;
  border-radius: 10px;
  font-size:large;
  position: absolute;
  bottom: 100px;
  right: 200px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const GlobalLegal = () => {
  return (
    <>
      <Canvas>

        <Stage environment="city" intensity={0.6}>
       
        {/* "Themis' Scales of Justice" (https://skfb.ly/ozINO) by Incg5764 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */}
         {/* <Lion/> */}
        </Stage>
          {/* Added the 3D model as Scene but it seems only a black shadow--needs light--I can use Stage for that */}
          <OrbitControls enableZoom={false}/>
      
      </Canvas>
      <Desc>
      Global&Legal is designed for law firms to build a better communication among practices. Users can signup, login, display each practice and cases associated within. 
      Node.js, Express.js,React.js, MaterialUI, Bootstrap, PostgreSQL, Heroku
      </Desc>
    </>
  );
};

export default GlobalLegal;