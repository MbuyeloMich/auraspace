import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import Moon from "./Moon";
import PlanetLabel from "./PlanetLabel";
import AtmosphereGlow from "./AtmosphereGlow";

const Planet = ({
  planet,
  elapsed,
  isPaused,
  onSelect,
  showLabels = true,
  showAtmosphere = true,
}) => {
  const { name, radius, distance, speed, moons = [] } = planet;
  
  const texture = useLoader(
    TextureLoader,
    `/textures/${name.toLowerCase()}.jpg`
  );

  const groupRef = useRef();
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (isPaused) return;

    meshRef.current.rotation.y += delta * 0.8;

    const angle = elapsed * speed;
    groupRef.current.position.x = Math.cos(angle) * distance;
    groupRef.current.position.z = Math.sin(angle) * distance;
  });

  return (
    <group ref={groupRef} position={[distance, 0, 0]}>
      <mesh
        onClick={() => onSelect(name)}
        ref={meshRef}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      
      {showAtmosphere && name === "Earth" && (
        <AtmosphereGlow radius={radius} color="#4db8ff" />
      )}
      
      {moons.map((moon) => (
        <Moon
          key={moon.name}
          name={moon.name}
          radius={moon.radius}
          distance={moon.distance}
          speed={moon.speed}
          elapsed={elapsed}
          isPaused={isPaused}
          color={moon.color}
        />
      ))}
      
      {showLabels && (
        <PlanetLabel 
          name={name} 
          position={[0, 0, 0]} 
          distance={radius + 0.5}
        />
      )}
    </group>
  );
};

export default Planet;
