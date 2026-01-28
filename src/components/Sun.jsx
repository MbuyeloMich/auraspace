import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

const Sun = () => {
  const sunTexture = useLoader(TextureLoader, "/textures/sun.jpg");

  return (
    <mesh>
      <sphereGeometry args={[1.4, 32, 32]} />
      <meshBasicMaterial map={sunTexture} toneMapped={false} />
      <pointLight intensity={5} distance={500} decay={2} />
    </mesh>
  );
};

export default Sun;
