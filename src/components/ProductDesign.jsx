import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lion from "./Lion";

import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>

        <Stage environment="city" intensity={0.6}>
       
        {/* "Themis' Scales of Justice" (https://skfb.ly/ozINO) by Incg5764 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */}
         <Lion/>
        </Stage>
          {/* Added the 3D model as Scene but it seems only a black shadow--needs light--I can use Stage for that */}
          <OrbitControls enableZoom={false}/>
      
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};

export default ProductDesign;