import React, { useRef } from 'react'
import Zoom from 'react-reveal/Zoom'
import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from "@react-three/drei"
import * as THREE from 'three'
import Spline from '@splinetool/react-spline'
import useSpline from '@splinetool/r3f-spline'


function Scene(props) {
    const group = useRef();
    // const { nodes, materials } = useGLTF("/model/tech_stack.gltf");
    const { nodes, materials } = useSpline('https://prod.spline.design/inHikiUAUMngwQ3c/scene.splinecode')
    return (
        <>
            <group {...props} dispose={null}>
                <mesh
                    name="Boolean 2"
                    geometry={nodes['Boolean 2'].geometry}
                    material={materials.Lambert}
                    castShadow
                    receiveShadow
                    position={[24.14, 24.10, -25.81]}
                >
                    <mesh
                        name="Shape 0"
                        geometry={nodes['Shape 0'].geometry}
                        material={materials['Shape 0 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-10.74, 10.99, -0.01]}
                    />
                    <mesh
                        name="Shape 01"
                        geometry={nodes['Shape 01'].geometry}
                        material={materials['Shape 01 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[5.23, 4.63, 0]}
                    />
                    <mesh
                        name="Shape 02"
                        geometry={nodes['Shape 02'].geometry}
                        material={materials['Shape 02 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-2.38, 4.53, 0.01]}
                    />
                </mesh>
                <mesh
                    name="tailwind"
                    geometry={nodes.tailwind.geometry}
                    material={materials.Lambert}
                    castShadow
                    receiveShadow
                    position={[-17.96, -23.49, 12.56]}
                    rotation={[0, -0.12, 0]}
                >
                    <mesh
                        name="tw_0"
                        geometry={nodes.tw_0.geometry}
                        material={materials['tw_0 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-3.99, 5, -0.01]}
                    />
                    <mesh
                        name="tw_1"
                        geometry={nodes.tw_1.geometry}
                        material={materials['tw_1 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-7.49, 0.5, 0.01]}
                    />
                </mesh>
                <mesh
                    name="react"
                    geometry={nodes.react.geometry}
                    material={materials.Lambert}
                    castShadow
                    receiveShadow
                    position={[-1.98, -13.45, 0.01]}
                >
                    <mesh
                        name="react_0"
                        geometry={nodes.react_0.geometry}
                        material={materials['react_0 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-14, 12.64, -0.01]}
                    />
                    <mesh
                        name="react_1"
                        geometry={nodes.react_1.geometry}
                        material={materials['react_1 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-3, 3, 0.01]}
                    />
                </mesh>
                <mesh
                    name="Boolean"
                    geometry={nodes.Boolean.geometry}
                    material={materials.Lambert}
                    castShadow
                    receiveShadow
                    position={[0.36, 11, -3.57]}
                    rotation={[0, 0.39, 0]}
                >
                    <mesh
                        name="nodejs_0"
                        geometry={nodes.nodejs_0.geometry}
                        material={materials['nodejs_0 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-10.13, 10.81, 0]}
                        scale={0.08}
                    />
                    <mesh
                        name="nodejs_1"
                        geometry={nodes.nodejs_1.geometry}
                        material={materials['nodejs_1 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-1.85, 4.39, 0]}
                        scale={0.08}
                    />
                </mesh>
                <mesh
                    name="html"
                    geometry={nodes.html.geometry}
                    material={materials.Lambert}
                    castShadow
                    receiveShadow
                    position={[-32.2, 24.49, -8.89]}
                    rotation={[0, -0.43, 0]}
                    scale={0.06}
                />
                <mesh
                    name="git"
                    geometry={nodes.git.geometry}
                    material={materials.Lambert}
                    castShadow
                    receiveShadow
                    position={[14.57, -13.5, -0.1]}
                    rotation={[0, 0.03, 0]}
                    scale={1.5}
                />
                <mesh
                    name="css"
                    geometry={nodes.css.geometry}
                    material={materials.Lambert}
                    castShadow
                    receiveShadow
                    position={[17.96, 8.78, -2.31]}
                    rotation={[0, -0.55, 0]}
                    scale={[3.21, 1, 1]}
                />
                <mesh
                    name="adobe"
                    geometry={nodes.adobe.geometry}
                    material={materials.Lambert}
                    castShadow
                    receiveShadow
                    position={[-30.91, -5.21, 20.16]}
                    rotation={[0, 0.71, 0]}
                >
                    <mesh
                        name="Shape 03"
                        geometry={nodes['Shape 03'].geometry}
                        material={materials['Shape 03 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-3.71, 3.75, -0.01]}
                    />
                    <mesh
                        name="Shape 1"
                        geometry={nodes['Shape 1'].geometry}
                        material={materials['Shape 1 Material']}
                        visible={false}
                        castShadow
                        receiveShadow
                        position={[-8.73, 8.73, 0.01]}
                    />
                </mesh>
                <PerspectiveCamera
                    name="Camera"
                    makeDefault={true}
                    far={100000}
                    near={5}
                    fov={45}
                    position={[0,0, 94.7]}
                    rotation={[0, 0, 0]}
                />
                <spotLight
                    name="Spot Light"
                    castShadow
                    receiveShadow
                    intensity={1}
                    angle={Math.PI / 6}
                    distance={2000}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-fov={119.99999999999999}
                    shadow-camera-near={100}
                    shadow-camera-far={100000}
                    position={[-3.02, 94.18, 247.63]}
                    rotation={[1.26, 0, 0]}
                />
            </group>
        </>
    )

}


function techstack() {


    return (
        <div className="flex w-screen h-screen  relative "  >
            <div className=" flex flex-col  w-full h-screen justify-center items-center m-0 p-0 relative">
                <h1 className="text-[40px] duration-500 lg:text-[70px] relative text-black lg:w-[60%] text-center  font-bold" >
                    My Tools
                </h1>
                <Canvas shadows flat linear >
                    <Scene />
                </Canvas>


            </div>

        </div>
    )
}

export default techstack

useGLTF.preload("/model/tech_stack.gltf");