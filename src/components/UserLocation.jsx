import { useState, useEffect } from "react";

export default function UserLocation() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude.toFixed(4),
            lon: position.coords.longitude.toFixed(4),
          });
        },
        () => {
          setError("Location denied");
        }
      );
    } else {
      setError("GPS not supported");
    }

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        zIndex: 100,
        padding: "10px 12px",
        fontSize: "11px",
        background: "rgba(0, 0, 0, 0.2)",
        color: "white",
        border: "1px solid #27ae60",
        borderRadius: "6px",
        fontFamily: "monospace",
        backdropFilter: "blur(10px)",
        minWidth: "190px",
        display: "flex",
        flexDirection: "column",
        gap: "3px",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "13px", letterSpacing: "0.5px" }}>
        {formatTime(time)}
      </div>
      <div style={{ opacity: 0.8, fontSize: "10px" }}>
        {formatDate(time)}
      </div>
      {location && (
        <div style={{ opacity: 0.8, fontSize: "10px", marginTop: "2px" }}>
          📍 {location.lat}°, {location.lon}°
        </div>
      )}
      {error && (
        <div style={{ opacity: 0.6, fontSize: "10px", marginTop: "2px" }}>
          📍 {error}
        </div>
      )}
    </div>
  );
}
