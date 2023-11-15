import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
//import Lion from "./Lion";

import styled from "styled-components";

const Desc = styled.div`
  width: 350px;
  height: 250px;
  padding: 20px;
  background-color: #D1D1D1;
  color:#4D089A;
  border-radius: 10px;
  font-size:x-large;
  position: absolute;
  bottom: 300px;
  right: 300px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;s
    right: 0;
    margin: auto;
  }
`;

const GlobalLegal = () => {
  return (
    <>
      <Desc>
      Global&Legal is designed for law firms to build a better communication among practices. Users can signup, login, display each practice and cases associated within. 
      Node.js, Express.js,React.js, MaterialUI, Bootstrap, PostgreSQL, Heroku
      </Desc>
    </>
  );
};

export default GlobalLegal;