import React from 'react'
import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls,SpotLight, Preload, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CanvasLoader from '../Loader.jsx';
import { MeshBasicMaterial, MeshLambertMaterial } from 'three';
const Earth = () => {

  const earth = useGLTF( './planet/scene.gltf')
  
  return (
    <primitive
   
      object={earth.scene}
      scale={0.00045}
      position-y={0}
      rotation-y={0}
    /> 
     )
     
}

const EarthCanvas=()=>{
  return(<Canvas
 
      shadows
      frameloop='demand'
      camera={{ 
        fov:25,
        near:0.1,
        far:1000,
        position:[-4,3,6]
    }}
    
> 
    <Suspense 
    
    fallback={<CanvasLoader/>}>
    <OrbitControls
    autoRotate
    enableZoom={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI /2}
    />
    <Earth/>
    
    </Suspense>
    <mesh >
 
    <hemisphereLight intensity={2.5} color={'#0F13F1E3'} position={[2,2,2]}/>
    <pointLight 
    intensity={0.8}
      position = {[1,5,-12]}
    />
      <SpotLight
        position ={[1,-8,8]}
        penumbra={2}
        intensity={0.5}
        shadow-mapSize={1024}
    />
  </mesh>
    
    </Canvas>)
}
export default EarthCanvas
