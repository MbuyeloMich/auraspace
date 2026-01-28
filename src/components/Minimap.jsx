import { useRef, useEffect } from "react";

const Minimap = ({ planets, elapsed, isVisible }) => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 1.5; // Zoom level for minimap

    const drawMinimap = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const radius = (i + 1) * 20;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw sun
      ctx.fillStyle = "#FDB813";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw planets
      planets.forEach((planet) => {
        const angle = elapsed * planet.speed;
        const x = centerX + Math.cos(angle) * planet.distance * scale;
        const y = centerY + Math.sin(angle) * planet.distance * scale;

        ctx.fillStyle = "#4a9eff";
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const intervalId = setInterval(drawMinimap, 50);
    return () => clearInterval(intervalId);
  }, [planets, elapsed, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 180,
        right: 20,
        zIndex: 100,
        border: "2px solid rgba(74, 158, 255, 0.5)",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        style={{ display: "block" }}
      />
    </div>
  );
};

export default Minimap;
