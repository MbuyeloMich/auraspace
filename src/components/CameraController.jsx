import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const CameraController = ({ targetPosition, targetLookAt, onComplete }) => {
  const { camera } = useThree();
  const startPosition = useRef(new THREE.Vector3());
  const progress = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (targetPosition) {
      startPosition.current.copy(camera.position);
      progress.current = 0;
      isAnimating.current = true;
    }
  }, [targetPosition, camera]);

  useFrame((state, delta) => {
    if (!isAnimating.current || !targetPosition) return;

    progress.current += delta * 1.5; // Animation speed

    if (progress.current >= 1) {
      camera.position.copy(targetPosition);
      camera.lookAt(targetLookAt || new THREE.Vector3(0, 0, 0));
      isAnimating.current = false;
      if (onComplete) onComplete();
      return;
    }

    // Smooth easing function
    const t = 1 - Math.pow(1 - progress.current, 3);

    // Interpolate position
    camera.position.lerpVectors(startPosition.current, targetPosition, t);
    
    // Look at target
    const lookAt = targetLookAt || new THREE.Vector3(0, 0, 0);
    camera.lookAt(lookAt);
  });

  return null;
};

export default CameraController;
