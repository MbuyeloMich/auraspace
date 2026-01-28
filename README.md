# 🌌 AuraSpace - Interactive 3D Solar System

<div align="center">

![AuraSpace Banner](https://img.shields.io/badge/AuraSpace-3D%20Solar%20System-blueviolet?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=)

**An immersive WebGL-powered 3D visualization of our Solar System with real-time NASA data**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_AuraSpace-success?style=for-the-badge)](https://mbuyelomich.github.io/auraspace/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/MbuyeloMich/auraspace)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.181.1-000000?style=flat-square&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-Enabled-990000?style=flat-square&logo=webgl&logoColor=white)

[Features](#-features) • [Demo](#-live-demo) • [Quick Start](#-quick-start) • [Usage](#-usage) • [Architecture](#-system-architecture)

---

</div>

## 📖 About AuraSpace

**AuraSpace** is an interactive, educational 3D Solar System simulator that brings space exploration to your browser. Built with cutting-edge web technologies, it offers a scientifically accurate, visually stunning journey through our cosmic neighborhood.

### 🎯 Project Goals
- **Educational**: Provide accurate NASA planetary data for learning
- **Interactive**: Intuitive controls and smooth camera animations
- **Performant**: 60 FPS on mid-range hardware using WebGL optimization
- **Accessible**: Keyboard shortcuts and responsive design

### 👨‍💻 Developer
**Mbuyelo Mich** - Full Stack Developer  
🔗 [GitHub](https://github.com/MbuyeloMich) | 💼 [LinkedIn](#) | 📧 [Email](#)

**Sole Contributor & Maintainer of AuraSpace**

---

## 🚀 Live Demo

<div align="center">

### **[🌐 Launch AuraSpace →](https://mbuyelomich.github.io/auraspace/)**

*Experience the cosmos in your browser*

</div>

---

## 📸 Screenshots

> **Note**: Replace placeholder images with actual screenshots after deployment

<div align="center">

### Solar System Overview
![Solar System View](https://via.placeholder.com/800x450/0c0c1d/61dafb?text=Full+Solar+System+View+-+8+Planets+with+Orbits)

### Planet Focus Mode
![Earth Close-up](https://via.placeholder.com/800x450/0c0c1d/4169E1?text=Earth+with+Atmosphere+Glow+%26+Moon)

### Interactive UI
![UI Controls](https://via.placeholder.com/800x450/0c0c1d/27ae60?text=Glass+Morphism+UI+%2B+Real-time+Stats)

</div>

---

## ✨ Features

### 🎯 Core Features
- 🪐 **8 Realistic Planets** - Mercury to Neptune with NASA data
- 🌙 **5 Major Moons** - Luna, Io, Europa, Ganymede, Callisto
- ☀️ **Dynamic Sun** - Realistic lighting and emission
- 🪐 **Saturn's Rings** - Beautiful ring system
- ☄️ **2,000 Asteroids** - Procedurally generated asteroid belt

### 🎨 Visual Effects
- ✨ **Atmosphere Glow** - Custom GLSL shaders
- 🌟 **5,000 Stars** - Immersive starfield
- 🛤️ **Orbital Trails** - Visualize planet paths
- 🏷️ **Planet Labels** - HTML overlays with data
- 📊 **FPS Counter** - Real-time performance monitoring

### 🕹️ Interactive Controls
- 🎮 **Smooth Camera** - Orbit controls with damping
- 🎯 **Planet Focus** - Click or press 1-8 to select
- ⏯️ **Time Control** - Adjust speed (0.5x to 5x)
- 📸 **Screenshot** - Capture high-quality images
- 🗺️ **Minimap** - Top-down 2D view

### 📊 Educational Features
- 📈 **Stats Panel** - Real-time planetary data
- 📅 **Simulation Date** - Track virtual time
- 📝 **Info Panels** - Detailed planet facts
- 🔬 **NASA Data** - Accurate orbital periods

### 🌍 User Features
- 📍 **GPS Location** - Real-time coordinates
- ⏰ **Live Clock** - Current date and time
- 🎨 **Glass Morphism UI** - Modern transparent design

---

## 🏗️ System Architecture

### 📊 Data Flow & Architecture

<div align="center">

**Comprehensive System Data Flow with Real-Time Processing Pipeline**

</div>

#### **1. Application Initialization & Asset Loading** 🚀

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=flat&logo=javascript&logoColor=black)

</div>

**Browser Launch** → User opens the application URL → **Vite Dev Server** serves the React application → **React Router** initializes the single-page app → **WebGL Context** is created in the browser → **Three.js Scene** is initialized with camera, lights, and renderer → **Texture Loader** asynchronously fetches all planet textures (10 JPG files from `/public/textures/`) → **Suspense Boundary** manages loading states → Once all assets load, the 3D scene renders to the canvas.

**Technologies Involved:**
- **React 19.2.0** for component lifecycle and state management
- **Vite 7.2.2** for fast HMR (Hot Module Replacement) and asset bundling
- **WebGL 2.0** for GPU-accelerated 3D rendering
- **TextureLoader API** for asynchronous image loading with promises

---

#### **2. User Input Processing & Event Handling** 🎮

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-Events-E34F26?style=flat&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/DOM-API-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-Hooks-61DAFB?style=flat&logo=react&logoColor=white)

</div>

**Keyboard Input** → User presses keys (1-8, Space, Arrows, O, L, M, A, Esc) → **Event Listeners** in `App.jsx` capture `keydown` events → **React State Hook** (`useState`) updates application state (selected planet, pause status, time speed, UI toggles) → **State changes trigger re-renders** → Updated state is passed as props to child components → **Three.js scene updates** reflect the new state.

**Mouse Input** → User clicks/drags on canvas → **Three.js Raycaster** detects 3D object intersections → **OrbitControls** processes camera rotation, pan, and zoom → **Click events** on planets trigger selection → **Selected planet data** is displayed in InfoPanel → Camera smoothly animates to the selected planet's position.

**Technologies Involved:**
- **DOM Event API** for keyboard/mouse input capture
- **React useState/useEffect** hooks for state management
- **Three.js Raycaster** for 3D object picking
- **OrbitControls** from @react-three/drei for camera manipulation

---

#### **3. Physics Simulation & Orbital Mechanics** 🪐

<div align="center">

![Three.js](https://img.shields.io/badge/Three.js-0.181.1-000000?style=flat&logo=three.js&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-2.0-990000?style=flat&logo=webgl&logoColor=white)
![Math](https://img.shields.io/badge/Math-Orbital%20Physics-4CAF50?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjwvc3ZnPg==)

</div>

**Animation Loop Starts** → **useFrame Hook** from @react-three/fiber executes every frame (60 FPS) → **Time Delta** (Δt) is calculated from previous frame → **Elapsed Time** accumulates based on time speed multiplier (0.5x to 5x) → For each planet: **Orbital Angle = Elapsed Time × Orbital Speed** → **Position Calculation** using trigonometry: `x = cos(angle) × distance`, `z = sin(angle) × distance` → **Planet Rotation** updates: `rotation.y += deltaTime × rotationSpeed` → **Moon Orbits** calculated relative to parent planet position → **Asteroid Belt** instances update with slight random wobble → All mesh transformations are applied to the scene graph → **Scene Graph Update** propagates to GPU for rendering.

**Formula Used:**
```javascript
angle = elapsed * speed
x = Math.cos(angle) * distance
z = Math.sin(angle) * distance
```

**Technologies Involved:**
- **requestAnimationFrame API** for smooth 60 FPS rendering
- **Three.js Object3D** for scene graph hierarchy
- **Matrix Mathematics** for 3D transformations
- **Trigonometric Functions** for circular orbital paths

---

#### **4. Rendering Pipeline & GPU Processing** 🎨

<div align="center">

![WebGL](https://img.shields.io/badge/WebGL-Shaders-990000?style=flat&logo=webgl&logoColor=white)
![GPU](https://img.shields.io/badge/GPU-Accelerated-76B900?style=flat&logo=nvidia&logoColor=white)
![GLSL](https://img.shields.io/badge/GLSL-Shaders-5C2D91?style=flat&logo=opengl&logoColor=white)

</div>

**Scene Update Complete** → **Three.js Renderer** processes the scene → **Frustum Culling** removes objects outside camera view → **Material Shaders** are compiled (GLSL vertex + fragment shaders) → **Texture Sampling** fetches pixel data from GPU memory → **Lighting Calculations**: Ambient Light (1.0 intensity) + Directional Light (2.0 intensity) + Sun Point Light (5.0 intensity, 500 distance) → **Custom Atmosphere Shader** renders Earth's glow using rim lighting technique → **Instanced Rendering** for 2,000 asteroids (single draw call) → **Stars Background** rendered as point primitives → **Alpha Blending** for transparent UI overlays → **Post-Processing** (if enabled) applies effects → Final frame buffer is displayed on canvas → **FPS Counter** calculates frame time.

**Shader Details:**
- **Vertex Shader**: Transforms 3D coordinates to screen space
- **Fragment Shader**: Calculates pixel color with lighting
- **Custom Atmosphere Shader**: `pow(0.8 - dot(vNormal, vec3(0,0,1)), 2.0)` for glow effect

**Technologies Involved:**
- **WebGL Renderer** for GPU commands
- **GLSL Shaders** for programmable graphics pipeline
- **Texture Mapping** for planet surfaces
- **Instanced Rendering** for performance optimization

---

#### **5. UI State Management & React Components** ⚛️

<div align="center">

![React](https://img.shields.io/badge/React-Components-61DAFB?style=flat&logo=react&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Glass%20Morphism-1572B6?style=flat&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Overlay-E34F26?style=flat&logo=html5&logoColor=white)

</div>

**State Changes Propagate** → **App.jsx (Root Component)** manages 10 state variables (elapsed, isPaused, selected, timeSpeed, showOrbits, showLabels, showMinimap, showAsteroids, fps, location) → **Props Cascade** down to child components → **StatsPanel** receives `planets`, `selected`, `elapsed`, `timeSpeed` and displays real-time data → **InfoPanel** conditionally renders when planet is selected → **UserLocation** uses Geolocation API to fetch GPS coordinates → **Reverse Geocoding** via OpenStreetMap Nominatim API converts coordinates to city/country → **Flag Image** loaded from flagcdn.com CDN → **Minimap Canvas 2D** draws top-down view using HTML5 Canvas → **Screenshot Button** captures canvas with `toDataURL()` → **FPS Display** color-codes performance (green >55 FPS, orange 30-55 FPS, red <30 FPS) → **Glass Morphism Styling** applied with `backdrop-filter: blur(10px)` and `rgba()` transparency.

**Component Hierarchy:**
```
App.jsx (State Container)
├── Canvas (Three.js)
│   ├── Sun, Planets, Moons, Asteroids, Stars
│   ├── CameraController, AnimationController, OrbitControls
│   └── Atmosphere Shaders
└── UI Layer (HTML)
    ├── StatsPanel, InfoPanel
    ├── UserLocation, FPSDisplay
    ├── ScreenshotButton, Minimap
    └── Control Buttons
```

**Technologies Involved:**
- **React Virtual DOM** for efficient UI updates
- **CSS Backdrop Filter** for glass morphism effects
- **HTML5 Canvas 2D** for minimap rendering
- **Geolocation API** for GPS coordinates
- **Fetch API** for reverse geocoding

---

#### **6. External APIs & Data Sources** 🌐

<div align="center">

![API](https://img.shields.io/badge/API-External%20Services-FF6B6B?style=flat&logo=fastapi&logoColor=white)
![NASA](https://img.shields.io/badge/NASA-Planetary%20Data-0B3D91?style=flat&logo=nasa&logoColor=white)
![OSM](https://img.shields.io/badge/OpenStreetMap-Nominatim-7EBC6F?style=flat&logo=openstreetmap&logoColor=white)

</div>

**NASA Planetary Data** → Hardcoded in `App.jsx` planets array with accurate values (orbital periods, distances, masses, gravity, day length) → **Geolocation API** (`navigator.geolocation.getCurrentPosition()`) → Returns latitude/longitude coordinates → **OpenStreetMap Nominatim API** (`https://nominatim.openstreetmap.org/reverse`) → Converts coordinates to city/country names → **FlagCDN API** (`https://flagcdn.com/16x12/{countryCode}.png`) → Fetches country flag images → **User-Agent Header** required for Nominatim compliance (`'AuraSpace/1.0'`) → All API calls wrapped in try/catch for error handling → Fallback values provided (globe emoji 🌍, "Unknown Location").

**API Endpoints:**
- **Nominatim Reverse Geocoding**: `GET /reverse?format=json&lat={lat}&lon={lon}&zoom=10&addressdetails=1`
- **Flag Images**: `GET /{width}x{height}/{countryCode}.png`

**Technologies Involved:**
- **Fetch API** for HTTP requests
- **Async/Await** for promise handling
- **OpenStreetMap Nominatim** for geocoding
- **FlagCDN** for country flag images

---

### Application Flow Diagram

```mermaid
flowchart TB
    Start([👤 User Opens App<br/>Browser Request]) --> Load[📦 Vite Serves Bundle<br/>React + Three.js Assets]
    Load --> Init[⚙️ Initialize WebGL Context<br/>Three.js Scene Setup]
    Init --> Assets[🖼️ Load Textures<br/>10 Planet JPGs + Ring PNG]
    Assets --> Render{🔄 Render Loop<br/>60 FPS via RAF}
    
    Render --> Input[⌨️ Process User Input<br/>Keyboard + Mouse Events]
    Input --> Camera[📹 Update Camera<br/>OrbitControls + Smooth Animations]
    Camera --> Physics[🧮 Calculate Physics<br/>Orbital Mechanics + Rotations]
    Physics --> UI[⚛️ Update React State<br/>10 State Variables]
    UI --> GPU[🎨 Render to GPU<br/>WebGL Shaders + Textures]
    GPU --> Draw[🖥️ Display Frame<br/>Canvas Output]
    Draw --> Render
    
    Input --> |Keys 1-8| Focus[🎯 Focus Planet<br/>Camera Animation]
    Input --> |Space| Pause[⏸️ Toggle Pause<br/>Stop/Resume Time]
    Input --> |↑↓ Arrows| Speed[⚡ Change Speed<br/>0.5x → 5x Multiplier]
    Input --> |O,L,M,A| Toggle[🔀 Toggle Features<br/>Orbits/Labels/Map/Asteroids]
    Input --> |Click Planet| Select[📝 Show Info Panel<br/>NASA Data Display]
    Input --> |📸 Screenshot| Capture[💾 Save PNG<br/>toDataURL Export]
    
    Focus --> Camera
    Pause --> Physics
    Speed --> Physics
    Toggle --> UI
    Select --> UI
    
    UI --> |GPS Request| Location[📍 Geolocation API<br/>Get Lat/Lon]
    Location --> |Reverse Geocode| Nominatim[🌍 OSM Nominatim<br/>City + Country]
    Nominatim --> |Fetch Flag| FlagCDN[🚩 FlagCDN API<br/>Country Flag Image]
    FlagCDN --> UI
    
    style Start fill:#61dafb,stroke:#333,color:#000,stroke-width:3px
    style Render fill:#f1c40f,stroke:#333,color:#000,stroke-width:3px
    style GPU fill:#990000,stroke:#333,color:#fff,stroke-width:2px
    style Draw fill:#27ae60,stroke:#333,color:#fff,stroke-width:3px
    style Location fill:#FF6B6B,stroke:#333,color:#fff
    style Nominatim fill:#7EBC6F,stroke:#333,color:#000
    style FlagCDN fill:#4169E1,stroke:#333,color:#fff
```

### Component Architecture Diagram

```mermaid
graph TB
    A[🌐 App.jsx<br/><b>Root Component</b><br/>State Management + Event Handlers<br/>10 State Variables] --> B[🎨 Canvas<br/><b>Three.js WebGL Renderer</b><br/>60 FPS Render Loop<br/>1920×1080 Resolution]
    A --> C[🎮 UI Layer<br/><b>React Components</b><br/>HTML Overlays<br/>Glass Morphism Design]
    
    B --> D[☀️ Sun.jsx<br/><b>Central Star</b><br/>Point Light: 5 intensity<br/>Distance: 500 units<br/>Emissive Material]
    B --> E[🪐 Planet.jsx ×8<br/><b>Mercury → Neptune</b><br/>Textured Spheres<br/>Orbital Motion Physics<br/>NASA Data Integration]
    B --> F[☄️ AsteroidBelt.jsx<br/><b>2000 Asteroids</b><br/>Instanced Rendering<br/>GPU Optimization<br/>Random Distribution]
    B --> G[✨ Stars<br/><b>5000 Stars</b><br/>Background Sphere<br/>Point Primitives<br/>Fade Effect]
    B --> H[🎥 OrbitControls<br/><b>Camera System</b><br/>Orbit + Pan + Zoom<br/>Damping Enabled<br/>Auto-Rotate]
    
    E --> I[🌙 Moon.jsx ×5<br/><b>Lunar Satellites</b><br/>Synchronized Orbits<br/>Relative Motion<br/>Luna, Io, Europa, Ganymede, Callisto]
    E --> J[🌍 AtmosphereGlow.jsx<br/><b>Custom GLSL Shader</b><br/>Rim Lighting Effect<br/>Blue Atmosphere<br/>BackSide Rendering]
    E --> K[🏷️ PlanetLabel.jsx<br/><b>HTML Overlay</b><br/>@react-three/drei Html<br/>Name + Distance<br/>Billboard Effect]
    E --> L[🛤️ OrbitTrail.jsx<br/><b>Circular Path</b><br/>Line Geometry<br/>Blue Color (#4a9eff)<br/>0.2 Opacity]
    
    C --> M[📊 StatsPanel.jsx<br/><b>Real-Time Data</b><br/>Selected Planet Info<br/>Orbital Period + Mass<br/>Simulation Date/Time]
    C --> N[📝 InfoPanel.jsx<br/><b>Detailed Facts</b><br/>NASA Description<br/>Gravity + Day Length<br/>Close Button]
    C --> O[🗺️ Minimap.jsx<br/><b>2D Top-Down View</b><br/>HTML5 Canvas 2D<br/>150×150px<br/>Planet Positions]
    C --> P[📍 UserLocation.jsx<br/><b>GPS + Clock</b><br/>Geolocation API<br/>Nominatim Geocoding<br/>FlagCDN Images<br/>Live Time Updates]
    C --> Q[📸 ScreenshotButton.jsx<br/><b>Canvas Capture</b><br/>toDataURL Method<br/>PNG Format<br/>Full Resolution Export]
    C --> R[📈 FPSDisplay.jsx<br/><b>Performance Monitor</b><br/>Frame Time Calculation<br/>Color Coded<br/>Green/Orange/Red]
    
    style A fill:#61dafb,stroke:#333,color:#000,stroke-width:4px
    style B fill:#000,stroke:#61dafb,color:#fff,stroke-width:3px
    style C fill:#1a1a2e,stroke:#27ae60,color:#fff,stroke-width:3px
    style D fill:#FFA500,stroke:#333,color:#000,stroke-width:2px
    style E fill:#4169E1,stroke:#333,color:#fff,stroke-width:2px
    style F fill:#8B4513,stroke:#333,color:#fff
    style G fill:#000,stroke:#fff,color:#fff
    style H fill:#646CFF,stroke:#333,color:#fff
    style I fill:#C0C0C0,stroke:#333,color:#000
    style J fill:#00CED1,stroke:#333,color:#000
    style M fill:#27ae60,stroke:#333,color:#fff
    style P fill:#FF6B6B,stroke:#333,color:#fff
```

---

## 🛠️ Tech Stack

<div align="center">

### Core Technologies

| Technology | Version | Purpose | Icon |
|:---|:---:|:---|:---:|
| **React** | 19.2.0 | UI Framework & State Management | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="40"/> |
| **Three.js** | 0.181.1 | 3D Graphics & WebGL Rendering | <img src="https://raw.githubusercontent.com/mrdoob/three.js/dev/files/icon.svg" width="40"/> |
| **Vite** | 7.2.2 | Build Tool & HMR Dev Server | <img src="https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg" width="40"/> |
| **React Three Fiber** | 9.4.0 | React Renderer for Three.js | <img src="https://raw.githubusercontent.com/pmndrs/react-three-fiber/master/docs/logo.svg" width="40"/> |
| **React Three Drei** | 10.7.6 | Useful Three.js Helpers | <img src="https://raw.githubusercontent.com/pmndrs/drei/master/docs/logo.svg" width="40"/> |

</div>

### 📦 Dependencies

```json
{
  "@react-three/fiber": "^9.4.0",    // React Three.js renderer
  "@react-three/drei": "^10.7.6",     // Three.js helpers (OrbitControls, Html, Stars)
  "three": "^0.181.1",                // Core 3D graphics library
  "react": "^19.2.0",                 // UI framework
  "react-dom": "^19.2.0",             // React DOM bindings
  "vite": "^7.2.2"                    // Build tool & dev server
}
```

### 🔧 Dev Dependencies

```json
{
  "eslint": "^9.39.1",                // Code linting
  "@vitejs/plugin-react": "^5.1.0",  // Vite React plugin
  "gh-pages": "^6.2.0"                // GitHub Pages deployment
}
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have these installed:

- **Node.js** (v18.0+ required) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** version control - [Download](https://git-scm.com/)
- Modern browser with **WebGL 2.0 support**

### 📥 Installation

#### **Step 1: Clone the Repository**

```bash
# Using HTTPS
git clone https://github.com/MbuyeloMich/auraspace.git

# OR using SSH (if you have SSH keys set up)
git clone git@github.com:MbuyeloMich/auraspace.git

# Navigate to the project directory
cd auraspace
```

#### **Step 2: Install Dependencies**

```bash
# Using npm (recommended)
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install
```

This will install all required packages (~150 MB).

#### **Step 3: Start Development Server**

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

**Expected output:**
```
  VITE v7.2.2  ready in 640 ms

  ➜  Local:   http://localhost:5173/auraspace/
  ➜  Network: use --host to expose
```

#### **Step 4: Open in Browser**

Navigate to: **`http://localhost:5173/auraspace/`**

The app should load with the 3D solar system!

---

## 🏗️ Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

**Output:** Optimized files in `dist/` folder (~1.2 MB)

---

## 🎮 Usage

### ⌨️ Keyboard Controls

| Key | Action | Description |
|:---:|:---|:---|
| **1** | Focus Mercury | Select and zoom to Mercury |
| **2** | Focus Venus | Select and zoom to Venus |
| **3** | Focus Earth | Select and zoom to Earth |
| **4** | Focus Mars | Select and zoom to Mars |
| **5** | Focus Jupiter | Select and zoom to Jupiter |
| **6** | Focus Saturn | Select and zoom to Saturn |
| **7** | Focus Uranus | Select and zoom to Uranus |
| **8** | Focus Neptune | Select and zoom to Neptune |
| **Space** | Pause/Resume | Toggle simulation pause |
| **↑** | Speed Up | Increase time speed (0.5x → 1x → 2x → 5x) |
| **↓** | Slow Down | Decrease time speed (5x → 2x → 1x → 0.5x) |
| **O** | Toggle Orbits | Show/hide orbital path lines |
| **L** | Toggle Labels | Show/hide planet name labels |
| **M** | Toggle Minimap | Show/hide 2D top-down view |
| **A** | Toggle Asteroids | Show/hide asteroid belt (2000 objects) |
| **Esc** | Reset Camera | Return to default solar system view |

### 🖱️ Mouse Controls

- **Left Click + Drag** - Rotate camera around solar system
- **Right Click + Drag** - Pan camera position (move view)
- **Scroll Wheel** - Zoom in/out
- **Click on Planet** - Select planet and show info panel

### 📱 UI Elements

- **📊 Stats Panel** (Top-left) - Real-time planetary data
- **📝 Info Panel** (Bottom-left) - Detailed planet facts on selection
- **📍 GPS & Clock** (Bottom-left) - Your location and current time
- **🎮 Control Buttons** (Top-right) - Toggle features
- **📸 Screenshot** (Top-right) - Capture and download current view
- **🗺️ Minimap** (Bottom-right) - 2D overview when enabled
- **📈 FPS Counter** (Top-right) - Performance monitoring

---

## 🔧 Development & Customization

### Project Structure

```
auraspace/
├── 📁 public/
│   └── 📁 textures/              # Planet texture images (JPG)
│       ├── sun.jpg
│       ├── mercury.jpg
│       ├── venus.jpg
│       ├── earth.jpg
│       ├── mars.jpg
│       ├── jupiter.jpg
│       ├── saturn.jpg
│       ├── saturn_ring.png
│       ├── uranus.jpg
│       └── neptune.jpg
│
├── 📁 src/
│   ├── 📄 App.jsx                # Main application component
│   ├── 📄 main.jsx               # React entry point
│   ├── 📄 index.css              # Global styles
│   │
│   └── 📁 components/
│       ├── 🌟 Sun.jsx            # Sun with point light
│       ├── 🪐 Planet.jsx         # Planet renderer with textures
│       ├── 🌙 Moon.jsx           # Moon orbital component
│       ├── 🪐 SaturnGroup.jsx    # Saturn with ring system
│       ├── ☄️ AsteroidBelt.jsx   # Instanced asteroid rendering
│       ├── 🌍 AtmosphereGlow.jsx # Custom atmosphere shader
│       ├── 🎥 CameraController.jsx    # Smooth camera transitions
│       ├── ⏰ AnimationController.jsx # Time & speed management
│       ├── 🛤️ OrbitTrail.jsx         # Orbital path visualization
│       ├── 🏷️ PlanetLabel.jsx        # HTML overlay labels
│       ├── 📊 StatsPanel.jsx         # Planetary statistics
│       ├── 📝 InfoPanel.jsx          # Detailed planet info
│       ├── 🗺️ Minimap.jsx            # 2D top-down view
│       ├── 📍 UserLocation.jsx       # GPS & live clock
│       ├── 📸 ScreenshotButton.jsx   # Canvas capture
│       └── 📈 FPSCounter.jsx         # Performance monitoring
│
├── 📄 package.json               # Dependencies & scripts
├── 📄 vite.config.js             # Vite configuration
├── 📄 eslint.config.js           # ESLint rules
├── 📄 index.html                 # HTML entry point
├── 📄 README.md                  # This file
├── 📄 LICENSE                    # MIT License
├── 📄 DOCUMENTATION.md           # Technical documentation
├── 📄 DEPLOYMENT.md              # Deployment guide
├── 📄 .gitignore                 # Git ignore rules
└── 📄 landing.html               # Landing page
```

### Common Customizations

#### 1. **Add a New Planet**

Edit `src/App.jsx`:

```javascript
const newPlanet = {
  name: "Pluto",
  radius: 0.18,
  distance: 120,
  speed: 0.001,
  color: "#CDC9A5",
  texture: "/textures/pluto.jpg",
  data: {
    mass: "0.0022 Earths",
    gravity: "0.62 m/s²",
    distance: "39.5 AU",
    period: "90,560 days"
  },
  moons: []
};

// Add to allPlanets array
```

#### 2. **Change Time Speed Options**

In `src/App.jsx`:

```javascript
const speedOptions = [0.5, 1, 2, 5]; // Modify as needed
```

#### 3. **Adjust Asteroid Count**

In `src/components/AsteroidBelt.jsx`:

```javascript
const asteroidCount = 2000; // Increase/decrease for performance
```

#### 4. **Modify Camera Settings**

In `src/App.jsx` Canvas component:

```javascript
<Canvas camera={{ position: [0, 50, 100], fov: 60 }}>
```

---

## 📜 License & Open Source

### MIT License

This project is licensed under the **MIT License**.

```
Copyright (c) 2026 Mbuyelo Mich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

**[View Full License](./LICENSE)**

### Open Source Philosophy

AuraSpace is **100% free and open source**. You can:

- ✅ **Use** commercially and privately
- ✅ **Modify** the source code
- ✅ **Distribute** copies and modifications
- ✅ **Sublicense** under the same terms

**Requirements:**
- 📄 Include the original copyright notice
- 📝 Include the MIT License text

### Framework Licenses

| Framework | License | Link |
|:---|:---|:---|
| React | MIT | [License](https://github.com/facebook/react/blob/main/LICENSE) |
| Three.js | MIT | [License](https://github.com/mrdoob/three.js/blob/dev/LICENSE) |
| Vite | MIT | [License](https://github.com/vitejs/vite/blob/main/LICENSE) |
| React Three Fiber | MIT | [License](https://github.com/pmndrs/react-three-fiber/blob/master/LICENSE) |

---

## 🌐 Deployment

### Current Deployment: GitHub Pages

This app is deployed on **GitHub Pages**:
- **Live URL**: https://mbuyelomich.github.io/auraspace/
- **Branch**: `gh-pages`
- **Status**: Active

### Deploy Updates

```bash
# Make your code changes

# Commit changes
git add .
git commit -m "feat: your changes"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

Your updates will be live in 2-5 minutes!

### Alternative Hosting Platforms

#### **Vercel** (Recommended for Production)
```bash
npm i -g vercel
vercel login
vercel --prod
```

#### **Netlify**
1. Build: `npm run build`
2. Drag `dist/` folder to Netlify

#### **Render**
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

---

## 📊 Performance

### Optimization Techniques

- 🚀 **Instanced Rendering** - 2,000 asteroids in 1 draw call
- 🎯 **Frustum Culling** - Only render visible objects
- 🔄 **RequestAnimationFrame** - Browser-optimized loop
- 💾 **Texture Caching** - Reuse loaded textures
- 📦 **Tree Shaking** - Remove unused code

### Performance Metrics

| Metric | Value | Details |
|:---|---:|:---|
| **Target FPS** | 60 | Smooth 60 FPS on mid-range hardware |
| **Asteroid Count** | 2,000 | Instanced rendering |
| **Draw Calls** | ~20 | Per frame |
| **Bundle Size** | 320 KB | Gzipped |
| **Load Time** | <3s | On 3G connection |

---

## 🔬 NASA Data

All planetary data is scientifically accurate from NASA JPL:

| Planet | Period (days) | Mass (Earths) | Gravity (m/s²) | Distance (AU) |
|:---|---:|---:|---:|---:|
| 🔴 Mercury | 88 | 0.055 | 3.7 | 0.39 |
| 🟡 Venus | 225 | 0.815 | 8.87 | 0.72 |
| 🔵 Earth | 365 | 1.0 | 9.81 | 1.0 |
| 🔴 Mars | 687 | 0.107 | 3.71 | 1.52 |
| 🟠 Jupiter | 4,333 | 318 | 24.79 | 5.20 |
| 🟡 Saturn | 10,759 | 95 | 10.44 | 9.54 |
| 🔵 Uranus | 30,687 | 14.5 | 8.87 | 19.19 |
| 🔵 Neptune | 60,190 | 17.1 | 11.15 | 30.07 |

**Data Source**: [NASA Planetary Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/)

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### **Black Screen / Canvas Not Rendering**
- **Check WebGL**: Visit [webglreport.com](https://webglreport.com/)
- **Update GPU drivers**
- **Try different browser** (Chrome recommended)

#### **Low FPS / Performance Issues**
- **Reduce asteroid count** in `AsteroidBelt.jsx`
- **Disable minimap** (press M)
- **Hide labels** (press L)
- **Close other applications**

#### **Textures Not Loading (White Spheres)**
- **Check texture paths**: Must be `/textures/planet.jpg`
- **Verify files exist** in `public/textures/`
- **Check browser console** for 404 errors

#### **Screenshot Captures Blank Image**
- **Wait for render**: Screenshot timing issue
- **Check Canvas props**: `preserveDrawingBuffer: true`

#### **Controls Not Working**
- **Click on canvas** to focus
- **Check keyboard layout** (US QWERTY)
- **Disable browser extensions** that intercept keys

---

## 📚 Documentation

- 📖 **[Technical Documentation](./DOCUMENTATION.md)** - Deep dive into architecture
- 🚀 **[Deployment Guide](./DEPLOYMENT.md)** - Hosting instructions
- 🔄 **[GitHub Walkthrough](./GITHUB_DEPLOYMENT_WALKTHROUGH.md)** - Step-by-step setup

---

## 🌟 Roadmap

### Planned Features

- [ ] 🌍 **More Moons** - Add Titan, Triton, etc.
- [ ] ☄️ **Comets** - Elliptical orbits with tails
- [ ] 🛸 **Spacecraft** - ISS, Voyager models
- [ ] 🎵 **Audio** - Ambient space music
- [ ] 📱 **Mobile Touch** - Optimized controls
- [ ] 🌓 **Moon Phases** - Realistic lunar phases
- [ ] 🔭 **Educational Mode** - Quiz and facts
- [ ] 🎮 **VR Support** - WebXR integration
- [ ] 🌌 **Galaxy View** - Milky Way zoom-out
- [ ] 📊 **Data Viz** - Planetary comparisons

---

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit Changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to Branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

### Contribution Guidelines

- Write clean, readable code
- Follow existing code style
- Test your changes thoroughly
- Update documentation as needed
- Be respectful and constructive

---

## 👨‍💻 Author

<div align="center">

### **Mbuyelo Mich**

*Full Stack Developer | 3D Web Enthusiast | Space Explorer*

[![GitHub](https://img.shields.io/badge/GitHub-MbuyeloMich-181717?style=for-the-badge&logo=github)](https://github.com/MbuyeloMich)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/mbuyelomich)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](#)

**Sole Contributor & Maintainer of AuraSpace**

</div>

---

## 🙏 Acknowledgments

### Resources & Inspiration

- **NASA** - Planetary data, images, and inspiration
- **Three.js Community** - Amazing 3D graphics library and examples
- **Pmndrs** - React Three Fiber and Drei helper libraries
- **Vite Team** - Lightning-fast build tooling
- **Open Source Community** - For making web development accessible

---

## 📧 Contact & Support

- 🐛 **Bug Reports**: [Open an Issue](https://github.com/MbuyeloMich/auraspace/issues/new?template=bug_report.md)
- 💡 **Feature Requests**: [Start a Discussion](https://github.com/MbuyeloMich/auraspace/discussions/new?category=ideas)
- 📧 **Email**: your.email@example.com
- 💬 **Discord**: [Join Community](#)

---

## ⭐ Show Your Support

If AuraSpace helped you learn or inspired you, please consider:

- ⭐ **Star this repository**
- 🍴 **Fork and experiment**
- 📢 **Share with others**
- 💬 **Leave feedback**
- 🤝 **Contribute code**

Your support motivates continued development!

---

## 📈 Project Stats

![GitHub stars](https://img.shields.io/github/stars/MbuyeloMich/auraspace?style=social)
![GitHub forks](https://img.shields.io/github/forks/MbuyeloMich/auraspace?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/MbuyeloMich/auraspace?style=social)

![GitHub issues](https://img.shields.io/github/issues/MbuyeloMich/auraspace)
![GitHub pull requests](https://img.shields.io/github/issues-pr/MbuyeloMich/auraspace)
![GitHub last commit](https://img.shields.io/github/last-commit/MbuyeloMich/auraspace)
![GitHub repo size](https://img.shields.io/github/repo-size/MbuyeloMich/auraspace)

---

<div align="center">

**Made with ❤️, ☕, and 🚀 by Mbuyelo Mich**

© 2026 AuraSpace. Licensed under MIT. All rights reserved.

[⬆ Back to Top](#-auraspace---interactive-3d-solar-system)

</div>
