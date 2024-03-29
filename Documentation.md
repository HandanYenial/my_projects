# Setting up Project Dependencies

## 1. Vite
[Vite](https://vitejs.dev/) is a build tool designed to offer a faster and more streamlined development experience for modern web projects.

``` npm create vite@latest ```

## 2. Tailwind
Tailwind is a utility-first CSS framework, provides a range of pre-defined classes for quick and flexible design implementation directly in your markup.
```
 npm install -D tailwindcss
 npx tailwindcss init
```

## 3. Additional Packages
Install the following packages to enhance your project functionality:
```
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

## Note:

``` --legacy-peer-deps ``` Include this extension when using older versions of React (as required by some packages).
``` @react-three/fiber ```  React-based Three.js library, enabling the integration of Three.js code into React.
``` @react-three/drei ```  A set of useful helpers for react-three/fiber.
``` maath ```  Provides math utility, especially useful for 3D operations.
``` react-tilt ```  Introduces engaging animations when hovering over cards.
``` react-vertical-timeline-component ```  A component for creating vertical timelines.
``` @emailjs/browser ```  Facilitates email functionality in your application.
``` framer-motion ```  A library for creating smooth animations in React.
``` react-router-dom ```  A widely used library for handling routing in React applications, ensuring synchronization between the user interface and the URL. For more details, refer to the React Router documentation.

# Integrating Free 3D Models
## Step 1:
``` 
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH  # Add this to the end of ~/.profile
source ~/.profile
npm install --location=global gltf-pipeline

``` 

## Step 2: Navigate to the Downloaded Material
``` 
cd ~/Downloads
``` 

## Step 3: Transform gltf File to JSX
``` 
cd grand_piano
npx gltfjsx scene.gltf --transform

``` 

## Step 4: Move to the Generated Folder
Navigate to the folder where the JSX file is generated.

## Step 5: Modify the JSX File
Add the default keyword to the function in the JSX file:
``` 
export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    // ...rest of the code
  );
}
``` 

## Step 6: Transfer Files
Move the scene-transformed.glb file to the public folder.

## Step 7: Import the 3D Model into React
In the desired JSX file, import the 3D model:
``` 
import Scene from "./Scene";
``` 
## Step 8: Add Lighting
Enhance the 3D model's appearance by adding lighting:
``` 
<Canvas>
  <Stage environment="city" intensity={0.6}>
    <ambientLight intensity={0.6} />
    <directionalLight intensity={0.5} />
    <Scene />
  </Stage>
  <OrbitControls enableZoom={false} autoRotate />
</Canvas>
``` 
This setup includes a city environment, ambient light, directional light, and the imported 3D model.




