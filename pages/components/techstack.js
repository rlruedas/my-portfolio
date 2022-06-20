import React, { useRef } from 'react'
import Zoom from 'react-reveal/Zoom'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, PerspectiveCamera, PresentationControls, OrbitControls } from "@react-three/drei"
import * as THREE from 'three'
import { AmbientLight, DoubleSide, FrontSide } from 'three'


function Scene(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/model/tech_stack.gltf");


     return (
    <group ref={group} {...props} dispose={null}>
      <group position={[34.47, 57.4, -7.93]} scale={[0.13, 0.13, 0.07]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_0.geometry}
          material={nodes.node_0.material}
          position={[0, -2.78, 0]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1.geometry}
          material={nodes.node_1.material}
          position={[104.68, -86.79, 0.01]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
      </group>
      <group
        position={[-25.75, -29.6, 45.72]}
        rotation={[0, -0.31, 0]}
        scale={[1.87, 1.73, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tailwind_0.geometry}
          material={nodes.tailwind_0.material}
          position={[-4.27, 5.65, 31.47]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tailwind_1.geometry}
          material={nodes.tailwind_1.material}
          position={[-7.77, 1.15, 31.48]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
      </group>
      <group
        position={[-6.62, 30.01, -11.99]}
        rotation={[-0.15, 0.27, 0.04]}
        scale={[0.07, 0.06, 0.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.css_0.geometry}
          material={nodes.css_0.material}
          position={[21.38, 0, 0]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.css_1.geometry}
          material={nodes.css_1.material}
          position={[127.98, -106.69, 0.01]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
      </group>
      <group
        position={[13.91, -33.56, 32.63]}
        rotation={[0.03, 0.19, 0]}
        scale={[2.73, 2.73, 0.35]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.git_0.geometry}
          material={nodes.git_0.material}
          position={[-6.35, 8.18, 0]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
      </group>
      <group
        position={[-26.94, -9.89, -60.19]}
        rotation={[0.17, 0.37, -0.06]}
        scale={[0.69, 0.68, 0.69]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.react_0.geometry}
          material={nodes.react_0.material}
          position={[-33, 25.33, 0]}
          scale={[2.25, 2.13, 1]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.react_1.geometry}
          material={nodes.react_1.material}
          position={[-8.25, 4.75, 0.01]}
          scale={[2.25, 2.13, 1]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
      </group>
      <group
        position={[-61.76, 54.03, -38.82]}
        rotation={[-0.26, -0.26, -0.12]}
        scale={[0.37, 0.35, 0.46]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.html_0.geometry}
          material={nodes.html_0.material}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
      </group>
      <group
        position={[-63.13, 6.27, 57.96]}
        rotation={[0, 0.21, 0]}
        scale={[1.54, 1.6, 1.53]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.adobe_0.geometry}
          material={nodes.adobe_0.material}
          position={[4, -5.75, 1.06]}
          rotation={[-0.36, 0.47, 0.17]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.adobe_1.geometry}
          material={nodes.adobe_1.material}
          position={[-1.16, -1, 2.06]}
          rotation={[-0.36, 0.47, 0.17]}
        >
            <meshLambertMaterial color={"#A64B2A"} />
        </mesh>
      </group>
      <spotLight
        intensity={1}
        angle={Math.PI / 6}
        decay={2}
        distance={2000}
        position={[-3.02, 94.18, 247.63]}
        rotation={[1.26, 0, 0]}
      />
      <PerspectiveCamera
        makeDefault
        far={100000}
        near={5}
        fov={45}
        position={[0, 0, 160]}
      />
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Github.geometry}
        material={nodes.Github.material}
        position={[42.68, 17.83, 3.76]}
        rotation={[0, -0.61, 0]}
        scale={[2, 2, 2]}
      >
        <meshLambertMaterial color={"#A64B2A"} />
      </mesh>
    </group>
  );

   
}


function techstack() {


    return (
        <div className="flex w-screen h-screen  relative "  >
            <div className=" flex flex-col  w-full h-screen justify-center items-center m-0 p-0 relative">
                <h1 className="text-[40px] duration-500 lg:text-[70px] relative text-black lg:w-[60%] text-center  font-bold" >
                    My Tools
                </h1>
                <Canvas dpr={[1, 2]}>
                    <Scene />
                    <ambientLight args={["#FFFFFF", .5]} castShadow receiveShadow />
                    <spotLight intensity={.25} angle={0.2} penumbra={1} position={[-200, 10, 100]} />

                </Canvas>


            </div>

        </div>
    )
}

export default techstack

useGLTF.preload("/model/tech_stack.gltf");