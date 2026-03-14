import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Stars, Sparkles, Cloud } from '@react-three/drei';
import ParticleField from './ParticleField';
import AvengersLogo from './AvengersLogo';

function CosmicBackground() {
    const groupRef = useRef();
    
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={200} scale={20} size={2} speed={0.4} opacity={0.5} color="#e23636" />
            <Sparkles count={200} scale={20} size={4} speed={0.4} opacity={0.3} color="#00d4ff" />
            <Cloud opacity={0.1} speed={0.2} width={20} depth={5} segments={20} color="#e23636" position={[5, 0, -10]} />
            <Cloud opacity={0.1} speed={0.2} width={20} depth={5} segments={20} color="#00d4ff" position={[-5, 5, -15]} />
        </group>
    );
}

export default function Scene3D({ showLogo = true }) {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} color="#e23636" />
                    <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#00d4ff" />
                    <CosmicBackground />
                    <ParticleField count={800} />
                    {showLogo && <AvengersLogo />}
                    <fog attach="fog" args={['#020810', 5, 40]} />
                </Suspense>
            </Canvas>
        </div>
    );
}
