import React from "react";

const ScreenshotButton = () => {
  const takeScreenshot = () => {
    // Wait for next animation frame to ensure render is complete
    requestAnimationFrame(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) {
        console.error('Canvas not found');
        return;
      }
      
      try {
        // Get the canvas as data URL with maximum quality
        const dataURL = canvas.toDataURL("image/png", 1.0);
        
        // Check if we got valid data
        if (dataURL === "data:,") {
          console.error('Canvas is empty');
          return;
        }
        
        // Create download link
        const link = document.createElement("a");
        link.download = `solar-system-${Date.now()}.png`;
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Screenshot failed:', error);
      }
    });
  };

  return (
    <button
      onClick={takeScreenshot}
      style={{
        position: "absolute",
        top: 250,
        right: 20,
        zIndex: 100,
        padding: "10px 16px",
        fontSize: "14px",
        background: "rgba(0, 0, 0, 0.2)",
        color: "white",
        border: "1px solid #27ae60",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backdropFilter: "blur(10px)",
      }}
    >
      📸 Screenshot
    </button>
  );
};

export default ScreenshotButton;
