import { useFrame } from "@react-three/fiber";
import React from "react";

const AnimationController = ({ isPaused, setElapsed, timeSpeed = 1 }) => {
  useFrame((state, delta) => {
    if (!isPaused) {
      setElapsed((elapsed) => elapsed + (delta * timeSpeed));
    }
  });

  return null;
};

export default AnimationController;
