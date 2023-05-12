import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Cloud, Stage, Environment, Html, CubeCamera, Plane } from '@react-three/drei';
import { Model } from '../Hero';
import { Earth } from '../Earth';
import { Loader } from '../Loading';
import { Navbar } from '../Navbar';

export function Canva() {
    return (
        <Canvas
            // camera={{ position: [1, 1, 6] }}
            // camera={{ fov: 35, zoom: 1.3, near: 1, far: 1000 }}
            gl={{ antialias: false, }}
            // camera={{ position: [50, 50], }}
            style={{
                width: '100%',
                height: '100vh',
                position: "absolute",
            }}>
            <ambientLight intensity={0.5} />

            <Suspense fallback={<Loader />}>
                <Stage preset="rembrandt" intensity={1}>
                        <Model />
                    <Environment preset='forest' background />
                </Stage>
            </Suspense>
            {/* <Sky /> */}
            <OrbitControls enableZoom={false} />
            {/* </Physics> */}
        </Canvas>
    );
}