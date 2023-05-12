import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Cloud, Stage, Environment, Html } from '@react-three/drei';

export function Earth(props) {
    return (
        <Canvas
            // camera={{ position: [50, 50], }}
            style={{
                backgroundColor: 'transparent',
                width: '100%',
                height: '100vh',
            }}>
            <mesh position={[4, 3, 0]}>
                <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
                <meshBasicMaterial color={0xfff1ef} attach="material" />
            </mesh>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}