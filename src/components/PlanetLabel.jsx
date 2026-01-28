import { Html } from "@react-three/drei";
import React from "react";

const PlanetLabel = ({ name, position, distance }) => {
  return (
    <Html
      position={[position[0], position[1] + distance, position[2]]}
      center
      distanceFactor={15}
      style={{
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          border: "1px solid rgba(255, 204, 0, 0.6)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        {name}
      </div>
    </Html>
  );
};

export default PlanetLabel;
