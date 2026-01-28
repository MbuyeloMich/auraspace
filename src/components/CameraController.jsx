import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const CameraController = ({ targetPosition, targetLookAt, onComplete, keep }) => {
  const { camera, controls } = useThree();
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
      if (controls && targetLookAt) {
        controls.target.copy(targetLookAt);
        controls.update();
      } else {
        camera.lookAt(targetLookAt || new THREE.Vector3(0, 0, 0));
      }
      isAnimating.current = false;
      if (onComplete && !keep) onComplete();
      return;
    }

    // Smooth easing function
    const t = 1 - Math.pow(1 - progress.current, 3);

    // Interpolate position
    camera.position.lerpVectors(startPosition.current, targetPosition, t);
    
    // Look at target
    const lookAt = targetLookAt || new THREE.Vector3(0, 0, 0);
    if (controls) {
      controls.target.lerp(lookAt, t);
      controls.update();
    } else {
      camera.lookAt(lookAt);
    }
  });

  return null;
};

export default CameraController;
