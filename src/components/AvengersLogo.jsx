import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AvengersLogo() {
    const groupRef = useRef();

    const aShape = useMemo(() => {
        const shape = new THREE.Shape();
        // Create an "A" shape
        shape.moveTo(0, -2);
        shape.lineTo(-1.5, -2);
        shape.lineTo(-0.3, 2);
        shape.lineTo(0.3, 2);
        shape.lineTo(1.5, -2);
        shape.lineTo(0.5, -2);
        shape.lineTo(0.15, -0.5);
        shape.lineTo(-0.15, -0.5);
        shape.lineTo(-0.5, -2);
        shape.lineTo(0, -2);

        // Inner triangle (hole for the A)
        const hole = new THREE.Path();
        hole.moveTo(-0.05, -0.2);
        hole.lineTo(0.05, -0.2);
        hole.lineTo(0.12, 0.5);
        hole.lineTo(-0.12, 0.5);
        hole.lineTo(-0.05, -0.2);
        shape.holes.push(hole);

        return shape;
    }, []);

    // Create the circle frame
    const circlePoints = useMemo(() => {
        const points = [];
        const segments = 64;
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(Math.cos(angle) * 2.5, Math.sin(angle) * 2.5, 0));
        }
        return points;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.3;
            groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
            groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
        }
    });

    return (
        <group ref={groupRef} scale={0.8}>
            {/* Main A shape */}
            <mesh>
                <extrudeGeometry
                    args={[aShape, { depth: 0.3, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.03, bevelSegments: 3 }]}
                />
                <meshStandardMaterial
                    color="#e23636"
                    emissive="#e23636"
                    emissiveIntensity={0.5}
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>

            {/* Circle outline */}
            <line>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={circlePoints.length}
                        array={new Float32Array(circlePoints.flatMap(p => [p.x, p.y, p.z]))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#e23636" linewidth={2} transparent opacity={0.8} />
            </line>

            {/* Glow light */}
            <pointLight color="#e23636" intensity={3} distance={10} />
            <pointLight color="#00d4ff" intensity={1} distance={8} position={[2, 2, 2]} />
        </group>
    );
}
