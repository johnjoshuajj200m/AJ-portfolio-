import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

/**
 * 3D Float Animation Component
 * Creates rotating animated shapes in the background
 * Performance optimized with minimal geometry and lighting
 */
const FloatingShapes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      // Subtle rotation for background effect
      groupRef.current.rotation.x += 0.0001
      groupRef.current.rotation.y += 0.0002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Background icosahedron wireframe */}
      <mesh position={[0, 0, -5]} scale={3}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color={0x3b82f6}
          wireframe
          opacity={0.1}
          transparent
          emissive={0x3b82f6}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Floating metallic sphere */}
      <mesh position={[2, 2, -3]} scale={0.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={0x60a5fa}
          emissive={0x3b82f6}
          emissiveIntensity={0.4}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Floating octahedron wireframe */}
      <mesh position={[-2, -1, -4]} scale={0.6}>
        <octahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={0x1e40af}
          wireframe
          opacity={0.15}
          transparent
          emissive={0x1e40af}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  )
}

/**
 * Hero3D Component
 * Canvas wrapper for 3D scene in hero section
 * Handles performance and responsiveness
 */
const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        style={{ position: 'absolute', top: 0, left: 0 }}
        dpr={[1, 1.5]} // Adaptive pixel ratio for performance
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <FloatingShapes />
        {/* Minimal lighting - one light for performance */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.6} />
      </Canvas>
    </div>
  )
}

export default Hero3D
