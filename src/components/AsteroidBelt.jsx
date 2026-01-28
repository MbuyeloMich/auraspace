import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AsteroidBelt = ({ count = 2000 }) => {
  const meshRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    const innerRadius = 11.4; // Between Mars (11.4) and Jupiter (39)
    const outerRadius = 39;
    
    for (let i = 0; i < count; i++) {
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 2; // Slight vertical spread
      
      temp.push({
        position: [x, y, z],
        scale: 0.02 + Math.random() * 0.08,
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        speed: 0.01 + Math.random() * 0.02
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;
    
    particles.forEach((particle, i) => {
      dummy.position.set(...particle.position);
      dummy.rotation.x += particle.speed;
      dummy.rotation.y += particle.speed;
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#8B7355" roughness={0.8} metalness={0.2} />
    </instancedMesh>
  );
};

export default AsteroidBelt;
