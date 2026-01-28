import React, { useState, useEffect } from "react";

const StatsPanel = ({ planets, selected, elapsed, timeSpeed }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update date based on elapsed time
    // 1 second of elapsed time = 1 day in simulation
    const baseDate = new Date("2026-01-28");
    const daysElapsed = elapsed * timeSpeed * 1; // Adjust multiplier as needed
    const newDate = new Date(baseDate.getTime() + daysElapsed * 24 * 60 * 60 * 1000);
    setCurrentDate(newDate);
  }, [elapsed, timeSpeed]);

  const findPlanet = (name) => planets.find(p => p.name === name);
  const selectedPlanet = selected ? findPlanet(selected) : null;

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 100,
        background: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        fontSize: "14px",
        fontFamily: "monospace",
        minWidth: "280px",
        maxWidth: "320px",
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#ffcc00", fontSize: "18px" }}>
        � Solar System Stats
      </h3>

      <div style={{ marginBottom: "15px", paddingBottom: "15px", borderBottom: "1px solid #444" }}>
        <div style={{ color: "#aaa", fontSize: "12px", marginBottom: "5px" }}>Simulation Date</div>
        <div style={{ fontSize: "16px", fontWeight: "bold" }}>
          {currentDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </div>
        <div style={{ color: "#aaa", fontSize: "11px", marginTop: "5px" }}>
          Time Speed: {timeSpeed}x
        </div>
      </div>

      {selectedPlanet && (
        <div style={{ marginBottom: "15px", paddingBottom: "15px", borderBottom: "1px solid #444" }}>
          <div style={{ color: "#3498db", fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
            {selected}
          </div>
          <div style={{ display: "grid", gap: "8px" }}>
            <div>
              <span style={{ color: "#aaa" }}>Distance from Sun:</span>
              <div style={{ color: "#fff", fontWeight: "bold" }}>
                {selectedPlanet.realDistance} AU
              </div>
            </div>
            <div>
              <span style={{ color: "#aaa" }}>Mass:</span>
              <div style={{ color: "#fff" }}>{selectedPlanet.mass}</div>
            </div>
            <div>
              <span style={{ color: "#aaa" }}>Surface Gravity:</span>
              <div style={{ color: "#fff" }}>{selectedPlanet.gravity}</div>
            </div>
            <div>
              <span style={{ color: "#aaa" }}>Day Length:</span>
              <div style={{ color: "#fff" }}>{selectedPlanet.dayLength}</div>
            </div>
            <div>
              <span style={{ color: "#aaa" }}>Orbital Period:</span>
              <div style={{ color: "#fff" }}>{selectedPlanet.orbitalPeriod} Earth years</div>
            </div>
            {selectedPlanet.moons && selectedPlanet.moons.length > 0 && (
              <div>
                <span style={{ color: "#aaa" }}>Moons:</span>
                <div style={{ color: "#fff" }}>{selectedPlanet.moons.length}</div>
              </div>
            )}
          </div>
        </div>
      )}

      <div>
        <div style={{ color: "#aaa", fontSize: "12px", marginBottom: "8px" }}>Planet Comparison</div>
        <div style={{ display: "grid", gap: "5px", fontSize: "12px" }}>
          {planets.slice(0, 4).map((planet) => (
            <div 
              key={planet.name}
              style={{ 
                display: "flex", 
                justifyContent: "space-between",
                padding: "5px",
                background: selected === planet.name ? "rgba(52, 152, 219, 0.2)" : "transparent",
                borderRadius: "3px"
              }}
            >
              <span>{planet.name}</span>
              <span style={{ color: "#3498db" }}>{planet.realDistance} AU</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "8px", fontSize: "11px", color: "#666", textAlign: "center" }}>
          1 AU = 149.6 million km
        </div>
      </div>

      <div style={{ marginTop: "15px", paddingTop: "15px", borderTop: "1px solid #444", fontSize: "11px", color: "#888" }}>
        💡 Click on any planet for detailed information
      </div>
    </div>
  );
};

export default StatsPanel;
