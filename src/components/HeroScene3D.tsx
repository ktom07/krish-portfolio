import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// An abstract futuristic wireframe globe symbolizing international diplomacy and global affairs
function DiplomaticGlobe({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.18;
      // Gentle mouse parallax interpolation
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mousePos.current.y * 0.2, 0.05);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, -mousePos.current.x * 0.2, 0.05);
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.22;
      ringRef.current.rotation.y += delta * 0.14;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x -= delta * 0.16;
      ringRef2.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central multifaceted core */}
      <mesh>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshStandardMaterial
          color="#0284c7"
          wireframe
          emissive="#0369a1"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner glowing core */}
      <mesh>
        <sphereGeometry args={[0.9, 16, 16]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#d97706"
          emissiveIntensity={1.2}
          roughness={0.4}
          metalness={0.6}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Orbiting Orbital Ring 1 */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Orbital Ring 2 (Golden diplomacy ring) */}
      <mesh ref={ringRef2}>
        <torusGeometry args={[2.8, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

// Particle field representing global connections and dynamic agility
function ParticleField({ count = 300 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const blueColor = new THREE.Color('#38bdf8');
    const goldColor = new THREE.Color('#fbbf24');
    const cyanColor = new THREE.Color('#06b6d4');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread across sphere & background
      const radius = 3.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);

      const chosenColor = Math.random() > 0.65 ? goldColor : Math.random() > 0.35 ? blueColor : cyanColor;
      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

interface Scene3DProps {
  reducedMotion?: boolean;
}

export const HeroScene3D: React.FC<Scene3DProps> = ({ reducedMotion }) => {
  const mousePos = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 2 - 1;
    const y = -(((clientY - top) / height) * 2 - 1);
    mousePos.current = { x, y };
  };

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden opacity-90 transition-opacity duration-1000"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#fbbf24" />

        <Float speed={reducedMotion ? 0.3 : 1.5} rotationIntensity={reducedMotion ? 0.2 : 0.6} floatIntensity={0.8}>
          <DiplomaticGlobe mousePos={mousePos} />
        </Float>

        <ParticleField count={window.innerWidth < 768 ? 120 : 280} />
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
