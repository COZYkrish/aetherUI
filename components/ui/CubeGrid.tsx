"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const HOVER_COLORS = ["#D4AF37", "#00D2D3", "#7C3AED", "#3B82F6", "#F472B6"];

function InteractiveCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const [hovered, setHovered] = useState(false);
  const [targetColor, setTargetColor] = useState(new THREE.Color(0xffffff));
  const baseColor = useMemo(() => new THREE.Color(0xffffff), []);

  useFrame((state, delta) => {
    if (materialRef.current) {
      // Smoothly interpolate color
      materialRef.current.color.lerp(hovered ? targetColor : baseColor, delta * 10);
      materialRef.current.emissive.lerp(hovered ? targetColor : new THREE.Color(0x000000), delta * 10);
      materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        materialRef.current.emissiveIntensity,
        hovered ? 0.8 : 0,
        delta * 10
      );
      materialRef.current.opacity = THREE.MathUtils.lerp(
        materialRef.current.opacity,
        hovered ? 1 : 0.25,
        delta * 10
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        const randomColor = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
        setTargetColor(new THREE.Color(randomColor));
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    >
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial
        ref={materialRef}
        color={baseColor}
        transparent
        opacity={0.25}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

function Grid() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  const cubes = useMemo(() => {
    const items = [];
    const size = 1;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // Remove corners to make it more spherical/cross-like
          if (Math.abs(x) + Math.abs(y) + Math.abs(z) === 3) continue;
          
          items.push(
            <InteractiveCube
              key={`${x}-${y}-${z}`}
              position={[x * size, y * size, z * size]}
            />
          );
        }
      }
    }
    return items;
  }, []);

  return <group ref={groupRef}>{cubes}</group>;
}

export function CubeGridLoader() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas>
        <OrthographicCamera makeDefault position={[10, 10, 10]} zoom={60} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 20, 10]} intensity={2} />
        <directionalLight position={[-10, -20, -10]} intensity={0.5} />
        <Environment preset="city" />
        <Grid />
      </Canvas>
    </div>
  );
}
