import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const CameraController = ({ selectedPlanet, elapsed, allPlanets }) => {
  const { camera, controls } = useThree();
  const startPosition = useRef(new THREE.Vector3());
  const startTarget = useRef(new THREE.Vector3());
  const progress = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (selectedPlanet) {
      startPosition.current.copy(camera.position);
      if (controls) {
        startTarget.current.copy(controls.target);
      }
      progress.current = 0;
      isAnimating.current = true;
    }
  }, [selectedPlanet, camera, controls]);

  useFrame((state, delta) => {
    if (!selectedPlanet) return;

    // Calculate current planet position
    const planet = allPlanets.find(p => p.name === selectedPlanet);
    if (!planet) return;

    const angle = elapsed * (planet.speed || 0.3);
    const planetX = Math.cos(angle) * planet.distance;
    const planetZ = Math.sin(angle) * planet.distance;
    const planetPos = new THREE.Vector3(planetX, 0, planetZ);

    // Calculate desired camera position relative to planet
    const distance = planet.distance * 0.3;
    const desiredCameraPos = new THREE.Vector3(
      planetX + distance,
      distance * 0.5,
      planetZ + distance
    );

    if (isAnimating.current) {
      progress.current += delta * 1.5;

      if (progress.current >= 1) {
        isAnimating.current = false;
        progress.current = 1;
      }

      // Smooth easing
      const t = 1 - Math.pow(1 - progress.current, 3);
      camera.position.lerpVectors(startPosition.current, desiredCameraPos, t);
      
      if (controls) {
        controls.target.lerpVectors(startTarget.current, planetPos, t);
        controls.update();
      }
    } else {
      // Smoothly follow the planet after animation completes
      camera.position.lerp(desiredCameraPos, delta * 2);
      
      if (controls) {
        controls.target.lerp(planetPos, delta * 2);
        controls.update();
      } else {
        camera.lookAt(planetPos);
      }
    }
  });

  return null;
};

export default CameraController;
