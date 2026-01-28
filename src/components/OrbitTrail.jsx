import React, { useMemo } from "react";
import * as THREE from "three";

const OrbitTrail = ({ distance, color = "#ffffff", opacity = 0.3 }) => {
  const points = useMemo(() => {
    const curve = new THREE.EllipseCurve(
      0, 0,              // center x, y
      distance, distance, // xRadius, yRadius
      0, 2 * Math.PI,    // start angle, end angle
      false,             // clockwise
      0                  // rotation
    );
    
    const pointsArray = curve.getPoints(100);
    return pointsArray.map(p => new THREE.Vector3(p.x, 0, p.y));
  }, [distance]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial 
        color={color} 
        transparent={true} 
        opacity={opacity}
        linewidth={1}
      />
    </line>
  );
};

export default OrbitTrail;
