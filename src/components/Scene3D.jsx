import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';
import AvengersLogo from './AvengersLogo';

export default function Scene3D({ showLogo = true }) {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[5, 5, 5]} intensity={0.5} />
                    <ParticleField count={1500} />
                    {showLogo && <AvengersLogo />}
                    <fog attach="fog" args={['#020810', 5, 30]} />
                </Suspense>
            </Canvas>
        </div>
    );
}
