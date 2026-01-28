import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const FPSCounter = ({ onFPSUpdate }) => {
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useFrame(() => {
    frameCount.current++;
    const currentTime = performance.now();
    const delta = currentTime - lastTime.current;

    // Update FPS every 500ms
    if (delta >= 500) {
      const currentFps = Math.round((frameCount.current * 1000) / delta);
      if (onFPSUpdate) onFPSUpdate(currentFps);
      frameCount.current = 0;
      lastTime.current = currentTime;
    }
  });

  // This component doesn't render anything in 3D space
  return null;
};

// Display component for FPS
export const FPSDisplay = ({ fps }) => {
  const getColor = () => {
    if (fps >= 55) return "#27ae60"; // Green
    if (fps >= 30) return "#f39c12"; // Orange
    return "#e74c3c"; // Red
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 150,
        background: "rgba(0, 0, 0, 0.8)",
        color: getColor(),
        padding: "10px 15px",
        borderRadius: "8px",
        fontFamily: "monospace",
        fontSize: "16px",
        fontWeight: "bold",
        border: `2px solid ${getColor()}`,
        minWidth: "80px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "12px", color: "#aaa", marginBottom: "2px" }}>FPS</div>
      <div>{fps}</div>
    </div>
  );
};

export default FPSCounter;
