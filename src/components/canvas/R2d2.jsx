/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.glb --transform 
Files: scene.glb [30.99MB] > S:\Repository\portfolio\dist\r2d2\scene-transformed.glb [1.75MB] (94%)
Author: StarWars-Universe (https://sketchfab.com/SWU)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/r2-d2-animated-476fe6527305404cb0d7e1ebe9eead63
Title: R2-D2 (Animated)
*/
import { Stars, OrbitControls, Circle, Preload, SpotLight } from '@react-three/drei'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useLoader } from '@react-three/fiber'
export function R2d2(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/r2d2/r2d2-transformed.glb')
  const { actions } = useAnimations(animations, group)

 
  const [animation, setAnimation] = useState("Animation")
  
  useEffect(()=>{
     
      actions[animation].play()


 
  },[animation,actions])

 
  return (

    <group ref={group} {...props} dispose={null}>
  
      <group name="Sketchfab_Scene">
      
         <mesh>
              <hemisphereLight intensity={0.21}/>
              <pointLight 
              intensity={1.8}
                position = {[30,25,-12]}
              />
                <SpotLight
                  position ={[-3,-8,8]}
                  penumbra={2}
                  intensity={3.5}
                  shadow-mapSize={1024}
              />

          
           
      </mesh>
     
        <group name="_D2_R2Body_NeutralPose" position={[0.95, -0.50, 0]} scale={0.269}>
          <group name="_D2_R2Body">
            <group name="_D2_R2Left_Upper_Leg" position={[0.024, -1.084, 0.027]} scale={0.037}>
              <group name="_D2_R2Left_Lower_Leg">
                <mesh name="_D2_R2Left_Lower_Leg_Left_Lower_LegMat_0" geometry={nodes._D2_R2Left_Lower_Leg_Left_Lower_LegMat_0.geometry} material={materials.Left_FootMat} />
              </group>
              <mesh name="_D2_R2Left_Upper_Leg_Left_Upper_LegMat_0" geometry={nodes._D2_R2Left_Upper_Leg_Left_Upper_LegMat_0.geometry} material={materials.Left_FootMat} />
            </group>
            <group name="_D2_R2Right_Upper_Leg" position={[0.024, -1.084, 0.027]} scale={0.037}>
              <group name="_D2_R2Right_Lower_Leg">
                <mesh name="_D2_R2Right_Lower_Leg_Right_Lower_LegMat_0" geometry={nodes._D2_R2Right_Lower_Leg_Right_Lower_LegMat_0.geometry} material={materials.Left_FootMat} />
              </group>
              <mesh name="_D2_R2Right_Upper_Leg_Right_Upper_LegMat_0" geometry={nodes._D2_R2Right_Upper_Leg_Right_Upper_LegMat_0.geometry} material={materials.Left_FootMat} />
            </group>
            <group name="_D2_R2Cylinder_NeutralPose" position={[0, 2.211, 0]} scale={0.478}>
              <group name="_D2_R2Cylinder">
                <group name="_D2_R2body2" position={[0.05, -6.894, 0.057]} scale={0.077}>
                  <mesh name="_D2_R2body2_body1Mat_0" geometry={nodes._D2_R2body2_body1Mat_0.geometry} material={materials.Left_FootMat} />
                </group>
                <group name="_D2_R2Right_Vertical_Too_NeutralPose" position={[-1.7, 0.359, 1.225]} rotation={[0, -0.953, 0]} scale={0.077}>
                  <group name="_D2_R2Right_Vertical_Too">
                    <group name="_D2_R2polymsh_extracted1_NeutralPose" position={[0, 0.981, 0]} rotation={[0, 0.953, 0]} scale={12.987}>
                      <group name="_D2_R2polymsh_extracted1">
                        <mesh name="_D2_R2polymsh_extracted1_Right_Vertical_TooMat_0" geometry={nodes._D2_R2polymsh_extracted1_Right_Vertical_TooMat_0.geometry} material={materials.Right_Vertical_TooMat} />
                        <mesh name="_D2_R2polymsh_extracted1_Material_0" geometry={nodes._D2_R2polymsh_extracted1_Material_0.geometry} material={materials.Material} />
                      </group>
                    </group>
                    <mesh name="_D2_R2Right_Vertical_Too_Right_Vertical_TooMat_0" geometry={nodes._D2_R2Right_Vertical_Too_Right_Vertical_TooMat_0.geometry} material={materials.Right_Vertical_TooMat} />
                  </group>
                </group>
                <group name="_D2_R2Left_Vertical_Tool_NeutralPose" position={[1.701, 0.378, 1.186]} rotation={[0, -0.621, 0]} scale={0.077}>
                  <group name="_D2_R2Left_Vertical_Tool">
                    <group name="_D2_R2polymsh_extracted_NeutralPose" position={[0, -1.25, 0]} scale={0.077}>
                      <group name="_D2_R2polymsh_extracted">
                        <mesh name="_D2_R2polymsh_extracted_Material8_0" geometry={nodes._D2_R2polymsh_extracted_Material8_0.geometry} material={materials.Material8} />
                        <mesh name="_D2_R2polymsh_extracted_Material9_0" geometry={nodes._D2_R2polymsh_extracted_Material9_0.geometry} material={materials.Material9} />
                      </group>
                    </group>
                    <mesh name="_D2_R2Left_Vertical_Tool_Left_Vertical_ToolMat_0" geometry={nodes._D2_R2Left_Vertical_Tool_Left_Vertical_ToolMat_0.geometry} material={materials.Left_Vertical_ToolMat} />
                  </group>
                </group>
                <group name="_D2_R2Head_NeutralPose" position={[0, 1.004, 0]} rotation={[Math.PI / 2, 0, 0]}>
                  <group name="_D2_R2Head">
                    <group name="_D2_R2Front_Projector" position={[0.906, 2.081, -0.875]} rotation={[-1.733, 0.441, 0.07]} scale={0.276}>
                      <mesh name="_D2_R2Front_Projector_Front_Projector1Mat_0" geometry={nodes._D2_R2Front_Projector_Front_Projector1Mat_0.geometry} material={materials.Left_FootMat} />
                    </group>
                    <group name="_D2_R2Front_Projector1" position={[0.569, -0.796, -2.712]} rotation={[2.72, 0.264, 0.446]} scale={0.276}>
                      <mesh name="_D2_R2Front_Projector1_Front_Projector1Mat_0" geometry={nodes._D2_R2Front_Projector1_Front_Projector1Mat_0.geometry} material={materials.Left_FootMat} />
                    </group>
                    <group name="_D2_R2Front_Projector2" position={[-0.413, -2.246, -0.9]} rotation={[1.734, -0.163, 1.557]} scale={0.276}>
                      <mesh name="_D2_R2Front_Projector2_Front_Projector1Mat_0" geometry={nodes._D2_R2Front_Projector2_Front_Projector1Mat_0.geometry} material={materials.Left_FootMat} />
                    </group>
                    <group name="_D2_R2Dome" position={[0.05, 0.057, 7.898]} rotation={[-Math.PI / 2, 0, 0]} scale={0.077}>
                      <mesh name="_D2_R2Dome_polymshMat_0" geometry={nodes._D2_R2Dome_polymshMat_0.geometry} material={materials.polymshMat} />
                    </group>
                  </group>
                </group>
                <group name="_D2_R2Middle_leg1_NeutralPose" position={[0, -4.756, 0]} rotation={[Math.PI, 0, 0]}>
                  <group name="_D2_R2Middle_leg1">
                    <group name="_D2_R2Middle_Leg" position={[0.05, 2.094, -0.057]} rotation={[Math.PI, 0, 0]} scale={0.077}>
                      <mesh name="_D2_R2Middle_Leg_Middle_LegMat_0" geometry={nodes._D2_R2Middle_Leg_Middle_LegMat_0.geometry} material={materials.Left_FootMat} />
                    </group>
                    <group name="_D2_R2Middle_foot1_NeutralPose" position={[0, -2.138, 0]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="_D2_R2Middle_foot1">
                        <group name="_D2_R2Middle_Foot" position={[0.05, -0.278, -4.343]} rotation={[Math.PI / 2, 0, 0]} scale={0.077}>
                          <mesh name="_D2_R2Middle_Foot_Middle_FootMat_0" geometry={nodes._D2_R2Middle_Foot_Middle_FootMat_0.geometry} material={materials.Left_FootMat} />
                        </group>
                      </group>
                    </group>
                    <group name="_D2_R2Middle_leg2_NeutralPose" position={[0, -4.756, 0]} rotation={[Math.PI, 0, 0]}>
                      <group name="_D2_R2Middle_leg2" position={[0, 2, 0]} rotation={[-Math.PI, 0, 0]} />
                    </group>
                  </group>
                </group>
                <group name="_D2_R2Tool_1_NeutralPose" position={[-1.153, -0.294, 1.777]} scale={0.077}>
                  <group name="_D2_R2Tool_1">
                    <group name="_D2_R2Blue_Lower_Tool">
                      <mesh name="_D2_R2Blue_Lower_Tool_Blue_Lower_ToolMat_0" geometry={nodes._D2_R2Blue_Lower_Tool_Blue_Lower_ToolMat_0.geometry} material={materials.Left_FootMat} />
                    </group>
                  </group>
                </group>
                <group name="_D2_R2Tool_2_NeutralPose" position={[1.157, 0.319, 1.777]} scale={0.077}>
                  <group name="_D2_R2Tool_2">
                    <group name="_D2_R2Blue_Upper_Tool">
                      <mesh name="_D2_R2Blue_Upper_Tool_Blue_Upper_ToolMat_0" geometry={nodes._D2_R2Blue_Upper_Tool_Blue_Upper_ToolMat_0.geometry} material={materials.Left_FootMat} />
                    </group>
                  </group>
                </group>
                <group name="_D2_R2Tool_3_NeutralPose" position={[-1.957, -1.156, 0.97]} scale={0.077}>
                  <group name="_D2_R2Tool_3">
                    <group name="_D2_R2Right_Vertical_Door">
                      <group name="_D2_R2polymsh" position={[0.502, 1.517, 1.022]} scale={12.987}>
                        <mesh name="_D2_R2polymsh_Material7_0" geometry={nodes._D2_R2polymsh_Material7_0.geometry} material={materials.Material7} />
                      </group>
                      <mesh name="_D2_R2Right_Vertical_Door_Right_Vertical_DoorMat_0" geometry={nodes._D2_R2Right_Vertical_Door_Right_Vertical_DoorMat_0.geometry} material={materials.Left_FootMat} />
                    </group>
                  </group>
                </group>
                <group name="_D2_R2Tool_4_NeutralPose" position={[1.948, -0.744, 0.981]} scale={0.077}>
                  <group name="_D2_R2Tool_4">
                    <group name="_D2_R2Left_Vertical_Door">
                      <group name="_D2_R2polymsh1" position={[-0.38, -3.819, 0.884]} scale={12.987}>
                        <mesh name="_D2_R2polymsh1_Material7_0" geometry={nodes._D2_R2polymsh1_Material7_0.geometry} material={materials.Material7} />
                      </group>
                      <mesh name="_D2_R2Left_Vertical_Door_Left_Vertical_DoorMat_0" geometry={nodes._D2_R2Left_Vertical_Door_Left_Vertical_DoorMat_0.geometry} material={materials.Left_Vertical_DoorMat} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh name="_D2_R2Left_Foot_Left_FootMat_0" geometry={nodes._D2_R2Left_Foot_Left_FootMat_0.geometry} material={materials.Left_FootMat} position={[0.95, -0.79, 0.006]} scale={0.010} />
      </group>
    </group>

    )
}

useGLTF.preload('/scene-transformed.glb')

