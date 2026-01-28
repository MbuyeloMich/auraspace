import { Canvas } from "@react-three/fiber";
import Sun from "./components/Sun";
import { useState, useEffect, useRef, Suspense } from "react";
import Planet from "./components/Planet";
import { Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import AnimationController from "./components/AnimationController";
import SaturnGroup from "./components/SaturnGroup";
import InfoPanel from "./components/InfoPanel";
import StatsPanel from "./components/StatsPanel";
import CameraController from "./components/CameraController";
import OrbitTrail from "./components/OrbitTrail";
import FPSCounter, { FPSDisplay } from "./components/FPSCounter";
import AsteroidBelt from "./components/AsteroidBelt";
import Minimap from "./components/Minimap";
import ScreenshotButton from "./components/ScreenshotButton";
import UserLocation from "./components/UserLocation";

function App() {
  const [elapsed, setElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timeSpeed, setTimeSpeed] = useState(1);
  const [showOrbits, setShowOrbits] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [showMinimap, setShowMinimap] = useState(true);
  const [showAsteroids, setShowAsteroids] = useState(true);
  const [cameraTarget, setCameraTarget] = useState(null);
  const [fps, setFps] = useState(60);
  const controlsRef = useRef();

  // Realistic planetary data based on NASA values
  // Distances in AU converted to visual scale, orbital periods in Earth years
  const planets = [
    { 
      name: "Mercury", 
      radius: 0.38, 
      distance: 3, 
      speed: 4.15, 
      orbitalPeriod: 0.24,
      realDistance: 0.39,
      mass: "3.30 × 10²³ kg",
      gravity: "3.7 m/s²",
      dayLength: "58.6 Earth days",
      moons: []
    },
    { 
      name: "Venus", 
      radius: 0.95, 
      distance: 5.4, 
      speed: 1.62, 
      orbitalPeriod: 0.62,
      realDistance: 0.72,
      mass: "4.87 × 10²⁴ kg",
      gravity: "8.9 m/s²",
      dayLength: "243 Earth days",
      moons: []
    },
    { 
      name: "Earth", 
      radius: 1.0, 
      distance: 7.5, 
      speed: 1.0, 
      orbitalPeriod: 1.0,
      realDistance: 1.0,
      mass: "5.97 × 10²⁴ kg",
      gravity: "9.8 m/s²",
      dayLength: "24 hours",
      moons: [
        { name: "Moon", radius: 0.27, distance: 1.5, speed: 13.37, color: "#888888" }
      ]
    },
    { 
      name: "Mars", 
      radius: 0.53, 
      distance: 11.4, 
      speed: 0.53, 
      orbitalPeriod: 1.88,
      realDistance: 1.52,
      mass: "6.42 × 10²³ kg",
      gravity: "3.7 m/s²",
      dayLength: "24.6 hours",
      moons: []
    },
    { 
      name: "Jupiter", 
      radius: 2.5, 
      distance: 39, 
      speed: 0.08, 
      orbitalPeriod: 11.86,
      realDistance: 5.2,
      mass: "1.90 × 10²⁷ kg",
      gravity: "24.8 m/s²",
      dayLength: "9.9 hours",
      moons: [
        { name: "Io", radius: 0.29, distance: 4, speed: 17.3, color: "#FDB813" },
        { name: "Europa", radius: 0.25, distance: 5, speed: 9.86, color: "#D4A574" },
        { name: "Ganymede", radius: 0.41, distance: 6.5, speed: 6.15, color: "#8B7355" },
        { name: "Callisto", radius: 0.38, distance: 8, speed: 3.76, color: "#5C4033" }
      ]
    },
    { 
      name: "Uranus", 
      radius: 1.0, 
      distance: 143.5, 
      speed: 0.012, 
      orbitalPeriod: 84.01,
      realDistance: 19.2,
      mass: "8.68 × 10²⁵ kg",
      gravity: "8.7 m/s²",
      dayLength: "17.2 hours",
      moons: []
    },
    { 
      name: "Neptune", 
      radius: 0.97, 
      distance: 225, 
      speed: 0.006, 
      orbitalPeriod: 164.79,
      realDistance: 30.1,
      mass: "1.02 × 10²⁶ kg",
      gravity: "11.0 m/s²",
      dayLength: "16.1 hours",
      moons: []
    },
  ];

  const allPlanets = [...planets, { name: "Saturn", distance: 16 }];

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Number keys 1-8 for planet selection
      const key = parseInt(e.key);
      if (key >= 1 && key <= 8) {
        const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
        const planetName = planetNames[key - 1];
        setSelected(planetName);
        
        // Focus camera on selected planet
        const planet = allPlanets.find(p => p.name === planetName);
        if (planet) {
          const angle = elapsed * (planet.speed || 0.3);
          const x = Math.cos(angle) * planet.distance;
          const z = Math.sin(angle) * planet.distance;
          const distance = planet.distance * 0.3;
          setCameraTarget({
            position: new THREE.Vector3(x + distance, distance * 0.5, z + distance),
            lookAt: new THREE.Vector3(x, 0, z)
          });
        }
      }

      // Space bar for pause/resume
      if (e.code === "Space" && e.target.tagName !== "BUTTON") {
        e.preventDefault();
        setIsPaused(p => !p);
      }

      // Arrow keys for time speed
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setTimeSpeed(s => Math.min(s + 0.5, 5));
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setTimeSpeed(s => Math.max(s - 0.5, 0.5));
      }

      // O key to toggle orbits
      if (e.key.toLowerCase() === "o") {
        setShowOrbits(o => !o);
      }

      // L key to toggle labels
      if (e.key.toLowerCase() === "l") {
        setShowLabels(l => !l);
      }

      // M key to toggle minimap
      if (e.key.toLowerCase() === "m") {
        setShowMinimap(m => !m);
      }

      // A key to toggle asteroids
      if (e.key.toLowerCase() === "a") {
        setShowAsteroids(a => !a);
      }

      // Escape to deselect
      if (e.key === "Escape") {
        setSelected(null);
        setCameraTarget({
          position: new THREE.Vector3(0, 10, 20),
          lookAt: new THREE.Vector3(0, 0, 0)
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [elapsed, allPlanets]);

  const handlePlanetSelect = (name) => {
    setSelected(name);
    const planet = allPlanets.find(p => p.name === name);
    if (planet) {
      const angle = elapsed * (planet.speed || 0.3);
      const x = Math.cos(angle) * planet.distance;
      const z = Math.sin(angle) * planet.distance;
      const distance = planet.distance * 0.3;
      setCameraTarget({
        position: new THREE.Vector3(x + distance, distance * 0.5, z + distance),
        lookAt: new THREE.Vector3(x, 0, z)
      });
    }
  };

  return (
    <>
      <FPSDisplay fps={fps} />
      
      <button
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 100,
          padding: "12px 20px",
          fontSize: "20px",
          background: isPaused ? "#e74c3c" : "#27ae60",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => setIsPaused((p) => !p)}
      >
        {isPaused ? "Resume" : "Pause"}
      </button>
      
      <div style={{
        position: "absolute",
        top: 80,
        right: 20,
        zIndex: 100,
        background: "rgba(0, 0, 0, 0.3)",
        padding: "15px",
        borderRadius: "8px",
        color: "white",
        backdropFilter: "blur(10px)",
      }}>
        <div style={{ marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}>Time Speed</div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[0.5, 1, 2, 5].map(speed => (
            <button
              key={speed}
              onClick={() => setTimeSpeed(speed)}
              style={{
                padding: "8px 12px",
                background: timeSpeed === speed ? "rgba(52, 152, 219, 0.6)" : "rgba(52, 73, 94, 0.4)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "bold",
                backdropFilter: "blur(5px)",
              }}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>
      
      <button
        style={{
          position: "absolute",
          top: 170,
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
          backdropFilter: "blur(10px)",
        }}
        onClick={() => setShowOrbits(o => !o)}
      >
        {showOrbits ? "Hide" : "Show"} Orbits (O)
      </button>

      <button
        style={{
          position: "absolute",
          top: 210,
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
          backdropFilter: "blur(10px)",
        }}
        onClick={() => setShowLabels(l => !l)}
      >
        {showLabels ? "Hide" : "Show"} Labels (L)
      </button>

      <ScreenshotButton />
      <UserLocation />

      <div style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        zIndex: 100,
        background: "rgba(0, 0, 0, 0.7)",
        padding: "12px 16px",
        borderRadius: "8px",
        color: "white",
        fontSize: "12px",
        maxWidth: "200px",
      }}>
        <div style={{ fontWeight: "bold", marginBottom: "5px" }}>⌨️ Keyboard Shortcuts</div>
        <div>1-8: Select planets</div>
        <div>Space: Pause/Resume</div>
        <div>↑↓: Adjust speed</div>
        <div>O: Toggle orbits</div>
        <div>L: Toggle labels</div>
        <div>M: Toggle minimap</div>
        <div>A: Toggle asteroids</div>
        <div>Esc: Reset camera</div>
      </div>

      <Canvas 
        camera={{ position: [0, 10, 20], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
        <FPSCounter onFPSUpdate={setFps} />
        <AnimationController isPaused={isPaused} setElapsed={setElapsed} timeSpeed={timeSpeed} />
        <CameraController 
          targetPosition={cameraTarget?.position}
          targetLookAt={cameraTarget?.lookAt}
          onComplete={() => setCameraTarget(null)}
        />
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Sun />
        
        {showAsteroids && <AsteroidBelt count={2000} />}
        
        {showOrbits && planets.map((planet) => (
          <OrbitTrail 
            key={`orbit-${planet.name}`}
            distance={planet.distance}
            color="#4a9eff"
            opacity={0.2}
          />
        ))}
        {showOrbits && <OrbitTrail distance={16} color="#4a9eff" opacity={0.2} />}
        
        {planets.map((planet) => (
          <Planet
            key={planet.name}
            planet={planet}
            elapsed={elapsed}
            isPaused={isPaused}
            onSelect={handlePlanetSelect}
            timeSpeed={timeSpeed}
            showLabels={showLabels}
          />
        ))}
        <SaturnGroup
          onSelect={handlePlanetSelect}
          elapsed={elapsed}
          isPaused={isPaused}
          showLabels={showLabels}
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          enablePan={true}
          enableRotate={true}
          enableZoom={true}
          panSpeed={2.5}
          rotateSpeed={1.0}
          zoomSpeed={1.0}
          minDistance={2}
          maxDistance={1000}
          autoRotate={!isPaused && !cameraTarget}
          autoRotateSpeed={0.4}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN,
          }}
        />
      </Canvas>
      
      <Minimap planets={planets} elapsed={elapsed} isVisible={showMinimap} />
      
      <StatsPanel 
        planets={planets} 
        selected={selected} 
        elapsed={elapsed}
        timeSpeed={timeSpeed}
      />
      {selected && (
        <InfoPanel planet={selected} onClose={() => {
          setSelected(null);
          setCameraTarget({
            position: new THREE.Vector3(0, 10, 20),
            lookAt: new THREE.Vector3(0, 0, 0)
          });
        }} />
      )}
    </>
  );
}

export default App;
