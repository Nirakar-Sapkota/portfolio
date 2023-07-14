//---------------------------working solution-------------
import { Stars, OrbitControls, Circle, Preload, SpotLight } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CanvasLoader from '../loader'



 const Computers=({isMobile}) =>{
  const computer = useLoader(GLTFLoader, './desktop_pc/scene.gltf')
  
 

  return (

    <mesh>
       <hemisphereLight intensity={0.15}/>
       <pointLight intensity={1}/>
         <SpotLight
        position ={[-10,-15,5]}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
       />
       <primitive 
       object={computer.scene}
       scale={isMobile ?.70 :0.75 }
       position={isMobile ? [0,-3,-2.2]:[0,-3.25,-1.5]}
       rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>

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
    frameloop='demand'
    shadows
    camera={{position:[20,3,5], fov:25}}
   
  >

    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      
      />
      <Computers isMobile={isMobile}/>
    </Suspense>

    <Preload all/>


  </Canvas>)
 }

 export default ComputersCanvas;




 //--------------MediaQuery Logic-----------------------//
  // const dino=useLoader(GLTFLoader,'./dino/dino.glb')

  // const ComputersCanvas=()=>{

  //   const [isMobile, setIsMobile]= useState(false);
  
  //   useEffect(()=>{
  //     const mediaQuery = window.matchMedia('max-width:500');
  //     setIsMobile(mediaQuery.matches)
  
  //     const handleMediaQueryChange =(event)=>{
  //       setIsMobile(event.matches)
  //     }
  //     mediaQuery.addEventListener('change', handleMediaQueryChange);
  
  //     return()=>{
  //       mediaQuery.removeEventListener('change',handleMediaQueryChange)
  //     }
  
  //   },[])
  
  // }


//     <Canvas 
//       frameloop='demand'
      
//       camera={{ position:[20,3,5], fov:25 ,} } shadows>
     
//       <directionalLight position={[25,80,45]} castShadow />
//       <mesh>
//       <hemisphereLight intensity={0.15}/>
//         <pointLight intensity={1}/>
//         <SpotLight
//         position ={[-100,160,180]}
//         penumbra={1}
//         intensity={1}
//         shadow-mapSize={1024}
//       />
//       </mesh>
//       <primitive
//         object={computer.scene}
//         scale={0.75}
//         position={[0, -2.75, -1.5]}//xyz axis
//         rotation={[-0.01,-0.2,-0.1]}
//         children-0-castShadow
//       />

//      {/**<primitive
      
//     object={dino.scene}
   
//     position={[10, .25,0]}
//     children-0-castShadow
//         /> */} 

//       <Suspense fallback={<CanvasLoader />}>
//       <OrbitControls
//         enableZoom={false}
//         maxPolAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//       />
      
//       </Suspense>
   
//       <Preload all/>

//   </Canvas>

//   )
// }

// export default Computers;






// <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
//         <meshStandardMaterial />
//       </Circle>
//       <OrbitControls target={[0, 1, 0]} />
//       <axesHelper args={[5]} />
//       <Stats />
//===================donot delete===the above code has worked so far
// import {Suspense, useEffect, useState} from 'react'
// import {Canvas} from '@react-three/fiber';

// import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import { HemisphereLight } from 'three';
// import CanvasLoader from '../Loader'
//  const Computers = () => {

//   const computer = useGLTF('./desktop_pc/scene.gltf');

//  return (
//     <mesh>
//           <HemisphereLight intensity={0.15} groundColor="black"/>
//           <pointLight intensity={1} />
//           <primitive 
//             object={computer.scene}
//           /> 
//    </mesh>
//   );

// }
// const ComputersCanvas = () => {
//   return (
//       <Canvas>

//           shadows
//           camera={{
//               position: [20, 3, 5],
//               fov: 25,
//           }}
          
//           <Suspense fallback={<CanvasLoader />}>
//               <OrbitControls
//                   enableZoom={false}
//                   maxPolarAngle={Math.PI / 2}
//                   minPolarAngle={Math.PI / 2}
//               />
            
//               <Computers />
//           </Suspense >
//           <Preload all />
//       </Canvas>
//   );
// };


// export default ComputersCanvas;




