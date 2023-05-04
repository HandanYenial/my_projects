import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Scene from "./Scene";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>

        <Stage environment="city" intensity={0.6}>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        {/* "Grand Piano" (https://skfb.ly/6UUnK) by Amatsukast is licensed under CC Attribution-NonCommercial-ShareAlike (http://creativecommons.org/licenses/by-nc-sa/4.0/). */}
         <Scene/>
        </Stage>
          {/* Added the 3D model as Scene but it seems only a black shadow--needs light--I can use Stage for that */}
          <OrbitControls enableZoom={false} autoRotate />
      
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};

export default WebDesign;