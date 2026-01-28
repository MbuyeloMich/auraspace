import { useState, useEffect } from "react";

export default function UserLocation() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loadingCity, setLoadingCity] = useState(false);

  // Function to get country flag emoji from country code
  const getCountryFlag = (countryCode) => {
    if (!countryCode) return "";
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lon = position.coords.longitude.toFixed(4);
          
          setLocation({ lat, lon });

          // Reverse geocoding to get city and country
          setLoadingCity(true);
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`,
              {
                headers: {
                  'User-Agent': 'AuraSpace/1.0'
                }
              }
            );
            const data = await response.json();
            
            console.log("Location data:", data); // Debug log
            
            if (data.address) {
              const city = data.address.city || data.address.town || data.address.village || data.address.county || "Unknown";
              const country = data.address.country || "Unknown";
              const countryCode = data.address.country_code?.toUpperCase() || "";
              const flag = getCountryFlag(data.address.country_code);
              
              console.log("City:", city, "Country:", country, "Code:", countryCode, "Flag:", flag); // Debug log
              
              setCityInfo({
                city,
                country,
                countryCode,
                flag: flag || "🌍",
              });
            }
          } catch (err) {
            console.error("Reverse geocoding failed:", err);
            setCityInfo({
              city: "Unknown",
              country: "Location",
              flag: "🌍"
            });
          } finally {
            setLoadingCity(false);
          }
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
      {loadingCity && (
        <div style={{ opacity: 0.6, fontSize: "10px", marginTop: "2px" }}>
          🌍 Loading location...
        </div>
      )}
      {cityInfo && (
        <div style={{ opacity: 0.9, fontSize: "11px", marginTop: "4px", fontWeight: "500" }}>
          <span style={{ fontSize: "16px", marginRight: "4px" }}>{cityInfo.flag}</span>
          <span>{cityInfo.city}, {cityInfo.country}</span>
          <span style={{ fontSize: "9px", opacity: 0.7, marginLeft: "4px" }}>({cityInfo.countryCode})</span>
        </div>
      )}
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
