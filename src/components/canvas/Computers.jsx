//---------------------------working solution-------------
import { Stars, OrbitControls, Circle, Preload, SpotLight } from '@react-three/drei'
import React , {Suspense,useRef, useEffect, useState} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CanvasLoader from '../loader'
import { useGLTF, useAnimations } from '@react-three/drei'
import { R2d2 } from '../../../dist/r2d2/Scene'


 const Computers=({isMobile}) =>{

  return (

    ComputersCanvas(isMobile)

  )
 }

 const ComputersCanvas=()=>{


   const [isMobile, setIsMobile]= useState(false);
  
    useEffect(()=>{

      //Add a Listener for changes to the screen size
      const mediaQuery = window.matchMedia('(max-width:500px)');
      
      //Set the initial value of the 'isMobile' state variable
      setIsMobile(mediaQuery.matches)
      
      //define a callback function to handle changes to the media query
      const handleMediaQueryChange =(event)=>{
        setIsMobile(event.matches)
      }

      //Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      
      //Remove the listener when the component is unmounted
      return()=>{
        mediaQuery.removeEventListener('change',handleMediaQueryChange)
      }
  
    },[])
  
  
  
  return( 
  
  <Canvas
    frameloop='always'
    shadows='soft'
    camera={{position:[25,25,45], fov:2}}
   
  >

    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
      enableZoom={false}
      maxPolarAngle={Math.PI * 0.5}
      minPolarAngle={Math.PI * 0.5}
      
      />
      <R2d2 isMobile={isMobile}/>
    </Suspense>

    <Preload all/>


  </Canvas>)
 }

 export default ComputersCanvas;









