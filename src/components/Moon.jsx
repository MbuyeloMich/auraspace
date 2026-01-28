import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Moon = ({ name, radius, distance, speed, elapsed, isPaused, color = "#888888" }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (isPaused) return;

    // Moon rotates around its parent planet
    const angle = elapsed * speed;
    meshRef.current.position.x = Math.cos(angle) * distance;
    meshRef.current.position.z = Math.sin(angle) * distance;
    
    // Moon's own rotation
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef} position={[distance, 0, 0]}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Moon;
