import React, { useRef } from 'react'
import Zoom from 'react-reveal/Zoom'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, PerspectiveCamera, } from "@react-three/drei"
import * as THREE from 'three'
import { AmbientLight } from 'three'


function Scene(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/model/tech_stack.gltf");
    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[-115.05, 55.47, -22.59]} rotation={[0.12, 0.45, -0.05]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_0.geometry}
                    material={nodes.Shape_0.material}
                    position={[-22.96, 35.79, -0.99]}
                    scale={[5.87, 6.7, 100]}
                    ref={group}
                >
                    <meshStandardMaterial color={"#D7A86E"} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_1.geometry}
                    material={nodes.Shape_1.material}
                    position={[-43.5, 5.64, 0.01]}
                    scale={[5.87, 6.7, 100]}
                    ref={group}
                >
                    <meshStandardMaterial color={"#D7A86E"} />
                </mesh>
            </group>
            <group
                position={[13.42, 147.62, -178.93]}
                rotation={[0, -0.16, 0]}
                scale={[5.46, 5.47, 1.05]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_0_1.geometry}
                    material={nodes.Shape_0_1.material}
                    position={[-6.35, 8.18, 0]}
                    ref={group}
                >
                    <meshStandardMaterial color={"#D7A86E"} />
                </mesh>
            </group>
            <group position={[-8.89, 81.18, -131.05]} rotation={[0.17, 0.37, -0.06]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_0_2.geometry}
                    material={nodes.Shape_0_2.material}
                    position={[-33, 25.33, 0]}
                    scale={[2.25, 2.13, 1]}
                >
                    <meshStandardMaterial color={"#D7A86E"} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_0_3.geometry}
                    material={nodes.Shape_0_3.material}
                    position={[-8.25, 4.75, 0.01]}
                    scale={[2.25, 2.13, 1]}
                >
                    <meshStandardMaterial color={"#D7A86E"} />
                </mesh>
            </group>
            <group
                position={[105.59, 254.11, -468.44]}
                rotation={[-0.26, -0.26, -0.12]}
                scale={[0.72, 0.78, 0.88]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_0_4.geometry}
                    material={nodes.Shape_0_4.material}
                >
                    <meshStandardMaterial color={"#D7A86E"} />
                </mesh>
            </group>
            <group
                position={[211.59, 161, -357.11]}
                rotation={[-Math.PI, -0.63, -Math.PI]}
                scale={[-0.34, 0.3, 0.23]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_0_5.geometry}
                    material={nodes.Shape_0_5.material}
                    position={[0, -2.78, 0]}
                >
                    <meshStandardMaterial color={"#D7A86E"} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_0_6.geometry}
                    material={nodes.Shape_0_6.material}
                    position={[104.68, -86.79, 0.01]}
                >
                    <meshStandardMaterial color={"#D7A86E"} />
                </mesh>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Github.geometry}
                material={nodes.Github.material}
                position={[87.1, 129, -131.66]}
                rotation={[0, -0.35, 0]}
                scale={[2, 2, 2]}
            >
                <meshStandardMaterial color={"#D7A86E"} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boolean.geometry}
                material={nodes.Boolean.material}
                position={[-146.7, 154.24, -263.26]}
                rotation={[-0.35, 0.78, 0.09]}
                scale={[1, 0.89, 0.96]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.P.geometry}
                    material={nodes.P.material}
                    position={[-45.61, -26.25, -15.9]}
                ><meshStandardMaterial color={"#D7A86E"} /></mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.s.geometry}
                    material={nodes.s.material}
                    position={[5.12, -26.25, -16.31]}
                ><meshStandardMaterial color={"#D7A86E"} /></mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rectangle.geometry}
                    material={nodes.Rectangle.material}
                    position={[0, 0, -10.5]}
                    rotation={[0, 0, Math.PI]}
                ><meshStandardMaterial color={"#D7A86E"} /></mesh><meshStandardMaterial color={"#D7A86E"} />
            </mesh>
            <directionalLight
                intensity={1}
                decay={2}
                color="#FFFFFF"
                position={[243.80, 238.62, 726.61]}
                rotation={[0, 10, 0]}
            />
        </group>
    );
}


function techstack() {


    return (
        <div className="flex w-screen h-screen  relative "  >
            <div className=" flex flex-col lg:flex-row w-full h-screen justify-center items-center m-0 p-0 relative">
                <h1 className="text-[40px] duration-500 lg:text-[70px] relative text-black lg:w-[60%] text-center lg:text-right font-bold" >
                    My Tools
                </h1>
                <Canvas camera={{ position: [0, 200, 500], fov: 40 }}  >
                    <Scene position={[0, -200, 0]} scale={[1, 1, 1]} />
                    <ambientLight color={"#FFFFFF"} intensity={0.4} />
                </Canvas>


            </div>

        </div>
    )
}

export default techstack

useGLTF.preload("/model/tech_stack.gltf");