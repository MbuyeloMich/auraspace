import React, { useMemo } from "react";
import * as THREE from "three";

const AtmosphereGlow = ({ radius, color = "#4db8ff" }) => {
  const glowMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        c: { value: 0.5 },
        p: { value: 4.5 },
        glowColor: { value: new THREE.Color(color) },
        viewVector: { value: new THREE.Vector3(0, 0, 5) }
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(0.7 - dot(vNormal, vNormel), 4.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, intensity);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
  }, [color]);

  return (
    <mesh material={glowMaterial} scale={[1.15, 1.15, 1.15]}>
      <sphereGeometry args={[radius, 32, 32]} />
    </mesh>
  );
};

export default AtmosphereGlow;
