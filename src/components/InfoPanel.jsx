import React from "react";

const InfoPanel = ({ planet, onClose }) => {
  const info = {
    Mercury: {
      description: "Mercury is the smallest planet and closest to the Sun. With no atmosphere to retain heat, temperatures swing from 430°C during the day to -180°C at night. Its surface is heavily cratered, similar to Earth's Moon.",
      facts: ["Smallest planet in our solar system", "No moons or rings", "A year on Mercury is just 88 Earth days", "Has a large iron core"]
    },
    Venus: {
      description: "Venus has a thick, toxic atmosphere that traps heat in a runaway greenhouse effect, making it the hottest planet despite not being closest to the Sun. Its surface pressure is 90 times greater than Earth's.",
      facts: ["Hottest planet (462°C average)", "Rotates backwards compared to most planets", "Day longer than its year", "Visible from Earth with naked eye"]
    },
    Earth: {
      description: "Our home planet is the only known world to harbor life. Earth has liquid water on its surface, a protective atmosphere, and a magnetic field that shields us from harmful solar radiation.",
      facts: ["Only planet known to support life", "71% covered by water", "Has one natural satellite (Moon)", "Orbits the Sun at 107,000 km/h"]
    },
    Mars: {
      description: "The Red Planet gets its color from iron oxide (rust) on its surface. Mars has polar ice caps, ancient river valleys, and the largest volcano in the solar system (Olympus Mons, 21km high).",
      facts: ["Home to the largest volcano (Olympus Mons)", "Has seasons like Earth", "Day is about 24.6 hours", "Two small moons: Phobos and Deimos"]
    },
    Jupiter: {
      description: "Jupiter is a gas giant so large that all other planets could fit inside it. Its Great Red Spot is a storm that has raged for at least 400 years. Jupiter has the strongest magnetic field of all planets.",
      facts: ["Largest planet in our solar system", "Has at least 95 known moons", "Fastest rotation (10 hours)", "Great Red Spot storm bigger than Earth"]
    },
    Saturn: {
      description: "Famous for its spectacular ring system made of billions of ice and rock particles. Saturn is the least dense planet - it would float in water if you had a bathtub big enough!",
      facts: ["Second largest planet", "Has 146 confirmed moons", "Rings span up to 282,000 km", "Could float on water (density 0.687 g/cm³)"]
    },
    Uranus: {
      description: "Uranus rotates on its side, likely due to a collision billions of years ago. This unique tilt causes extreme seasons - each pole gets around 42 years of continuous sunlight, then 42 years of darkness.",
      facts: ["Rotates on its side (98° axial tilt)", "Has 13 known rings", "Coldest planetary atmosphere (-224°C)", "27 known moons"]
    },
    Neptune: {
      description: "The windiest planet in our solar system, with gusts reaching 2,000 km/h. Neptune was the first planet located through mathematical predictions rather than direct observation.",
      facts: ["Farthest planet from the Sun", "Strongest winds in solar system", "Has 14 known moons", "One orbit takes 165 Earth years"]
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 30,
        left: 30,
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        color: "white",
        borderRadius: "12px",
        maxWidth: "400px",
        fontSize: "14px",
        lineHeight: "1.6",
        zIndex: 200,
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        border: "1px solid #27ae60",
        backdropFilter: "blur(15px)",
      }}
    >
      <h2 style={{ margin: "0 0 12px 0", color: "#ffcc00", fontSize: "24px" }}>{planet}</h2>
      <p style={{ margin: "0 0 15px 0", fontSize: "15px" }}>{info[planet].description}</p>
      
      <div style={{ 
        background: "rgba(255, 255, 255, 0.05)", 
        padding: "12px", 
        borderRadius: "8px",
        marginBottom: "15px" 
      }}>
        <h3 style={{ margin: "0 0 10px 0", color: "#3498db", fontSize: "14px" }}>Quick Facts:</h3>
        <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13px" }}>
          {info[planet].facts.map((fact, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>{fact}</li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={onClose}
        style={{
          background: "#ffcc00",
          border: "none",
          color: "#000",
          padding: "10px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "14px",
          width: "100%",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default InfoPanel;
