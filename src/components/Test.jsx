import React from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

//creating a container &make it full screen
const Container = styled.div`
  height:100vh;
  weight:100%;
  scroll-snap-align:center;
`;
//Adding threejs canvas(cannot write html in three js canvas)
//<mesh> is the <div> in threejs-- and no need to import any component seperately
//choose which shape to use and add it with the dimensions as args={[5,5,5]}
//to move shape around I need orbitcontrols inside canvas

function Test(){
    return(
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate={true}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <mesh>
                    <torusKnotGeometry args={[2,2,2]}/>
                    <meshDepthMaterial color="red"/>
                </mesh>

            </Canvas>
        </Container>
    )
};

export default Test;